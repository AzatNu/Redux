import { Field } from "./field/field.js";
import { Information } from "../components/information/information.js";

export const GameLayout = ({
  field,
  setField,
  isDraw,
  setIsDraw,
  isGameEnded,
  setIsGameEnded,
  setCurrentPlayer,
  currentPlayer,
}) => {
  return (
    <>
      <Information
        currentPlayer={currentPlayer}
        isGameEnded={isGameEnded}
        isDraw={isDraw}
      />
      <Field
        field={field}
        setField={setField}
        currentPlayer={currentPlayer}
        setIsGameEnded={setIsGameEnded}
        setIsDraw={setIsDraw}
        isGameEnded={isGameEnded}
        isDraw={isDraw}
        setCurrentPlayer={setCurrentPlayer}
      />
    </>
  );
};
