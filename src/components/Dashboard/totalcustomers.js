// import PropTypes from 'prop-types';
// import { Card, Typography, Avatar } from 'antd';
// import { ArrowUpOutlined, ArrowDownOutlined, UserOutlined } from '@ant-design/icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUsers } from '@fortawesome/free-solid-svg-icons';
// import '@fortawesome/fontawesome-svg-core/styles.css'; // Make sure to import this stylesheet for Font Awesome

// const { Meta } = Card;

// export const OverviewTotalCustomers = (props) => {
//   const { difference, positive = false, sx, value } = props;

//   return (
//     <Card style={sx}>
//       <Meta
//         title={
//           <div>
//             <Typography.Text type="secondary" style={{ textTransform: 'uppercase' }}>
//               Total Customers
//             </Typography.Text>
//             <Typography.Title level={4}>{value}</Typography.Title>
//           </div>
//         }
//         avatar={
//           <Avatar
//             style={{
//               backgroundColor: 'rgb(82,196,26)',
//               height: 56,
//               width: 56,
//             }}
//             icon={<FontAwesomeIcon icon={faUsers} style={{ fontSize: '24px' }} />}
//           />
//         }
//         description={
//           difference && (
//             <div>
//               <div style={{ display: 'flex', alignItems: 'center' }}>
//                 <FontAwesomeIcon
//                   icon={positive ? ArrowUpOutlined : ArrowDownOutlined}
//                   style={{ color: positive ? 'rgb(82,196,26)' : 'red', marginRight: '4px' }}
//                 />
//                 <Typography.Text
//                   style={{
//                     color: positive ? 'rgb(82,196,26)' : 'red',
//                     fontSize: '14px',
//                     fontWeight: 'bold',
//                   }}
//                 >
//                   {difference}%
//                 </Typography.Text>
//               </div>
//               <Typography.Text type="secondary" style={{ fontSize: '12px' }}>
//                 Since last month
//               </Typography.Text>
//             </div>
//           )
//         }
//       />
//     </Card>
//   );
// };

// OverviewTotalCustomers.propTypes = {
//   difference: PropTypes.number,
//   positive: PropTypes.bool,
//   value: PropTypes.string.isRequired,
//   sx: PropTypes.object,
// };


import PropTypes from 'prop-types';
import ArrowDownIcon from '@heroicons/react/24/solid/ArrowDownIcon';
import ArrowUpIcon from '@heroicons/react/24/solid/ArrowUpIcon';
import UsersIcon from '@heroicons/react/24/solid/UsersIcon';
import { Avatar, Card, CardContent, Stack, SvgIcon, Typography } from '@mui/material';

export const OverviewTotalCustomers = (props) => {
  const { difference, positive = false, sx, value } = props;

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
              Total Customers
            </Typography>
            <Typography variant="h4">
              1.1K
            </Typography>
          </Stack>
          <Avatar
            sx={{
              backgroundColor: 'success.main',
              height: 56,
              width: 56
            }}
          >
            <SvgIcon>
              <UsersIcon />
            </SvgIcon>
          </Avatar>
        </Stack>
       
          <Stack
            alignItems="center"
            direction="row"
            spacing={2}
            sx={{ mt: 2 }}
          >
            <Stack
              alignItems="center"
              direction="row"
              spacing={0.5}
            >
              <SvgIcon
                color={positive ? 'success' : 'error'}
                fontSize="small"
              >
                {positive ? <ArrowUpIcon /> : <ArrowDownIcon />}
              </SvgIcon>
              <Typography
                color={positive ? 'success.main' : 'error.main'}
                variant="body2"
              >
               19%
              </Typography>
            </Stack>
            <Typography
              color="text.secondary"
              variant="caption"
            >
              Since last month
            </Typography>
          </Stack>
        
      </CardContent>
    </Card>
  );
};

OverviewTotalCustomers.propTypes = {
  difference: PropTypes.number,
  positive: PropTypes.bool,
  value: PropTypes.string.isRequired,
  sx: PropTypes.object
};