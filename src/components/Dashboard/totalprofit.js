// import PropTypes from 'prop-types';
// import { Card, Typography, Avatar } from 'antd';
// import { DollarOutlined } from '@ant-design/icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
// import '@fortawesome/fontawesome-svg-core/styles.css'; // Make sure to import this stylesheet for Font Awesome

// const { Meta } = Card;

// export const OverviewTotalProfit = (props) => {
//   const { value, sx } = props;

//   return (
//     <Card style={sx}>
//       <Meta
//         title={
//           <div>
//             <Typography.Text type="secondary" style={{ textTransform: 'uppercase' }}>
//               Total Profit
//             </Typography.Text>
//             <Typography.Title level={4}>{value}</Typography.Title>
//           </div>
//         }
//         avatar={
//           <Avatar
//             style={{
//               backgroundColor: 'rgb(24,144,255)',
//               height: 56,
//               width: 56,
//             }}
//             icon={<FontAwesomeIcon icon={faDollarSign} style={{ fontSize: '24px' }} />}
//           />
//         }
//       />
//     </Card>
//   );
// };

// OverviewTotalProfit.propTypes = {
//   value: PropTypes.string,
//   sx: PropTypes.object,
// };


import PropTypes from 'prop-types';
import CurrencyDollarIcon from '@heroicons/react/24/solid/CurrencyDollarIcon';
import { Avatar, Card, CardContent, Stack, SvgIcon, Typography } from '@mui/material';
import ArrowDownIcon from '@heroicons/react/24/solid/ArrowDownIcon';
import ArrowUpIcon from '@heroicons/react/24/solid/ArrowUpIcon';
export const OverviewTotalProfit = (props) => {
  const { value, sx ,positive} = props;

  return (
    <Card sx={sx}>
      <CardContent>
        <Stack
          alignItems="flex-start"
          direction="row"
          justifyContent="space-between"
          spacing={3}
        >
          <Stack spacing={1}>
            <Typography
              color="text.secondary"
              variant="overline"
            >
              Total Profit
            </Typography>
            <Typography variant="h4">
            $22K
            </Typography>
          </Stack>
          <Avatar
            sx={{
              backgroundColor: 'primary.main',
              height: 56,
              width: 56
            }}
          >
            <SvgIcon>
              <CurrencyDollarIcon />
            </SvgIcon>
          </Avatar>
        </Stack>
        <Stack alignItems="center" direction="row" spacing={2} sx={{ mt: 2 }}>
            <Stack alignItems="center" direction="row" spacing={0.5}>
              <SvgIcon color={positive ? 'success' : 'error'} fontSize="small">
                {positive ? <ArrowUpIcon /> : <ArrowDownIcon />}
              </SvgIcon>
              <Typography
                color={positive ? 'success.main' : 'error.main'}
                variant="body2"
              >
              17%
              </Typography>
            </Stack>
            <Typography color="text.secondary" variant="caption">
              Since last month
            </Typography>
          </Stack>
      </CardContent>
    </Card>
  );
};

OverviewTotalProfit.propTypes = {
  value: PropTypes.string,
  sx: PropTypes.object
};