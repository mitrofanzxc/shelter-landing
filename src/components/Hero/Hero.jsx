import Img from "./assets/img/start-screen-puppy.png";

import { ButtonPrimary } from "../UI/ButtonPrimary/ButtonPrimary";

import "./Hero.scss";

const Hero = () => {
  return (
    <>
      <section className="hero inner__container">
        <div className="hero__container">
          <div className="form__container">
            <h2 className="h2">Not only people need a house</h2>
            <div className="paragraph">
              We offer to give a chance to a little and nice puppy with an extremely wide and open
              heart. He or she will love you more than anybody else in the world, you will see!
            </div>
            <ButtonPrimary name="Make a friend" />
          </div>
          <img src={Img} alt="xyu" className="hero__img" />
        </div>
      </section>
    </>
  );
};

export { Hero };
