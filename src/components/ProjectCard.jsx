import PropTypes from 'prop-types';
import { FaGithub } from 'react-icons/fa';

const ProjectCard = ({ image, title, description, techStack, githubLink }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-56 sm:h-72 md:h-80 lg:h-96 object-cover"
      />
      <div className="p-12">
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-xs sm:text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-end">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
  githubLink: PropTypes.string.isRequired,
};

export default ProjectCard;
