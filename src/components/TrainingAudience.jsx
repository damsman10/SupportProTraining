const TrainingAudience = () => {
    const audienceList = [
      {
        title: "Fresh Graduates & Entry-Level Job Seekers",
        description: "Young professionals looking to build a career in HR or related fields.",
      },
      {
        title: "Aspiring HR Professionals",
        description: "Those interested in HR roles but lacking formal training or experience.",
      },
      {
        title: "Young Entrepreneurs & Startup Founders",
        description: "Business owners who need HR skills to manage their teams effectively.",
      },
      {
        title: "Junior HR Officers & Assistants",
        description: "Early-career HR employees who want to upgrade their skills and advance in their roles.",
      },
      {
        title: "Freelancers & Virtual Assistants",
        description: "Young professionals offering HR-related services remotely, such as recruitment and employee management.",
      },
    ];
  
    return (
      <div className="px-4 md:px-16 py-8">
        <div className="flex flex-col-reverse md:flex-row items-start md:items-center gap-10">
          <div className="flex-1 space-y-6">
            {audienceList.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-green-600 text-xl mt-1">✔</span>
                <div>
                  <h4 className="text-[18px] md:text-[20px] font-medium font-raleway text-[#101828]">
                    {item.title}
                  </h4>
                  <p className="text-black text-[14px] md:text-[16px] font-raleway font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
    
          <div className="flex-1 flex justify-center md:justify-end text-left">
            <h2 className="text-[36px] sm:text-[44px] md:text-[60px] font-semibold font-raleway leading-snug max-w-[423px] text-[#101828]">
              Who should attend this HR training program?
            </h2>
          </div>
        </div>
      </div>
    );
    
  };
  
  export default TrainingAudience;
  