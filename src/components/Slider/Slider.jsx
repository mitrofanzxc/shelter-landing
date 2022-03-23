import "./Slider.scss";

import { PETS } from "../../shared/Pets";

import { ButtonPrimary } from "../UI/ButtonPrimary/ButtonPrimary";
import { ButtonSecondary } from "../UI/ButtonSecondary/ButtonSecondary";

const Slider = () => {
  return (
    <>
      <section className="slider">
        <h3 className="h3">
          Our friends who
          <br />
          are looking for a house
        </h3>
        <div className="slider__container">
          {PETS.map((Pet) => {
            return (
              <>
                <div className="slider__card">
                  <img src={Pet.img} alt={Pet.name} className="slider__img" />
                  <h4 className="h4">{Pet.name}</h4>
                  <ButtonSecondary name="Learn more" />
                </div>
              </>
            );
          })}
        </div>
        <ButtonPrimary name="Get to know the rest" />
      </section>
    </>
  );
};

export { Slider };
