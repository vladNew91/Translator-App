import Box from '@mui/material/Box';
import { IconButton, Tooltip } from '@mui/material';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';

interface ReverseComponentProps {
  handleReverse: () => void;
}

export const ReverseComponent: React.FC<ReverseComponentProps> = ({
  handleReverse
}: ReverseComponentProps): JSX.Element => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        mt: '3rem'
      }}
    >
      <Tooltip title="Reverse languages" placement='top'>
        <IconButton
          color="info"
          aria-label="reverse"
          component="label"
          onClick={handleReverse}
        >
          <ChangeCircleIcon fontSize='large' color='info' />
        </IconButton>
      </Tooltip>
    </Box>
  );
};
