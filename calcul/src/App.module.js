import styel from "./App.module.css";
import { useState } from "react";
export const App = () => {
    const nums = [`1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `0`];
    const [operator, setOperator] = useState(``);
    const [firstOperand, setFirstOperand] = useState(``);
    const [secondOperand, setSecondOperand] = useState(``);
    const [equaly, setEqualy] = useState(false);
    const [answer, setAnswer] = useState(`0`);

    if (equaly) {
        setFirstOperand(`${answer}`);
        setSecondOperand(``);
        setOperator(``);
        setEqualy(false);
    }
    const calculate = () => {
        if (operator === `+`) {
            setAnswer(Number(firstOperand) + Number(secondOperand));
        }
        if (operator === `-`) {
            setAnswer(Number(firstOperand) - Number(secondOperand));
        }
        if (operator === `*`) {
            setAnswer(Number(firstOperand) * Number(secondOperand));
        }
        if (operator === `/`) {
            setAnswer(Number(firstOperand) / Number(secondOperand));
        }
        setEqualy(true);
    };
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
                {operator === `/` && secondOperand === `0` ? (
                    <h2 className={styel[`errors`]}>
                        Ошибка. Деление на 0 невозможно
                    </h2>
                ) : (
                    <h2 className={styel[`corrected`]}>
                        {firstOperand} {operator} {secondOperand}
                    </h2>
                )}
            </div>
            <div className={styel[`keyboard`]}>
                {nums.map((num) =>
                    operator !== `` ? (
                        <button
                            className={styel[`numButton`]}
                            onClick={() =>
                                setSecondOperand(`${secondOperand}${num}`)
                            }
                        >
                            <h2>{num}</h2>
                        </button>
                    ) : (
                        <button
                            className={styel[`numButton`]}
                            onClick={() =>
                                setFirstOperand(`${firstOperand}${num}`)
                            }
                        >
                            <h2>{num}</h2>
                        </button>
                    )
                )}
                <button
                    className={styel[`operatorButton`]}
                    onClick={() => setOperator(`+`)}
                >
                    <h2>+</h2>
                </button>
                <button
                    className={styel[`operatorButton`]}
                    onClick={() => setOperator(`-`)}
                >
                    <h2>-</h2>
                </button>
                <button
                    className={styel[`operatorButton`]}
                    onClick={deleteButton}
                >
                    <h2>C</h2>
                </button>
                <button
                    className={styel[`operatorButton`]}
                    onClick={() => setOperator(`*`)}
                >
                    <h2>*</h2>
                </button>
                <button
                    className={styel[`operatorButton`]}
                    onClick={() => setOperator(`/`)}
                >
                    <h2>/</h2>
                </button>
                {firstOperand === `` ||
                secondOperand === `` ||
                (operator === `/` && secondOperand === `0`) ? (
                    <button className={styel[`disabledEqualButton`]}>
                        <h2>=</h2>
                    </button>
                ) : (
                    <button
                        className={styel[`equalButton`]}
                        onClick={calculate}
                    >
                        <h2>=</h2>
                    </button>
                )}
            </div>
        </div>
    );
};
