import React, { Component } from 'react';
//import DonutChart from "react-svg-donut-chart"
import DonutChart from 'react-donut-chart';

class ChartDonut extends Component {

    render() {
        return (
            
            <DonutChart
                height = {this.props.data.height}
                width = {this.props.data.width}
                legend = {this.props.data.legend}
                clickToggle = {this.props.data.clickToggle}
                toggledOffset = {this.props.data.toggledOffset}
                selectedOffset = {this.props.data.selectedOffset}
                strokeColor = {this.props.data.strokeColor}
                //onMouseEnter = {(item) => null}
                // formatValues = {(values, total) => `$ ${(total).toFixed(2)}`}
                formatValues = {this.props.data.formatValues}
                colors = {this.props.data.colors}
                data={this.props.data.data}

            />

        );
    }
}

export default ChartDonut;


// import React from "react"
// import DonutChart from "react-svg-donut-chart"
 
// const dataPie = [
//     {value: 100, stroke: "#22594e", strokeWidth: 6},
//     {value: 60, stroke: "#2f7d6d"},
//     {value: 30, stroke: "#3da18d"},
//     {value: 20, stroke: "#69c2b0"},
//     {value: 10, stroke: "#a1d9ce"},
//   ]
 
// const App = () => <DonutChart data={data} />