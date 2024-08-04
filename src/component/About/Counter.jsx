import React, {useEffect,useState}from 'react';


export default function Counter({initialValue,targetValue}) 
{
    const [count, setCount] = useState(initialValue);
    const duration = 500;
    useEffect(() => {
        let startValue = initialValue;
        const interval = Math.floor(
            duration / (targetValue - initialValue));

        const counter = setInterval(() => {
            startValue += 1;
            setCount(startValue);
            if (startValue >= targetValue) {
                clearInterval(counter);
            }
        }, interval);

        return () => {
            clearInterval(counter);
        };
    }, [targetValue, initialValue]);

    return (
        
            <span className="num">{count}</span>
      
    );
};





   


