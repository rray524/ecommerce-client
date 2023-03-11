import React from "react";
import { Carousel } from "react-carousel-minimal";
import "./Header.css";
import img1 from "../../imgs/1.png";
import img2 from "../../imgs/2.jpg";
import img3 from "../../imgs/3.png";
import img4 from "../../imgs/4.png";
import NavScroll from "../Navbar/Nav";

const Header = () => {
  const data = [
    {
      image: img1,
      caption: "Santoor and P&G Products Exclusive collection",
    },
    {
      image: img2,
      caption: "Handwash Collection",
    },
    {
      image: img3,
      caption: "DEO of doors collections",
    },
    {
      image: img4,
      caption: "All Nivea Collections",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  return (
    <>
      <NavScroll />
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            padding: "0",
          }}
        >
          <Carousel
            data={data}
            time={3000}
            width="100%"
            height="500px"
            captionStyle={captionStyle}
            radius="0px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "100%",
              maxHeight: "500px",
              margin: "0 auto",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
