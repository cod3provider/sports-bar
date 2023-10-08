import {  Navigation } from 'swiper/modules';
import galleryImage1 from '../../assets/images/pexels-elevate-1267360.jpg';
import galleryImage2 from '../../assets/images/pexels-tembela-bohle-1089930.jpg';
import galleryImage3 from '../../assets/images/jon-parry-4A9IELfRdwE-unsplash-1.jpg';
import galleryImage4 from '../../assets/images/attachment-amit-lahav-6I-HWjwn-hk-unsplash.jpg';
import galleryImage5 from '../../assets/images/elevate-snnhGYNqm44-unsplash.jpg';
import galleryImage6 from '../../assets/images/pexels-marcelo-chagas-17370350.jpg';
import galleryImage7 from '../../assets/images/pexels-elevate-1267295.jpg';

import  RoundArrowLeft from '../../assets/images/RoundArrowLeft.svg';
import RoundArrowRight from '../../assets/images/RoundArrowRight.svg';

// import { theme } from '../../utils/theme';
 import {
   SectionGallery,
   TextGallery,
   SwiperBox,
   SwiperSlideStile,
   GalleryImage,
   SwiperContent,
   SliderBoxArrow,
  //  ButtonPrew,
  //  ButtonNext,
   SliderWrapper,
   BtnPrew,
   BtnNext,
  //  SliderWrapperDot,
  // SliderDot,
 } from './Gallary.styled';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules


export const Gallary = () => {
// const mediaTablet= theme.breakpoints.tablet
  return (
    <SectionGallery>
      <TextGallery>Photos</TextGallery>
    
    <SliderWrapper>
      <SwiperBox
    loop={true}
    loopedSlides={1}
    initialSlide={1.5}
    centeredSlides={true}
    slidesPerView={2}
    spaceBetween={12}
    // pagination={{ clickable: true }}
    // navigation={true}
    modules={[Navigation]}
    speed={500}
    navigation={{ nextEl: 'BtnNext' , prevEl: 'BtnPrew'}}
    
  
    // style={{ width: '100%', height: '100%' }} // Прописываем стили здесь
    // onSwiper={(swiper) => {
    //   swiper.on('slideChange', function () {
    //     swiper.slidePrev(0);
    //   });
      
    // }}
      >
        <SwiperSlideStile>   <SwiperContent><GalleryImage src={galleryImage1} alt="" /></SwiperContent></SwiperSlideStile>
        <SwiperSlideStile>   <SwiperContent><GalleryImage src={galleryImage2} alt="" /></SwiperContent></SwiperSlideStile>
        <SwiperSlideStile>   <SwiperContent><GalleryImage src={galleryImage3} alt="" /></SwiperContent></SwiperSlideStile>
        <SwiperSlideStile>   <SwiperContent><GalleryImage src={galleryImage4} alt="" /></SwiperContent></SwiperSlideStile>
        <SwiperSlideStile>   <SwiperContent><GalleryImage src={galleryImage5} alt="" /></SwiperContent></SwiperSlideStile>
        <SwiperSlideStile>   <SwiperContent><GalleryImage src={galleryImage6} alt="" /></SwiperContent></SwiperSlideStile>
        <SwiperSlideStile>   <SwiperContent><GalleryImage src={galleryImage7} alt="" /></SwiperContent></SwiperSlideStile>
     
      </SwiperBox>
      <SliderBoxArrow>
        <BtnPrew>
        <img src={RoundArrowLeft} alt='arrow prew slide'/>
        </BtnPrew>
        <BtnNext>
        <img src={RoundArrowRight} alt='arrow next slide'/>
        </BtnNext>
      
       </SliderBoxArrow>
    </SliderWrapper>
    </SectionGallery>
  );
}
