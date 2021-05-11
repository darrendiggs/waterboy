

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Fade from 'react-reveal/Fade';



const useStyles = makeStyles({
  root: {
    maxWidth: '545px',
    backgroundColor: 'rgba(0,0,0,0.5)',
    textAlign: 'center',
    color: '#fff',
    minHeight: '600px',
  },
  media: {
    height: 340,
  },
  title: {
    fontFamily: 'Nunito',
    fontSize: '2rem'
  },
  secondaryColor: {
    color: '#F1B0A7'
  },
  description: {
    color: '#ddd',
    fontSize: '1.2rem'
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default function MediaCard({ services }) {
  const classes = useStyles();

  return (
    
    <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={services.image}
        />
      <Fade duration={2000} collapse bottom >
        <CardContent >
          <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
            {services.title}
          </Typography>
          <Typography variant="body2" component="p" >
            {services.description}
          </Typography>
        </CardContent>

      <CardActions className={classes.button}>
        <Button size="small" className={classes.secondaryColor}>
          Purchase
        </Button>
      </CardActions>
      </Fade>
    </Card>
   
  );
}