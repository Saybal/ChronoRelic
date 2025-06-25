import React from 'react';
import { Link } from 'react-router';

const SuggestionDesign = ({id,Name}) => {
    return (
        <div className='px-3 py-2 text-white hover:font-semibold hover:cursor-pointer hover:bg-white/40'>
            <Link to={`artifact-details/${id}`}>
                {Name}
            </Link>
        </div>
    );
};

export default SuggestionDesign;