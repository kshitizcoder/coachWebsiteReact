import React from "react";
import abstract from "../assets/abstract1.svg";
import coach from "../assets/coach.png";
import target from "../assets/target.svg";
import Button from "./Button";
const Hero = () => {
  return (
    <section id="hero" className="hero bg-light px-5 mt-[1rem] py-10 relative">
      <div className="hero-warpper md:container md:mx-auto md:grid md:grid-rows-1 md:gap-7 md:grid-cols-2">
        <div className="hero-left md:flex md:flex-col justify-center">
          <div className="xl:absolute xl:top-[10%] left-[2%]">
            <img src={abstract} alt="abstract" />
          </div>
          <p className="text-ternary w-[90%] mt-5">
            Proven strategies backed by science for success.{" "}
          </p>
          <h1 className="text-4xl font-bold text-primary my-5 lg:text-6xl xl:text-7xl xl:w-[80%]">
            Live life at the full potential
          </h1>
          <p className="text-[.9rem] text-ternary md:text-lg ">
            I help people to discover their true potential and live a fulfilling
            life... Discover the simple 3 steps that I discovered to hack
            productivity. It just works and it is begin using backed by science.
            Wanna transform your life?
          </p>
          <div className="mt-8">
            <Button
              Text={"Get your free guide now"}
              Style={
                "bg-secondary text-pure py-4 px-10 md:px-14 rounded-[.4rem] transition ease-in-out duration-900 hover:translate-y-1 hover:scale-110 duration-300"
              }
            />
          </div>
        </div>
        <div className="hero-right relative mt-7 md:mt-0 md:flex md:justify-end">
          <img src={coach} alt="coach" />

          <div className="flex absolute top-0 left-0 bg-pure  w-[84%] p-1 md:left-[-20%] md:w-[70%] lg:w-[53%] xl:w-[40%] xl:left-[10%]">
            <div className="targetimg">
              <img src={target} alt={target} />
            </div>
            <div className="ml-4">
              <h4 className="text-primary font-bold ">100%</h4>
              <p>Success rate this year</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
