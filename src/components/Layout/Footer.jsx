import { FooterList } from "./FooterList";

import Img from "./assets/img/footer-puppy.png";

import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__container">
          {FooterList.map((Item) => {
            return (
              <>
                <div className="footer__item">
                  <h2 className="h2">{Item.name}</h2>
                  <div className="container">
                    <img src={Item.srcFirst} alt={Item.altFirst} />
                    <div className="text">{Item.firstName}</div>
                  </div>
                  <div className="container">
                    <img src={Item.srcSecond} alt={Item.altSecond} />
                    <div className="text">{Item.secondName}</div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <img src={Img} alt="Footer Puppy" className="footer__img" />
      </footer>
    </>
  );
};

export { Footer };
