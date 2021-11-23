import { useState } from 'react';

export default function Dropdown({ title, options, onSelect }) {
    const [isOpen, setIsOpen] = useState(null);

    const handleSelection = (option) => {
        onSelect(option);
        setIsOpen(false);
    }

    return (
        <div className="dropdown">
            <button onClick={() => setIsOpen(true)}>{title}</button>
            {isOpen && (
                <ul role="menu">
                    {options.map((option) => (
                        <li
                            key={option}
                            role="menuitem"
                            onClick={() => handleSelection(option)}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
