import React, { useState, useEffect } from 'react';
import './Therm.css';

const Bar = (probs) => {
  
  const [values, setValues] = useState(probs.values);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [condition, setCondition] = useState("Good");
  const [color, setColor] = useState('green');

const [speed,setSpeed]=useState(1000);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex >= values.length) {
        clearInterval(interval);
        return;
      }
      const currentValue = values[currentIndex];
      const newPercentage = currentValue;
      setPercentage(newPercentage);
      if (newPercentage < 30) {
        setCondition("Good");
        setColor('green');
      } else if (newPercentage >= 30 && newPercentage <= 70) {
        setCondition("Normal");
        setColor('yellow');
      } else {
        setCondition("Critical");
        setColor('red');
      }
      setCurrentIndex(currentIndex + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [currentIndex, values]);

  return (
    <div className="therm">
      <div className="thermometer">
        <div className="mercury" style={{ height: `${percentage}%`, backgroundColor: color }}></div>
        <div className="temperature">{percentage}{probs.unit}</div>
      </div>
      <h4>{probs.title}({probs.unit})</h4>
      <div className="condition" style={{ backgroundColor: color }}>{condition}</div>
   {/* <div style={{margin:'10px'}}> <label for='speed'>Speed:</label>
    <select name={'speed'} value={speed} onChange={(event)=>{
      setSpeed (parseInt(event.target.value))
    }}>
      <option value={1000}>1</option>
      <option value={2000}>2</option>
      <option value={3000}>3</option>
      <option value={4000}>4</option>
      <option value={5000}>5</option>

    </select></div> */}
    </div>
  );
};

export default Bar;