
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import EcoIcon from '@material-ui/icons/Eco';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LightSpeed from 'react-reveal/LightSpeed';
import { Link as Scroll } from 'react-scroll'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Nunito',
  },

  appBar: {
    background: 'none'
  },

  appBarScrolled: {
    backgroundColor: 'rgba(0,0,0,0.5)'
  },

  appBarIcon: {
    color: '#fff',
    fontSize: '2rem',
  },

  icon: {
    color: '#fff',
    fontSize: '4rem',
  },

  appBarTitle: {
    flexGrow: '1'
  },

  homebtn: {
    cursor: 'pointer'
  },

  appBarWrapper: {
    width: '80%',
    margin: '0 auto',
    height: '60px'
  },

  secondaryColor: {
    color: '#F1B0A7' 
  },

  title: {
    color: '#fff',
    fontSize: '2rem',
    textAlign: 'center'
  },

}));

function Header() {
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100
  });

  return (
    <div className={classes.root} id='top'>
      <AppBar 
        className={`${classes.appBar} ${trigger === false ? '' : classes.appBarScrolled}`} 
        elevation={0} 
        >
        <Toolbar className={classes.appBarWrapper}>
          
          <h1 className={classes.appBarTitle}><Scroll to='top' smooth className={classes.homebtn}>water<span className={classes.secondaryColor}>boy</span></Scroll></h1>
          
          <IconButton>
            <EcoIcon className={classes.appBarIcon} />
          </IconButton>
        </Toolbar>
      </AppBar>

      <LightSpeed bottom cascade duration={2000}>
        <div className={classes.title}>
          <h1>
            hi, i'm your <br />
            <span style={{ fontSize: '5rem' }}>water<span className={classes.secondaryColor}>boy</span></span>
          </h1>
          <Scroll to='services' smooth>
            <IconButton>
              <ExpandMoreIcon className={classes.icon} />
            </IconButton>
          </Scroll>
        </div>
      </LightSpeed>
    </div>
  )
}

export default Header
