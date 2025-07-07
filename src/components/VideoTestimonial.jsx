import { useEffect, useRef } from 'react';

const VideoTestimonial = () => {
  const player1Ref = useRef(null);
  const player2Ref = useRef(null);

  useEffect(() => {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);

    window.onYouTubeIframeAPIReady = () => {
      const player1 = new window.YT.Player(player1Ref.current, {
        videoId: 'sOU3OKTeUy8',
        playerVars: {
          autoplay: 1,
          mute: 1,
        },
        events: {
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.ENDED) {
              player2.playVideo();
            }
          }
        }
      });

      const player2 = new window.YT.Player(player2Ref.current, {
        videoId: 'g0pumAjESyU',
        playerVars: {
          autoplay: 0,
          mute: 1,
        }
      });
    };
  }, []);

  return (
    <div className="w-[90%] md:w-2/3 lg:w-[90%] mt-10 mx-auto">
      <h2 className="text-center text-[24px] md:text-[30px] lg:text-[36px] font-poppins font-medium mb-6">
        Video Testimonials
      </h2>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 aspect-w-16 aspect-h-9 bg-gray-200 rounded-md shadow-md">
          <div ref={player1Ref} className="w-full h-full" />
        </div>

        <div className="flex-1 aspect-w-16 aspect-h-9 bg-gray-200 rounded-md shadow-md">
          <div ref={player2Ref} className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default VideoTestimonial;
