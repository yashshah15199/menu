import React from "react";
import { Carousel } from "react-bootstrap";
import Image from "../assests/images/slider-1.jpg";
import Image1 from "../assests/images/history1.jpeg";
import DataObj from "../Data";

function Slider() {
  let data = DataObj["Theme"];
  return (
    <section>
      <div class="banner-up">
        <div class="container-fluid p-0">
          <Carousel>
            {data["Slider"].map((fld) => {
              return (
                <Carousel.Item>
                  <img
                    src={fld.silderImage?fld.silderImage:Image}
                    style={{
                      width: window.innerWidth,
                      height: window.innerHeight / 2,
                    }}
                    alt="..."
                  />
                  <Carousel.Caption>
                    <h3>{fld.title}</h3>
                    <p>
                      {fld.subTitle}
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default Slider;
