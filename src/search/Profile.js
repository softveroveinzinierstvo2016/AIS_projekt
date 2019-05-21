import React, {Component} from 'react';
import Youtube from './Youtube';
import './Common.css';

const Aux = props => props.children;

class Profile extends Component {
    render() {
        const videoId = getVideoId(this.props.details.youtube);
        const validYoutubeLink = (videoId !== ""); /* {validYoutubeLink && */
        return (
            <div className="scrollable-content" style={{backgroundColor:this.props.color}}>
                <div className="profile">

                    {validYoutubeLink &&
                    <div className="box2">
                        <Youtube video={videoId} autoplay="0" rel="0" modest="1"/>
                    </div>}
                    <div style={{paddingTop:'20px'}}>
                      <h1 className="profile-header">{this.props.details.fullName}</h1>
                    </div>
                    <div className="box1">
                        <table className="profile-info">
                            <tr>
                                <td className="table-key">Sólista/skupina:</td>
                                <td colSpan="2">{this.props.details.isSolo ? "sólista" : "skupina"}</td>
                            </tr>
                            <tr>
                                <td className="table-key">Kontakt:</td>
                                <td colSpan="2">{this.props.details.email}</td>
                            </tr>
                            <tr>
                                <td className="table-key">Web:</td>
                                <td colSpan="2">{this.props.details.webPage}</td>
                            </tr>
                            <tr>
                                <td className="table-key">Typ interpreta:</td>
                                <td colSpan="2">
                                    <ul className="list">
                                        {this.props.details.performanceTypes.map(type => {
                                            return (<li>{type}</li>)
                                        })}
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td className="table-key">Štýl interpreta:</td>
                                <td colSpan="2">
                                    <ul className="list">
                                        {this.props.details.performanceStyles.map(style => {
                                            return (<li>{style}</li>)
                                        })}
                                    </ul>
                                </td>
                            </tr>

                            <tr>
                                <td className="table-key">Typ produkcie:</td>
                                <td>
                                    <table>
                                        {this.props.details.categories.map(category => {
                                            return (<Aux>

                                                <tr>
                                                    <td className="table-space"/>
                                                    <td colspan="3">
                                                        <li className="list">{category.name}</li>
                                                    </td>
                                                </tr>
                                                {category.subcategories.map(sub => {
                                                    return <tr className="table-value">
                                                        <td className="table-space"/>
                                                        <td className="table-space"/>
                                                        <td className="no-wrap">
                                                            <li className="list">{sub.name}</li>
                                                        </td>
                                                        <td className="table-space"/>
                                                        <td className="wrap">{sub.price + "€ (" + sub.desc + ")"}</td>
                                                    </tr>

                                                })}
                                            </Aux>)
                                        })}
                                    </table>
                                </td>
                            </tr>

                            <tr>
                                <td className="table-key"><b>Viac info: </b></td>
                                <td>{this.props.details.otherInfo}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;

function getVideoId(youtubeLink) {
    var splitLink = youtubeLink.split('v=');
    var videoId = "";
    if (splitLink.length > 1) {
        videoId = splitLink[1];
    } else {
        return "";
    }
    var ampersandPosition = videoId.indexOf('&');
    if (ampersandPosition !== -1) {
        videoId = videoId.substring(0, ampersandPosition);
    }
    return videoId;
}
