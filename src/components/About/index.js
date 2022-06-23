import profilePhoto from '../../assets/profile.jpg';
import greeting from '../../utils/greeting'

function About() {
  return (
    <section className="mt-5 lg:mt-10">
        <h2 className="text-center text-3xl">{greeting}</h2>
    <div className="mt-5 lg:mt-10 flex justify-center">
      <article className="w-full xl:w-2/3 mx-20">
        <div className="w-2/3 md:w-1/2 lg:w-1/3 m-auto mb-5 lg:mb-10">
          <img src={profilePhoto} className="my-2 rounded-full w-40 shadow-lg" style={{ width: "100%" }} alt="John Brodeur" />
        </div>
        <div>
          <p className="font-light">
          I am a full-stack web developer leveraging a diverse background in teaching, IT, graphic design and digital communications to provide more useful and delightful experiences on the web. Recently certified from the University of Connecticut in full stack web technologies, including HTML, CSS, JavaScript, React.js, and the entire MERN stack. Utilizing a highly developed set of soft skills from years of collaboration, mentoring and management experience. Known for innovative problem-solving, strategic thinking and a focus on mobile-first UX. I’m excited to leverage my skills as part of a mission-driven team to build and improve scalable web applications with cutting-edge technologies.
          </p>
        </div>
      </article>
    </div>
    </section>
  );
}

export default About;