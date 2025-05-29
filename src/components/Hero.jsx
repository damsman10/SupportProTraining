import heropic from '../assets/heropic.png'

const Hero = () => {
  return (
    <div className="m-auto mt-8 w-full max-w-[1216px] h-auto md:h-[495px] rounded-l-[20px] rounded-r-[40px] bg-[#4E88E0] flex flex-col-reverse md:flex-row justify-between gap-4 overflow-hidden">
      
      <div className="left w-full md:w-[525px] m-6 md:m-8 text-[32px] md:text-[60px] font-raleway font-semibold text-white leading-tight">
        Learn and start your career in Human Resources (HR) & Management
      </div>

      <div
        className="right w-full md:w-[611px] h-[300px] md:h-full rounded-[20px] md:rounded-[40px] bg-center bg-cover"
        style={{ backgroundImage: `URL(${heropic})` }}
      />
    </div>
  );
};

export default Hero;
