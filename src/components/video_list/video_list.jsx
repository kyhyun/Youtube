import React from 'react';
import styles from './video_list.module.css';

import VideoItem from '../video_item/video_item';

const VideoList = ({ videos, onVideoClick, display }) => {
  return (
    <ul className={styles.videos}>
      {videos.map((video) => (
        <VideoItem key={video.snippet.title} video={video} onVideoClick={onVideoClick} display={display} />
      ))}
    </ul>
  );
};

export default VideoList;
