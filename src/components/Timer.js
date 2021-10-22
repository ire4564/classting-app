import React, { useEffect, useState } from 'react';
import "../App.css";

function Timer(props) {
    const [min, setMin] = useState(parseInt(props.mm));
    const [sec, setSec] = useState(parseInt(props.ss));

    useEffect(() => {
        const countdown = setInterval(() => {
          if (parseInt(sec) < 59) {
            setSec(parseInt(sec) + 1);
          }
          if (parseInt(sec) === 59) {
            setMin(parseInt(min) + 1);
            setSec(0);
          }
        }, 1000);
        return () => clearInterval(countdown);
      }, [min, sec]);

    return (
        <div className="Timer">
            {min} : {sec < 10 ? `0${sec}` : sec}
        </div>
    );
}

export default Timer;