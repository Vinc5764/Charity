import Twitter from "../assets/Twitter.png";
import IG from "../assets/IG.png";
import Pinterest from "../assets/Pinterest.png";
import Youtube from "../assets/Youtube.png";

const Footer = () => {
  return (
    <div className="flex flex-col gap-4 bg-[#22262F] text-white lg:flex-row lg:justify-between lg:px-8 lg:py-10">
      <div className="flex flex-col gap-4 py-4">
        <h2 className="font-bold">Address</h2>
        <p className="text-[#AFAFAF]">
          A-272, Surajmal Vihar, Delhi,
          <br /> 11009281-8181-0860
        </p>
        <a
          href="https://www.vivekguptafoundation.in/#"
          target="_blank"
          rel="noreferrer"
          className="text-[#AFAFAF]"
        >
          contact@vivekguptafoundation.in
        </a>
      </div>
      <div>
        <h1 className="text-base font-bold">Get In Touch</h1>
        <p className="text-[#AFAFAF]">Contact Us</p>
        <p className="text-[#AFAFAF]">Our Services</p>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="font-bold">Newsletter</h3>
        <form className="flex">
          <label htmlFor="email"></label>
          <input
            placeholder="Enter your Email"
            type="text"
            name="email"
            id="email"
            className="h-16 text-justify  placeholder:font-['Playfair_Display']  placeholder:text-base placeholder:font-medium placeholder:leading-10 lg:w-[29rem]"
          />
          <button className="h-10 w-24 bg-[#219D80]">Subscribe</button>
        </form>
        <p className="text-[#AFAFAF]">
          Your email is safe with us,we don{"'"}t spam.
        </p>
        <h3 className="font-bold">Follow Me</h3>
        <div className="flex gap-2">
          <img src={Twitter} alt="" />
          <img src={IG} alt="" />
          <img src={Pinterest} alt="" />
          <img src={Youtube} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
