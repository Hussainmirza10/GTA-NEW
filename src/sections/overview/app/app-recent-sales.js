import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import InputBase from '@mui/material/InputBase';

import { fCurrency } from 'src/utils/format-number';

import Label from 'src/components/label';
import Iconify from 'src/components/iconify';
import { useTheme, alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function AppRecentSales({ title, subheader, tableData, ...other }) {
  const theme = useTheme();

  return (
    <Card {...other}>
      <Box sx={{ p: 3, pb: 1 }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: 2,
          }}
        >
          <Box>
            <Box component="span" sx={{ typography: 'h6', display: 'block' }}>
              {title}
            </Box>
            <Box component="span" sx={{ typography: 'body2', color: 'text.secondary' }}>
              {subheader}
            </Box>
          </Box>
          <Box
            sx={{
              position: 'relative',
              borderRadius: 1,
              backgroundColor: alpha(theme.palette.grey[500], 0.12),
              '&:hover': {
                backgroundColor: alpha(theme.palette.grey[500], 0.16),
              },
            }}
          >
            <InputBase
              placeholder="Search"
              startAdornment={
                <Iconify
                  icon="eva:search-fill"
                  sx={{
                    ml: 1,
                    color: 'text.disabled',
                    width: 20,
                    height: 20,
                  }}
                />
              }
              sx={{
                py: 0.5,
                px: 1,
                width: 200,
                '& .MuiInputBase-input': {
                  typography: 'body2',
                  padding: 0,
                },
              }}
            />
          </Box>
        </Box>
      </Box>

      <Box sx={{ overflowX: 'auto' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>Product</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row) => (
              <TableRow key={row.id} hover>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.customer}</TableCell>
                <TableCell>{row.product}</TableCell>
                <TableCell>{fCurrency(row.price)}</TableCell>
                <TableCell>
                  <Label
                    variant="soft"
                    color={
                      (row.status === 'Approved' && 'success') ||
                      (row.status === 'Pending' && 'warning') ||
                      'error'
                    }
                  >
                    {row.status}
                  </Label>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>

      <Box sx={{ p: 2, textAlign: 'right' }}>
        <Box component="span" sx={{ typography: 'body2', color: 'text.secondary' }}>
          Showing 1 to {tableData.length} of {tableData.length} entries
        </Box>
      </Box>
    </Card>
  );
}

AppRecentSales.propTypes = {
  subheader: PropTypes.string,
  tableData: PropTypes.array,
  title: PropTypes.string,
};

