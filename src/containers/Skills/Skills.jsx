import React from "react";
import { motion } from "framer-motion";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Skills.scss";
import { info } from "../../constants";

const Skills = () => {
  const skillVariants = {
    view: {
      x: [-15, 0],
      opacity: [0, 1],
      transition: {
        x: {
          type: "spring",
          stiffness: "10",
        },
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    hover: {
      y: -7,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    tap: {
      y: -7,
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <h2 className="head-text">
        Skills <span>&</span> Experience
      </h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {info.skills.map((skill, index) => (
            <motion.div
              variants={skillVariants}
              whileInView="view"
              whileHover="hover"
              whileTap="tap"
              className="app__skills-item app__flex"
              key={skill.name + "-" + index}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="app__skills-exp">
          {info.experience?.map((exp) => (
            <motion.div className="app__skills-exp-item" key={exp.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{exp.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {exp?.works?.map((work) => (
                  <React.Fragment key={work.name}>
                    <motion.div
                      whileInView={{
                        opacity: [0, 1],
                        x: [-100, 5, 0],
                      }}
                      transition={{
                        duration: 1,
                      }}
                      className="app__skills-exp-work"
                      data-tooltip-id={work.name}
                      data-tooltip-content={work.desc}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>

                    <Tooltip
                      id={work.name}
                      className="skills-tooltip"
                      style={{ backgroundColor: "#313bac", color: "#fff" }}
                    >
                      {work.desc}
                    </Tooltip>
                  </React.Fragment>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
