import P from '../P'

interface ProjectCardPost {
  title: string
  dates: string
  description: string
  imageSrc: string
  imageAlt: string
}

export default function ProjectCard({
  title,
  dates,
  description,
  imageSrc,
  imageAlt,
}: ProjectCardPost) {
  return (
    <div>
      <div>
        <h3>{title}</h3>
        <P>
          <i>{dates}</i>
        </P>
        <P>{description}</P>
      </div>
      <img src={imageSrc} alt={imageAlt} />
    </div>
  )
}
