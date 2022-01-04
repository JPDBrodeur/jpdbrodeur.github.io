import { Icon } from '@iconify/react';

const Project = ({ projects }) => {
  console.log(projects);
  return (
    <div>
      {projects.map((project, index) => (
        <article className="w-1/4" key={index}>
          <div className="relative">
            <div className="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300">
              <h2>
                <a href={project.appLink}>{project.title}</a>
                <a href={project.repoLink}><Icon icon="akar-icons:github-fill" /></a>
              </h2>
            </div>
            <div href="#" className="relative">
              <div className="h-48 flex flex-wrap content-center">
                  <img src={project.image} className="mx-auto  " alt="" />
              </div>
            </div>
          </div>
        </article> 
      ))}
    </div>
  );
}

export default Project;