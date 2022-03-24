import "./ButtonPagination.scss";

const ButtonPagination = (props) => {
  return (
    <>
      <button className={props.className}>{props.name}</button>
    </>
  );
};

export { ButtonPagination };
