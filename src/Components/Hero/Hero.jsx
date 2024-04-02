function Hero() {
  return (
    <div className="">
      <div className=" grid grid-cols-1 space-y-10 py-10 mb-10 md:grid-cols-2 items-center justify-center min-h-[calc(100vh-64px)]">
        <div className="col-span-1 px-12 md:px-32 text-center md:text-left">
          <h1
            data-aos="fade-right"
            data-aos-duration="1000"
            className="text-4xl md:text-5xl font-bold"
          >
            Hello Peaple Welcome to{" "}
            <span className="text-[#545DBF]">Form Genius</span>
          </h1>
          <p
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="1000"
            className="py-6"
          >
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="1200"
            className=""
          >
            <button className="btn bg-[#545DBF] hover:bg-[#4850a9] text-white">
              Get Started
            </button>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="col-span-1 bg-purple-100 h-full flex items-center px-10"
        >
          <img src="hero.png" className=" rounded-lg" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
