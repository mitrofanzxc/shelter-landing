import Img from "./assets/img/donation-dog.png";

import "./Donate.scss";

const Donate = () => {
  return (
    <>
      <section className="donate">
        <img src={Img} alt="Donation Dog" className="donate__img" />
        <div className="donate__container">
          <h3 className="h3">
            You can also make
            <br />a donation
          </h3>
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

export { Donate };
