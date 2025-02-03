"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { TiSocialGooglePlus } from "react-icons/ti";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [password, SetPassword] = useState("");
  const [Email, SetEmail] = useState("");
  const onFinish = async (e: any) => {
    e.preventDefault();
    const data = await (
      await fetch("https://6750968269dc1669ec1bb204.mockapi.io/ApiLoogin")
    ).json();
    console.log(data);
  };

  return (
    <div className="flex gap-9 items-center justify-center">
      <form
        onSubmit={onFinish}
        className="w-[600px] h-[500px] border-[1px] rounded-lg p-[30px] flex items-center justify-center flex-col gap-7 boder-[solid] border-[grey]"
      >
        <p className="text-[24px] font-bold text-[#01579B]">
          Login to Your Account
        </p>
        <div className="flex items-center justify-between gap-4">
          <span className="w-[129px] rounded-[12px] items-center justify-center text-[18px] font-normal gap-3 flex text-white h-[39px] bg-[#5856D6]">
            <FaFacebookF /> Facebook
          </span>
          <span className="w-[129px] rounded-[12px] items-center justify-center text-[18px] font-normal gap-3 flex text-white h-[39px] bg-[#00BCD4]">
            <CiTwitter /> Twitter
          </span>
          <span className="w-[129px] rounded-[12px] items-center justify-center text-[18px] font-normal gap-3 flex text-white h-[39px] bg-[#D84226]">
            <TiSocialGooglePlus /> Google
          </span>
        </div>
        <Input
          type="email"
          onChange={(e) => SetEmail(e.target.value)}
          placeholder="Email"
        />
        <Input
          type="password"
          onChange={(e) => SetPassword(e.target.value)}
          placeholder="Password"
        />

        <button
          type="submit"
          className="w-[80%] h-[45px] rounded-xl bg-[#03A9F4]"
        >
          Continue
        </button>
      </form>
      <div className="flex items-center justify-center flex-col gap-6">
        <p className="text-[36px] font-bold text-[#01579B]">
          Lorem ipsum dolor sit
        </p>
        <p className="text-[24px] font-normal text-[grey] text-center">
          consectetur adipiscing elit. Suspendisse <br /> sed urna in.
        </p>
        <Image src="/Login.png" width={300} height={300} alt="login" />
      </div>
    </div>
  );
};

export default Login;
