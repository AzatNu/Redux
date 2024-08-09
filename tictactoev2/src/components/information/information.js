import { InformationLayout } from "./informationLayout";
export const Information = ({ isDraw, isGameEnded, currentPlayer }) => {
  return (
    <InformationLayout
      currentPlayer={currentPlayer}
      isGameEnded={isGameEnded}
      isDraw={isDraw}
    />
  );
};
