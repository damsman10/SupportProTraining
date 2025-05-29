const AnyQuestions = () => {
  return (
    <div className="text-center py-12 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 my-8 px-4">
      <h3 className="text-[28px] md:text-[40px] font-raleway font-bold mb-4 md:mb-0">
        Any questions?
      </h3>
      <button className="bg-[#EA2821] w-[160px] h-[48px] md:w-[162px] md:h-[51px] rounded-[30px] text-white py-2 px-6 hover:bg-red-700 transition font-raleway font-bold text-[18px] md:text-[20px]">
        Click here
      </button>
    </div>
  );
};

export default AnyQuestions;
