import React from 'react';
import SuggestionDesign from './SuggestionDesign';

const SuggestionList = ({ suggestion }) => {
    if (!suggestion?.length) return null;

    return (
        <div className="w-full text-left bg-white/30 backdrop-blur-sm shadow-md rounded-xl mt-2 max-h-40 overflow-y-auto transition-all duration-300 ease-in-out scrollbar-hide">
            {suggestion.map((sug) => (
                <SuggestionDesign key={sug._id} id={sug._id} Name={sug["Artifact-Name"]} />
            ))}
        </div>
    );
};

export default SuggestionList;
