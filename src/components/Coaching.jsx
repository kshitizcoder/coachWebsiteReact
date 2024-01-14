import React, { useEffect, useState } from "react";
import abstract from "../assets/abstract1.svg";
import { coachingInfo } from "../constant/constant";
const Coaching = () => {
  const [coachingData, setCoachingData] = useState([]);

  useEffect(() => {
    setCoachingData(coachingInfo);
  }, []);
  return (
    <section id="services" className="coaching px-5 mt-[1rem] py-10">
      <div className="coaching-wrapper container mx-auto">
        <div className="coaching-first-row  md:grid gap-7 md:grid-row-1 grid-cols-2">
          <div className="coaching-left">
            <img src={abstract} alt="abstract" className="text-primary" />
            <h2 className="text-primary text-3xl my-5 font-bold lg:text-4xl 2xl:text-6xl ">
              I can help you in these particular areas.
            </h2>
          </div>
          <div className="coach-right">
            <p className="text-ternary text-[0.9rem] lg:w-[90%] md:text-lg 2xl:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua minim
              veniam.
            </p>

            <p className="text-ternary text-[.9rem] mt-5 lg:w-[89%]  md:text-lg 2xl:text-2xl">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>
        </div>
        <div className="coach-second-row md:grid md:grid-row-1 gap-6 md:grid-cols-2 lg:grid-cols-3 ">
          {coachingData.map((coach) => {
            return (
              <div className="coach-items mt-10" key={coach.id}>
                <div>
                  <img src={coach.img} />
                </div>
                <h3 className="text-primary font-bold md:text-2xl">
                  {coach.title}
                </h3>
                <p className="text-[.9rem] text-ternary  md:text-lg 2xl:text-2xl">
                  {coach.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Coaching;
