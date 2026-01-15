import React from 'react';
import Dome from './dome/Dome';

const Explore = () => (
    <section
        className="py-96 relative"
    >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10">
            <Dome />
        </div>
    </section>
);

export default Explore;
