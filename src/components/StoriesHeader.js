import React from 'react';
import './Stories.css';

const StoriesHeader = ({ columns  }) => {
        return <div className="stories-header">
            {Object.keys(columns).map(key => {
                return <span
                    key={key}
                    style={{width: columns[key].width}}
                >
                    {columns[key].label}
                </span>
            })}
        </div>
};

export default StoriesHeader;