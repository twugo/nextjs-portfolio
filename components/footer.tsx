import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"

const Footer = () => {
  return (
    <Typography
      component='footer'
      sx={{
        color: 'white',
        backgroundColor: 'slategray'
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Grid container
          direction="row"
          justifyContent="space-between"
          alignItems="baseline"
        >
          <Grid item>
            <Typography variant="h6" sx={{ px: 2 }}>
              ©2022 Togo Takuya
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" sx={{ px: 2 }}>
              Last updated: 2022/04/25
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Typography>
  )
}

export default Footer
