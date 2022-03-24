import "./ButtonPagination.scss";

const ButtonPagination = (props) => {
  console.log(props);
  return (
    <>
      <button className={props.className}>{props.name}</button>
    </>
  );
};

export { ButtonPagination };
