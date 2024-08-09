import styel from "./field.module.css";
export const FieldLayout = ({ field, handleClick, clean }) => {
  return (
    <>
      <div className={styel[`game`]}>
        {field.map((item, index) => (
          <button
            className={
              item !== `` ? styel[`fieldButtonOccupied`] : styel[`fieldButton`]
            }
            onClick={() => handleClick(index)}
            key={index}
          >
            {item}
          </button>
        ))}
      </div>
      <button className={styel[`gameButton`]} onClick={clean}>
        Начать заново
      </button>
    </>
  );
};
