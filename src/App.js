import React from 'react';
import { useState, useEffect } from "react";
import './App.css';
import axios from 'axios';
import Header from './components/Header';
import Body from './components/Body';
import { v4 as uuidv4 } from 'uuid';


const fetchedData = () => {
  return axios.get("https://www.plugco.in/public/take_home_sample_feed")
    .then((data)=>{
      console.log(data);
      return data;
    })
    .catch(err=>{
      console.error(err);
    })
}

function App() {
  const [data, setData] = useState([]);
  
  useEffect(()=>{
    fetchedData().then(data=>{
      setData(data.data.campaigns);
    });
  },[])
  return (
    <>
			{data.map((camp, idx) => (
				<div key={uuidv4()}>
					<Header
						key={uuidv4()}
						icon={camp.campaign_icon_url}
						name={camp.campaign_name}
						amount={camp.pay_per_install}
					/>
					<div className="Header-Body-container">
						{camp.medias.map((vid, idx) => (
							<Body
								key={uuidv4()}
								cover={vid.cover_photo_url}
								url={vid.download_url}
								link={vid.tracking_link}
							/>
						))}
					</div>
				</div>
			))}
    </>
	);
}

export default App;
