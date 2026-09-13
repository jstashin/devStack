import BannerImg from "../../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="container mx-auto px-10 py-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">

        
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-slate-900">
            Build Your Ideal
            <br />

            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg leading-8">
            Explore frontend, backend, database, and tooling options,
            <br className="hidden md:block" />
            compare them side by side, and put together the stack that fits your
            <br className="hidden md:block" />
            next project.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="w-52 h-14 px-6 py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-orange-500 to-pink-500">
              Explore Technologies
            </button>

            <button className="w-52 h-14 px-6 py-3 rounded-lg border border-gray-300 text-gray-700">
              Learn More
            </button>
          </div>
        </div>

        
        <div className="md:w-1/2 flex justify-center">
          <img
            src={BannerImg}
            alt="Development Stack"
            className="w-[320px] md:w-[430px]"
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;