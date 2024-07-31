// src/components/SkillsCard.jsx

import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const SkillsCard = ({ title, icon, skills }) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
      whileHover={{ scale: 1.05 }}
    >
      <div className="flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-4 text-gray-800">{title}</h3>
      <div className="flex flex-wrap justify-center">
        {skills.map((skill, idx) => (
          <span
            key={idx}
            className="bg-gray-200 text-gray-800 rounded-full px-4 py-2 mx-2 mb-2 text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

SkillsCard.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  };
export default SkillsCard;
