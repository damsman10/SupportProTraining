const VideoTestimonial = () => {
  return (
    <div className="w-[90%] md:w-2/3 mb-6 mt-10 mx-auto">
      <h2 className="text-center text-[24px] md:text-[30px] lg:text-[36px] font-poppins font-medium mb-2">
        Video Testimonial
      </h2>
      <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-md overflow-hidden shadow-md">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Video Testimonial"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default VideoTestimonial;
