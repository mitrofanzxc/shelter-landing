import { useRef } from "react";

import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { PETS } from "../../shared/Pets";

import { ButtonPrimary } from "../UI/ButtonPrimary/ButtonPrimary";
import { ButtonSecondary } from "../UI/ButtonSecondary/ButtonSecondary";

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
          modules={[Navigation]}
          spaceBetween={90}
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
          <div className="buttons__container">
            <button ref={navigationPrevRef} className="button__pagination arrow__left"></button>
            <button ref={navigationNextRef} className="button__pagination arrow__right"></button>
          </div>
        </Swiper>
        <ButtonPrimary name="Get to know the rest" />
      </section>
    </>
  );
};

export { Slider };
