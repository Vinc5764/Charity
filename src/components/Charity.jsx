import Two from "../assets/Two.png";
import Angry from "../assets/Angry.svg";
import Yers from "../assets/Yers.png";
import Yete from "../assets/yete.png";
import Beam from "../assets/Beam.svg";

const Charity = () => {
  return (
    <div
      className="mb-8 flex flex-col px-2 pt-16 lg:flex-row-reverse  xl:pr-36 lg:pr-8"
      id="Charity"
    >
      <img className="w-full pb-4 pl-4 lg:w-5/12" src={Two} alt="Charity" />
      <div className="px-2 pt-4 lg:py-16 ">
        <h1>Welcome to Charity</h1>
        <h2 className="font-bold text-['Playfair_Display']">
          Let Us Come Together To Make a Difference
        </h2>
        <p className="py-4 lg:w-[33rem]">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy tempor invidunt ut labore et dolore magna aliquyam erat, sed
          diam voluptua. At vero eos et accusam et justo.
        </p>
        <div className="flex ">
          <div className="mr-4 bg-[#EDF7F5] lg:h-[9rem] lg:w-[14.5rem]">
            <div className="flex lg:pt-4">
              <img src={Angry} alt="" className="pr-2" />
              <h1>Our Mission</h1>
            </div>
            <p className="lg:pt-4">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            </p>
          </div>
          <div className="bg-[#EDF7F5] lg:h-[9rem] lg:w-[14.5rem]">
            <div className="flex lg:pt-4">
              <img src={Beam} alt="" className="pr-2" />
              <h1>Our Vision</h1>
            </div>
            <p className="lg:pt-4">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            </p>
          </div>
        </div>
        <div className="flex justify-between lg:w-[30rem]">
          <p>Donations</p>
          <p>75%</p>
        </div>
        <div className="flex w-8/12 lg:w-full">
          <img src={Yers} alt="" />
          <img className="w-[5rem]" src={Yete} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Charity;
