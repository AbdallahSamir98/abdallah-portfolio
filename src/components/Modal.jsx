import React from 'react';
import parser from 'html-react-parser';
import { Link } from 'react-router-dom';

export default function Modal({ modalData }) {
  const { thumbUrl, details } = modalData;
  
  const { title, description, type, langages, platform, country, url,fullthumbUrl } =
  details;
  console.log(details,"modalData");
  return (
    <div className="px-modal">
      <div className="single-project-box">
        <div className="row align-items-start">
          <div className="col-lg-7 text-center">
            <Link to={url} target='_blank' className='position-relative'>
            <div style={{left:"35%"}} className="btn btn-primary py-2 px-5 position-absolute z-3 top-50 " >
              view
            </div>

            <img className="border rounded-1" src={fullthumbUrl} title alt="Thumbnail" style={{width:"60%", height:"500px" ,    filter: "brightness(0.1)" 
}} />
            </Link>

          </div>
          <div className="col-lg-5 pt-4 pt-lg-0">
            {title && <h4>{parser(title)}</h4>}
            {description && <p>{parser(description)}</p>}
            <div className="about-content">
              <ul>
                {type && (
                  <li className="d-flex">
                    <span className="col-4 col-lg-3">Type:</span>
                    <span>{type}</span>
                  </li>
                )}
                {langages && (
                  <li className="d-flex">
                    <span className="col-4 col-lg-3">Langages:</span>
                    <span>{langages}</span>
                  </li>
                )}
                {platform && (
                  <li className="d-flex">
                    <span className="col-4 col-lg-3">Platform:</span>
                    <span>{platform}</span>
                  </li>
                )}
                {country && (
                  <li className="d-flex">
                    <span className="col-4 col-lg-3">Country:</span>
                    <span>{country}</span>
                  </li>
                )}
                {url && (
                  <li className="d-flex">
                    <span className="col-4 col-lg-3">Live URL:</span>
                    <h5>
                    <Link to={url} target='_blank'>
  view

 </Link>
                    </h5>


                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
