import img from '../assets/titlebg.png';

const Title = () => {
  return (
    <>
      <div
        className="
          mx-auto mt-16 
          w-[280px] h-[60px] 
          sm:w-[320px] sm:h-[70px] 
          md:w-[352px] md:h-[80px] 
          rounded-[20px] border-2 
          bg-[#4E88E0] bg-center bg-contain bg-no-repeat"
        style={{ backgroundImage: `url(${img})` }}
      ></div>

      <div
        className="
          text-center mt-8 
          text-[36px] sm:text-[48px] md:text-[60px] 
          font-raleway font-semibold text-[#101828]"
      >
        SupportPro HR Training
      </div>
    </>
  );
};

export default Title;
