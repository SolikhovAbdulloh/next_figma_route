"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoMdSettings } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="w-90 p-[40px] m-auto ">
      <div className=" flex justify-between">
        <div className="flex text-[18px] font-semibold items-center gap-[30px]">
          <Image
            src="/logo.png"
            className="cursor-pointer w-[172px] h-[55px]"
            width={100}
            alt="logo"
            height={40}
          />
          <Link className="hover:text-[#03A9F4]" href={"/about"}>
            <p>About</p>
          </Link>
          <Link className="hover:text-[#03A9F4]" href={"/contact"}>
            <p>Contact</p>
          </Link>

          <Link className="hover:text-[#03A9F4]" href={"/counter"}>
            <p>Counter</p>
          </Link>
        </div>
        <div className="text-[18px] font-semibold flex items-center gap-4">
          <Link className="hover:text-[#03A9F4]" href={"/login"}>
            <p>Login</p>
          </Link>
          <Link href={"/register"}>
            <button className="bg-[#FF9800] text-white w-[130px] h-[33px] rounded-lg">
              Register
            </button>
          </Link>
          <span className="w-[1px] bg-[grey] h-[24px]"></span>
          <IoMdSettings className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
