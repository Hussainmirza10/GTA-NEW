import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import { alpha } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { useMockedUser } from 'src/hooks/use-mocked-user';

import { useAuthContext } from 'src/auth/hooks';

import { varHover } from 'src/components/animate';
import { useSnackbar } from 'src/components/snackbar';
import CustomPopover, { usePopover } from 'src/components/custom-popover';
import { emptySessionStorage } from 'src/auth/context/jwt/utils';
import Link from 'next/link';

// ----------------------------------------------------------------------

const OPTIONS = [
  {
    label: 'Home',
    linkTo: '/',
  },
  {
    label: 'Profile',
    linkTo: paths.dashboard.user.profile,
  },
  {
    label: 'Settings',
    linkTo: paths.dashboard.user.account,
  },
];

// ----------------------------------------------------------------------

export default function AccountPopover() {
  const router = useRouter();

  const auth = useAuthContext();
  const { user = {} } = auth?.user || {};
  const logout = auth.logout;

  const { user: DUMMY_DATA } = useMockedUser();

  const { enqueueSnackbar } = useSnackbar();

  const popover = usePopover();

  const handleLogout = async () => {
    try {
      await logout();
      emptySessionStorage();
      popover.onClose();
      router.replace('/login');
    } catch (error) {
      console.error(error);
      enqueueSnackbar('Unable to logout!', { variant: 'error' });
    }
  };

  const handleClickItem = (path) => {
    popover.onClose();
    router.push(path);
  };

  return (
    <>
      <Box
        component={m.button}
        whileTap="tap"
        whileHover="hover"
        variants={varHover(1.05)}
        onClick={popover.onOpen}
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          cursor: 'pointer',
          px: 1,
          py: 0.5,
          borderRadius: 1,
          background: 'transparent',
          border: 'none',
          '&:hover': {
            backgroundColor: (theme) => alpha(theme.palette.grey[500], 0.08),
          },
          ...(popover.open && {
            backgroundColor: (theme) => alpha(theme.palette.grey[500], 0.08),
          }),
        }}
      >
        <Avatar
          sx={{
            width: 32,
            height: 32,
          }}
        >
          {user.role === 'admin' ? 'A' : user?.name?.charAt(0).toUpperCase()}
        </Avatar>
        <Typography variant="body2" sx={{ fontWeight: 500 }}>
          {user.role === 'admin' ? 'Admin' : user?.name || 'User'}
        </Typography>
        <Iconify
          icon="eva:arrow-ios-downward-fill"
          sx={{ width: 16, height: 16, color: 'text.disabled' }}
        />
      </Box>

      <CustomPopover open={popover.open} onClose={popover.onClose} sx={{ width: 200, p: 0 }}>
        <Box sx={{ p: 2, pb: 1.5 }}>
          <Typography sx={{ textTransform: 'capitalize' }} variant="subtitle2" noWrap>
            {user.role === 'admin' ? 'Admin' : user?.name}
          </Typography>

          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {user?.email}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />

        {/* <Stack sx={{ p: 1 }}>
          {OPTIONS.map((option) => (
            <MenuItem key={option.label} onClick={() => handleClickItem(option.linkTo)}>
              {option.label}
            </MenuItem>
          ))}
        </Stack> */}

        <Divider sx={{ borderStyle: 'dashed' }} />

        <MenuItem sx={{ m: 1, fontWeight: 'fontWeightBold' }}>
          <Link
            style={{ textDecoration: 'none', color: 'black' }}
            href={paths.dashboard.user.profile}
          >
            Profile
          </Link>
        </MenuItem>

        <MenuItem
          onClick={handleLogout}
          sx={{ m: 1, fontWeight: 'fontWeightBold', color: 'error.main' }}
        >
          Logout
        </MenuItem>
      </CustomPopover>
    </>
  );
}
