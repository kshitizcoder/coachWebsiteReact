import React, { useState } from "react";
import { blog } from "../constant/constant";
import Button from "./Button";
const Blog = () => {
  const [blogData, setBlogData] = useState(blog);
  return (
    <section id="about" className="blog px-5 py-7 mt-[2rem]">
      <div className="blog-wrapper container mx-auto">
        <div className="text-center md:flex md:justify-center">
          <h2 className="text-2xl text-primary font-bold md:w-[50%] md:text-3xl 2xl:text-5xl">
            Stay Motivated, read the weekly blog articles.
          </h2>
        </div>
        <div className="md:grid md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:place-items-end	">
          {blogData.map((blog) => {
            return (
              <div className="blog-items mt-10 " key={blog.id}>
                <div className="">
                  <img src={blog.img} />
                </div>
                <h3 className="text-primary font-bold text-xl my-5  w-[87%]  md:w-[68%] lg:w-[80%] 2xl:w-[49%]">
                  {blog.title}
                </h3>

                <p className="text-[0.9rem] text-ternary md:text-lg">
                  {" "}
                  {blog.desc}{" "}
                </p>
              </div>
            );
          })}
        </div>
        <div className=" mt-7 lg:mt-10 md:flex md:justify-center">
          <Button
            Text={"Read more blogs"}
            Style={
              "bg-secondary text-pure py-4 px-14 rounded-[.4rem] transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Blog;
