import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import userState from "../../contexts/user.context";
import { useSpring, animated, useTransition } from "@react-spring/web";
import Courses from "../../assets/main-courses.webp";
import Footer from "../../components/footer/footer.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import MoneyBack from "../../components/money-back/money-back.component";
import CompanyCarousel from "../../components/company-carousel/company-carousel.component";
import { Link } from "react-router-dom";

export default function Home() {
  const [user, _] = useRecoilState(userState);

  const icons = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    "https://images.ctfassets.net/aq13lwl6616q/5qXzclQsahWh7oG026SvU9/9ff111eb2b9c091faab7d699ff7dd97e/more.png?w=100&h=100&q=50&fm=webp",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  ];

  const text = [
    "Start a career.", // Start a career
    "Be pro.", // Be pro in order to achieve step 3
    "Get hired fast.", // Get hired fast because of your pro
    "Don't have a boss.", // Become the boss of your boss and so on untill there is no boss left
  ];
  const [idx, setIdx] = useState(0);
  const [ticking, setTicking] = useState(true);

  const [reset, setReset] = useState(true);
  const springProps = useSpring({
    // delay: ,
    reset: reset,
    config: { duration: 500 },
    from: {
      opacity: 0,
      transform: `translateY(25px)`,
    },
    to: {
      opacity: 1,
      transform: `translateY(0)"`,
    },
    onStart: () => {
      setReset(false);
    },
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      if (ticking) {
        setIdx((idx + 1) % text.length);
        setReset(true);
      }
    }, 2e3);
    return () => clearTimeout(timer);
  });

  return (
    <div className="min-h-screen flex flex-col items-center pt-48 bg-gradient-to-b from-white to-slate-100">
      <div className="text-black text-7xl font-bold text-center">
        Learn to code.
      </div>
      <animated.div
        style={springProps}
        className="mt-4 text-center text-blue-500 text-7xl font-bold"
      >
        {text[idx]}
      </animated.div>

      <p className="mt-8 text-2xl font-light text-center">
        The most efficient way for you to learn in-demand skills, get a job, and{" "}
        <br /> advance your programming career.
      </p>

      <div className="mt-8 scale-125">
        <Link to="/join">
          <CustomButton
            highlighted={true}
            text="JOIN ECCC"
            onClickHandle={() => {}}
          />
        </Link>

        <span className="cursor-pointer font-medium text-blue-500 hover:underline decoration-blue-500 decoration-2 underline-offset-8">
          SEE ALL COURSES
        </span>
      </div>

      <img
        className="shadow-2xl mt-32 w-2/3 rounded-3xl aspect-video"
        // src={Courses}
        src="https://res.cloudinary.com/practicaldev/image/fetch/s--euHRE9Fb--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/3exkakb8xol72rpah4z1.png"
        alt="Courses photo"
      />

      <div className="flex justify-center mt-16 w-3/5">
        {icons.map((icon, idx) => (
          <div
            className="mx-6 bg-white rounded-3xl h-20 w-20 flex justify-center items-center shadow-2xl hover:scale-110 active:scale-90 transition-all cursor-pointer"
            key={idx}
          >
            <img className="w-2/3" src={icon} />
          </div>
        ))}
      </div>

      <span className="mt-32 text-4xl text-center font-bold leading-snug">
        Our students are getting hired by the best companies. <br /> You could
        be too!
      </span>

      <CompanyCarousel className="mt-8 mb-20" />

      <div className="bg-blueish-purplish min-h-half-screen w-screen flex flex-col items-center text-white">
        <h1 className="mt-24 mb-6 text-4xl font-semibold text-center">
          Benefits of joining ECCC
        </h1>
        <p className="text-center font-light text-lg">
          We will help you at every single step of your learning journey. From
          beginner to advancing your skills to <br />
          getting hired and having a successful, rewarding career.
        </p>

        {/* big container */}
        <div className="flex flex-col w-3/4 items-center mb-32 mt-16">
          {/* Top row */}
          <div className="flex mb-16">
            {/* Left element */}
            <div className="flex mr-16 flex-1">
              <img
                className="h-20"
                src="https://images.ctfassets.net/aq13lwl6616q/a6ZWE734JbEgQrisLntKZ/9063aed11447430183ba9d78733cc7da/Portfolio.svg?w=75&fm=webp"
              />
              <div className="ml-8">
                <h1 className="text-2xl font-semibold mb-4 leading-tight tracking-tight">
                  Create a collection of projects that make you stand out
                </h1>
                <p className="font-light text-lg tracking-tight">
                  The projects we'll help build are professional, useful, apps
                  that will make your portfolio stand out among the crowd and
                  impress potential employers.
                </p>
              </div>
            </div>

            {/* Right element */}
            <div className="flex mr-16 flex-1">
              <img
                className="h-20"
                src="https://images.ctfassets.net/aq13lwl6616q/7LR5D0bt2k4Y8oJeVgALGA/8b37e6717a45c7ebf5f8850533163de7/Promotion.svg?w=75&fm=webp"
              />
              <div className="ml-8">
                <h1 className="text-2xl font-semibold mb-4 leading-tight tracking-tight">
                  Get promoted, become top 5%
                </h1>
                <p className="font-light text-lg tracking-tight">
                  Our intermediate and advanced courses help you continue beyond
                  most other courses so that you can land senior roles and be
                  recognized as a professional.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom row */}
          <div className="flex">
            <div className="flex flex-1">
              <img
                className="h-20"
                src="https://images.ctfassets.net/aq13lwl6616q/14RfDgNl9Vj76pBamlbPPp/f87602cab7f72e2962b1b19f09d3132e/Career_Path.svg?w=75&fm=webp"
              />
              <div className="ml-8">
                <h1 className="text-2xl font-semibold mb-4 leading-tight tracking-tight">
                  Get hired, in record breaking time
                </h1>
                <p className="font-light text-lg tracking-tight">
                  Stop wasting time on endless, goalless tutorials. Our
                  step-by-step courses can give you an exact roadmap to follow
                  in order to get hired.
                </p>
              </div>
            </div>

            <div className="flex flex-1">
              <img
                className="h-20"
                src="https://images.ctfassets.net/aq13lwl6616q/27Ocy7BDseupc3LLmFd44r/e8af88cd03afe532f249e7d247e1cd75/WorkAnywhere.svg?w=75&fm=webp"
              />
              <div className="ml-8">
                <h1 className="text-2xl font-semibold mb-4 leading-tight tracking-tight">
                  Work anytime from anywhere
                </h1>
                <p className="font-light text-lg tracking-tight">
                  We offer you a laid out roadmap to help you build your dream
                  career and become your own boss, no matter your experience
                  level.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <h1 className="mt-24 mb-6 text-4xl font-semibold text-center">
          What students are saying
        </h1>
        <p className="w-3/5 mx-auto text-center font-light text-lg">
          Our courses and community have helped 1,000s of ECCC students go from
          zero to getting hired to levelling up their skills and advancing their
          careers to new heights.
        </p>
      </div>

      <Link className="my-16 scale-110" to="/testimonials">
        <CustomButton text="See testimonials" highlighted={true} />{" "}
      </Link>

      <MoneyBack className="mb-32" />
    </div>
  );
}
