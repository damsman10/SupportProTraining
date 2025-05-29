const TalentMgt = () => {
  return (
    <div className="flex justify-center items-center py-12 px-4 mt-4">
      <div className="rounded-[20px] border-[12px] border-[#D9D9D9] shadow-sm p-6 text-center space-y-6 
                      w-full max-w-[971px] h-auto lg:h-[593px]">
        
        <h2 className="text-[32px] sm:text-[48px] lg:text-[60px] font-semibold font-raleway">
          Learn talent management skills
        </h2>
        
        <ul className="text-left list-disc list-inside text-black space-y-2 
                       text-[20px] sm:text-[30px] lg:text-[40px] font-medium font-raleway pl-4 lg:pl-8">
          <li>Find the best talent</li>
          <li>Derive best performance</li>
          <li>Freelance your skills</li>
          <li>Grow your businesses</li>
        </ul>

        <button className="bg-[#4E88E0] w-full max-w-[280px] h-[50px] sm:h-[55px] lg:h-[60px] 
                           rounded-[20px] mt-10 text-[18px] sm:text-[24px] lg:text-[30px] 
                           font-semibold font-raleway text-white px-6 py-2 hover:bg-blue-600 transition">
          Register Now →
        </button>
      </div>
    </div>
  );
};

export default TalentMgt;
