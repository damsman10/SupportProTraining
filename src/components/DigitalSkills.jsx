import { ArrowRight } from "lucide-react";
import lappy from '../assets/lappy.png';

export default function DigitalSkills() {
  return (
    <div className="relative bg-[#E2E8F0] md:rounded-[40px] w-full max-w-[1236px] h-auto md:h-[558px] p-6 md:p-10 my-10 mx-auto flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden">
      
      {/* Mobile image*/}
      <div className="md:hidden w-full h-[300px] bg-no-repeat bg-contain bg-center rounded-[30px]" style={{ backgroundImage: `url(${lappy})` }}></div>

      {/* Text */}
      <div className="flex-1 z-10 text-center md:text-left mt-6 md:mt-0">
        <h2 className="text-[24px] md:text-[32px] font-inter font-normal mb-4 md:mb-6">
          People earn online using digital skills.
        </h2>
        <p className="font-poppins font-normal text-[16px] md:text-[20px] mb-1">
          Every day, people earn with this skill both online and offline.
        </p>
        <p className="font-poppins font-normal text-[16px] md:text-[20px] mb-1">
          Some use platforms like Upwork.
        </p>
        <p className="font-poppins font-normal text-[16px] md:text-[20px] mb-6">
          Others work with local businesses.
        </p>

        <button className="mt-8 md:mt-32 bg-[#2563EB] w-full md:w-[208.8px] h-[55px] text-white font-semibold text-[16px] md:text-[18px] text-center leading-[28px] px-6 py-2 rounded-[50px] flex justify-center items-center gap-2 hover:bg-blue-700 transition">
          Register now <ArrowRight size={16} />
        </button>
      </div>

      {/* Desktop absolute image */}
      <div
        className="hidden md:block absolute right-0 -top-1 w-[532px] h-[552px] rounded-[30px] bg-no-repeat bg-contain bg-center"
        style={{ backgroundImage: `url(${lappy})` }}
      ></div>
    </div>
  );
}
