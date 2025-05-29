const Welcome = () => {
  return (
    <div className="px-4 md:px-8">
      <h2 className="mt-12 text-[32px] md:text-[56px] font-bold font-raleway text-[#101828] text-center mb-2">
        Welcome to Support Pro!
      </h2>
      <p className="text-[16px] text-center text-[#101828] mb-6 max-w-[800px] mx-auto leading-relaxed px-2">
        Learn everything you need to know to excel in HR management, compliance, and leadership <br className="hidden md:block" /> 
        development with our expert-driven training programs.
      </p>
      <div className="text-center">
        <button className="bg-[#4E88E0] hover:bg-blue-700 text-white px-6 py-2 rounded-[20px] w-[140px] h-[50px] md:w-[160px] md:h-[60px] font-raleway text-[18px] md:text-[20px] font-bold">
          Enrol here
        </button>
      </div>
    </div>
  );
};

export default Welcome;
