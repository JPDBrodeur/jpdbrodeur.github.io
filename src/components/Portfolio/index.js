import runBuddyImg from '../../assets/run-buddy.jpg';
import CodeQuizImg from '../../assets/code-quiz.gif';
import weatherDashboardImg from '../../assets/WeatherDashboard.png';
import YaFoodleImg from '../../assets/YaFoodle.png';
import FomoExchangeImg from '../../assets/FomoExchange.png';
import BudgetImg from '../../assets/BudgetTracker.png';
// import vaccidateImg from '../../assets/vacci-date.png';
import endersImg from '../../assets/enders.gif';
import bwcImg from '../../assets/bwagner.gif';
import Project from '../../components/Project'

function Portfolio() {
  const projects = [
    {
      title: "Run Buddy",
      image: runBuddyImg,
      description: "HTML/CSS",
      appLink: "https://jpdbrodeur.github.io/run-buddy/",
      repoLink: "https://github.com/JPDBrodeur/run-buddy",
      type: "code"
    },
    {
      title: "Code Quiz",
      image: CodeQuizImg,
      description: "Javascript",
      appLink: "https://jpdbrodeur.github.io/code-quiz/",
      repoLink: "https://github.com/JPDBrodeur/code-quiz",
      type: "code"
    },
    {
      title: "Weather Dashboard",
      image: weatherDashboardImg,
      description: "Javascript/Server-Side APIs",
      appLink: "https://jpdbrodeur.github.io/weather-dashboard/",
      repoLink: "https://github.com/JPDBrodeur/weather-dashboard",
      type: "code"
    },
    {
      title: "YaFoodle",
      image: YaFoodleImg,
      description: "Javascript/AJAX",
      appLink: "https://markcyg.github.io/Yafoodle/",
      repoLink: "https://github.com/MarkCyg/Yafoodle",
      type: "code"
    },
    {
      title: "Fomo Mock Exchange",
      image: FomoExchangeImg,
      description: "Javascript/SQL/Heroku",
      appLink: "https://fomo-exchange.herokuapp.com/",
      repoLink: "https://github.com/RynMrphy18/fomo-mock-exchange",
      type: "code"
    },
    {
      title: "Budget Tracker",
      image: BudgetImg,
      description: "MERN Stack/Offline Access",
      appLink: "https://stark-chamber-52769.herokuapp.com/",
      repoLink: "https://github.com/JPDBrodeur/budget-tracker",
      type: "code"
    },
    // {
    //   title: "Vacci-Date",
    //   image: vaccidateImg,
    //   description: "MERN Stack/GraphQL",
    //   appLink: "https://powerful-basin-63649.herokuapp.com/",
    //   repoLink: "https://github.com/thereeling/vacci-date",
    //   type: "code"
    // },
    {
      title: "Enders Island",
      image: endersImg,
      description: "Retreat Center in Mystic, CT",
      appLink: "https://www.endersisland.org/",
      type: "wix"
    },
    {
      title: "Barbara Wagner Communications",
      image: bwcImg,
      description: "New York PR Firm",
      appLink: "https://www.bwagnerpr.com/",
      type: "wix"
    },
  ]
  console.log(projects)
  return (
      <Project projects={projects}></Project>
  );
}

export default Portfolio;