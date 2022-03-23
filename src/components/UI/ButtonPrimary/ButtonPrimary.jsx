import "./ButtonPrimary.scss";

const ButtonPrimary = (props) => {
  return (
    <>
      <button className="button__primary">{props.name}</button>
    </>
  );
};

export { ButtonPrimary };
