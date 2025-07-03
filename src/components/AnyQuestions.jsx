import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

const AnyQuestions = () => {
  return (
    <div className="text-center py-12 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 my-8 px-4">
      <h3 className="text-[28px] md:text-[40px] font-raleway font-bold mb-4 md:mb-0">
        Any questions?
      </h3>
      <button
        onClick={() => {
          window.open('https://wa.me/2349139981335?text=Hi%20Salesplat%2C%20I%E2%80%99ll%20love%20to%20Enquire%20about%20the%20HR%20Training%20Program%20', '_blank');
        }}
        className="flex items-center justify-center gap-2 w-[200px] transition bg-green-600 hover:bg-green-700 text-white font-raleway text-[18px] sm:text-[20px] h-[50px] px-2 py-2 rounded-[10px] cursor-pointer"
      >
        <ChatBubbleLeftRightIcon className="w-6 h-6" />
        Chat with a Rep
      </button>
    </div>
  );
};

export default AnyQuestions;
