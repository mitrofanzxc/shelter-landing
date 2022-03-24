import Img from "./assets/img/donation-dog.png";

import { InputCard } from "../UI/InputCard/InputCard";

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
          <h4 className="h4">Name of the bank / Type of bank account</h4>
          <InputCard />
          <div className="explanation">
            Legal information and lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            a ipsum at libero sagittis dignissim sed ac diam. Praesent ultrices maximus tortor et
            vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          </div>
        </div>
      </section>
    </>
  );
};

export { Donate };
