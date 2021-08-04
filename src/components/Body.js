import React from 'react';
import lnk from "../images/link.svg";
import download from "../images/download.svg";
import play from "../images/play.svg";
import './Body.css';

const Body = ({cover,url,link}) => {
	const handleDownloadFile = ()=>{
		window.location.href = url;
	}
 	return (
		<div className="Body-container">
			<div className="Body-wrapper">
				<img src={cover} alt="vid" className="Body-cover" />
				<div className="Play-image">
					<img src={play} alt="play" />
				</div>
			</div>
			<div className="Body-subcontainer">
				<div
					className="Body-logo-box"
					onClick={() => navigator.clipboard.writeText(link)}
				>
					<img className="Body-logo-link" src={lnk} alt="link" />
				</div>
				<div className="Body-logo-box" onClick={handleDownloadFile}>
					<img className="Body-logo-download" src={download} alt="download" />
				</div>
			</div>
		</div>
	);
}

export default Body;