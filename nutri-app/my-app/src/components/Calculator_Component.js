import React, { useState } from 'react';


const Calculator = ({title, items = [], multiselect = false}) => {
    const [open, setOpen] = useState(false);
    const [selection, setSelection] = useState([]);
    const toggle = () => setOpen(!open);

    function handleOnClick(item) {
    }
    return (
        <>
        <section className="foodsForm">
            <div
            tabIndex={0}
            className="dd-header"
            role="button"
            onKeyPress={() => toggle(!open)}
            onClick={() => toggle(!open)}>
                <div className="dd-header_title">
                    <p className="dd-header_title--bold">{title}</p>    
                </div>
            </div>
            {open && (
                <ul className="dd-list-item">
                        {items.map(item => (
                            <div className="dayTimes" key="{item.id}">
                                <button type="button" onClick={() => handleOnClick(item)}>
                                    <span>
                                        {item.value}</span>
                                </button>
                            </div>
                        ))}
                </ul>
            )}
        </section>
        </>
    )
}


export default Calculator