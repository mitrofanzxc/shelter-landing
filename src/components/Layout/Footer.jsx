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
                  <a
                    href={Item.hrefFirst}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="container"
                  >
                    <img src={Item.srcFirst} alt={Item.altFirst} />
                    <div className="text">{Item.firstName}</div>
                  </a>
                  <a
                    href={Item.hrefSecond}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="container"
                  >
                    <img src={Item.srcSecond} alt={Item.altSecond} />
                    <div className="text">{Item.secondName}</div>
                  </a>
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
