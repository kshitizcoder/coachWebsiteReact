import React from "react";
import Button from "./Button";
import bookNow from "../assets/bookNow.png";
const BookNow = () => {
  return (
    <section className="book-now ">
      <div className="book-wrapper container px-5 py-8 md:grid md:grid-cols-2 gap-5 mx-auto bg-light">
        <div className="book-left md:flex md:flex-col md:justify-center">
          <h2 className="text-primary font-bold text-lg md:text-xl lg:text-3xl 2xl:text-5xl  ">
            Get 15-Minutes Complimentary online session.
          </h2>
          <p className="mt-7 text-ternary">Limited Period Offer. Claim Now.</p>

          <div className="mt-8">
            <Button
              Text={"Book now"}
              Style={
                "bg-secondary text-pure py-4 px-14  rounded-[.4rem] font-meduim border border-2  transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300	"
              }
            />
          </div>
        </div>

        <div className="mt-8 md:mt-0 md:flex justify-end">
          <img src={bookNow} alt="bookNow" className="ml-[-1rem]" />
        </div>
      </div>
    </section>
  );
};

export default BookNow;
