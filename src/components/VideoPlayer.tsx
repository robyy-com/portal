import React from 'react';

interface props {
    src: string;
    type: string;
}

const VideoPlayer = ({ src, type }:props) => {
  return (
    <video controls>
      <source src={src} type={type} />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;
