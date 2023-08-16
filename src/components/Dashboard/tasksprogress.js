// import PropTypes from 'prop-types';
// import { Card, Typography, Avatar, Progress } from 'antd';
// import { UnorderedListOutlined } from '@ant-design/icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faListUl } from '@fortawesome/free-solid-svg-icons';
// import '@fortawesome/fontawesome-svg-core/styles.css'; // Make sure to import this stylesheet for Font Awesome

// const { Meta } = Card;

// export const OverviewTasksProgress = (props) => {
//   const { value, sx } = props;

//   return (
//     <Card style={sx}>
//       <Meta
//         title={
//           <div>
//             <Typography.Text type="secondary" style={{ textTransform: 'uppercase' }}>
//               Task Progress
//             </Typography.Text>
//             <Typography.Title level={4}>{value}%</Typography.Title>
//           </div>
//         }
//         avatar={
//           <Avatar
//             style={{
//               backgroundColor: 'rgb(255,180,0)',
//               height: 56,
//               width: 56,
//             }}
//             icon={<FontAwesomeIcon icon={faListUl} style={{ fontSize: '24px' }} />}
//           />
//         }
//         description={
//           <Progress percent={value} showInfo={false} />
//         }
//       />
//     </Card>
//   );
// };

// OverviewTasksProgress.propTypes = {
//   value: PropTypes.number.isRequired,
//   sx: PropTypes.object,
// };


import PropTypes from 'prop-types';
import ListBulletIcon from '@heroicons/react/24/solid/ListBulletIcon';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  LinearProgress,
  Stack,
  SvgIcon,
  Typography
} from '@mui/material';

export const OverviewTasksProgress = (props) => {
  const { value, sx } = props;

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
              gutterBottom
              variant="overline"
            >
              Task Progress
            </Typography>
            <Typography variant="h4">
             78%
            </Typography>
          </Stack>
          <Avatar
            sx={{
              backgroundColor: 'warning.main',
              height: 56,
              width: 56
            }}
          >
            <SvgIcon>
              <ListBulletIcon />
            </SvgIcon>
          </Avatar>
        </Stack>
        <Box sx={{ mt: 3 }}>
          <LinearProgress
            value={value}
            variant="determinate"
          />
        </Box>
      </CardContent>
    </Card>
  );
};

OverviewTasksProgress.propTypes = {
  value: PropTypes.number.isRequired,
  sx: PropTypes.object
};