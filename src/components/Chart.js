import React, {Component} from 'react';
import {Bar,Line,Pie} from 'react-chartjs-2';

class Chart extends Component {
  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData,
      error: null
    }
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend:true,
    legendPosition:'right',
    location:'Location'
  }

  render(){
    if (this.props.chartType=='Bar'){
      return (
        <div className="chart">
          <Bar
            data={this.state.chartData}
            options={{
              title:{
                display:this.props.displayTitle,
                text:'Location is in: ' + this.props.location,
              },
              legend:{
                display:this.props.displayLegend,
                position:'right'
              }
            }}
          />
        </div>
      );
  }

    else if (this.props.chartType=='Line'){
      return (
        <div className="chart">
          <Line
            data={this.state.chartData}
            options={{
              title:{
                display:this.props.displayTitle,
                text:'Location is in: ' + this.props.location,
              },
              legend:{
                display:this.props.displayLegend,
                position:'right'
              }
            }}
          />
        </div>
      );
  }

  else if (this.props.chartType=='Pie'){
    return (
      <div className="chart">
        <Pie
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Location is in: ' + this.props.location,
            },
            legend:{
              display:this.props.displayLegend,
              position:'right'
            }
          }}
        />
      </div>
    );
}
}
};

export default Chart;
