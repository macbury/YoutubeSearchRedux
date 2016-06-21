import * as React from 'react';
import { YoutubeVideo } from '../libs/YTSearch';
import VideoListItem from './VideoListItem';

interface VideoListProps {
  videos: Array<YoutubeVideo>;
}

export default class VideoList extends React.Component<VideoListProps, any> {
  render() {
    const videoItems = this.props.videos.map((video : YoutubeVideo) => {
      return <VideoListItem video={video} key={video.etag} />
    });
    return (
      <ul className="col-md-4 list-group">
        {videoItems}
      </ul>
    )
  }
}
