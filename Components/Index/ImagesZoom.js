import React, { useState, useEffect } from "react";
import {
  Overlay,
  Header,
  CloseBtn,
  SlickWrapper,
  ImgWrapper,
  Indicator,
  Global,
} from "./styles";
import Slider from "react-slick";
import Image from "next/image";

const images = ["/ex1.jpeg", "/ex2.jpeg"];
const ImagesZoom = ({ onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <Overlay>
      <Global />
      <Header>
        <h1>예시 보기</h1>
        <CloseBtn onClick={onClose} />
      </Header>
      <SlickWrapper>
        <Slider
          initialSlide={0}
          afterChange={(slide) => setCurrentSlide(slide)}
          infinite
          slidesToShow={1}
          slidesToScroll={1}
          arrows={false}
        >
          {images.map((v) => (
            <ImgWrapper key={v}>
              <Image src={v} alt={v} width={800} height={1000} />
            </ImgWrapper>
          ))}
        </Slider>
        <Indicator>
          <div>
            {currentSlide + 1} /{2}
          </div>
        </Indicator>
      </SlickWrapper>
    </Overlay>
  );
};

export default ImagesZoom;
