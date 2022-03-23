import "./ButtonSecondary.scss";

const ButtonSecondary = (props) => {
  return (
    <>
      <button className="button__secondary">{props.name}</button>
    </>
  );
};

export { ButtonSecondary };
