import React from 'react';
import VideoItem from './VideoItem'

class VideoList extends React.Component {
    render() {
        const videos = this.props.videos.map((video) => {
            return <VideoItem onVideoSelect={this.props.onVideoSelect} key={video.id.videoId} video={video} />
        });

        return (
            <div className="ui relaxed divided list">{videos}</div>
        );
    }
}

export default VideoList;
