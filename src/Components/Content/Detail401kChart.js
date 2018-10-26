import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {MdKeyboardArrowRight} from 'react-icons/lib/md'; // MdError
import ChartDonut from "../Utility/ChartDonut"
    
let dataStyle = {
    flexDirection:'column',
    alignItems: 'flex-start'
}, 
warnStyle = {marginTop:'8px'}

const dataContribution = {
    'height' : 140,
    'width' :140,
    'legend' :false,
    'clickToggle' : false,
    'toggledOffset' : 0,
    'selectedOffset' : 0,
    'strokeColor' : '#fff',
    'formatValues' : (values, total) => `$ ${(total).toFixed(2)}`,

    'colors' :  ['#00bcd4', '#ff9800', '#f44336', '#607d8b', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff5722', '#795548' ],
    'data' : [
        {
            label: 'Employee Contribution',
            value: 5689
        },
        {
            label: 'Employer Contribution',
            value: 2488
        }
    ]
}
const dataNonContri = {
    'height' : 140,
    'width' :140,
    'legend' :false,
    'clickToggle' : false,
    'toggledOffset' : 0,
    'selectedOffset' : 0,
    'strokeColor' : '#fff',
    // 'formatValues' : (values, total) => `$ ${(total - values).toFixed(2)}`,
    'formatValues' : (values, total) => `$ ${(total).toFixed(2)}`,

    'colors' :  ['#ff9800', '#735090', '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722', '#795548', '#607d8b' ],
    'data' : [
        {
            label: 'Employee Contribution',
            value: 2133
        },
        {
            label: 'Employer Contribution',
            value: 2488
        }
    ]
}
const dataInvestment = {
    'height' : 140,
    'width' :140,
    'legend' :false,
    'clickToggle' : false,
    'toggledOffset' : 0,
    'selectedOffset' : 0,
    'strokeColor' : '#fff',
    // 'formatValues' : (values, total) => `${(values / total * 100).toFixed(2)}%`,
    'formatValues' : (values, total) => `$ ${(total).toFixed(2)}`,
    'colors' :  ['#2196f3', '#673ab7', '#03a9f4', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722', '#795548', '#607d8b' ],
    'data' : [
        {
            label: 'GIC Stable Value',
            value: 430
        },
        {
            label: 'Large U.S. Equity',
            value: 1900
        },
        {
            label: 'Bond',
            value: 3000
        },
        {
            label: 'Small U.S Equity',
            value: 109
        },
        {
            label: 'International Funds',
            value: 6780
        }
    ]
}
const dataNonInvestment = {
    'height' : 140,
    'width' :140,
    'legend' :false,
    'clickToggle' : false,
    'toggledOffset' : 0,
    'selectedOffset' : 0,
    'strokeColor' : '#fff',
    // 'formatValues' : (values, total) => `${(values / total * 100).toFixed(2)}%`,
    'formatValues' : (values, total) => `$ ${(total).toFixed(2)}`,
    'colors' :  ['#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722', '#795548', '#607d8b', '#2196f3', '#673ab7', '#03a9f4', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4'],
    'data' : [
        {
            label: 'GIC Stable Value',
            value: 500
        },
        {
            label: 'Large U.S. Equity',
            value: 210
        },
        {
            label: 'Bond',
            value: 456
        },
        {
            label: 'Small U.S Equity',
            value: 700
        }
    ]
}

class Detail401kChart extends Component {

    render() {

        return (
            <div>
                <div className="card-detail">
                    <div className="card-detail-row">    
                        <h5>
                            401(k)
                            <div style={warnStyle}>
                                <p className="warn">You're not getting the full company match</p>
                            </div>
                        </h5>
                        
                        <div style={dataStyle}>
                            <div>
                                <h6>Contribution</h6>
                                <ChartDonut data={dataContribution} />
                            </div>
                            <Link className="button" to="/blank">Get full match</Link>
                            
                        </div>

                        <div style={dataStyle}>
                            <div>
                            <h6>Investment Mix</h6>
                                <ChartDonut data={dataInvestment} />
                            </div>
                            <Link style={{visibility:'hidden'}} className="button" to="/blank">Get full match</Link>
                        </div>

                        <Link to="/blank">Plan details<MdKeyboardArrowRight /></Link>
                    </div>
                </div>

                <div className="card-detail">
                    <div className="card-detail-row">    
                        <h5>
                            Non-qualified savings
                        </h5>
                        
                        <div style={dataStyle}>
                            <div>
                                <h6>Contribution</h6>
                                <ChartDonut data={dataNonContri} />
                            </div>
                        </div>

                        <div style={dataStyle}>
                            <div>
                                <h6>Investment Mix</h6>
                                <ChartDonut data={dataNonInvestment} />
                            </div>
                        </div>

                        <Link to="/blank">Plan details<MdKeyboardArrowRight /></Link>
                    </div>
                </div>

            </div>
        );
    }
}

export default Detail401kChart;