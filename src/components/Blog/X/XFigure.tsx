import Image from 'next/image'

interface XFigureProps {
    alt?: string
    caption?: string
    src: string
}

export default function XFigure({ alt, caption, src }: XFigureProps) {
    return (
        <figure>
            <Image
                alt={alt ?? caption}
                className="rounded-3xl object-cover select-none hover:shadow-xl"
                draggable={false}
                height="100%"
                layout="responsive"
                src={src}
                width="100%"
            />
            <figcaption>{alt ?? caption}</figcaption>
        </figure>
    )
}
