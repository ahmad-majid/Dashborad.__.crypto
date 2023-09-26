import React, { Component } from "react";
import Chart from "react-apexcharts";

class HistoricalPriceChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chartOptions: {
        chart: {
          id: "historical-price-chart",
          toolbar: {
            show: false, // Hide chart toolbar
          },
        },
        xaxis: {
          type: "datetime",
        },
        yaxis: {
          labels: {
            formatter: function (value) {
              return "$" + value.toFixed(2);
            },
          },
        },
        tooltip: {
          x: {
            format: "dd MMM yyyy",
          },
          y: {
            formatter: function (value) {
              return "$" + value.toFixed(2);
            },
          },
        },
      },
      series: [
        {
          name: "Price (USD)",
          data: [],
        },
      ],
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.Id !== this.props.Id) {
      // Fetch historical price data based on this.props.Id and update the chart data
      this.fetchHistoricalData();
    }
  }

  fetchHistoricalData = async () => {
    try {
      // Make an API request to fetch historical price data
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${this.props.Id}/market_chart?vs_currency=usd&days=30`
      );
      const data = await response.json();

      // Extract the price data
      const priceData = data.prices.map((item) => [item[0], item[1]]);

      // Update the chart data
      this.setState({
        series: [
          {
            name: "Price (USD)",
            data: priceData,
          },
        ],
      });
    } catch (error) {
      console.error("Error fetching historical price data:", error);
    }
  };

  componentDidMount() {
    // Initial fetch of historical data
    this.fetchHistoricalData();
  }

  render() {
    return (
      <div className="historical-price-chart">
        <Chart
          options={this.state.chartOptions}
          series={this.state.series}
          type="area"
          height={350}
        />
      </div>
    );
  }
}

export default HistoricalPriceChart;
