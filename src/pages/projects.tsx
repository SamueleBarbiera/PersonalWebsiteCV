import { fetchProjects } from '../lib/projects'
import ListContainer from '../components/List/Container'
import LayoutDefault from '../components/layouts/Default'
import Animate from '../components/Animate'
import { ListActionType } from '../../types'
import type { GetStaticProps } from 'next'
import type { ListAction, Project } from '../../types'
import ListItem from '../components/List/Item'

interface ProjectProps {
    stringifiedProjects: string
}

export const getStaticProps: GetStaticProps<ProjectProps> = async () => {
    const projects = await fetchProjects()

    return {
        props: {
            stringifiedProjects: JSON.stringify(projects),
        },
        revalidate: 3600,
    }
}

export default function ProjectsPage({ stringifiedProjects }: ProjectProps) {
    const projects = JSON.parse(stringifiedProjects) as Array<Project>

    return (
        <LayoutDefault>
            <div className="m-12 p-12">
                <div className="relative w-min mx-auto ">
                    <ListContainer>
                        {projects.map((project, index) => (
                            <Animate
                                animation={{ y: [50, 0], opacity: [0, 1] }}
                                key={index}
                                transition={{
                                    delay: 0.1 * index,
                                }}
                            >
                                <ListItem
                                    actions={[
                                        ...(project.homepage
                                            ? [
                                                  {
                                                      type: ListActionType.LINK,
                                                      href: project.homepage,
                                                      icon: 'feather:home',
                                                      label: `${project.name} homepage`,
                                                  } as ListAction,
                                              ]
                                            : []),
                                        {
                                            type: ListActionType.LINK,
                                            href: project.url,
                                            icon: 'feather:github',
                                            label: 'GitHub Repository',
                                        },
                                    ]}
                                    description={project.description}
                                    icon={<span className="text-xl">{project.icon}</span>}
                                    title={project.name}
                                />
                            </Animate>
                        ))}
                    </ListContainer>
                </div>
            </div>
        </LayoutDefault>
    )
}
