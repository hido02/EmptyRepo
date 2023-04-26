import { Outlet, useNavigate } from 'react-router-dom';
import {
  BottomNavigation, Box, CssBaseline, Paper
} from '@mui/material';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SettingsIcon from '@mui/icons-material/Settings';
import { useState } from 'react';

function HomeLayout() {
  const [tabMenu, setTabMenu] = useState(0);
  const navigate = useNavigate();
  return (
    <Box>
      <CssBaseline />
      <Box>
        <Outlet />
      </Box>
      <Paper
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          paddingBottom: 1,
        }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={tabMenu}
          onChange={(event, newValue) => {
            setTabMenu(newValue);
          }}
        >
          <BottomNavigationAction label="홈" icon={<RestoreIcon />} onClick={() => navigate('')} />
          <BottomNavigationAction label="상세페이지" icon={<FavoriteIcon />} onClick={() => navigate('/about')} />
          <BottomNavigationAction label="마이페이지" icon={<SettingsIcon />} onClick={() => navigate('/my-page')} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}

export default HomeLayout;
