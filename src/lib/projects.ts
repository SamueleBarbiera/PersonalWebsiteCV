import emojiRegex from 'emoji-regex'
import type { GitHubRepos, Project, ProjectPost } from '../../types'

export async function fetchProjects(): Promise<Array<Project> | null> {
    const response = await fetch('https://api.github.com/users/samuelebarbiera/repos', {
        headers: {
            ...(process.env.GITHUB_PAT && {
                authorization: `token ${process.env.GITHUB_PAT}`,
            }),
        },
    })
    if (response.status !== 200) {
        const json = (await response.json()) as {
            documentation_url: string
            message: string
        }

        console.error({ error: json })

        return null
    }

    const json = (await response.json()) as GitHubRepos
    console.log('🚀 - file: projects.ts - line 24 - fetchProjects - json', json)

    const { default: rawProjectPosts } = await import('../../data/projects.json')
    const projectPosts = rawProjectPosts as Array<ProjectPost>

    const projects: any = json
        .map((repo) => {
            if (repo.archived) return null
            let trimmedDescription, description
            // Strip the emoji suffix from the repo description
            if (repo.description != null && repo.description != undefined) {
                trimmedDescription = repo.description.split(' ')
                trimmedDescription.shift()
                description = trimmedDescription.join(' ')
            }

            // Check if there is a matching blog post to attach
            const repoPost =
                projectPosts.length > 0 &&
                projectPosts.find((post) => post.repository.toLowerCase() === repo.full_name.toLowerCase())

            return {
                description,
                icon: (() => {
                    if (!repo.description) return undefined

                    const char = repo.description.split(' ')[0]

                    return emojiRegex().test(char) ? char : undefined
                })(),
                homepage: repo.homepage ?? undefined,
                name: repo.name,
                post: repoPost ? `/blog/${repoPost.post}` : undefined,
                template: false,
                url: repo.html_url.toLowerCase(),
            } as Project
        })
        .filter((project) => project !== null)

    return projects
}
