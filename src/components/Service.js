

import { makeStyles } from '@material-ui/core/styles'
import MediaCard from './MediaCard';
import services from '../HomeData'
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    fontFamily: 'Nunito',
    
  },
  grid: {
    paddingTop: '60px'
  }
}));

function Service() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        item
        direction="row"
        id="services"
        spacing={5}
        align="center"
        className={classes.grid}
       
      >
        <Grid item xs={12} md={6}>
          <MediaCard services={services[0]} />
        </Grid>
        <Grid item xs={12} md={6}>
          <MediaCard services={services[1]} />
        </Grid>

      </Grid>
    </div>
  )
}

export default Service