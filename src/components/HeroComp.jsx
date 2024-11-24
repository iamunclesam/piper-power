import { useState } from "react";
// import home from '../assets/img/home.png';
import twoImage from '../assets/img/one.jpg';
import threeImage from '../assets/img/three.jpg';

const HeaderAndHero = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <header className="py-4 bg-black sm:py-6">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="shrink-0">
              <a href="#" title="" className="flex">
                <p class="text-white text-2xl">Piper-Power</p>
              </a>
            </div>

            <div className="flex md:hidden">
              <button
                type="button"
                className="text-white"
                onClick={() => setExpanded(!expanded)}
                aria-expanded={expanded}
              >
                {!expanded ? (
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>

            <nav className="hidden md:flex md:items-center md:justify-end md:space-x-12">
              {["Products", "Features", "Pricing", "Support"].map((item) => (
                <a
                  key={item}
                  href="#"
                  title={item}
                  className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {expanded && (
            <nav className="flex flex-col pt-8 pb-4 space-y-6">
              {["Products", "Features", "Pricing", "Support"].map((item) => (
                <a
                  key={item}
                  href="#"
                  title={item}
                  className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
                >
                  {item}
                </a>
              ))}
            </nav>
          )}
        </div>
      </header>

      <section className=" py-12 bg-black sm:pb-16 lg:pb-20 xl:pb-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 md:max-w-7xl">
          <div className="relative">
            <div className="text-center">
              <p className="text-sm font-normal tracking-widest text-gray-300 uppercase">
              Leading Energy Supply and Sustainability
              </p>
              <h1 className="mt-6 text-5xl font-bold text-white sm:mt-10 sm:text-5xl lg:text-7xl lg:px-28">
                <span className="text-transparent bg-clip-text text-white">
                Welcome to Piper Power Innovative Technologies Ltd.
                </span>{" "}
              
              </h1>
              <p className="max-w-xl mx-auto mt-4 text-xl font-normal text-gray-400 sm:mt-8">
              Discover a future powered by innovation and sustainability. At Piper Power, we are dedicated to transforming energy solutions for a better tomorrow.
              </p>
              <div className="relative inline-flex items-center justify-center mt-8 sm:mt-12 group">
                <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                <a
                  href="#"
                  title=""
                  className="relative inline-flex items-center justify-center px-8 py-3 text-base font-normal text-white bg-black border border-transparent rounded-full"
                  role="button"
                >
                  Start Exploring Inspiration
                </a>
              </div>

              <div>
                <div className="inline-flex items-center pt-6 mt-8 border-t border-gray-800 sm:pt-10 sm:mt-14">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="1.5"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 7.00003H21M21 7.00003V15M21 7.00003L13 15L9 11L3 17"
                      stroke="url(#a)"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <defs>
                      <linearGradient
                        id="a"
                        x1="3"
                        y1="7.00003"
                        x2="22.2956"
                        y2="12.0274"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0%" stopColor="var(--color-cyan-500)" />
                        <stop offset="100%" stopColor="var(--color-purple-500)" />
                      </linearGradient>
                    </defs>
                  </svg>
                  {/* <span className="ml-2 text-base font-normal text-white">
                    42 new design inspirations were added last week
                  </span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="py-12 bg-black sm:py-16 lg:py-28">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="grid items-center grid-cols-1 gap-10 sm:gap-16 lg:grid-cols-2">
                    <div>
                        <div className="max-w-sm mx-auto xl:max-w-md rounded-2xl -rotate-0 md:-rotate-3">
                        <img className="w-full rounded-xl" src={twoImage} alt="" />
                        </div>
                    </div>

                    <div className="max-w-md mx-auto text-center lg:max-w-none lg:text-left">
                        <h2 className="text-3xl font-bold text-white sm:text-4xl xl:text-6xl font-pj">Modern Energy Solutions for a Sustainable Future</h2>
                        <p className="mt-8 md:text-xl font-normal leading-7 text-gray-300 font-pj">
                        We specialize in renewable energy, infrastructure development, and reliable energy supply. Our cutting-edge technologies ensure sustainable growth and efficiency across diverse sectors.
                        </p>

                       
                    </div>
                </div>
            </div>
        </section>



        <section className="py-12 bg-black sm:py-16 lg:py-28">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="grid items-center grid-cols-1 gap-10 sm:gap-16 lg:grid-cols-2">
                  

                    <div className="order-2 md:order-1 max-w-md mx-auto text-center lg:max-w-none lg:text-left">
                        <h2 className="text-3xl font-bold text-white sm:text-4xl xl:text-6xl font-pj">Explore the Piper Power Energy Village</h2>
                        <p className="mt-8 md:text-xl font-normal leading-7 text-gray-300 font-pj">
                        Experience the pinnacle of energy innovation. Our Energy Village showcases state-of-the-art technologies and sustainable practices, offering a glimpse into the future of energy solutions.
                        </p>
                    </div>

                    <div className="order-1 md:order-2">
                        <div className="max-w-sm mx-auto xl:max-w-md rounded-2xl rotate-0 md:rotate-3">
                        <img className="w-full rounded-xl" src={threeImage} alt="" />
                        </div>
                    </div>


                </div>
            </div>
        </section>
    </div>
  );
};

export default HeaderAndHero;
