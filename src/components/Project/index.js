import { Icon } from '@iconify/react';

const Project = ({ projects }) => {
  console.log(projects);
  return (
    <section className="flex flex-row flex-wrap justify-center">
      {projects.map((project, index) => (
        <article className="w-80 m-2" key={index}>
          <div className="relative">
            <div className="absolute inset-0 z-10 bg-white flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300">
              <h2 className="text-2xl font-bold">
                <a href={project.appLink} target="_blank" rel="noreferrer">{project.title} <Icon icon="akar-icons:link-out" inline={true} className="inline" /></a>
              </h2>
              <p className="my-2">{project.description}</p>
              <p className="text-xl"><a href={project.repoLink} target="_blank" rel="noreferrer"><Icon icon="akar-icons:github-fill" inline={true} className="inline" /> View Repo</a></p>
    
            </div>
            <div href="#" className="relative">
              <div className="h-44 overflow-hidden">
                  <img src={project.image} className="object-cover h-44 w-80" alt=""/>
              </div>
            </div>
          </div>
        </article> 
      ))}
    </section>
  );
}

export default Project;