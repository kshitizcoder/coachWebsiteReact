import React from "react";
import Button from "./Button";
import freeGuide from "../assets/freeguide.png";
const FreeGuide = () => {
  return (
    <section id="extra" className="free-guide px-5 py-10 md:mt-[4rem]">
      <div className="free-wrapper container mx-auto md:grid md:grid-cols-2  gap-10 ">
        <div className="free-left md:flex md:flex-col md:justify-center">
          <h2 className="text-primary text-2xl font-bold md:text-4xl lg:text-4xl lg:w-[80%] 2xl:text-6xl">
            Don't miss out on my 'Live life at the full potential' free guide
          </h2>

          <p className="text-ternary text-[0.9rem] my-8 md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua minim
            veniam.
          </p>
          <p className="text-ternary text-[0.9rem]  md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.{" "}
          </p>

          <div className="mt-8">
            <Button
              Text={"Get your free guide now"}
              Style={
                "bg-secondary text-pure py-4 px-10 md:px-14 rounded-[.4rem] transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
              }
            />
          </div>
        </div>
        <div className="free-right mt-10 md:mt-0 md:flex md:justify-end">
          <img src={freeGuide} />
        </div>
      </div>
    </section>
  );
};

export default FreeGuide;
