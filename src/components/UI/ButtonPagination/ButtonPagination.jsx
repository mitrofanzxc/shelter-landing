import "./ButtonPagination.scss";

const ButtonPagination = (props) => {
  return (
    <>
      <button className="button__pagination">{props.name}</button>
    </>
  );
};

export { ButtonPagination };
