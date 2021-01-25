import React, { useState } from 'react';
import { Overlay, Header, CloseBtn, SlickWrapper, ImgWrapper, Indicator, Global } from './styles';
import Slick from 'react-slick';
const images={
    1:"https://ifh.cc/g/E0FoYM.jpg"
}
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
        <div>
          <Slick
            initialSlide={0}
            afterChange={(slide) => setCurrentSlide(slide)}
            infinite
            arrows={false}
            slidesToShow={1}
            slidesToScroll={1}
          >
              <ImgWrapper>
                <img src={'https://ifh.cc/g/E0FoYM.jpg'} alt={'https://ifh.cc/g/E0FoYM.jpg'} />
              </ImgWrapper>
          </Slick>
          <Indicator>
            <div>
              {currentSlide + 1}
              {' '}
              /
              {images.length}
            </div>
          </Indicator>
        </div>
      </SlickWrapper>
    </Overlay>
  );
};


export default ImagesZoom;