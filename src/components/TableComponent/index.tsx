import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { styled } from '@mui/system';
import { History } from '../../types';

const TableHeadCell = styled(TableCell)(() => ({
    fontWeight: 'bold',
    fontSize: 'large',
}));

interface TableComponentProps {
  data: any;
  lightTheme: boolean;
}

export const TableComponent: React.FC<TableComponentProps> = ({
  data,
  lightTheme
}: TableComponentProps): JSX.Element => {
  return (
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableHeadCell sx={{ color: lightTheme ? 'black' : 'white' }} align='center'>Original</TableHeadCell>
          <TableHeadCell sx={{ color: lightTheme ? 'black' : 'white' }} align='center'>From</TableHeadCell>
          <TableHeadCell sx={{ color: lightTheme ? 'black' : 'white' }} align='center'>To</TableHeadCell>
          <TableHeadCell sx={{ color: lightTheme ? 'black' : 'white' }} align='center'>Translate</TableHeadCell>
        </TableRow>
      </TableHead>

      <TableBody sx={{ overflowY: 'auto' }}>
        {!data ? null : (
          data.map((row: History) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell sx={{ color: lightTheme ? 'black' : 'white' }} align="center">{row.text}</TableCell>
              <TableCell sx={{ color: lightTheme ? 'black' : 'white' }} align="center">{row.from}</TableCell>
              <TableCell sx={{ color: lightTheme ? 'black' : 'white' }} align="center">{row.to}</TableCell>
              <TableCell sx={{ color: lightTheme ? 'black' : 'white' }} align="center">{row.translate}</TableCell>
            </TableRow>
          )))}
      </TableBody>
    </Table>
  );
};
