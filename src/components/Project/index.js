import { Icon } from '@iconify/react';

const Project = ({ projects }) => {
  const codeProjects = projects.filter((project) => project.type === "code");
  const wixProjects = projects.filter((project) => project.type === "wix");
  console.log(codeProjects);
  console.log(wixProjects);
  return (
    <div className="flex flex-col xl:flex-row xl:mx-24">
      <section className="mt-5 lg:mt-10">
        <h2 className="text-center text-3xl">Built in Visual Studio</h2>
        <div className="flex flex-row flex-wrap justify-center mt-10">
          {codeProjects.map((project, index) => (
            <article className="w-80 mx-2.5 mb-5" key={index}>
              <div className="relative">
                <div className="absolute inset-0 z-10 bg-white flex flex-col text-center items-center justify-center opacity-0 hover:opacity-100 rounded bg-opacity-90 duration-300 shadow-lg">
                  <h2 className="text-2xl font-bold hover:scale-110 hover:text-blue-700 ease-in duration-200">
                    <a href={project.appLink} target="_blank" rel="noreferrer">{project.title} <Icon icon="akar-icons:link-out" inline={true} className="inline" /></a>
                  </h2>
                  <p className="my-2">{project.description}</p>
                  <p className="text-xl hover:scale-110 hover:text-blue-700 ease-in duration-200"><a href={project.repoLink} target="_blank" rel="noreferrer"><Icon icon="akar-icons:github-fill" inline={true} className="inline" /> View Repo</a></p>

                </div>
                <div href="#" className="relative">
                  <div className="h-44 overflow-hidden rounded shadow-md">
                    <img src={project.image} className="object-cover h-44 w-80 rounded" alt="" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="mt-5 lg:mt-10">
        <h2 className="text-center text-3xl">Built on Wix</h2>
        <div className="flex flex-row flex-wrap justify-center mt-10">
          {wixProjects.map((project, index) => (
            <article className="w-80 mx-2.5 mb-5" key={index}>
              <div className="relative">
                <div className="absolute inset-0 z-10 bg-white flex flex-col text-center items-center rounded justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300 shadow-lg">
                  <h2 className="text-2xl font-bold hover:scale-110 hover:text-blue-700 ease-in duration-200">
                    <a href={project.appLink} target="_blank" rel="noreferrer">{project.title} <Icon icon="akar-icons:link-out" inline={true} className="inline" /></a>
                  </h2>
                  <p className="my-2">{project.description}</p>

                </div>
                <div href="#" className="relative">
                  <div className="h-44 overflow-hidden rounded shadow-md">
                    <img src={project.image} className="object-cover h-44 w-80 rounded" alt="" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Project;