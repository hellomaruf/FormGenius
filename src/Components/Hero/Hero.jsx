function Hero() {
  return (
    <div className="">
      <div className=" grid grid-cols-2 items-center justify-center min-h-[calc(100vh-64px)]">
        <div className="col-span-1 px-32">
          <h1 className="text-5xl font-bold">
            Hello Peaple Welcome <br /> to{" "}
            <span className="text-[#545DBF]">Form Genius</span>
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn bg-[#545DBF] hover:bg-[#4850a9] text-white">
            Get Started
          </button>
        </div>
        <div className="col-span-1 bg-purple-100 h-full flex items-center px-10">
          <img src="hero.png" className="max-w-xl rounded-lg" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
