import zoom from '../assets/zoom.png';
import classroom from '../assets/classroom.jpg';

const LearningTools = () => {
  return (
    <div className="bg-[#FFFAFA] py-12 px-4 sm:px-6 mt-8 w-full">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-[24px] sm:text-[28px] font-medium font-raleway mb-8 sm:mb-12 text-center sm:text-left">
          Here are the two tools you will use in learning
        </h2>

        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div className="md:w-1/2 space-y-3 font-raleway text-[14px] font-normal">
            <p>This training is one of ease, and we are ready to make everything easy for you.</p>
            <p>After all, learning should be enjoyable.</p>
            <p>All the tools you need to take your classes can easily be accessed on your phone.</p>
            <p>You need these two simple tools:</p>
          </div>

          <div className="md:w-1/2 mt-8 md:mt-0 space-y-6">
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
              <div
                className="w-20 h-20 bg-blue-500 rounded-full bg-cover bg-center shrink-0"
                style={{ backgroundImage: `url(${zoom})` }}
              ></div>
              <p className="max-w-[403px] font-poppins text-[16px] font-normal leading-[24px] text-center sm:text-left">
                <strong>Zoom</strong> – For attending live virtual training sessions, Q&A discussions, and interactive
                workshops. (Available on Android & iOS)
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
              <div
                className="w-20 h-20 bg-green-500 rounded-full bg-cover bg-center shrink-0"
                style={{ backgroundImage: `url(${classroom})` }}
              ></div>
              <p className="max-w-[403px] font-poppins text-[16px] font-normal leading-[24px] text-center sm:text-left">
                <strong>Google Classroom</strong> – For accessing course materials, submitting assignments, and
                engaging in discussions. (Available on Android & iOS)
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-4 sm:border-6 border-[#2D8CFF] p-4 w-full max-w-[784px] text-center mx-auto text-[20px] sm:text-[28px] font-poppins font-medium">
          Both tools are user-friendly and mobile-friendly, ensuring that you can learn anytime, and anywhere.
        </div>
      </div>
    </div>
  );
};

export default LearningTools;
