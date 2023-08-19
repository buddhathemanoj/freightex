


import React from 'react';
import PropTypes from 'prop-types';
import './Dashboard.css'
import {
  Card,
  CardContent,
  CardHeader,
  Stack,
  useTheme
} from '@mui/material';
import ApexChart from 'react-apexcharts';

export const OverviewVolumeCustomers = ({ sx }) => {
  const theme = useTheme();
  const chartData = [40, 30, 15, 7, 5, 3];// Sample data for chart series (percentages)
  const labels = ['Apple', 'Samsung', 'RP Chemicals', 'Wipro', 'Infosys', 'Others']; // Sample labels for the data
  

  const useChartOptions = (labels) => {
    const theme = useTheme();
   
    return {
      chart: {
        background: 'transparent'
      },
      colors: [
        theme.palette.primary.main,
        theme.palette.success.main,
        theme.palette.warning.main,
        theme.palette.info.main,
        theme.palette.secondary.main,
        theme.palette.error.main
      ],
      dataLabels: {
              enabled: false
            },
      tooltip: {
        enabled: true,
        custom: function({ seriesIndex }) {
          const companyName = labels[seriesIndex];
          const percentage = chartData[seriesIndex]; // Get the percentage from the chartData array
          return `<div class="custom-tooltip">
                    <div class="tooltip-label">${companyName}</div>
                    <div class="tooltip-value">${percentage}%</div>
                  </div>`;
        }
      },
      plotOptions: {
        pie: {
          donut: {
            size: '15%' // Adjust this value to control the size of the inner circle
          }
        }
      },
      legend: {
        show: true,
        formatter: function (seriesName, opts) {
          return labels[opts.seriesIndex];
        },
        markers: {
          width: 15,
          height: 15,
          radius: 0,
        },
      },
      // Rest of the options...
    };
  };
  const chartOptions = useChartOptions(labels);
  return (
    <Card sx={sx}>
      <CardHeader style={{textAlign:'center'}} title="TOP % VOLUME CUSTOMERS (NO.OF B/L B , AWB)" />
      <CardContent>
        <ApexChart
          options={chartOptions}
          series={chartData}
          type="donut"
          height={208}
        />
      </CardContent>
    </Card>
  );
};

OverviewVolumeCustomers.propTypes = {
  sx: PropTypes.object
};
