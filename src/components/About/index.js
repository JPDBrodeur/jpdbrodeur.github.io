import profilePhoto from '../../assets/profile.jpg';

function About() {
  return (
    <section className="mt-5 lg:mt-10 flex justify-center">
      <article className="w-full sm:w-2/3 mx-10">
        <div className="w-2/3 md:w-1/2 lg:w-1/3 m-auto mb-5 lg:mb-10">
          <img src={profilePhoto} className="my-2 rounded-full w-40" style={{ width: "100%" }} alt="John Brodeur" />
        </div>
        <div>
          <p className="font-light">
            A hard-working, personable young professional who is searching for an exceptional employer who can make use of his administrative strengths, interpersonal skills, and creativity. Educated in the liberal arts tradition and holding a bachelor’s degree. Proficient in the latest technology with a keen eye for presentation. Flexible and versatile – able to maintain a cheerful disposition under pressure; enjoys collaborative work while also excelling at autonomous tasks. Finds particular satisfaction in creative endeavors, acquiring new skills and serving others. A willingness to work beyond expectations and an attention to detail flows from a commitment to professionalism and excellence.
          </p>
        </div>
      </article>
    </section>
  );
}

export default About;