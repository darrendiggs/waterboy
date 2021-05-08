

import { makeStyles } from '@material-ui/core/styles'
import MediaCard from './MediaCard';
import services from '../HomeData'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    fontFamily: 'Nunito',
  }
}));

function Service() {
const classes = useStyles();

  return (
    <div className={classes.root}>
      <MediaCard services={services[0]} />
      <MediaCard services={services[1]} />
    </div>
  )
}

export default Service
