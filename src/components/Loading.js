import React from 'react';
import Loader from "react-loader-spinner"

function Loading() {
    return (
        <div>
            <Loader
                type="Oval"
                color="#00C896"
                height={30}
                width={30}
                timeout={3000}
            />
        </div>
    );
}

export default Loading;