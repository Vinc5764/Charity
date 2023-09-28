import West from "../assets/West.png";
import East from "../assets/East.png";
import Ty from "../assets/ty.png";
import has from "../assets/has.png";
import yre from "../assets/yre.png";
import dan from "../assets/dan.png";
import oyes from "../assets/oyes.png";
import uis from "../assets/uis.png";

const Gallery = () => {
  return (
    <div
      className="mx-8 grid grid-cols-3 gap-4 px-8 py-16 md:grid-cols-4 lg:grid-cols-8 lg:px-[4rem]"
      id="Gallery"
    >
      {/* First Column */}
      <div className="col-span-2 mt-[-2rem] pb-2 lg:mt-0">
        <img src={West} alt="Image 1" className="h-auto w-1/2 pb-4" />
        <img src={East} alt="Image 2" className="h-auto w-1/2" />
      </div>

      {/* Single Column */}
      <div className="col-span-1  lg:mr-[-4rem]">
        <img
          src={Ty}
          alt="Image 3"
          className=" lg:ml-[-5rem] xl:ml-[-7rem] xl:h-[20rem]"
        />
      </div>

      {/* Repeat the above structure for the remaining images */}
      <div className="col-span-2">
        <img src={has} alt="Image 4" className="h-auto pb-4" />
        <img src={yre} alt="Image 5" className="h-auto w-1/2" />
      </div>

      <div className="col-span-2">
        <img src={dan} alt="Image 6" className="h-auto w-full" />
      </div>

      <div className="col-span-1">
        <img src={oyes} alt="Image 7" className="h-auto pb-4" />
        <img src={uis} alt="Image 8" className="h-auto" />
      </div>
    </div>
  );
};

export default Gallery;
