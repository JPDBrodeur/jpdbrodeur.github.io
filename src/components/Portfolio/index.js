import profilePhoto from '../../assets/profile.jpg';
import Project from '../../components/Project'

function Portfolio() {
  const projects = [
    {
      title: "Test #1",
      image: profilePhoto,
      appLink: "https://jpdbrodeur.github.io/",
      repoLink: "https://github.com/JPDBrodeur"
    },
    {
      title: "Project Title #2",
      image: profilePhoto,
      appLink: "https://jpdbrodeur.github.io/",
      repoLink: "https://github.com/JPDBrodeur"
    },
    {
      title: "Catchy Title #3",
      image: profilePhoto,
      appLink: "https://jpdbrodeur.github.io/",
      repoLink: "https://github.com/JPDBrodeur"
    },
    {
      title: "Project Title #4",
      image: profilePhoto,
      appLink: "https://jpdbrodeur.github.io/",
      repoLink: "https://github.com/JPDBrodeur"
    }
  ]
  console.log(projects)
  return (
    <section>
      <Project projects={projects}></Project>
    </section>
  );
}

export default Portfolio;