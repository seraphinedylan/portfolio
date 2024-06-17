import { useState } from "react";

import {
  faLocationDot,
  faPlusCircle,
  faMinusCircle,
  faSquareArrowUpRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

import Chip from "~/components/Chip";

function Accordion({ experiences }) {
  const [expanded, setExpanded] = useState(null);

  const handleExpansion = (index) => {
    if (expanded === index) {
      setExpanded(null);
    } else {
      setExpanded(index);
    }
  };
  return (
    <div className="flex w-full flex-col gap-4 lg:w-730">
      {experiences.map((experience, index) => (
        <div key={index}>
          <div
            className="flex min-h-12 cursor-pointer justify-between rounded-md bg-border p-2 text-sm text-secondary-foreground md:min-h-14 md:px-5 md:py-3 md:text-base lg:rounded-xl "
            onClick={() => handleExpansion(index)}
          >
            <div className="flex items-center space-x-2">
              <p>{experience.title}</p>
              <span>-</span>
              <p>{experience.company}</p>
            </div>
            <div className="flex items-center space-x-2 md:space-x-4">
              <div>{experience.period}</div>
              <FontAwesomeIcon
                icon={expanded === index ? faMinusCircle : faPlusCircle}
                className="text-md lg:text-lg"
              />
            </div>
          </div>

          {expanded === index && (
            <div className="mt-3 flex flex-col justify-center rounded-xl bg-border/40 p-5 md:flex-row">
              <img
                src={experience.logo}
                alt={`logo-${experience.company}`}
                className="my-auto mb-3 ml-1 w-1/3 md:order-2 md:mb-0 md:w-1/6 lg:w-40"
              />
              <div className="md:w-4/5">
                <div className="flex flex-col gap-2 md:flex-row">
                  <div className="flex items-center space-x-1">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="text-primary"
                    />
                    <p className="font-bold text-secondary-foreground">
                      {experience.title}
                    </p>
                  </div>
                  <a
                    href={experience.website}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semiBold cursor-pointer text-secondary-foreground underline hover:text-accent"
                  >
                    <FontAwesomeIcon
                      icon={faSquareArrowUpRight}
                      className="mr-1 text-primary"
                    />
                    {experience.company}
                  </a>
                </div>
                <div className="bg-gray-500z">
                  <p className="my-2 mb-3 text-sm text-popover-foreground md:my-4 md:mb-5 md:text-base">
                    {experience.description}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {experience.technologies.map((technology, index) => (
                      <Chip
                        // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
                        className="mb-1.5 bg-opacity-30 px-2 py-1.5 text-sm md:px-4 md:py-2"
                        color="gray"
                        key={index}
                        label={technology}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

Accordion.propTypes = {
  experience: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  expanded: PropTypes.number,
  handleExpansion: PropTypes.func.isRequired,
};

export default Accordion;
