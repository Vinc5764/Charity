/* eslint-disable react/no-unescaped-entities */

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Avatar1 from "../assets/Avatar1.svg";
import Avatar2 from "../assets/Avatar2.svg";
import Avatar3 from "../assets/Avatar3.svg";
import Avatar4 from "../assets/quote.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    occupation: "Senior Gardener Farmer",
    category: "Kindness",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.",
    Avatar: Avatar1,
  },
  {
    id: 2,
    name: "Jack Harry",
    occupation: "Senior Gardener Farmer",
    category: "Humanity",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.",
    Avatar: Avatar2,
  },
  {
    id: 3,
    name: "Sakib Hossain",
    occupation: "Senior Gardener Farmer",
    category: "Ethics & Morality",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.",
    Avatar: Avatar3,
  },
];

const ReviewCard = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        className="mySwiper -z-0"
      >
        {reviews.map((review) => (
          <SwiperSlide
            key={review.id}
            className="rounded border border-[#006B6A] p-8"
          >
            <div>
              <img src={Avatar4} alt="" className="h-4" />
              <h1 className="pt-4 font-['Sora'] text-[1.5rem]">
                {review.category}
              </h1>
              <p className="my-5">{review.comment}</p>
              <div className="flex items-center gap-4">
                <img src={review.Avatar} alt="" className="h-10" />
                <div>
                  <p>{review.name}</p>
                  <p className="text-sm">{review.occupation}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ReviewCard;
