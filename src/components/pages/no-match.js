import React from 'react';
import { Link } from 'react-router-dom';

export default function() {
    return (
        <div>
            <h2>Page Not Found</h2>
            <Link to="/" >Go back to homepage</Link>
        </div>
    )
}