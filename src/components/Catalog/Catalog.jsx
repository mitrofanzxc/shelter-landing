import { PETS } from "../../shared/Pets";

import { ButtonSecondary } from "../UI/ButtonSecondary/ButtonSecondary";
import { ButtonPagination } from "../UI/ButtonPagination/ButtonPagination";

import "./Catalog.scss";

const Catalog = () => {
  return (
    <>
      <section className="catalog">
        <h3 className="h3">
          Our friends who
          <br />
          are looking for a house
        </h3>
        <div className="catalog__container">
          {PETS.map((Pet) => {
            return (
              <>
                <div className="slider__card">
                  <img src={Pet.img} alt={Pet.name} className="slider__img" />
                  <div className="hover">
                    <h4 className="h4">{Pet.name}</h4>
                    <ButtonSecondary name="Learn more" />
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="pagination__container">
          <ButtonPagination name="<<" />
          <ButtonPagination name="<" />
          <ButtonPagination name="1" />
          <ButtonPagination name=">" />
          <ButtonPagination name=">>" />
        </div>
      </section>
    </>
  );
};

export { Catalog };
