


// import React from 'react';
// import PropTypes from 'prop-types';
// import './Dashboard.css'
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   Stack,
//   useTheme
// } from '@mui/material';
// import ApexChart from 'react-apexcharts';

// export const OverviewProfitCustomers = ({ sx }) => {
//   const theme = useTheme();
//   const chartData = [40, 30, 15, 7, 5, 3];// Sample data for chart series (percentages)
//   const labels = ['Apple', 'Samsung', 'RP Chemicals', 'Wipro', 'Infosys', 'Others']; // Sample labels for the data
  

//   const useChartOptions = (labels) => {
//     const theme = useTheme();
   
//     return {
//       chart: {
//         background: 'transparent'
//       },
//       colors: [
//         theme.palette.primary.main,
//         theme.palette.success.main,
//         theme.palette.warning.main,
//         theme.palette.info.main,
//         theme.palette.secondary.main,
//         theme.palette.error.main
//       ],
//       dataLabels: {
//               enabled: false
//             },
//       tooltip: {
//         enabled: true,
//         custom: function({ seriesIndex }) {
//           const companyName = labels[seriesIndex];
//           const percentage = chartData[seriesIndex]; // Get the percentage from the chartData array
//           return `<div class="custom-tooltip">
//                     <div class="tooltip-label">${companyName}</div>
//                     <div class="tooltip-value">${percentage}%</div>
//                   </div>`;
//         }
//       },
//       plotOptions: {
//         pie: {
//           donut: {
//             size: '15%' // Adjust this value to control the size of the inner circle
//           }
//         }
//       },
//       legend: {
//         show: true,
//         formatter: function (seriesName, opts) {
//           return labels[opts.seriesIndex];
//         },
//         markers: {
//           width: 15,
//           height: 15,
//           radius: 0,
//         },
//       },
//       // Rest of the options...
//     };
//   };
//   const chartOptions = useChartOptions(labels);
//   return (
//     <Card sx={sx}>
//       <CardHeader style={{textAlign:'center'}} title="TOP % PROFIT CUSTOMERS" />
//       <CardContent>
//         <ApexChart
//           options={chartOptions}
//           series={chartData}
//           type="donut"
//           height={208}
//         />
//       </CardContent>
//     </Card>
//   );
// };

// OverviewProfitCustomers.propTypes = {
//   sx: PropTypes.object
// };



import React from 'react';
import PropTypes from 'prop-types';
import './Dashboard.css'
import {
  Card,
  CardContent,
  CardHeader,
  useTheme
} from '@mui/material';
import ApexChart from 'react-apexcharts';

export const OverviewProfitCustomers = ({ sx }) => {
  const theme = useTheme();
  const chartData = [40, 30, 15, 7, 5, 3];
  const labels = ['Apple', 'Samsung', 'RP Chemicals', 'Wipro', 'Infosys', 'Others'];

  const useChartOptions = () => {
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
          const percentage = chartData[seriesIndex];
          return `<div class="custom-tooltip">
                    <div class="tooltip-label">${companyName}</div>
                    <div class="tooltip-value">${percentage}%</div>
                  </div>`;
        }
      },
      plotOptions: {
        pie: {
          donut: {
            size: '15%'
          }
        }
      },
      legend: {
        show: true,
        markers: {
          width: 12,
          height: 12,
          radius: 0
        },
        formatter: function(val, opts) {
          return labels[opts.seriesIndex];
        },
        position: 'right'
      }
    };
  };

  const chartOptions = useChartOptions();

  return (
    <Card sx={sx}>
      <CardHeader className='card-header' title="TOP 5% PROFIT CUSTOMERS" />
      <CardContent>
        <div className="chart-legend-grid">
          <div className="chart-container">
            <ApexChart
              options={chartOptions}
              series={chartData}
              type="donut"
              height={208}
            />
          </div>
          {/* <div className="legend">
            {labels.map((label, index) => (
              <div key={index} className="legend-item">
                <span className="color-box" style={{ backgroundColor: chartOptions.colors[index] }}></span>
                {label}
              </div>
            ))}
          </div> */}
        </div>
      </CardContent>
    </Card>
  );
};

OverviewProfitCustomers.propTypes = {
  sx: PropTypes.object
};
