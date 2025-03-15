import profileGif from "../assets/hero.avif";
import { toast } from "react-toastify";
import React, { useState, useEffect } from "react";

const Nav = ({ open, toggle }) => {

  return (
    <>
      {open ? <><div className=" text-[14px] nav overflow-x-hidden overflow-y-scroll h-[100vh] w-[350px]  fixed top-0 left-0 z-50 bg-[#121212]  gap-5  text-white transition-all duration-300 ease-in-out ">
        <div onClick={toggle} className="group fixed top-1 left-[350px] cursor-pointer bg-[#121212a1] hover:bg-[#121212] w-8 h-8 flex justify-center items-center rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#CCCCCC"><path className="group-hover:fill-white font-bold" d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
        </div>
        {/* Profile */}
        <div className="flex  h-[100px] gap-2 justify-center items-center  bg-[#3f3f3f]   font-bold relative">
          {/* Profile */}

          <div
            className="w-16 h-16 rounded-full overflow-hidden "
            style={{
              backgroundImage: `url(${profileGif})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>

<div className="relative">
  <span className={`transition-opacity duration-500 ease-in-out ${open ? "opacity-100 delay-1000" : "opacity-0"}`}>
    <span 
      className={`transition-all duration-1000 ease-in-out ${open 
            ? "  delay-1000"   
            : " delay-0"        
        }`}
    >
      The Programming Magician.
    </span>
  </span>
</div>

        </div>
        {/* Search */}
        <div
          href="#"
          className="flex h-[50px]  items-center gap-5 bg-[#57575750] m-4  relative  text-[#B7B7B7] px-4 rounded-xl group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#B7B7B7"
          >
            <path
              className="group-hover:fill-white"
              d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"
            />
          </svg>
          <input
            type="text"
            name="search"
            id="search"
            className="outline-none h-full placeholder:text-[#B7B7B7]"
            placeholder="Search"
          />
        </div>
        {/* Links */}
        {/* Home */}
        <a
          href="#"
          className="m-4 flex h-[50px] group items-center gap-5 hover:bg-[#57575750] mx-4 relative  text-[#B7B7B7] px-4 rounded-xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#B7B7B7"
          >
            <path
              className="group-hover:fill-white"
              h
              d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"
            />
          </svg>
          <div className="group-hover:text-[white]">Home</div>
        </a>
        {/* Team */}
        <a
          href="#"
          className="m-4 flex h-[50px] group items-center gap-5 hover:bg-[#57575750] mx-4 relative  text-[#B7B7B7] px-4 rounded-xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#B7B7B7"
          >
            <path
              className="group-hover:fill-white"
              d="M40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm720 0v-120q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v120H760ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm400-160q0 66-47 113t-113 47q-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113ZM120-240h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0 320Zm0-400Z"
            />
          </svg>
          <div className="group-hover:text-[white]">Team</div>
        </a>
        {/* Chat */}
        <a
          href="#"
          className="m-4 flex h-[50px] group items-center gap-5 hover:bg-[#57575750] mx-4 relative  text-[#B7B7B7] px-4 rounded-xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#B7B7B7"
          >
            <path
              className="group-hover:fill-white"
              d="M240-400h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"
            />
          </svg>
          <div className="group-hover:text-[white]">Chat</div>
        </a>
        {/* Followers */}
        <a
          href="#"
          className="m-4 flex h-[50px] group items-center gap-5 hover:bg-[#57575750] mx-4 relative  text-[#B7B7B7] px-4 rounded-xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#B7B7B7"
          >
            <path
              className="group-hover:fill-white"
              d="M380-740q-33 0-56.5-23.5T300-820q0-33 23.5-56.5T380-900q33 0 56.5 23.5T460-820q0 33-23.5 56.5T380-740ZM120-40l110-564-70 30v134H80v-188l210-86q27-11 55-2.5t43 34.5l38 64q27 44 72.5 71T600-520v80q-66 0-122.5-28T382-544l-24 120 82 82v302h-80v-240l-86-80-70 320h-84Zm550 0v-560H520v-280h360v280H730v560h-60Zm51-601 99-99-99-99-43 43 26 26H580v60h124l-26 26 43 43Z"
            />
          </svg>
          <div className="group-hover:text-[white]">Followers</div>
        </a>
        {/* Followings */}
        <a
          href="#"
          className="m-4 flex h-[50px] group items-center gap-5 hover:bg-[#57575750] mx-4 relative  text-[#B7B7B7] px-4 rounded-xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#B7B7B7"
          >
            <path
              className="group-hover:fill-white"
              d="M720-400v-120H600v-80h120v-120h80v120h120v80H800v120h-80Zm-360-80q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm80-80h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0-80Zm0 400Z"
            />
          </svg>
          <div className="group-hover:text-[white]">Followings</div>
        </a>
        {/* Settings */}
        <a
          href="#"
          className="m-4 flex h-[50px] group items-center gap-5 hover:bg-[#57575750] mx-4 relative  text-[#B7B7B7] px-4 rounded-xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#B7B7B7"
          >
            <path
              className="group-hover:fill-white"
              d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z"
            />
          </svg>
          <div className="group-hover:text-[white]">Settings</div>
        </a>
        {/* New Work */}
        <a
          href="#"
          className="m-4 flex h-[50px] group items-center gap-5 hover:bg-[#57575750] mx-4 relative  text-[#B7B7B7] px-4 rounded-xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#B7B7B7"
          >
            <path
              className="group-hover:fill-white"
              d="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm0-80h640v-440H160v440Zm240-520h160v-80H400v80ZM160-200v-440 440Z"
            />
          </svg>
          <div className="group-hover:text-[white]">New Works</div>
        </a>
        <footer className="flex gap-2 justify-center items-center w-full p-2 bg-[#57575750] mt-30">
          <img
            src="./src/assets/sol.gif"
            className="w-10 h-10 rounded-full overflow-hidden"
            alt=""
          />
          <p className="text-[#B7B7B7] text-sm">Copyright © 2025 by Sabir</p>
        </footer>
      </div></> : <><div className="nav overflow-x-hidden hover:w-[180px] overflow-scroll h-screen w-[100px]  fixed top-0 left-0 z-50 bg-[#121212]  gap-5  text-white transition-all duration-300 ease-in-out ">
        
        {/*  */}

        <div onClick={toggle}  id="toggle-wrapper" className="fixed top-1 left-[100px] group-hover:left-[180px]  cursor-pointer rotate-180 bg-[#121212a1] hover:bg-[#121212] w-8 h-8 flex justify-center items-center rounded-full transition-all duration-300 ease-in-out">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#CCCCCC"><path  className="group-hover:fill-white " d="M120-240v-80h520v80H120Zm664-40L584-480l200-200 56 56-144 144 144 144-56 56ZM120-440v-80h400v80H120Zm0-200v-80h520v80H120Z"/></svg>



        </div>
        {/* Profile */}
        <div className="flex  h-[100px] gap-2 justify-center items-center  bg-[#3f3f3f]   font-bold relative">
          {/* Profile */}

          <div
            className="w-16 h-16 rounded-full overflow-hidden "
            style={{
              backgroundImage: `url(${profileGif})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
        {/* Search */}
        <div
          href="#"
          className="flex h-[50px] overflow-hidden  items-center gap-5 bg-[#57575750] m-4  relative  text-[#B7B7B7] px-4 rounded-xl group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#B7B7B7"
          >
            <path
              className="group-hover:fill-white"
              d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"
            />
          </svg>

          <input type="search" name="search" id="search" placeholder="Search" className="transition-all outline-none duration-300 ease-in-out group-hover:w-[100px] group-hover:opacity-100 opacity-0 absolute left-[35%] text-white w-0"  />
         
        </div>
        {/* Links */}
        {/* Home */}
        <a
  href="#"
  className="group relative flex items-center gap-5 m-4 h-[50px]
             hover:bg-[#57575750] mx-4 text-[#B7B7B7] px-4 rounded-xl"
>
  {/* Icon */}
  <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#B7B7B7"
          >
            <path
              className="group-hover:fill-white"
              d="M40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm720 0v-120q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v120H760ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm400-160q0 66-47 113t-113 47q-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113ZM120-240h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0 320Zm0-400Z"
            />
          </svg>


<div className="transition-all duration-300 ease-in-out group-hover:opacity-100 opacity-0 absolute left-[35%] text-white">Home</div>
</a>
        {/* Team */}
        <a
          href="#"
          className="m-4 flex h-[50px] group items-center gap-5 hover:bg-[#57575750] mx-4 relative  text-[#B7B7B7] px-4 rounded-xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#B7B7B7"
          >
            <path
              className="group-hover:fill-white"
              d="M40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm720 0v-120q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v120H760ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm400-160q0 66-47 113t-113 47q-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113ZM120-240h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0 320Zm0-400Z"
            />
          </svg>
          <div className="transition-all duration-300 ease-in-out group-hover:opacity-100 opacity-0 absolute left-[35%] text-white">Team</div>
        </a>
        {/* Chat */}
        <a
          href="#"
          className="m-4 flex h-[50px] group items-center gap-5 hover:bg-[#57575750] mx-4 relative  text-[#B7B7B7] px-4 rounded-xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#B7B7B7"
          >
            <path
              className="group-hover:fill-white"
              d="M240-400h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"
            />
          </svg>
          <div className="transition-all duration-300 ease-in-out group-hover:opacity-100 opacity-0 absolute left-[35%] text-white">Chat</div>
        </a>
        {/* Followers */}
        <a
          href="#"
          className="m-4 flex h-[50px] group items-center gap-5 hover:bg-[#57575750] mx-4 relative  text-[#B7B7B7] px-4 rounded-xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#B7B7B7"
          >
            <path
              className="group-hover:fill-white"
              d="M380-740q-33 0-56.5-23.5T300-820q0-33 23.5-56.5T380-900q33 0 56.5 23.5T460-820q0 33-23.5 56.5T380-740ZM120-40l110-564-70 30v134H80v-188l210-86q27-11 55-2.5t43 34.5l38 64q27 44 72.5 71T600-520v80q-66 0-122.5-28T382-544l-24 120 82 82v302h-80v-240l-86-80-70 320h-84Zm550 0v-560H520v-280h360v280H730v560h-60Zm51-601 99-99-99-99-43 43 26 26H580v60h124l-26 26 43 43Z"
            />
          </svg>
          <div className="transition-all duration-300 ease-in-out group-hover:opacity-100 opacity-0 absolute left-[35%] text-white">Followers</div>
        </a>
        {/* Followings */}
        <a
          href="#"
          className="m-4 flex h-[50px] group items-center gap-5 hover:bg-[#57575750] mx-4 relative  text-[#B7B7B7] px-4 rounded-xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#B7B7B7"
          >
            <path
              className="group-hover:fill-white"
              d="M720-400v-120H600v-80h120v-120h80v120h120v80H800v120h-80Zm-360-80q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm80-80h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0-80Zm0 400Z"
            />
          </svg>
          <div className="transition-all duration-300 ease-in-out group-hover:opacity-100 opacity-0 absolute left-[35%] text-white">Followings</div>
        </a>
        {/* Settings */}
        <a
          href="#"
          className="m-4 flex h-[50px] group items-center gap-5 hover:bg-[#57575750] mx-4 relative  text-[#B7B7B7] px-4 rounded-xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#B7B7B7"
          >
            <path
              className="group-hover:fill-white"
              d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z"
            />
          </svg>
          <div className="transition-all duration-300 ease-in-out group-hover:opacity-100 opacity-0 absolute left-[35%] text-white">Settings</div>
        </a>
        {/* New Work */}
        <a
          href="#"
          className="m-4 flex h-[50px] group items-center gap-5 hover:bg-[#57575750] mx-4 relative  text-[#B7B7B7] px-4 rounded-xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#B7B7B7"
          >
            <path
              className="group-hover:fill-white"
              d="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm0-80h640v-440H160v440Zm240-520h160v-80H400v80ZM160-200v-440 440Z"
            />
          </svg>
          <div className="transition-all duration-300 ease-in-out group-hover:opacity-100 opacity-0 absolute left-[35%] text-white">New Work</div>
        </a>
        <footer className="flex gap-2 justify-center items-center w-full p-2 bg-[#57575750] mt-30">
          <img
            src="./src/assets/sol.gif"
            className="w-10 h-10 rounded-full overflow-hidden"
            alt=""
          />
        </footer>
        {/*  */}
        </div></>} 
    </>
  );
};

export default Nav;
