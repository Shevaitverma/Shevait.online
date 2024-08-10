import { FaBriefcase, FaGraduationCap, FaCode, FaDatabase, FaCloud, FaTools } from 'react-icons/fa';
import SkillsCard from '../components/SkillsCard';
import Projects from './Projects';
import Contact from '../components/Contact';
import pp from '../assets/Profile_pic.jpg'


const skills = [
    {
      title: "Programming Languages",
      icon: <FaCode className="text-4xl" />,
      skills: ["Python", "JavaScript"],
    },
    {
      title: "Frameworks",
      icon: <FaCode className="text-4xl" />,
      skills: ["Node.js", "Express.js", "Django", "FastAPI", "React.js"],
    },
    {
      title: "Databases",
      icon: <FaDatabase className="text-4xl" />,
      skills: ["PostgreSQL", "MongoDB", "MySQL"],
    },
    {
      title: "Cloud Platforms",
      icon: <FaCloud className="text-4xl" />,
      skills: ["AWS", "GCP"],
    },
    {
      title: "Tools",
      icon: <FaTools className="text-4xl" />,
      skills: ["Git", "GitHub", "Postman", "Docker"],
    },
    {
      title: "Others",
      icon: <FaCode className="text-4xl" />,
      skills: ["HTML", "CSS", "Tailwind CSS", "Linux"],
    },
  ];

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section id="home" className="hero bg-gradient-to-r from-blue-500 to-purple-600 text-white h-screen flex flex-col md:flex-row items-center justify-center">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="text-center md:text-left md:w-1/2 p-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Hello, I&apos;m Shevait Verma</h1>
            <p className="text-lg md:text-xl mb-8">I&apos;m a software developer with a passion for creating innovative solutions and continuously learning new technologies.</p>
            <a href="#projects" className="inline-block bg-white text-gray-900 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition">
              View My Work
            </a>
          </div>
        <div className="md:w-1/2 p-4 flex justify-center">
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg -z-10"></div>
            <img
              src={pp}
              alt="Shevait Verma"
              className="w-full h-full-2xl object-cover clip-path-custom rounded-lg shadow-lg transform hover:scale-105 transition-transform"
            />
          </div>
        </div>
        </div>
      </section>


      {/* About Me Section */}
      <section id="about" className="about py-20 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8">
          {/* Experience Section */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <FaBriefcase className="text-5xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Experience</h3>
            <p className="text-gray-700">
              Full Stack Developer with hands-on experience in building web applications and
              managing infrastructure. Interned at Dovelp IT Services and CogniTensor, focusing
              on both frontend and backend development.
            </p>
          </div>
          {/* Education Section */}
          <div className="md:w-1/2">
            <FaGraduationCap className="text-5xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Education</h3>
            <p className="text-gray-700">
              Computer Science and Engineering in Information Security (Chandigarh University)
            </p>
          </div>
        </div>
      </div>
    </section>

      {/* Skills Section */}
      <section id="skills" className="skills py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillSet, index) => (
              <SkillsCard
                key={index}
                title={skillSet.title}
                icon={skillSet.icon}
                skills={skillSet.skills}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
      <Projects />
      </section>
      

      {/* Call to Action Section */}
      <section className="cta py-20 bg-gradient-to-r from-purple-600 to-blue-500 text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Interested in collaborating?</h2>
          <p className="text-lg mb-8">I&apos;m always open to discussing new projects and creative ideas.</p>
          
        </div>
      </section>

      {/* contact section  */}
      <Contact id="contact" />
    </div>
  );
};

export default Home;
