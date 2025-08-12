"use client";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import Header from "./components/header";
import { motion } from "framer-motion";

export default function Home() {
  const [newsection, setNewSection] = useState(false);
  const sec2bg = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [hoverImage, setHoverImage] = useState(null);

  const items = [
    {
      number: "01/",
      label: "Brainstorming",
      text: "Let’s unlock the potential of your ideas and turn them into something extraordinary. I dig deep into your brand, explore the competition, and connect with your audience’s needs to shape products that truly resonate and inspire.",
    },
    {
      number: "02/",
      label: "Designing",
      text: "I transform concepts into powerful brand stories. From crafting a striking visual identity to designing seamless, human-focused experiences, my work is all about leaving a lasting impact that people remember and love.",
    },
    {
      number: "03/",
      label: "Crafting",
      text: "Get ready to experience the power of cutting-edge technology! With my expertise, I'll build websites and products that not only function flawlessly but also remain dependable and adaptable over time. You can trust me to keep your digital world running smoothly while you focus on what matters most to you.",
    },
    {
      number: "04/",
      label: "Improving",
      text: "Just like the world is constantly evolving, so is my design practice! I'm always pushing myself to get better and better, because I know that's what it takes to stay ahead in this fast-paced world. And when I work with businesses like yours, I bring all my latest and greatest ideas to the table to help you succeed in style.",
    },
  ];

  useEffect(() => {
    if (newsection && sec2bg.current) {
      gsap.set(sec2bg.current, {
        y: window.innerHeight,
        scale: 1,
        xPercent: -50,
        left: "50%",
        width: 100,
        height: 100,
        borderRadius: "12px",
      });

      const tl = gsap.timeline();
      tl.to(sec2bg.current, {
        duration: 0.6,
        y: 0,
        ease: "power3.out",
      }).to(
        sec2bg.current,
        {
          duration: 0.8,
          width: "100vw",
          height: "100.5vh",
          borderRadius: 0,
          ease: "power3.inOut",
        },
        ">"
      );
    }
  }, [newsection]);

  // 🆕 Mouse move handler for image follow
  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <>
      {!newsection ? (
        // section1
        <section className="flex flex-col w-full h-[100vh] overflow-hidden lg:flex lg:flex-col lg:w-full lg:h-[100vh] lg:overflow-hidden ">
          <Header />
          <div className="flex flex-col w-full h-full justify-center items-start pl-3 animate__animated animate__fadeInUp lg:flex lg:flex-col lg:w-full lg:h-full lg:justify-end lg:items-start lg:pl-12 lg:animate__animated lg:animate__fadeInUp ">
            <h1
              className="w-[90%] text-[78px] text-white leading-none tracking-tighter [word-spacing:-1px] lg:w-[90%] lg:text-[178px] lg:text-white lg:leading-none lg:tracking-tighter lg:[word-spacing:-12px]"
              style={{
                fontFamily: "Altone, sans-serif",
                fontWeight: 500,
              }}
            >
              Designing the future, one pixel at a time.
              <span
                className="rounded-full cursor-crosshair inline-flex w-[80%] h-22 ml-0 justify-center items-center text-black bg-white hover:bg-[#0a0a0a] duration-300 hover:text-white align-middle  transition-colors lg:rounded-full lg:cursor-crosshair lg:inline-flex lg:w-28 lg:h-28 lg:justify-center lg:items-center lg:text-black lg:bg-white lg:hover:bg-[#0a0a0a] lg:duration-300 lg:hover:text-white lg:ml-12 lg:align-middle  lg:transition-colors"
                onClick={() => setNewSection(true)}
              >
                <ArrowUpRight
                  className="text-current transition-colors duration-300 lg:text-current lg:transition-colors lg:duration-300"
                  size={55}
                />
              </span>
            </h1>
          </div>
        </section>
      ) : (
        <>
          {/* // section2 */}
          <section className="flex relative w-full h-screen bg-white text-white justify-center items-center overflow-hidden lg:flex lg:relative lg:w-full lg:h-screen lg:bg-white lg:text-white lg:justify-center lg:items-center lg:overflow-hidden">
            <div
              ref={sec2bg}
              className="bg-black absolute inset-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 lg:bg-black lg:absolute lg:inset-0 lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:z-0"
            ></div>
            <div className="flex flex-col w-full h-screen px-5 py-0  z-10 lg:flex lg:flex-col lg:w-full lg:h-screen lg:px-7 lg:py-0 lg:z-10">
              <div className="hidden  w-full h-40 lg:flex lg:w-full lg:h-40">
                <div className="hidden flex-1 h-full items-center lg:flex lg:flex-1 lg:h-full lg:items-center">
                  <button
                    onClick={() =>
                      (window.location.href =
                        "mailto:ammar.ahmed9049@gmail.com")
                    }
                    className="w-90 h-24 font-[400] text-white text-[24px] border-2 border-white hover:bg-white hover:text-black duration-300 cursor-crosshair rounded-full uppercase lg:w-90 lg:h-24 lg:font-[400] lg:text-white lg:text-[24px] lg:border-2 lg:border-white lg:hover:bg-white lg:hover:text-black lg:duration-300 lg:cursor-crosshair lg:rounded-full lg:uppercase"
                  >
                    Connect With Me
                    <ArrowUpRight
                      className="text-current inline-flex ml-3 align-middle lg:text-current lg:inline-flex lg:ml-3 lg:align-middle"
                      size={35}
                    />
                  </button>
                </div>
                <div className="hidden flex-1 justify-end h-full items-center lg:flex lg:flex-1 lg:justify-end lg:h-full lg:items-center ">
                  <h1
                    className="w-[65%] text-white text-[18px] uppercase lg:w-[65%] lg:text-white lg:text-[18px] lg:uppercase"
                    style={{
                      fontFamily: "Altone ,sans-serif",
                      fontWeight: 300,
                    }}
                  >
                    Developing modern websites with clean, efficient code,
                    responsive design, seamless user interfaces, API
                    integration, and performance optimization across platforms.
                  </h1>
                </div>
              </div>

              <div className="flex w-full h-50 pt-9 lg:flex lg:w-full lg:h-90 lg:items-end">
                <h1
                  className="w-full text-white text-[48px] capitalize leading-none lg:w-[50%] lg:text-white lg:text-[78px] lg:capitalize lg:leading-none"
                  style={{ fontFamily: "Altone ,sans-serif", fontWeight: 500 }}
                >
                  Establish your digital presence with us.
                  <span className="inline-flex h-10 w-30 bg-white rounded-full  lg:inline-flex lg:h-15 lg:w-40 lg:bg-white lg:rounded-full lg:ml-5"></span>
                </h1>
              </div>

              <div className="flex flex-1 justify-end h-full items-center lg:flex lg:flex-1 lg:justify-end lg:h-full lg:items-center">
                <h1
                  className="w-full text-white text-[24px] lg:w-[55%] lg:text-white lg:text-[24px]"
                  style={{ fontFamily: "Altone ,sans-serif", fontWeight: 400 }}
                >
                  I’m Ammar Ahmed, a web developer passionate about building
                  exceptional online experiences. With 3+ years of experience, I
                  have honed my skills in creating clean, efficient, and
                  responsive websites that deliver seamless user interactions
                  and meet business goals.
                </h1>
              </div>
            </div>
          </section>

          {/* // section3 */}
          <section
            className="flex relative w-full min-h-screen bg-black text-white px-5 py-7 lg:flex lg:relative lg:w-full lg:min-h-screen lg:bg-black lg:text-white lg:px-7 lg:py-7"
            onMouseMove={handleMouseMove}
          >
            {/* 🆕 Floating image */}
            {hoverImage && (
              <img
                src={`/images/${hoverImage}`}
                alt="Preview"
                className="fixed pointer-events-none z-50 w-64 h-auto lg:fixed lg:pointer-events-none lg:z-50 lg:w-64 lg:h-auto"
                style={{
                  top: cursorPos.y - 70,
                  left: cursorPos.x - 70,
                  transform: "translate(-50%, -50%)",
                  transition: "top 0.05s linear, left 0.05s linear",
                }}
              />
            )}

            {/* wrapper */}
            <motion.div
              className="w-full h-full lg:w-full lg:h-full"
              initial={{ opacity: 0, x: -70 }} // start faded out and 50px left
              whileInView={{ opacity: 1, x: 0 }} // animate to fully visible and x=0
              viewport={{ once: true, amount: 0.3 }} // trigger when 30% visible, only once
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="w-full mb-6 lg:w-full lg:mb-6">
                <h1
                  className=" text-white text-[27px] tracking-[-1.5px] lg:text-white lg:text-[40px] lg:tracking-[-1.5px]"
                  style={{ fontFamily: "Altone ,sans-serif", fontWeight: 400 }}
                >
                  My latest creations.
                </h1>
              </div>
              <hr className="my-4 border-t border-white/20 lg:my-4 lg:border-t lg:border-white/20" />

              {/* content1 */}
              <div
                className="flex flex-col w-full gap-6 items-center group cursor-crosshair lg:flex lg:flex-row lg:w-full lg:gap-0 lg:mb-6 lg:h-46 lg:items-center lg:group lg:cursor-crosshair"
                onMouseEnter={() => setHoverImage("1.png")}
                onMouseLeave={() => setHoverImage(null)}
              >
                <div className="flex w-full flex-1 lg:flex lg:flex-1 lg:items-center lg:w-full lg:h-46">
                  <h1
                    className="text-white text-[40px] tracking-[-1.5px] leading-none transition-transform duration-300 group-hover:translate-x-4 lg:text-white lg:text-[65px] lg:tracking-[-1.5px] lg:transition-transform lg:duration-300 lg:group-hover:translate-x-4"
                    style={{
                      fontFamily: "Altone ,sans-serif",
                      fontWeight: 400,
                    }}
                  >
                    Foccus - App Blocker
                  </h1>
                </div>
                <div className="flex lg:flex lg:flex-1 lg:items-center lg:justify-end w-full">
                  <h1
                    className="text-white text-[18px] leading-none tracking-[-1.5px] lg:text-white lg:text-[20px] lg:tracking-[-1.5px]"
                    style={{
                      fontFamily: "Altone ,sans-serif",
                      fontWeight: 300,
                    }}
                  >
                    MOBILE & WEB Design, Branding, Interaction Design
                  </h1>
                </div>
                <div className="flex w-full lg:hidden">
                  <button className="w-14 h-14 font-[400] justify-center items-center text-white text-[24px] border-2 border-white hover:bg-black hover:text-white duration-300 cursor-crosshair rounded-full uppercase lg:w-[70%] lg:h-24 lg:font-[400] lg:text-black lg:text-[24px] lg:border-2 lg:border-black lg:hover:bg-black lg:hover:text-white lg:duration-300 lg:cursor-crosshair lg:rounded-full lg:uppercase">
                    <ArrowUpRight
                      className="text-current inline-flex  lg:text-current lg:inline-flex lg:ml-3 lg:align-top"
                      size={28}
                    />
                  </button>
                </div>
              </div>

              <hr className="my-6 border-t border-white/20 lg:my-4 lg:border-t lg:border-white/20" />

              {/* content2 */}
              <div
                className="flex flex-col w-full gap-6 items-center group cursor-crosshair lg:flex lg:w-full lg:flex-row lg:mb-6 lg:h-46 lg:items-center lg:group lg:cursor-crosshair"
                onMouseEnter={() => setHoverImage("2.png")}
                onMouseLeave={() => setHoverImage(null)}
              >
                <div className="flex w-full flex-1 lg:flex lg:flex-none lg:w-[80%] ">
                  <h1
                    className="text-white text-[40px] tracking-[-1.5px] leading-none transition-transform duration-300 group-hover:translate-x-4 lg:text-white lg:text-[65px] lg:tracking-[-1.5px] lg:transition-transform lg:duration-300 lg:group-hover:translate-x-4"
                    style={{
                      fontFamily: "Altone ,sans-serif",
                      fontWeight: 400,
                    }}
                  >
                    Indigency - Agency Website
                  </h1>
                </div>
                <div className="flex lg:flex lg:flex-1 lg:items-center lg:justify-end w-full">
                  <h1
                    className="text-white text-[18px] leading-none tracking-[-1.5px] lg:text-white lg:text-[20px] lg:tracking-[-1.5px]"
                    style={{
                      fontFamily: "Altone ,sans-serif",
                      fontWeight: 300,
                    }}
                  >
                    Website Design
                  </h1>
                </div>
                <div className="flex w-full lg:hidden">
                  <button className="w-14 h-14 font-[400] justify-center items-center text-white text-[24px] border-2 border-white hover:bg-black hover:text-white duration-300 cursor-crosshair rounded-full uppercase lg:w-[70%] lg:h-24 lg:font-[400] lg:text-black lg:text-[24px] lg:border-2 lg:border-black lg:hover:bg-black lg:hover:text-white lg:duration-300 lg:cursor-crosshair lg:rounded-full lg:uppercase">
                    <ArrowUpRight
                      className="text-current inline-flex  lg:text-current lg:inline-flex lg:ml-3 lg:align-top"
                      size={28}
                    />
                  </button>
                </div>
              </div>

              <hr className="my-6 border-t border-white/20 lg:my-4 lg:border-t lg:border-white/20" />

              {/* content3 */}
              <div
                className="flex flex-col w-full gap-6 items-center group cursor-crosshair lg:flex lg:w-full lg:mb-6  lg:flex-row lg:h-46 lg:items-center lg:group lg:cursor-crosshair"
                onMouseEnter={() => setHoverImage("3.png")}
                onMouseLeave={() => setHoverImage(null)}
              >
                <div className="flex w-full flex-1 lg:flex lg:flex-none lg:w-[85%]">
                  <h1
                    className="text-white text-[40px] tracking-[-1.5px] leading-none transition-transform duration-300 group-hover:translate-x-4 lg:text-white lg:text-[65px] lg:tracking-[-1.5px] lg:transition-transform lg:duration-300 lg:group-hover:translate-x-4"
                    style={{
                      fontFamily: "Altone ,sans-serif",
                      fontWeight: 400,
                    }}
                  >
                    Eneftee - NFT Launchpad Website
                  </h1>
                </div>
                <div className="flex lg:flex lg:flex-1 lg:items-center lg:justify-end w-full">
                  <h1
                    className="text-white text-[18px] leading-none tracking-[-1.5px] lg:text-white lg:text-[20px] lg:tracking-[-1.5px]"
                    style={{
                      fontFamily: "Altone ,sans-serif",
                      fontWeight: 300,
                    }}
                  >
                    Website Design
                  </h1>
                </div>
                <div className="flex w-full lg:hidden">
                  <button className="w-14 h-14 font-[400] justify-center items-center text-white text-[24px] border-2 border-white hover:bg-black hover:text-white duration-300 cursor-crosshair rounded-full uppercase lg:w-[70%] lg:h-24 lg:font-[400] lg:text-black lg:text-[24px] lg:border-2 lg:border-black lg:hover:bg-black lg:hover:text-white lg:duration-300 lg:cursor-crosshair lg:rounded-full lg:uppercase">
                    <ArrowUpRight
                      className="text-current inline-flex  lg:text-current lg:inline-flex lg:ml-3 lg:align-top"
                      size={28}
                    />
                  </button>
                </div>
              </div>

              <hr className="my-6 border-t border-white/20 lg:my-4 lg:border-t lg:border-white/20" />

              {/* content4 */}
              <div className="flex w-full   items-center lg:flex lg:w-full lg:mb-6 lg:h-26 lg:items-center">
                <div className="flex  lg:flex">
                  <h1
                    className=" text-white text-[28px]  lg:text-white lg:text-[35px] lg:tracking-[-1.5px]"
                    style={{
                      fontFamily: "Altone ,sans-serif",
                      fontWeight: 400,
                    }}
                  >
                    Want to see more?
                    <span className="block text-[15px] align-middle text-white/70 lg:inline-flex lg:text-[23px] lg:ml-5 lg:align-middle lg:text-white/70">
                      Let’s connect with me at
                      <a href="mailto:ammarahmed9049@gmail.com">
                        <span className="block text-[15px] align-middle  text-white underline cursor-pointer lg:inline-flex lg:text-[23px] lg:align-middle lg:ml-2 lg:text-white lg:underline lg:cursor-pointer">
                          ammarahmed9049@gmail.com
                        </span>
                      </a>
                    </span>
                  </h1>
                </div>
              </div>
            </motion.div>
          </section>
          <section className="flex w-full min-h-screen bg-black text-white px-5 py-7 pb-7 lg:flex lg:w-full lg:min-h-screen lg:bg-black lg:text-white lg:px-7 lg:py-7 lg:overflow-hidden">
            <motion.div
              className="flex flex-col w-full h-full lg:flex lg:flex-col lg:w-full lg:h-full lg:justify-center"
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              <div className="flex flex-col w-full gap-4 mt-14 lg:flex lg:flex-row lg:w-full lg:gap-50 lg:mt-14">
                <div className="flex lg:flex">
                  <h1
                    className="text-white text-[34px] tracking-[-1.5px] lg:text-white lg:text-[40px] lg:tracking-[-1.5px]"
                    style={{
                      fontFamily: "Altone ,sans-serif",
                      fontWeight: 400,
                    }}
                  >
                    The process.
                  </h1>
                </div>
                <div className="flex flex-1 lg:flex lg:flex-1 lg:items-end lg:justify-end">
                  <h1
                    className="text-white text-[45px] leading-none tracking-[-1.5px] lg:text-white lg:text-[85px] lg:leading-none lg:tracking-[-1.5px]"
                    style={{
                      fontFamily: "Altone ,sans-serif",
                      fontWeight: 500,
                    }}
                  >
                    Crafting a masterpiece, one step at a time.
                  </h1>
                </div>
              </div>

              <div className="flex flex-col w-full mt-6 gap-4 lg:flex-row lg:w-full lg:gap-2 lg:mt-6">
                {/* Left: Number */}
                <div
                  className="hidden lg:flex lg:w-[29%] lg:h-30 lg:items-center lg:justify-center lg:text-[95px] lg:tracking-[-8px]"
                  style={{ fontFamily: "Altone ,sans-serif", fontWeight: 300 }}
                >
                  {items[selectedIndex].number}
                </div>

                {/* Middle + Right combined for mobile (accordion style) */}
                <div className="flex flex-col w-full lg:flex-row lg:w-[71%] lg:gap-4">
                  {/* Buttons */}
                  <div className="flex flex-col w-full lg:w-[25%] lg:mt-11 lg:gap-2">
                    {items.map((item, index) => (
                      <div key={index}>
                        <button
                          onClick={() => setSelectedIndex(index)}
                          className={`w-full p-2 text-left cursor-crosshair text-[28px] tracking-[-3px] rounded transition-colors hover:text-white lg:text-[38px] lg:p-2 lg:rounded ${
                            selectedIndex === index
                              ? "text-white"
                              : "text-white/20"
                          }`}
                          style={{
                            fontFamily: "Altone ,sans-serif",
                            fontWeight: 400,
                          }}
                        >
                          {item.label}
                        </button>
                        {/* Accordion text only on mobile */}
                        {selectedIndex === index && (
                          <div
                            className="lg:hidden mt-2 text-white pl-2 text-[16px] leading-relaxed"
                            style={{
                              fontFamily: "Altone ,sans-serif",
                              fontWeight: 400,
                            }}
                          >
                            {item.text}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Text on desktop only */}
                  <div
                    className="hidden flex-1 h-auto mt-11 p-4 text-white text-[18px] lg:flex lg:flex-1 lg:h-30 lg:mt-11 lg:p-4"
                    style={{
                      fontFamily: "Altone ,sans-serif",
                      fontWeight: 400,
                    }}
                  >
                    {items[selectedIndex].text}
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          <section className="flex flex-col w-full min-h-screen bg-white text-black px-7 py-7 overflow-hidden lg:flex lg:flex-col lg:w-full lg:min-h-screen lg:bg-white lg:text-black lg:px-7 lg:py-7 lg:overflow-hidden">
            <motion.div
              className="flex flex-col w-full  justify-end items-center gap-5 lg:flex lg:flex-col lg:w-full lg:h-90 lg:justify-end lg:items-center lg:gap-5"
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              <h1
                className=" text-black text-[50px] text-center leading-none tracking-[-4px] lg:text-black lg:text-[120px] lg:text-center lg:leading-[110px] lg:tracking-[-8.5px]"
                style={{
                  fontFamily: "Altone ,sans-serif",
                  fontWeight: 400,
                }}
              >
                Great things start with great communication.
              </h1>
              <p
                className="w-full text-black text-[18px] text-center lg:w-[75%] lg:text-black lg:text-[22px] lg:text-center"
                style={{
                  fontFamily: "Altone ,sans-serif",
                  fontWeight: 400,
                }}
              >
                I’m open to freelance collaborations with clients around the
                globe. Whether you’re planning an exciting new project or just
                want to exchange ideas over a friendly chat, my inbox is always
                open.
              </p>
            </motion.div>

            <motion.div
              className="flex  w-full h-35 justify-center items-end lg:flex lg:w-full lg:h-35 lg:justify-center lg:items-end"
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              <button
                onClick={() =>
                  (window.location.href = "mailto:ammar.ahmed9049@gmail.com")
                }
                className="w-full h-22 font-[400] text-black text-[22px] border-2 border-black hover:bg-black hover:text-white duration-300 cursor-crosshair rounded-full uppercase lg:w-[70%] lg:h-24 lg:font-[400] lg:text-black lg:text-[24px] lg:border-2 lg:border-black lg:hover:bg-black lg:hover:text-white lg:duration-300 lg:cursor-crosshair lg:rounded-full lg:uppercase"
              >
                Connect With Me
                <ArrowUpRight
                  className="text-current inline-flex ml-3 align-top lg:text-current lg:inline-flex lg:ml-3 lg:align-top"
                  size={35}
                />
              </button>
            </motion.div>

            <motion.div
              className="flex  w-full gap-6 mt-16 lg:flex lg:w-full lg:gap-6 lg:mt-16"
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              <a
                className="flex flex-col flex-1 h-20 gap-3 lg:flex lg:flex-col lg:flex-1 lg:h-20 lg:gap-3 cursor-crosshair"
                href="https://www.linkedin.com/in/ammar-ahmed-a2956a304"
              >
                <hr className="w-[90%] border-t border-black lg:w-[60%] lg:border-t lg:border-black " />

                <div className="flex w-[60%] cursor-crosshair lg:flex lg:w-[60%] lg:cursor-crosshair">
                  <div className="flex flex-1 w-full lg:flex lg:flex-1 lg:w-full">
                    <h1
                      className="text-xl w-full text-black tracking-tighter lg:text-xl lg:w-full lg:text-black lg:tracking-tighter"
                      style={{
                        fontFamily: "Altone ,sans-serif",
                        fontWeight: 400,
                      }}
                    >
                      Linkedin
                    </h1>
                  </div>

                  <div className=" hidden flex-1 w-full justify-end lg:flex lg:flex-1 lg:w-full lg:justify-end ">
                    <ArrowUpRight size={25} />
                  </div>
                </div>
              </a>
              <a
                href="mailto:ammarahmed9049@gmail.com"
                className="flex flex-col flex-1 items-end h-20 gap-3 lg:flex lg:flex-col lg:flex-1 lg:h-20 lg:gap-3 cursor-crosshair"
              >
                {/* hr width 90% on mobile, 60% on lg */}
                <hr className="w-[90%] border-t border-black lg:w-[60%]" />

                {/* container with same width, right aligned */}
                <div className="flex w-full justify-end  lg:justify-between lg:w-[60%] ">
                  <h1
                    className="text-xl text-black tracking-tighter text-left"
                    style={{
                      fontFamily: "Altone ,sans-serif",
                      fontWeight: 400,
                    }}
                  >
                    Email
                  </h1>
                  {/* hidden on mobile, visible on lg */}
                  <ArrowUpRight
                    size={25}
                    className="ml-2 hidden lg:inline-flex"
                  />
                </div>
              </a>
            </motion.div>
            <div className="w-full flex flex-1 justify-end items-end lg:w-full lg:flex lg:flex-1 lg:justify-end lg:items-end">
              <h1
                className="text-[14px] text-center w-full text-black/40 leading-none tracking-tighter mt-5 lg:text-[14px] lg:text-center lg:w-full lg:text-black/40 lg:leading-none lg:tracking-tighter lg:mt-5"
                style={{
                  fontFamily: "Altone ,sans-serif",
                  fontWeight: 400,
                }}
              >
                ©2025 Ammar Ahmed, All Rights Reserved.
              </h1>
            </div>
          </section>
        </>
      )}
    </>
  );
}
