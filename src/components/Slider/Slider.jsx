import { useRef } from "react";

import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { PETS } from "../../shared/Pets";

import { ButtonPrimary } from "../UI/ButtonPrimary/ButtonPrimary";
import { ButtonSecondary } from "../UI/ButtonSecondary/ButtonSecondary";
import { ButtonPagination } from "../UI/ButtonPagination/ButtonPagination";

import "swiper/scss";
import "swiper/scss/navigation";

import "./Slider.scss";

const Slider = () => {
  // Consts for Swiper React
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <>
      <section className="slider">
        <h3 className="h3">
          Our friends who
          <br />
          are looking for a house
        </h3>
        <Swiper
          className="slider__container"
          data-test-id="main-slider"
          modules={[Navigation]}
          spaceBetween={85}
          slidesPerView={3}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          {PETS.map((Pet) => {
            return (
              <>
                <SwiperSlide className="slider__card">
                  <img src={Pet.img} alt={Pet.name} className="slider__img" />
                  <div className="hover">
                    <h4 className="h4">{Pet.name}</h4>
                    <ButtonSecondary name="Learn more" />
                  </div>
                </SwiperSlide>
              </>
            );
          })}
          <ButtonPagination ref={navigationPrevRef} className="button__pagination arrow__left" />
          <ButtonPagination ref={navigationNextRef} className="button__pagination arrow__right" />
        </Swiper>
        <ButtonPrimary name="Get to know the rest" />
      </section>
    </>
  );
};

export { Slider };
