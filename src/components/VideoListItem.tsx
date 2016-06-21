import * as React from 'react';
import { YoutubeVideo } from '../libs/YTSearch';

interface VideoListItemProps {
  video: YoutubeVideo,
  onVideoSelect: (selectedVideo : YoutubeVideo) => void
}

/**
* Display youtube video with link to player and thumbnail
*/
export default class VideoListItem extends React.Component<VideoListItemProps, any> {

  private onClick(e) : void {
    this.props.onVideoSelect(this.props.video);
  }

  render() {
    return (
      <li className="list-group-item" onClick={this.onClick.bind(this)}>
        <div className="video-list media">
          <div className="media-left">
            <img className="media-object" src={ this.props.video.snippet.thumbnails['default'].url } />
          </div>
          <div className="media-body">
            <div className="media-heading">
              { this.props.video.snippet.title }
            </div>
          </div>
        </div>
      </li>
    );
  }
}
