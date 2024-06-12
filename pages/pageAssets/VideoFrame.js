import React from 'react';
import PropTypes from 'prop-types';

const YouTubeVideo = ({ url }) => {
  const videoId = getYouTubeVideoId(url);

  if (!videoId) {
    console.error('Invalid YouTube video URL:', url);
    return <div>Invalid video URL</div>; // Or a placeholder component
  }

  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="relative pb-[56.25%] h-0 overflow-hidden max-w-full bg-black">
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

// Helper function to extract YouTube video ID from URL
function getYouTubeVideoId(url) {
  try {
    if (!url) {
      throw new Error('URL is undefined or empty');
    }
    const urlObj = new URL(url);
    if (urlObj.hostname === 'youtu.be') {
      return urlObj.pathname.slice(1); // Extract video ID from short URLs
    }
    return urlObj.searchParams.get('v'); // Extract video ID from regular URLs
  } catch (error) {
    console.error('Error parsing URL:', error);
    return null; // Return null if URL is invalid
  }
}

// Define PropTypes for the component
YouTubeVideo.propTypes = {
  url: PropTypes.string.isRequired,
};

export default YouTubeVideo;
