import "./Slider.scss";

import { ButtonPrimary } from "../UI/ButtonPrimary/ButtonPrimary";

const Slider = () => {
  return (
    <>
      <section className="slider">
        <h3 className="h3">Our friends who are looking for a house</h3>
        <ButtonPrimary name="Get to know the rest" />
      </section>
    </>
  );
};

export { Slider };
