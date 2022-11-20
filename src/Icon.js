import { Box, Paper } from "@mui/material";


const Icon = () => (
    <Paper sx={{ m: 1 }} elevation={4}>
      <Box component="svg" sx={{ width: 100, height: 100 }}>
        <Box
          component="polygon"
          sx={{
            fill: (theme) => theme.palette.common.white,
            stroke: (theme) => theme.palette.divider,
            strokeWidth: 1,
          }}
          points="0,100 50,00, 100,100"
        />
      </Box>
    </Paper>
  );

  export default Icon;