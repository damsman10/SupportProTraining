

const VideoTestimonial = () => {
  return (
    <div className="w-[90%] md:w-2/3 lg:w-[90%] mt-10 mx-auto">
      <h2 className="text-center text-[24px] md:text-[30px] lg:text-[36px] font-poppins font-medium mb-6">
        Video Testimonials
      </h2>

      
      <div className="flex flex-col lg:flex-row gap-6">
        
        <div className="flex-1 aspect-w-16 aspect-h-9 bg-gray-200 rounded-md overflow-hidden shadow-md">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/sOU3OKTeUy8?autoplay=1&mute=1&rel=0&modestbranding=1"
            title="Video Testimonial 1"
            frameBorder="0"
            allow="autoplay; encrypted-media; clipboard-write; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        
        <div className="flex-1 aspect-w-16 aspect-h-9 bg-gray-200 rounded-md overflow-hidden shadow-md">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/g0pumAjESyU?autoplay=1&mute=1&rel=0&modestbranding=1"
            title="Video Testimonial 2"
            frameBorder="0"
            allow="autoplay; encrypted-media; clipboard-write; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default VideoTestimonial;
