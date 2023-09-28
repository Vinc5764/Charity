// Import Swiper styles
import loop from "../assets/loop.png";
import "swiper/css";
import "swiper/css/pagination";
import ReviewCard from "./ReviewCard";

const Testimonial = () => {
  return (
    <div className=" my-2 px-4 py-32 lg:px-12 " id="testimonials">
      <div className="flex justify-between">
        <div className="mb-20">
          <p className="mb-5 text-xl font-semibold text-[#00725E]">
            Testimonial
          </p>
          <h2 className="text-headingcolor text-4xl font-bold md:text-5xl">
            What People Say About Us
          </h2>
        </div>
        <img src={loop} alt="" className="h-8 w-10" />
      </div>
      <div>
        <ReviewCard />
      </div>
    </div>
  );
};

export default Testimonial;
