import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import { alpha } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

import { useOffSetTop } from 'src/hooks/use-off-set-top';
import { useResponsive } from 'src/hooks/use-responsive';

import { bgBlur } from 'src/theme/css';

import Logo from 'src/components/logo';
import SvgColor from 'src/components/svg-color';
import Iconify from 'src/components/iconify';
import { useSettingsContext } from 'src/components/settings';
import { useAuthContext } from 'src/auth/hooks';

import { NAV, HEADER } from '../config-layout';
import AccountPopover from '../common/account-popover';
import NotificationsPopover from '../common/notifications-popover';
import ChatPopover from '../common/chat-popover';

// ----------------------------------------------------------------------

export default function Header({ onOpenNav }) {
  const theme = useTheme();

  const settings = useSettingsContext();

  const isNavHorizontal = settings.themeLayout === 'horizontal';

  const isNavMini = settings.themeLayout === 'mini';

  const lgUp = useResponsive('up', 'lg');

  const offset = useOffSetTop(HEADER.H_DESKTOP);

  const offsetTop = offset && !isNavHorizontal;

  const auth = useAuthContext();
  const { user = {} } = auth?.user || {};

  const renderContent = (
    <>
      <IconButton onClick={onOpenNav} sx={{ mr: 1 }}>
        <SvgColor src="/assets/icons/navbar/ic_menu_item.svg" />
      </IconButton>

      <Logo sx={{ mr: 3 }} />

      <Box
        sx={{
          flexGrow: 1,
          maxWidth: { xs: 300, md: 400 },
          mx: 'auto',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            borderRadius: 1,
            backgroundColor: alpha(theme.palette.grey[500], 0.12),
            '&:hover': {
              backgroundColor: alpha(theme.palette.grey[500], 0.16),
            },
            transition: theme.transitions.create(['background-color']),
          }}
        >
          <InputBase
            fullWidth
            placeholder="Search"
            startAdornment={
              <Iconify
                icon="eva:search-fill"
                sx={{
                  ml: 1.5,
                  color: 'text.disabled',
                  width: 20,
                  height: 20,
                }}
              />
            }
            sx={{
              py: 1,
              px: 1.5,
              width: '100%',
              '& .MuiInputBase-input': {
                typography: 'body2',
                padding: 0,
              },
            }}
          />
        </Box>
      </Box>

      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        sx={{ ml: 'auto' }}
      >
        <NotificationsPopover />

        <ChatPopover />

        <AccountPopover />
      </Stack>
    </>
  );

  return (
    <AppBar
      sx={{
        height: HEADER.H_MOBILE,
        zIndex: theme.zIndex.appBar + 1,
        ...bgBlur({
          color: theme.palette.background.default,
        }),
        transition: theme.transitions.create(['height'], {
          duration: theme.transitions.duration.shorter,
        }),
        ...(lgUp && {
          width: `calc(100% - ${NAV.W_VERTICAL + 1}px)`,
          height: HEADER.H_DESKTOP,
          ...(offsetTop && {
            height: HEADER.H_DESKTOP_OFFSET,
          }),
          ...(isNavHorizontal && {
            width: 1,
            bgcolor: 'background.default',
            height: HEADER.H_DESKTOP_OFFSET,
            borderBottom: `dashed 1px ${theme.palette.divider}`,
          }),
          ...(isNavMini && {
            width: `calc(100% - ${NAV.W_MINI + 1}px)`,
          }),
        }),
      }}
    >
      <Toolbar
        sx={{
          height: 1,
          px: { lg: 5 },
        }}
      >
        {renderContent}
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  onOpenNav: PropTypes.func,
};
