import { HelpList } from "./HelpList";

import "./Help.scss";

const Help = () => {
  return (
    <>
      <section className="help">
        <h3 className="h3">
          How you can help
          <br />
          our shelter
        </h3>
        <div className="help__container">
          {HelpList.map((Item) => {
            return (
              <>
                <div className="help__card">
                  <img src={Item.src} alt={Item.name} />
                  <h4 className="h4">{Item.name}</h4>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export { Help };
