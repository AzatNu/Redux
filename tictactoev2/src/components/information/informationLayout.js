import styel from "./information.module.css";
export const InformationLayout = ({ currentPlayer, isGameEnded, isDraw }) => {
  return (
    <div className={styel[`information`]}>
      {isDraw
        ? "Ничья"
        : isGameEnded
        ? `Победил игрок: ${currentPlayer}`
        : `Ходит игрок: ${currentPlayer}`}
    </div>
  );
};
