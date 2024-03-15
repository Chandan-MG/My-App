import React from "react";
import './Chart.css';
import ChartBar from "./ChartBar";

const Chart = (props) =>{

    const dataPointValues = props.items.map(item => item.value);
    const totalMaxValue = Math.max(...dataPointValues);
    return(
        <div className="chart">
            {
                props.items.map(item => (
                    <ChartBar 
                        key={item.label}
                        value={item.value} 
                        maxValue={totalMaxValue} 
                        label = {item.label}
                    />
                )) //here we passing value to chartBar
            }
        </div>
    )
}
export default Chart;