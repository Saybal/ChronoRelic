import React, { useState, useEffect } from 'react';
import { ImSearch } from "react-icons/im";
import { FaTimesCircle } from "react-icons/fa";

const SearchBar = ({ setSuggestion }) => {
    const [input, setInput] = useState("");
    const [timer, setTimer] = useState(null);

    const searchData = (value) => {
        fetch("https://artifacts-tracker-sable.vercel.app/all-artifacts")
            .then(res => res.json())
            .then(data => {
                const result = data.filter(artifact =>
                    value &&
                    artifact?.["Artifact-Name"]?.toLowerCase().includes(value.toLowerCase())
                );
                setSuggestion(result);
            });
    };

    const handleInput = (value) => {
        setInput(value);
        clearTimeout(timer);
        const newTimer = setTimeout(() => {
            searchData(value);
        }, 300); // debounce delay
        setTimer(newTimer);
    };

    const clearInput = () => {
        setInput("");
        setSuggestion([]);
    };

    return (
        <div className="relative bg-white/30 w-full rounded-xl mt-4 h-[2.5rem] flex items-center px-3 backdrop-blur-sm shadow-md">
            <ImSearch className="text-white/60 text-lg mr-2" />
            <input
                className="flex-grow bg-transparent outline-none text-white placeholder-white/70 caret-white"
                type="text"
                value={input}
                onChange={(e) => handleInput(e.target.value)}
                placeholder="Search artifacts by name..."
            />
            {input && (
                <FaTimesCircle
                    onClick={clearInput}
                    className="text-white/60 hover:text-white cursor-pointer text-lg transition duration-150"
                />
            )}
        </div>
    );
};

export default SearchBar;
