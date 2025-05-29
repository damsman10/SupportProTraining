import mentor from '../assets/mentor.png'

export default function FinalWeek() {
  return (
    <div className="bg-[#101828] w-full text-white pt-20 px-6 md:px-16 my-16">
      <div className="max-w-[1065px] mx-auto flex flex-col items-start gap-8">
        <div>
          <h2 className="text-[28px] md:text-[40px] font-poppins font-semibold leading-[1.3] mb-6 md:mb-10">
            The final week focuses on coaching and mentoring.
          </h2>
          <p className="text-[16px] md:text-[18px] font-poppins font-normal leading-[1.75]">
            In the final days of training, participants engage in daily mentoring sessions with industry experts. <br />
            These sessions focus on vital marketplace skills and mastering new ones. Participants also learn how to apply these skills
            effectively to create impact in the workplace.
          </p>
        </div>

        <div className="w-full mt-8 md:mt-10">
          <img
            src={mentor}
            alt="Group mentoring session"
            className="rounded-t-xl w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
