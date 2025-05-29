export default function FAQS() {
  return (
    <div className="py-12 px-6 md:px-10 lg:px-20 bg-white">
      <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-poppins font-semibold text-center mb-12">
        Frequently Asked Questions
      </h2>

      <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-16 max-w-7xl mx-auto text-black">
        
        <div className="left flex-1 space-y-8">
          <div>
            <h3 className="text-[20px] md:text-[24px] font-poppins font-medium mb-2">Who can join this training program?</h3>
            <p className="font-poppins font-normal text-[16px]">
              Open to ages 18–30 with a passion for HR, people management, or business.
              A high school diploma is required—no HR experience needed.
            </p>
          </div>
          <div>
            <h3 className="text-[20px] font-poppins font-medium mb-2">Is the training virtual or onsite?</h3>
            <p className="font-poppins font-normal text-[16px]">
              The hybrid program includes live virtual sessions, self-paced learning, and optional in-person workshops.
            </p>
          </div>
          <div>
            <h3 className="text-[20px] font-poppins font-medium mb-2">Will I receive a certificate after the training?</h3>
            <p className="font-poppins font-normal text-[16px]">
              Yes! You’ll get a <strong>Support Pro HR Certificate</strong> to add to your resume or LinkedIn.
            </p>
          </div>
          <div>
            <h3 className="text-[20px] font-poppins font-medium mb-2">Is this training program beginner-friendly?</h3>
            <p className="font-poppins font-normal text-[16px]">
              Yes! The training is designed for <strong>beginners and young professionals</strong>,
              with easy-to-follow lessons and practical exercises.
            </p>
          </div>
          <div>
            <h3 className="text-[20px] font-poppins font-medium mb-2">How will I be assessed during the program?</h3>
            <p className="font-poppins font-normal text-[16px]">
              Trainees are assessed with quizzes, assignments, case studies, and a final project to test their HR knowledge.
            </p>
          </div>
        </div>

        <div className="right flex-1 space-y-8">
          <div>
            <h3 className="text-[20px] font-poppins font-medium mb-2">What's the duration of the training program?</h3>
            <p className="font-poppins font-normal text-[16px]">
              The program runs for 8 weeks, regardless of pace or modules chosen.
            </p>
          </div>
          <div>
            <h3 className="text-[20px] font-poppins font-medium mb-2">What do I need to join?</h3>
            <p className="font-poppins font-normal text-[16px]">
              You need a device (laptop, phone), internet, and apps like Google Classroom and Zoom.
            </p>
          </div>
          <div>
            <h3 className="text-[20px] font-poppins font-medium mb-2">What topics will the training cover?</h3>
            <p className="font-poppins font-normal text-[16px]">
              The program covers <strong>HR basics, hiring, employee relations, performance management, labor laws, HR tools, leadership</strong>, and more.
            </p>
          </div>
          <div>
            <h3 className="text-[20px] font-poppins font-medium mb-2">What’s the cost of the training?</h3>
            <p className="font-poppins font-normal text-[16px]">
              We have a stable price for the training at <strong>#50,000</strong>. Contact us for details on fees, discounts, and scholarship opportunities.
            </p>
          </div>
          <div>
            <h3 className="text-[20px] font-poppins font-medium mb-2">How do I register for the program?</h3>
            <p className="font-poppins font-normal text-[16px]">
              You can enroll by completing the registration form on our website or contacting us via email or WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
