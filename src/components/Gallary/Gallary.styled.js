import styled from 'styled-components/macro';
import { Swiper, SwiperSlide } from 'swiper/react';


export const SectionGallery = styled.section`
background: #EBEBEB;
flex-direction: column;
margin: 0 auto;
padding: 16px 0 24px 0;
display: flex;
justify-content: center;
align-items: center;
`

export const SliderWrapper = styled.div`
width: 375px;
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
overflow: hidden;
`
export const TextGallery = styled.h2`
color: #504C4C;
text-align: center;
font-family: Varela;
font-size: 48px;
font-style: normal;
font-weight: 400;
line-height: 72px; /* 150% */
margin-bottom: 24px;
`

export const SwiperBox = styled(Swiper)`
  width: 100%;
  height: 100%;
  display: flex;
  margin-bottom: 16px;
`;

export const SwiperSlideStile = styled(SwiperSlide)`
width: 173px;
/* margin-right: 12px; */
  text-align: center;
  justify-content: center;
  align-items: center;
`;

export const GalleryImage = styled.img`
  display: block;
  /* width: 100%; */
  width: 173px;
  height: 260px;
  /* max-width: 100%; */
  object-fit: cover;
  border-radius: 5px;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.35) 0%,
      rgba(0, 0, 0, 0.35) 100%
    ),
    url(<path-to-image>), lightgray -0.74px -39.526px / 100% 153.994% no-repeat;
`;
// export const ButtonPrew = styled.button`
// width: 48px;
// fill: #FFDBA0;
// `;

// export const ButtonNext = styled.button`
// width: 48px;
// fill: #FFDBA0;
// `;

export const SliderWrapperDot = styled.div`
width: 100%;
`;

export const SliderDot = styled.div`
width: 24px;
height: 24px;
border-radius: 50%;
margin-right: 16px;
background-color: #DAD3D3;
&:active {
    background-color: #FFDBA0;
&::before,
&::after {
    background-color: #8D8D8D;
}
}

`
export const SwiperContent = styled.div`
width: 100%;
`

export const SliderBoxArrow = styled.div`
    align-self: end;
    margin-right: 26px;
`
export const BtnPrew = styled.button`
border: none;
    outline: none;
    padding: 0;
    margin-right: 24px;
`
export const BtnNext = styled.button`
outline: none;
border: none;
padding: 0;
`
