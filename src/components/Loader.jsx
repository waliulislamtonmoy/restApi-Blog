import React from 'react';

const Loader = () => {
    return (
        <div>
            <div className={"mx-auto container"}>
                <div className={"flex items-center justify-center h-screen"}>
                    <div className={"text-center"}>
                        <progress className="progress w-56"></progress>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loader;