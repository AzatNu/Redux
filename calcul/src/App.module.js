import styel from "./App.module.css";
import { useState } from "react";
export const App = () => {
    const nums = [`1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `0`];
    const [operator, setOperator] = useState(``);
    const [firstOperand, setFirstOperand] = useState(``);
    const [secondOperand, setSecondOperand] = useState(``);
    const [equaly, setEqualy] = useState(false);
    const [answer, setAnswer] = useState(`0`);
    const deleteButton = () => {
        setSecondOperand(``);
        setFirstOperand(``);
        setEqualy(false);
        setOperator(``);
        setAnswer(`0`);
    };
    return (
        <div className={styel[`main`]}>
            <div className={styel[`display`]}>
                {" "}
                {secondOperand === `0` && operator === `/` ? (
                    <div className={styel[`errors`]}>
                        <h2>Ошибка. Деление на 0 невозможно</h2>
                    </div>
                ) : (
                    <div className={styel[`corrected`]}>
                        <h2>{answer}</h2>
                    </div>
                )}
            </div>
            <div className={styel[`keyboard`]}>
                {nums.map((num) => (
                    <div className={styel[`numButton`]}>{num}</div>
                ))}
                <button className={styel[`operatorButton`]}>
                    <h2>+</h2>
                </button>
                <button className={styel[`operatorButton`]}>
                    <h2>-</h2>
                </button>
                <button
                    className={styel[`operatorButton`]}
                    onClick={deleteButton}
                >
                    <h2>C</h2>
                </button>
                <button className={styel[`operatorButton`]}>
                    <h2>*</h2>
                </button>
                <button className={styel[`operatorButton`]}>
                    <h2>/</h2>
                </button>

                <button className={styel[`equalButton`]}>
                    <h2>=</h2>
                </button>
            </div>
        </div>
    );
};
