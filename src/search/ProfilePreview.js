import React, {Component} from 'react';
import './ProfilePreview.css';

class ProfilePreview extends Component {
    render() {
        const imageSrc = getImageSource(this.props.details.youtube);
        let style = {
            backgroundImage: 'url(' + imageSrc + ')',
        };

        var types = "";
        this.props.details.performanceTypes.forEach(t => { if (types.length > 0) types = types + ", "; types = types + t});

        var styles = "";
        this.props.details.performanceStyles.forEach(s => { if (styles.length > 0) styles = styles + ", "; styles = styles + s});

        var categories = "";
        this.props.details.categories.forEach(c => {
            c.subcategories.forEach(sub => { if (categories.length > 0) categories = categories + ", "; categories = categories + sub.name})
        });
        console.log('==>',this.props.color)
        var description = this.props.details.otherInfo;
        if (description.length > 100) {}
         description = description.substr(0, 100).concat("...");
        return (
            <div className="card-container" style={{backgroundColor:this.props.color}}>
            <article className="box-card"
                     onClick={(event) => this.props.modalOpen(this.props.index)}>

                <div className="card-body">

                    <header style={style} className="card-header"/>
                    <h2>{this.props.details.fullName}</h2>
                    <p className="preview-line">{types}</p>
                    <p className="preview-line">{styles}</p>
                    <p className="preview-line">{categories}</p>
                    <p >{description}</p>
                </div>
            </article>
            </div>
        )
    }
}

export default ProfilePreview;

function getImageSource(youtubeLink) {
    var splitLink = youtubeLink.split('v=');
    var videoId = "";
    if (splitLink.length > 1) {
        videoId = splitLink[1];
    } else {
        return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK6P4FZBuXA1-fkoD_7tN8o3Nwg_7nuY7nljxUMuN2r3rLg-eZYg";
    }
    var ampersandPosition = videoId.indexOf('&');
    if (ampersandPosition !== -1) {
        videoId = videoId.substring(0, ampersandPosition);
    }
    return 'https://img.youtube.com/vi/' + videoId + '/0.jpg';
}
