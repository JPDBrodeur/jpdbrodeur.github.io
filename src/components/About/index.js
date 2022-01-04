import profilePhoto from '../../assets/profile.jpg';

function About() {
  return (
    <section className="m-5">
      <h1 id="about" className="text-3xl">About Me</h1>
      <div className="w-1/5 place-content-center">
        <img src={profilePhoto} className="my-2 rounded-full w-40" style={{ width: "100%" }} alt="John Brodeur" />
      </div>
      <div className="my-2">
        <p className="font-light">
          A hard-working, personable young professional who is searching for an exceptional employer who can make use of his administrative strengths, interpersonal skills, and creativity. Educated in the liberal arts tradition and holding a bachelor’s degree. Proficient in the latest technology with a keen eye for presentation. Flexible and versatile – able to maintain a cheerful disposition under pressure; enjoys collaborative work while also excelling at autonomous tasks. Finds particular satisfaction in creative endeavors, acquiring new skills and serving others. A willingness to work beyond expectations and an attention to detail flows from a commitment to professionalism and excellence.
        </p>
      </div>
    </section>
  );
}

export default About;