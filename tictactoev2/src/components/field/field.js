import { FieldLayout } from "./fieldLayout.js";
export const Field = ({
  field,
  setField,
  isDraw,
  setIsDraw,
  setIsGameEnded,
  isGameEnded,
  setCurrentPlayer,
  currentPlayer,
}) => {
  const winPtterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const checkWin = () => {
    winPtterns.forEach((pattern) => {
      if (
        field[pattern[0]] !== `` &&
        field[pattern[0]] === field[pattern[1]] &&
        field[pattern[1]] === field[pattern[2]]
      ) {
        setIsGameEnded(true);
        setCurrentPlayer(field[pattern[0]]);
      }
    });
    if (field.every((item) => item !== ``)) {
      setIsDraw(true);
    }
  };

  const clean = () => {
    setIsGameEnded(false);
    setIsDraw(false);
    setCurrentPlayer("X");
    setField([``, ``, ``, ``, ``, ``, ``, ``, ``]);
  };

  const handleClick = (index) => {
    if (!isGameEnded && !isDraw && field[index] === ``) {
      field[index] = currentPlayer;
      setField([...field]);
      if (currentPlayer === `X`) {
        setCurrentPlayer(`O`);
      } else {
        setCurrentPlayer(`X`);
      }
      checkWin();
    }
  };

  return (
    <FieldLayout
      field={field}
      setField={setField}
      handleClick={handleClick}
      clean={clean}
    />
  );
};
