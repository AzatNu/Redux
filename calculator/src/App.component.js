import styel from "./App.module.css";
import { useState } from "react";

export const App = () => {
    const NUMS = [`0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`];
    const [firstOperand, setFirstOperand] = useState(``);
    const [secondOperand, setSecondOperand] = useState(``);
    const [operator, setOperator] = useState(``);
    const [answer, setAnswer] = useState(0);
    const [isEqually, setIsEqually] = useState(false);
    const delButton = () => {
        setFirstOperand(``);
        setSecondOperand(``);
        setOperator(``);
        setIsEqually(false);
    };
    const plusButton = () => {
        setOperator(`+`);
    };
    const minusButton = () => {
        setOperator(`-`);
    };
    const divisionButton = () => {
        setOperator(`/`);
    };
    const multiplicationButton = () => {
        setOperator(`*`);
    };
    const result = () => {
        if (operator === `+`) {
            setAnswer(Number(firstOperand) + Number(secondOperand));
        } else if (operator === `-`) {
            setAnswer(Number(firstOperand) - Number(secondOperand));
        } else if (operator === `/`) {
            setAnswer(Number(firstOperand) / Number(secondOperand));
        } else if (operator === `*`) {
            setAnswer(Number(firstOperand) * Number(secondOperand));
        }
        setIsEqually(true);
    };
    let disp = `${firstOperand}${operator}${secondOperand}`.slice(0, 10);
    return (
        <>
            {secondOperand === `0` ? (
                <h2 className={styel["error"]}>
                    Ошибка. Деление на ноль невозможно
                </h2>
            ) : (
                <h2 className={styel["title"]}>Calculator v.1 /*+-</h2>
            )}

            <div className={styel["app"]}>
                <div className={styel["clculator-display"]}>
                    {firstOperand === `` && secondOperand === `` ? (
                        <p className={styel["display-paragraph"]}>0</p>
                    ) : (
                        <p className={styel["display-paragraph"]}>{disp}</p>
                    )}
                    {isEqually && (
                        <p className={styel["answer"]}>
                            = {Math.floor(answer)}
                        </p>
                    )}
                </div>
                <div className={styel["opeators"]}>
                    <button
                        className={styel["numpad"]}
                        onClick={divisionButton}
                    >
                        /
                    </button>
                    <button
                        className={styel["numpad"]}
                        onClick={multiplicationButton}
                    >
                        *
                    </button>
                    <button className={styel["numpad"]} onClick={minusButton}>
                        -
                    </button>
                    <button className={styel["numpad"]} onClick={plusButton}>
                        +
                    </button>

                    <button
                        className={styel["numpad-equally"]}
                        onClick={result}
                        disabled={
                            (secondOperand === `0` && operator === `/`) ||
                            secondOperand === `` ||
                            firstOperand === ``
                        }
                    >
                        =
                    </button>
                </div>
                <div>
                    {NUMS.map((num) =>
                        operator === `` ? (
                            <button
                                className={styel["numpad"]}
                                onClick={() =>
                                    setFirstOperand(`${firstOperand}${num}`)
                                }
                            >
                                {num}
                            </button>
                        ) : (
                            <button
                                className={styel["numpad"]}
                                onClick={() =>
                                    setSecondOperand(`${secondOperand}${num}`)
                                }
                                disabled={
                                    secondOperand === `0` && operator === `/`
                                }
                            >
                                {num}
                            </button>
                        )
                    )}

                    <button
                        className={styel["numpad-delete"]}
                        onClick={delButton}
                    >
                        C
                    </button>
                </div>
            </div>
        </>
    );
};
