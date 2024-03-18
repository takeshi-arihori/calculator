import React, { useState } from 'react';

interface Button {
    label: string;
    action: (() => void) | null;
}

const Calculator: React.FC = () => {
    const [input, setInput] = useState<string>('');

    const handleClick = (value: string) => () => setInput(input + value);
    const calculate = () => {
        try {
            setInput((eval(input) || "") + "");
        } catch (e) {
            setInput("error");
        }
    };

    const clear = () => setInput('');
    const backspace = () => setInput(input.slice(0, -1));

    const buttons: Button[] = [
        { label: '7', action: null },
        { label: '8', action: null },
        { label: '9', action: null },
        { label: '/', action: null },
        { label: '4', action: null },
        { label: '5', action: null },
        { label: '6', action: null },
        { label: '*', action: null },
        { label: '1', action: null },
        { label: '2', action: null },
        { label: '3', action: null },
        { label: '-', action: null },
        { label: '0', action: null },
        { label: '.', action: null },
        { label: '=', action: calculate },
        { label: '+', action: null },
        { label: 'AC', action: clear },
        { label: '▶️', action: backspace },
    ];

    return (
        <div className="bg-gray-800 min-h-screen flex items-center justify-center">
            <div className="calculator bg-gray-700 text-white p-5 rounded-lg shadow-xl">
                <form>
                    <input
                        type="text"
                        value={input}
                        readOnly
                        className="w-full bg-gray-800 p-2 text-right text-lg rounded-md mb-5"
                    />
                </form>
                <div className="grid grid-cols-4 gap-4">
                    {buttons.map((btn) => (
                        <button
                            key={btn.label}
                            onClick={btn.action ? btn.action : handleClick(btn.label)}
                            className={`p-4 text-white font-semibold rounded-md transition duration-200 ${btn.label === '=' ? 'col-span-2 bg-blue-500 hover:bg-blue-600' : 'bg-gray-600 hover:bg-gray-500'} ${btn.label === 'AC' || btn.label === '▶️' ? 'bg-red-500 hover:bg-red-600' : ''}`}
                        >
                            {btn.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Calculator;
