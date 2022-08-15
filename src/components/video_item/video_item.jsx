import React, { memo } from 'react';
import styles from './video_item.module.css';

const VideoItem = memo(
  ({
    video,
    video: {
      snippet: { thumbnails, title, channelTitle },
    },
    onVideoClick,
    display,
  }) => {
    const displayType = display === 'list' ? styles.list : styles.grid;
    const onVideoSelect = () => {
      onVideoClick(video);
    };
    return (
      <li className={`${styles.container} ${displayType}`} onClick={onVideoSelect}>
        <div className={styles.video}>
          <img className={styles.thumbnails} src={thumbnails.medium.url} alt={title} />
          <dl className={styles.metadata}>
            <dt>{title}</dt>
            <dd>{channelTitle}</dd>
          </dl>
        </div>
      </li>
    );
  }
);
VideoItem.displayName = 'VideoItem';
export default VideoItem;
