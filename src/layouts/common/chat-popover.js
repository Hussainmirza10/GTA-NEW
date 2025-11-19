import { m } from 'framer-motion';
import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import { alpha } from '@mui/material/styles';

import { useBoolean } from 'src/hooks/use-boolean';
import { useResponsive } from 'src/hooks/use-responsive';

import { fToNow } from 'src/utils/format-time';

import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';
import { varHover } from 'src/components/animate';

// ----------------------------------------------------------------------

const MOCK_CHATS = [
  {
    id: 1,
    name: 'Ahmed Ali',
    message: 'Hi, I am interested in the BMW 3 Series',
    avatar: null,
    time: '5 min ago',
    unread: 2,
    online: true,
  },
  {
    id: 2,
    name: 'Sara Khan',
    message: 'When can I schedule a test drive?',
    avatar: null,
    time: '15 min ago',
    unread: 0,
    online: true,
  },
  {
    id: 3,
    name: 'Usman Butt',
    message: 'Thank you for the quick response!',
    avatar: null,
    time: '1 hour ago',
    unread: 0,
    online: false,
  },
  {
    id: 4,
    name: 'Fatima Sheikh',
    message: 'Can you send me more details about the financing options?',
    avatar: null,
    time: '2 hours ago',
    unread: 1,
    online: true,
  },
  {
    id: 5,
    name: 'Hassan Malik',
    message: 'I would like to see the Mercedes-Benz C-Class',
    avatar: null,
    time: '3 hours ago',
    unread: 0,
    online: false,
  },
];

// ----------------------------------------------------------------------

export default function ChatPopover() {
  const drawer = useBoolean();
  const smUp = useResponsive('up', 'sm');

  const totalUnread = MOCK_CHATS.filter((chat) => chat.unread > 0).reduce(
    (sum, chat) => sum + chat.unread,
    0
  );

  const renderHead = (
    <Stack
      direction="row"
      alignItems="center"
      sx={{ py: 2, pl: 2.5, pr: 1, minHeight: 68 }}
    >
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        Messages
      </Typography>

      <Tooltip title="Mark all as read">
        <IconButton color="primary">
          <Iconify icon="eva:done-all-fill" />
        </IconButton>
      </Tooltip>

      {!smUp && (
        <IconButton onClick={drawer.onFalse}>
          <Iconify icon="mingcute:close-line" />
        </IconButton>
      )}
    </Stack>
  );

  const renderList = (
    <Scrollbar sx={{ height: 400 }}>
      <List disablePadding>
        {MOCK_CHATS.map((chat) => (
          <MenuItem
            key={chat.id}
            sx={{
              px: 2.5,
              py: 1.5,
              borderBottom: (theme) => `dashed 1px ${theme.palette.divider}`,
              '&:hover': {
                backgroundColor: (theme) => alpha(theme.palette.grey[500], 0.08),
              },
            }}
          >
            <Badge
              variant={chat.online ? 'online' : 'offline'}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              sx={{ mr: 2 }}
            >
              <Avatar
                sx={{
                  width: 48,
                  height: 48,
                  bgcolor: 'background.neutral',
                }}
              >
                {chat.name.charAt(0).toUpperCase()}
              </Avatar>
            </Badge>

            <ListItemText
              primary={
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                  <Typography variant="subtitle2" sx={{ fontWeight: chat.unread > 0 ? 600 : 400 }}>
                    {chat.name}
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.disabled' }}>
                    {chat.time}
                  </Typography>
                </Stack>
              }
              secondary={
                <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 0.5 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      flex: 1,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {chat.message}
                  </Typography>
                  {chat.unread > 0 && (
                    <Box
                      sx={{
                        minWidth: 20,
                        height: 20,
                        borderRadius: '50%',
                        bgcolor: 'error.main',
                        color: 'common.white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        typography: 'caption',
                        fontWeight: 600,
                        px: 0.5,
                      }}
                    >
                      {chat.unread}
                    </Box>
                  )}
                </Stack>
              }
            />
          </MenuItem>
        ))}
      </List>
    </Scrollbar>
  );

  return (
    <>
      <IconButton
        component={m.button}
        whileTap="tap"
        whileHover="hover"
        variants={varHover(1.05)}
        color={drawer.value ? 'primary' : 'default'}
        onClick={drawer.onTrue}
      >
        <Badge badgeContent={totalUnread} color="error">
          <Iconify icon="solar:chat-round-dots-bold-duotone" width={24} />
        </Badge>
      </IconButton>

      <Drawer
        open={drawer.value}
        onClose={drawer.onFalse}
        anchor="right"
        slotProps={{
          backdrop: { invisible: true },
        }}
        PaperProps={{
          sx: { width: 1, maxWidth: 380 },
        }}
      >
        {renderHead}

        <Divider />

        {renderList}

        <Box sx={{ p: 2 }}>
          <Button fullWidth size="large" variant="contained">
            View All Messages
          </Button>
        </Box>
      </Drawer>
    </>
  );
}

