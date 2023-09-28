import About from "../assets/AboutUs.png";

const AboutUs = () => {
  return (
    <div
      className="mt-16 flex items-center justify-center px-2 lg:justify-start lg:pl-36"
      id="AboutUs"
    >
      <img className="w-7/12 lg:w-5/12" src={About} alt="Read More" />
      <div className="pl-8 lg:mt-[-10rem] lg:w-[27rem]">
        <h3 className="font-semibold">About Us</h3>
        <h2 className="font-bold">Your Support is Really Powerful </h2>
        <p className="pt-4 text-base text-[#444]">
          The secret to happiness lies in helping others. Never underestimate
          the difference YOU can make in the lives of the poor, the abused and
          the helpless.
        </p>
        <button className="border-primary hover:bg-primary bg-primary mt-4 rounded border  px-4 py-2 text-white transition-all duration-300 hover:text-white">
          Read More
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
