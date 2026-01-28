import Section from '../Section'
import H2 from '../headings/H2'
import ProjectCard from '../ProjectCard'

type Project = {
  title: string
  dates: string
  description: string
  imageSrc: string
  imageAlt: string
}

export default function ProjectsSection({ projects }: { projects: Project[] }) {
  return (
    <Section id="projects">
      <H2>Projects</H2>
      <div id="projects-grid">
        {projects.map((project, idx) => (
          <ProjectCard
            key={idx}
            title={project.title}
            dates={project.dates}
            description={project.description}
            imageSrc={project.imageSrc}
            imageAlt={project.imageAlt}
          />
        ))}
      </div>
    </Section>
  )
}
