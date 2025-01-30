import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="w-[90%] m-auto">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-[48px] font-bold">Sed Imperdiet Enim</h3>
          <p className="text-[24px] font-medium">
            Lorem ipsum dolor sit amet consectetur <br /> adipiscing Integer id
            orci sed ante tincidunt
          </p>
          <div className="flex items-center gap-5 mt-5">
            <p className="text-[16px] cursor-pointer font-semibold text-[#01579B]">
              LEARN MORE
            </p>
            <button className="w-[183px] h-[40px] flex items-center justify-center bg-[#03A9F4] text-[white]">
              SEE DETAIL
            </button>
          </div>
        </div>
        <Image src="/b.png" width={700} height={380} alt="Banner" className="bg-cover " />
      </div>
    </div>
  );
};

export default About;
