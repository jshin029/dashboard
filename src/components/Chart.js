import React, {Component} from 'react';
import {Bar,Line,Pie} from 'react-chartjs-2';
import moment from 'moment';

class Chart extends Component {
  constructor(props){
    super(props);
    this.state = {
      chartData: props.chartData,
      error: null,
      labels: ['1', '2', '3'],
      datasets: [{}],
    }
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend:true,
    legendPosition:'right',
    location:'Location'
  }



  render(){
    if (this.props.chartType=='Bar' && this.props.units=='Section3'){
      return (
        <div className="chart">
          <Bar
            data={this.props.chartData}
            options={{
              legend: {
                display: false
              },
              scales: {
                xAxes: [{
                  type: 'time',
                  time:
                  {
                    stepSize: 1,
                    unit: 'day',
                    format: 'MMM DD',
                    parser: 'MMM DD',
                    displayFormats: { month: 'MMM DD' },
                    max: this.props.endDate,
                    min: this.props.startDate
                  }
                }],
                yAxes: [{
                  ticks: {
                    beginAtZero: true,
                    max: 400,
                    callback: function(value, index, values) {
                      return value + "° C";
                    }
                  }
                }]
              },
              maintainAspectRatio: false,
              title:{
                display:this.props.displayTitle,
                text: this.props.title,
              }
            }}
          />
        </div>
      );
    }

    else if  (this.props.chartType=='Line' && this.props.units=='Section3'){
      return (
        <div className="chart">
        <Line
          data={this.props.chartData}
          options={{
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                type: 'time',
                time:
                {
                  stepSize: 1,
                  unit: 'day',
                  format: 'MMM DD',
                  parser: 'MMM DD',
                  displayFormats: { month: 'MMM DD' },
                  max: this.props.endDate,
                  min: this.props.startDate
                }
              }],
              yAxes: [{
                ticks: {
                  beginAtZero: true,
                  max: 400,
                  callback: function(value, index, values) {
                    return value + "° C";
                  }
                }
              }]
            },
            maintainAspectRatio: false,
            title:{
              display:this.props.displayTitle,
              text: this.props.title,
            }
          }}
        />
        </div>
      );
    }

    else if  (this.props.chartType=='Pie' && this.props.units=='Section3'){
      return (
        <div className="chart">
        <Pie
          data={this.props.chartData}
          options={{
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                type: 'time',
                time:
                {
                  stepSize: 1,
                  unit: 'day',
                  format: 'MMM DD',
                  parser: 'MMM DD',
                  displayFormats: { month: 'MMM DD' },
                  max: this.props.endDate,
                  min: this.props.startDate
                }
              }],
              yAxes: [{
                ticks: {
                  beginAtZero: true,
                  max: 400,
                  callback: function(value, index, values) {
                    return value + "° C";
                  }
                }
              }]
            },
            maintainAspectRatio: false,
            title:{
              display:this.props.displayTitle,
              text: this.props.title,
            }
          }}
        />
        </div>
      );
    }

    else if (this.props.chartType=='Bar'){
      return (
        <div className="chart">
          <Bar
            data={this.props.chartData}
            options={{
              scales: {
                xAxes: [{
                  type: 'time',
                  time:
                  {
                    stepSize: 1,
                    unit: 'day',
                    format: 'MMM DD',
                    parser: 'MMM DD',
                    displayFormats: { month: 'MMM DD' },
                    max: this.props.endDate,
                    min: this.props.startDate
                  }
                }],
                yAxes: [{
                  ticks: {
                    beginAtZero: true
                  }
                }]
              },
              maintainAspectRatio: false,
              title:{
                display:this.props.displayTitle,
                text: this.props.title,
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
          data={this.props.chartData}
          options={{
            scales: {
              xAxes: [{
                type: 'time',
                time:
                {
                  stepSize: 1,
                  unit: 'day',
                  format: 'MMM DD',
                  parser: 'MMM DD',
                  displayFormats: { month: 'MMM DD' },
                  max: this.props.endDate,
                  min: this.props.startDate
                }
              }],
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            },
            maintainAspectRatio: false,
            title:{
              display:this.props.displayTitle,
              text: this.props.title,
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
        data={this.props.chartData}
        options={{
          scales: {
            xAxes: [{
              type: 'time',
              time:
              {
                stepSize: 1,
                unit: 'day',
                format: 'MMM DD',
                parser: 'MMM DD',
                displayFormats: { month: 'MMM DD' },
                max: this.props.endDate,
                min: this.props.startDate
              }
            }],
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          },
          maintainAspectRatio: false,
          title:{
            display:this.props.displayTitle,
            text: this.props.title,
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
