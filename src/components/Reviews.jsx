import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { reviews } from "../constant/constant";

import { AiFillStar } from "react-icons/ai";
const Reviews = () => {
  const [reviwesData, setReviewsData] = useState(reviews);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="reviews px-5 bg-light py-10 mt-[3rem]">
      <div className="review-wrapper container mx-auto">
        <h2 className="text-primary text-xl font-bold md:text-2xl md:w-[40%] mb-5">
          Hear out what my clients say about me.
        </h2>
        <Carousel
          responsive={responsive}
          arrows={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          infinite={true}
        >
          {reviwesData.map((data) => {
            return (
              <div
                className="review-items bg-pure p-5 mr-5 xl:w-[60%] "
                key={data.id}
              >
                <h5 className="text-primary ">{data.review}</h5>
                <h4 className="text-primary font-bold my-4">{data.reviwer}</h4>
                <img src={data.img} alt="" />
                <div className="flex mt-5">
                  <AiFillStar className="text-acent" />{" "}
                  <AiFillStar className="text-acent" />{" "}
                  <AiFillStar className="text-acent" />{" "}
                  <AiFillStar className="text-acent" />{" "}
                  <AiFillStar className="text-acent" />
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
};

export default Reviews;
