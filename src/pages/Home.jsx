import React from 'react';

const Home = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, est.</p>

            <button className="btn m-1">Button</button>
            <button className="btn m-1 btn-neutral">Neutral</button>
            <button className="btn m-1 btn-primary">Primary</button>
            <button className="btn m-1 btn-secondary">Secondary</button>
            <button className="btn m-1 btn-accent">Accent</button>
            <button className="btn m-1 btn-ghost">Ghost</button>
            <button className="btn m-1 btn-link">Link</button>
        </div>
    );
};

export default Home;