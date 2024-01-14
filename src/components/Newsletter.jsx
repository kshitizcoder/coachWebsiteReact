import React from "react";
import Button from "./Button";

const Newsletter = () => {
  return (
    <section className="newsletter mt-[3rem] py-10 px-5 bg-light">
      <div className="news-warpper container mx-auto md:grid md:grid-cols-2">
        <div className="news-left">
          <h2 className="text-primary font-bold text-xl lg:text-3xl">
            Get notified when I publish new articles
          </h2>
          <p className="text-ternary my-5">
            Stay up to date with the latest news, announcements, and articles.
          </p>
        </div>
        <div className="new-right mt-9 md:mt-0 flex justify-end ">
          <div>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="border border-ternary py-1 px-2 rounded-md lg:rounded-none  focus:outline-none"
            />
            <Button
              Text={"Subscribe"}
              Style={
                "bg-secondary text-pure py-2 px-14 mt-4 lg:mt-0 lg:ml-8 rounded-[.4rem] font-meduim transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
