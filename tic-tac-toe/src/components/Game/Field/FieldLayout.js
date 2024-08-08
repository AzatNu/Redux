import PropTypes from "prop-types";
import style from "./Field.module.css";

export const FieldLayout = ({ field, makeAction }) => {
    return (
        <div className={style[`Field`]}>
            {field.map((item, index) => (
                <div
                    className={
                        item === ``
                            ? style[`Field__row`]
                            : style[`Field__row_occupied`]
                    }
                    disbled={item === `` ? false : true}
                    onClick={item === `` ? () => makeAction(index) : null}
                >
                    {item}
                </div>
            ))}
        </div>
    );
};

FieldLayout.propTypes = {
    field: PropTypes.arrayOf(PropTypes.string).isRequired,
    makeMove: PropTypes.func.isRequired,
};
