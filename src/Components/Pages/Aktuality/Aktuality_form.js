import React from "react";

const AktualityForm = ({inputText, setInputText, aktuality, setAktuality}) => {

    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setAktuality([
            ...aktuality, {text: inputText, completed: false, id: Math.random() * 1000 },
        ]);
        setInputText("");
    };

    return (
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="aktualita-input" />
            <button onClick={submitTodoHandler} type="submit" className="aktualita_button">
                <i className=""></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo">
                    <option value="all">All</option>
                </select>
            </div>
        </form>
    );
};

export default AktualityForm;