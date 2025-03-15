import { useEffect, useRef } from "react";
import Typed from "typed.js";


export const Home = ({ open }) => {
  const typedElement = useRef(null);
  const typedInstance = useRef(null);

  useEffect(() => {
    if (typedElement.current) {
      typedInstance.current = new Typed(typedElement.current, {
        strings: [
          "Frontend Developer.",
          "Backend Developer.",
          "Fullstack Developer.",
          "UI/UX Designer.",
          "Article Writer.",
        ],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
        showCursor: true,
        cursorChar: "|", // Custom cursor if needed
      });
    }

    return () => {
      if (typedInstance.current) {
        typedInstance.current.destroy(); // Clean up instance to prevent errors
      }
    };
  }, []);

  return (
    <>
      <div
        className={`transition-all duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-[100px]"
        }`}
      >
        {/* Header */}
        <header className="w-full h-[450px] bg-gradient-to-b from-[#282828] via-[#282828] to-[#05050522] flex justify-evenly items-center">
          <div className="flex flex-col gap-5 text-3xl text-white">
            <p>
              Hi, My Name is{" "}
              <span className="text-[#0b3ca6]">Sabir Hussain Balal</span>
            </p>
            <p>
              & I am a passionate
              <br />
              {" "}
              <span ref={typedElement} className="text-[#0b3ca6] font-semibold underline"></span>
            </p>
          </div>
          <div className="w-50 h-50 rounded-full overflow-hidden shadow-[0px_0px_10px_0px_#0b3ca6]">
            <img
              className="w-full h-full rounded-full"
              src="/src/assets/profile.jpg"
              alt="Profile"
            />
          </div>
        </header>
{/* Journey Section */}
<section className="flex flex-wrap justify-center  xl:justify-normal  xl:gap-3 xl:grid grid-cols-2  w-[80%] mx-auto gap-4 p-4" style={{ gridAutoRows: "150px" }}>
  {/* Item 1: spans 2 columns and 2 rows */}
  <div className="shadow-[0px_0px_10px_0px_white] xl:row-start-1 xl:row-end-4 xl:w-auto w-[180px] h-[300px] xl:h-auto  flex justify-center items-center text-white text-lg font-bold  rounded-lg m-0 p-0 " style={{
    backgroundImage: 'url("/src/assets/html.jpg")',
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",

  }}>
   <div className="text-white text-[14px] font-semibold drop-shadow-md bg-black/50 p-2">HTML CSS (2010-2012)</div>
  </div>
  {/* Item 2 */}
  <div className="shadow-[0px_0px_10px_0px_white]  xl:row-start-2 xl:row-end-5 translate-y-[30px] xl:w-auto w-[180px] h-[300px] xl:h-auto  flex justify-center items-center text-white text-lg font-bold  rounded-lg"style={{
    backgroundImage: 'url("/src/assets/node.jpg")',
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  }}
  >
   <div className="text-white text-[14px] font-semibold drop-shadow-md bg-black/50 p-2">Node JS Developer (2012-2014)</div>
  </div>
  {/* Item 3 */}
  <div className="shadow-[0px_0px_10px_0px_white]  xl:row-start-4 xl:row-end-7 xl:w-auto w-[180px] h-[300px] xl:h-auto  flex justify-center items-center text-white text-lg font-bold  rounded-lg"style={{
    backgroundImage: 'url("/src/assets/react.jpg")',
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",

  }}>
     <div className="text-white text-[14px] font-semibold drop-shadow-md bg-black/50 p-2">React Developer (2014-2016) </div>
  </div>
  {/* Item 4 */}
  <div className="shadow-[0px_0px_10px_0px_white]  xl:row-start-5 xl:row-end-8 translate-y-[30px] xl:w-auto w-[180px] h-[300px] xl:h-auto  flex justify-center items-center text-white text-lg font-bold  rounded-lg"style={{
    backgroundImage: 'url("/src/assets/f.gif")',
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",

  }}>
    <div className="text-white text-[14px] font-semibold drop-shadow-md bg-black/50 p-2">Full Stack Developer (2016-2018)</div>
  </div>
</section>


{/* Journet Detail */}
<main className="w-[70%] mx-auto  flex-wrap flex md:gap-[25%] my-5 justify-center text-[#ffffffd6] text-[12px] mt-20">
<div className="w-[60%] md:block hidden h-[2px] bg-[#282828] mx-auto  absolute"></div>

  <div className="w-[250px] md:my-0 min-h-[300px]  relative">
  <div className="w-[2px] sm:hidden top-0 left-[-25px] flex h-full bg-[#282828]   absolute"></div>
    <div className="absolute hidden xl:block top-0 left-1/2 transform -translate-x-1/2 bg-[#282828] h-[50px] w-[2px]"></div>
    <div className="translate-y-[50px]">
    <div className="font-bold text-white">HTML CSS Developer (2010-2012)</div>
    <p>During this period, I honed my skills in HTML and CSS, gaining hands-on experience in building responsive and visually appealing web pages. I worked on designing and structuring web layouts, enhancing user interfaces, and optimizing websites for better performance and accessibility.</p>
    </div>
  </div>
  <div className="w-[250px] md:my-0 min-h-[300px]  relative">
  <div className="w-[2px] sm:hidden top-0 left-[-25px] flex h-full bg-[#282828]   absolute"></div>
  <div className="absolute hidden xl:block top-0 left-1/2 transform -translate-x-1/2 bg-[#282828] h-[50px] w-[2px]"></div>
  <div className="translate-y-[50px]">
    <div className="font-bold text-white">Node JS Developer (2012-2014)</div>
    <p>As a Node.js Developer from 2010 to 2012, I focused on building scalable server-side applications and RESTful APIs. I worked with JavaScript and Node.js frameworks to develop efficient backend solutions, optimize database interactions, and enhance server performance. I gained experience in handling asynchronous operations, integrating third-party APIs, and improving application security.</p>
    </div>
  </div>
  <div className="w-[250px] md:my-0 min-h-[300px]   relative">
  <div className="w-[2px] sm:hidden top-0 left-[-25px] flex h-full bg-[#282828]   absolute"></div>
  <div className="absolute  hidden xl:block top-0 left-1/2 transform -translate-x-1/2 bg-[#282828] h-[50px] w-[2px]"></div>
  <div className="translate-y-[50px]">
    <div className="font-bold text-white">React Developer (2014-2016)</div>
    <p>As a React Developer from 2014 to 2016, I specialized in crafting dynamic and responsive web applications using React.js. I focused on building reusable components, managing state effectively with emerging tools, and optimizing performance to deliver a seamless user experience. This role allowed me to collaborate closely with designers and backend teams, ensuring that each project was both visually appealing and technically robust.</p>
    </div>
  </div>
  <div className="w-[250px]  md:my-0  min-h-[300px]  relative">
  <div className="w-[2px] sm:hidden top-0 left-[-25px] flex h-full bg-[#282828]   absolute"></div>
  <div className="absolute hidden xl:block top-0 left-1/2 transform -translate-x-1/2 bg-[#282828] h-[50px] w-[2px]"></div>
  <div className="translate-y-[50px]">
    <div className="font-bold text-white">Full Stack Developer (2016-2018)</div>
    <p>As a Full Stack Developer from 2016 to 2018, I bridged the gap between frontend and backend, delivering end-to-end solutions that were both robust and user-friendly. I leveraged modern technologies to design scalable architectures, develop interactive user interfaces, and implement efficient APIs. This role enhanced my ability to collaborate across disciplines and ensured seamless integration of diverse components into cohesive applications.</p>
    </div>
  </div>
</main>


{/* Portfolio */}
<section class="flex items-center justify-center min-h-screen [perspective:1000px]">


  <div class="relative w-[180px] h-[300px] [transform-style:preserve-3d]
              animate-[spinY_10s_linear_infinite]">


    <div class="absolute w-[180px] h-[300px] bg-[url(/src/assets/html.jpg)]  bg-cover  bg-no-repeat bg-center
                [transform:rotateY(0deg)_translateZ(300px)]">
                     <div className="text-white text-[14px] font-semibold drop-shadow-md bg-black/50 p-2">Project 1</div>
                </div>

    <div class="absolute w-[180px] h-[300px] bg-[url(/src/assets/html.jpg)]  bg-cover  bg-no-repeat bg-center
                [transform:rotateY(51.4deg)_translateZ(300px)]">  <div className="text-white text-[14px] font-semibold drop-shadow-md bg-black/50 p-2">Project 2</div></div>

    <div class="absolute w-[180px] h-[300px] bg-[url(/src/assets/html.jpg)]  bg-cover  bg-no-repeat bg-center
                [transform:rotateY(102.8deg)_translateZ(300px)]">  <div className="text-white text-[14px] font-semibold drop-shadow-md bg-black/50 p-2">Project 3</div></div>

    <div class="absolute w-[180px] h-[300px] bg-[url(/src/assets/html.jpg)]  bg-cover  bg-no-repeat bg-center
                [transform:rotateY(154.2deg)_translateZ(300px)]">  <div className="text-white text-[14px] font-semibold drop-shadow-md bg-black/50 p-2">Project 4</div></div>

    <div class="absolute w-[180px] h-[300px] bg-[url(/src/assets/html.jpg)]  bg-cover  bg-no-repeat bg-center
                [transform:rotateY(205.6deg)_translateZ(300px)]">  <div className="text-white text-[14px] font-semibold drop-shadow-md bg-black/50 p-2">Project 5</div></div>

    <div class="absolute w-[180px] h-[300px] bg-[url(/src/assets/html.jpg)]  bg-cover  bg-no-repeat bg-center
                [transform:rotateY(257deg)_translateZ(300px)]">  <div className="text-white text-[14px] font-semibold drop-shadow-md bg-black/50 p-2">Project 6</div></div>

    <div class="absolute w-[180px] h-[300px] bg-[url(/src/assets/html.jpg)]  bg-cover  bg-no-repeat bg-center
                [transform:rotateY(308.4deg)_translateZ(300px)]">  <div className="text-white text-[14px] font-semibold drop-shadow-md bg-black/50 p-2">Project 7</div></div>
  </div>
</section>



      </div>
      <div className={`
        transition-all duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-[100px]"
        }
        flex justify-center items-center fixed bottom-0 left-0   w-full h-10 bg-[#121212] text-white`}>
            <p className="text-sm">© 2025 Developer Portfolio. All rights reserved.</p>
        </div>

    </>
  );
};
