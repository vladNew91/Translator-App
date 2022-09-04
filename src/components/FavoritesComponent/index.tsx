import { Box, IconButton, Tooltip } from "@mui/material";
import StarsIcon from '@mui/icons-material/Stars';

interface FavoritesComponentProps {
  handleSaveToFavorites: () => void;
}

export const FavoritesComponent: React.FC<FavoritesComponentProps> = ({
  handleSaveToFavorites
}: FavoritesComponentProps): JSX.Element => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Tooltip title="Save to favorites">
        <IconButton
          color="info"
          aria-label="reverse"
          component="label"
          onClick={handleSaveToFavorites}
        >
          <StarsIcon fontSize='large' color='info' />
        </IconButton>
      </Tooltip>
    </Box>
  );
};
