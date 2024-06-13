import { Fragment } from "react";

import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const Circle = () => {
  return (
    <div className="ml-1 flex size-8 items-center justify-center rounded-full bg-gradient-to-t from-ring to-primary-foreground lg:mx-auto">
      <FontAwesomeIcon
        icon={faGraduationCap}
        className="text-sm text-destructive-foreground"
      />
    </div>
  );
};

const Pillar = () => {
  return (
    <div className="ml-4 h-full w-2 bg-gradient-to-t from-border to-primary-foreground lg:ml-0" />
  );
};

const Card = ({ title, period, description, className }) => {
  return (
    <div
      className={`flex w-full flex-col gap-y-3 rounded-xl border border-border bg-card p-4 transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-md md:w-64 ${className}`}
    >
      <div>
        <div className="text-lg font-bold uppercase">{title}</div>
        <div className="text-sm text-card-foreground">{period}</div>
      </div>

      <div className="text-sm text-secondary-foreground">{description}</div>
    </div>
  );
};

function TimeLine({ events }) {
  return (
    <div>
      <Circle />
      {events.map((event, index) => (
        <Fragment key={index}>
          <div
            key={index}
            className="mx-0 grid grid-cols-[auto_1fr_auto] items-center gap-x-2 lg:grid-cols-[1fr_auto_1fr]"
          >
            {index % 2 === 0 ? (
              <div className="order-1 flex w-full justify-start lg:order-none lg:justify-end">
                <Card
                  title={event.title}
                  period={event.period}
                  description={event.description}
                />
              </div>
            ) : (
              <div className="hidden lg:block"></div>
            )}
            <Pillar />

            {index % 2 !== 0 ? (
              <div className="order-1 flex w-full justify-start lg:order-none">
                <Card
                  title={event.title}
                  period={event.period}
                  description={event.description}
                />
              </div>
            ) : (
              <div className="hidden lg:block"></div>
            )}
          </div>
          {index < events.length - 1 && <Circle />}
        </Fragment>
      ))}
    </div>
  );
}

TimeLine.propTypes = {
  events: PropTypes.array.isRequired,
};

export default TimeLine;
