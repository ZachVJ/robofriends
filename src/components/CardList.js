import React from 'react';
import Card from './Card';

// Pure components/dumb components
const CardList = ({ robots }) => {
    return (
        <div>
            {
                robots.map((user, i) => {
                    return (
                        <Card 
                            key={i} 
                            id={robots[i].id} 
                            name={robots[i].name} 
                            email={robots[i].email}
                            />
                    );
                })
            }
        </div>
    );
}

export default CardList;