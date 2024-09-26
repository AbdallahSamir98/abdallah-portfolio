import { Icon } from '@iconify/react';
import SectionHeading from './SectionHeading';
import Ratings from './Ratings';

export default function Service({ data }) {
  const { sectionHeading, allService } = data;

 
  return (
    <section className="section" id="services">
      <div className="container" 
     
      >
        <SectionHeading
          miniTitle={sectionHeading.miniTitle}
          title={sectionHeading.title}
        />
        <div className="row gy-5" 
                       

        >
          {allService?.map((item, index) => (
            <div
              className="col-sm-6 col-lg-6 "
              key={index}
              
            >
              <div
                className="services-box"
                style={{ backgroundImage: `url(${item.imgUrl})` }}
              >
                <div className="services-body">
                  <div className="icon">
                    <Icon icon={item.icon} />
                  </div>
                  <div
                    className=""
                    style={{
                      background: "rgba(0,0,0,0.7)",
                      padding: "10px",
                      height: "108px",
                      borderRadius: "8px 8px 0px 0px",
                    }}
                  >
                    <h5>{item.title}</h5>
                    <p>{item.subTitle}</p>
                  </div>
                  <div className="rating-wrap">
                    <Ratings ratings={item.ratings} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
