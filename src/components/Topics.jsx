

const topics = [
  {
    title: "Introduction to HR",
    points: [
      "Overview of HR roles and responsibilities",
      "Global HR Perspectives and Evolving Trends",
      "Importance of HR in organizational success",
    ],
  },
  {
    title: "Ethics and Compliance in HR",
    points: [
      "Legal and ethical considerations in HR practices",
      "Nigeria Trade Laws and their applications in HR practices",
    ],
  },
  {
    title: "Recruitment Process Mastery",
    points: [
      "Understanding job searchers’ psychology and mindset",
      "Detecting CV fraud and validating work experience",
      "Writing job descriptions, sourcing, and screening candidates",
    ],
  },
  {
    title: "Interviewing and Selection",
    points: [
      "Conducting effective interviews and candidate assessments",
      "Techniques for managing expectations and giving feedback",
      "Principles of executive searches",
    ],
  },
  {
    title: "Onboarding Process",
    points: [
      "Designing effective onboarding programs for new hires",
      "Validating employee understanding of business and roles",
      "Onboarding experience evaluation",
    ],
  },
  {
    title: "Employee Engagement and Organizational Culture",
    points: [
      "Enhancing engagement through recognition and incentives",
      "Balancing empathy with performance management goals",
      "Defining, assessing, and shaping company culture",
      "Managing remote teams effectively",
    ],
  },
  {
    title: "Performance Management",
    points: [
      "Techniques for fair and effective performance evaluations",
      "Using HRIS and performance tracking tools",
      "Designing an effective Learning and Development (L&D) process",
    ],
  },
  {
    title: "Strategic HR Management",
    points: [
      "Aligning HR strategies with organizational goals",
      "HR metrics and analytics using data for decision-making",
      "Addressing challenging management dynamics",
    ],
  },
  {
    title: "Personal Development (Career Path in HR)",
    points: [
      "Exploring HR specializations (Recruitment, Learning and Development, Employee Relations, etc.)",
      "Creating a roadmap for career growth in HR",
    ],
  },
  {
    title: "Job Search Strategies",
    points: [
      "Crafting an impactful HR CV and cover letter",
      "Optimizing LinkedIn for HR roles",
      "Acing HR job interviews and salary negotiations",
    ],
  },
  {
    title: "Professional Branding",
    points: [
      "Building a strong personal brand as an HR professional",
      "Leveraging networking opportunities and HR communities",
    ],
  },
  {
    title: "Continuous Learning",
    points: [
      "Identifying certifications, workshops, and resources for professional growth",
      "Developing a lifelong learning mindset",
    ],
  },
  {
    title: "Self-Leadership and Resilience",
    points: [
      "Managing stress and avoiding burnout",
      "Balancing professional and personal goals",
    ],
  },
];

const Topics = () => {
  return (
    <div className="px-4 sm:px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-[24px] sm:text-[28px] md:text-[32px] font-raleway font-semibold mb-10">
          Here are over 20 Course-topics you will learn:
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="w-full sm:w-[45%] lg:w-[30%] h-auto min-h-[230px] rounded-[10px] !border-2 !border-[#4E88E0] p-4"
            >
              <h3 className="text-lg md:text-xl font-raleway font-medium mb-2 text-center">
                {topic.title}
              </h3>
              <ul className="font-raleway font-normal text-[12px] md:text-sm leading-relaxed space-y-1">
                {topic.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Topics;

