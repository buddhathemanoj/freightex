// import PropTypes from 'prop-types';
// import ArrowPathIcon from '@heroicons/react/24/solid/ArrowPathIcon';
// import ArrowRightIcon from '@heroicons/react/24/solid/ArrowRightIcon';
// import {
//   Button,
//   Card,
//   CardActions,
//   CardContent,
//   CardHeader,
//   Divider,
//   SvgIcon
// } from '@mui/material';
// import { alpha, useTheme } from '@mui/material/styles';
// import { Chart } from './chart';

// const useChartOptions = () => {
//   const theme = useTheme();

//   return {
//     chart: {
//       background: 'transparent',
//       stacked: false,
//       toolbar: {
//         show: false
//       }
//     },
//     colors: [theme.palette.primary.main, alpha(theme.palette.primary.main, 0.25)],
//     dataLabels: {
//       enabled: false
//     },
//     fill: {
//       opacity: 1,
//       type: 'solid'
//     },
//     grid: {
//       borderColor: theme.palette.divider,
//       strokeDashArray: 2,
//       xaxis: {
//         lines: {
//           show: false
//         }
//       },
//       yaxis: {
//         lines: {
//           show: true
//         }
//       }
//     },
//     legend: {
//       show: false
//     },
//     plotOptions: {
//       bar: {
//         columnWidth: '40px'
//       }
//     },
//     stroke: {
//       colors: ['transparent'],
//       show: true,
//       width: 2
//     },
//     theme: {
//       mode: theme.palette.mode
//     },
//     xaxis: {
//       axisBorder: {
//         color: theme.palette.divider,
//         show: true
//       },
//       axisTicks: {
//         color: theme.palette.divider,
//         show: true
//       },
//       categories: [
//         'Jan',
//         'Feb',
//         'Mar',
//         'Apr',
//         'May',
//         'Jun',
//         'Jul',
//         'Aug',
//         'Sep',
//         'Oct',
//         'Nov',
//         'Dec'
//       ],
//       labels: {
//         offsetY: 5,
//         style: {
//           colors: theme.palette.text.secondary
//         }
//       }
//     },
//     yaxis: {
//       labels: {
//         formatter: (value) => (value > 0 ? `${value}K` : `${value}`),
//         offsetX: -10,
//         style: {
//           colors: theme.palette.text.secondary
//         }
//       }
//     }
//   };
// };

// export const OverviewSales = (props) => {
//   const { chartSeries, sx } = props;
//   const chartOptions = useChartOptions();

//   return (
//     <Card sx={sx}>
//       <CardHeader
//         action={(
//           <Button
//             color="inherit"
//             size="small"
//             startIcon={(
//               <SvgIcon fontSize="small">
//                 <ArrowPathIcon />
//               </SvgIcon>
//             )}
//           >
//             Sync
//           </Button>
//         )}
//         title="Sales"
//       />
//       <CardContent>
//         <Chart
//           height={350}
//           options={chartOptions}
//           series={chartSeries}
//           type="bar"
//           width="100%"
//         />
//       </CardContent>
//       <Divider />
//       <CardActions sx={{ justifyContent: 'flex-end' }}>
//         <Button
//           color="inherit"
//           endIcon={(
//             <SvgIcon fontSize="small">
//               <ArrowRightIcon />
//             </SvgIcon>
//           )}
//           size="small"
//         >
//           Overview
//         </Button>
//       </CardActions>
//     </Card>
//   );
// };

// OverviewSales.protoTypes = {
//   chartSeries: PropTypes.array.isRequired,
//   sx: PropTypes.object
// };


import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, CardHeader, Divider, SvgIcon } from '@mui/material';
import { styled, alpha, useTheme } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp, faArrowAltCircleDown, faChartBar } from '@fortawesome/free-solid-svg-icons';
import ApexChart from 'react-apexcharts';
import { createTheme } from '@mui/material/styles';


const theme = createTheme({
    palette: {
      primary: {
        main: '#1976D2', // Use a supported color value here
      },
      // ... Other palette colors
    },
    // ... Other theme configurations
  });
// Styled chart component
const StyledChart = styled(ApexChart)``;

// Sample data for the chart
const sampleChartData = {
    options: {
      chart: {
        background: 'transparent',
        stacked: false,
        toolbar: {
          show: false,
        },
      },
      colors: [theme.palette.primary.main, alpha(theme.palette.primary.main, 0.25)],
      // ... Other chart options
      yaxis: {
        labels: {
          formatter: (value) => (value > 0 ? `${value}K` : `${value}`),
          offsetX: -10,
          style: {
            colors: theme.palette.text.secondary,
          },
        },
      },
    },
    series: [
      {
        name: 'Sales',
        data: [50, 70, 60, 80, 85, 100, 90, 110, 120, 150, 130, 140],
      },
    ],
  };

export const OverviewSales = () => {
  const theme = useTheme();
  const chartOptions = {
    ...sampleChartData.options,
    xaxis: {
      ...sampleChartData.options.xaxis,
      categories: [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
      ],
    },
    yaxis: {
      ...sampleChartData.options.yaxis,
      labels: {
        ...sampleChartData.options.yaxis.labels,
        formatter: (value) => (value > 0 ? `${value}K` : `${value}`),
      },
    },
  };

  return (
    <Card>
      <CardHeader
        title="Sales"
        action={(
          <FontAwesomeIcon icon={faChartBar} />
        )}
      />
      <CardContent>
        <StyledChart
          type="bar"
          height={350}
          width="100%"
          options={chartOptions}
          series={sampleChartData.series}
        />
      </CardContent>
      <Divider />
    </Card>
  );
};

OverviewSales.propTypes = {
  // Add any prop types if needed
};
