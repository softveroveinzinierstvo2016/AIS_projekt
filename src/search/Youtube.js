import React, {Component} from 'react';
import './Youtube.css';

class Youtube extends Component {
    render() {
        var videoSrc = "https://www.youtube.com/embed/" +
            this.props.video + "?autoplay=" +
            this.props.autoplay + "&rel=" +
            this.props.rel + "&modestbranding=" +
            this.props.modest;

        return (
            <div className="yt-container">
                <iframe title="Ukážka" className="player" type="text/html" width="100%" height="100%"
                        src={videoSrc}
                        frameborder="0"/>
            </div>
        );
    }
};
 export default Youtube;