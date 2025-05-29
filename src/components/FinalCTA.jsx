import mobile from '../assets/mobile.png';

export default function FinalCTA() {
  return (
    <div className="bg-[#F8FAFC] w-full my-20 py-10 px-4">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between max-w-7xl mx-auto gap-10">
        
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-raleway font-semibold leading-snug mb-8">
            "Take a look inside the Academy—
            <br className="hidden lg:inline" />
            rich, organized, and beautiful."
          </h2>
          <button className="bg-[#2563EB] w-[200px] md:w-[230px] h-[50px] md:h-[55px] rounded-[50px] text-white mt-6 py-3 px-8 shadow hover:bg-blue-700 transition font-poppins font-semibold text-[16px] text-center">
            Join us today
          </button>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={mobile}
            alt="Academy inside preview"
            className="h-[300px] md:h-[400px] lg:h-[584px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}
