import styles from "./background.module.css";

const Home = () => {
  return (
    <div className={styles.background} id="Home">
      <div className=" text-center text-white">
        <h3 className="">Give Hope for the Homeless</h3>
        <h1 className="font-['Playfair_Display'] text-5xl font-semibold leading-[4rem] md:w-[47rem] md:leading-[5.625rem] lg:text-[4.5rem]">
          Helping Each Other Can Make World Better
        </h1>
        <p className="pb-4 lg:w-[36.8rem] lg:pl-16">
          We Seek out world changers and difference makers around the globe,and
          equip them to fulfill their unique purpose.
        </p>
        <div className="">
          <button className="border-primary hover:bg-primary bg-primary rounded border  px-4 py-2 text-white transition-all duration-300 hover:text-white">
            Donate Now
          </button>
          <button className="border-primary text-primary hover:bg-primary ml-[2rem] rounded border bg-transparent px-4 py-2 transition-all duration-300 hover:text-white">
            Know About Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
