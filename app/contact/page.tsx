import React from "react";

const Contact = () => {
  return (
    <div className="w-[70%] m-auto py-5 ">
      <div>
        <h2 className="text-[48px] text-center font-bold text-[#01579B]">
          Say hello to Us
        </h2>
        <p className="text-[24px] text-center font-medium">
          Aenean sit amet magna vel magna fringilla fermentum. Donec sit <br />
          amet nulla sed arcu pulvinar ultricies commodo id ligula.
        </p>
      </div>
      <form className="mt-[30px] ml-[90px]  grid grid-cols-2 gap-5">
        <input
          type="text"
          className="w-[389px] text-[30px] py-2 px-2 text-[white] border-none bg-[#d5d3d3]"
          placeholder="what is your name"
        />
        <input
          type="text"
          className="w-[389px] text-[30px] py-2 px-2 text-[white] border-none bg-[#d5d3d3]"
          placeholder="what is your email"
        />
        <input
          type="text"
          className="w-[389px] text-[30px] py-2 px-2 text-[white] border-none bg-[#d5d3d3]"
          placeholder="What is your phone number?"
        />
        <input
          type="text"
          className="w-[389px] text-[30px] py-2 px-2 text-[white] border-none bg-[#d5d3d3]"
          placeholder="What is your company?"
        />
      </form>
      <div className="flex items-center justify-center gap-[350px] mt-5">
        <p className="text-[16px] flex gap-3  font-medium">
          <input type="checkbox" />I have read and accept the <br /> Terms of
          Service & Privacy Policy
        </p>
        <button className="h-[40px] w-[200px] text-[white] bg-[#03A9F4]">
          send message
        </button>
      </div>
      
    </div>
  );
};

export default Contact;
