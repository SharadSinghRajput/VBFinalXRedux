import React from 'react';

const YouTubeVideo = ({ url }) => {
  const videoId = getYouTubeVideoId(url);
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="relative mt-5 mb-5 pb-[56.25%] h-0 overflow-hidden max-w-full bg-black">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={embedUrl}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded YouTube Video"
      ></iframe>
    </div>
  );
};

function getYouTubeVideoId(url) {
  const urlObj = new URL(url);
  return urlObj.searchParams.get('v');
}

export default YouTubeVideo;
