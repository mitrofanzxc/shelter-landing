import "./InputCard.scss";

const InputCard = () => {
  return (
    <>
      <input
        type="text"
        name="bankcard"
        id="bankcard"
        placeholder="8380 2880 8028 8791 7435"
        className="input__card"
      />
    </>
  );
};

export { InputCard };
