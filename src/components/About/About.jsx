import Img from "./assets/img/about-pets.png";

import "./About.scss";

const About = () => {
  return (
    <>
      <section className="about">
        <img src={Img} alt="About Pets" className="about__img" />
        <div className="about__container">
          <h3 className="h3">About the shelter “Cozy House”</h3>
          <div className="paragraph">
            Currently we have 121 dogs and 342 cats on our hands and statistics show that only 20%
            of them will find a family. The others will continue to live with us and will be waiting
            for a lucky chance to become dearly loved.
          </div>
          <div className="paragraph">
            We feed our wards with the best food and make sure that they do not get sick, feel
            comfortable (including psychologically) and well. We are supported by 87 volunteers and
            28 employees of various skill levels. About 12% of the animals are taken by the shelter
            staff. Taking care of the animals, they become attached to the pets and would hardly
            ever leave them alone.
          </div>
        </div>
      </section>
    </>
  );
};

export { About };
