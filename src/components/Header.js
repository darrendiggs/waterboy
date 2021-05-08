
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import EcoIcon from '@material-ui/icons/Eco';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  },
  appBar: {
    background: 'none',
    fontFamily: 'Nunito',
  },
  icon: {
    color: '#fff',
    fontSize: '2rem',
  },
  appBarTitle: {
    flexGrow: '1',
  },
  appBarWrapper: {
    width: '80%',
    margin: '0 auto',
  },
  secondaryColor: {
    color: '#F1B0A7'
  },
  title: {
    fontFamily: 'Nunito',
    color: '#fff',
    fontSize: '2rem',
  },

}));

function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} elevation={0}>
        <Toolbar className={classes.appBarWrapper}>
          <h1 className={classes.appBarTitle}>water<span className={classes.secondaryColor}>boy</span></h1>
          <IconButton>
            <EcoIcon className={classes.icon}/>
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className={classes.title}>
        <h1>hi, i'm your <br /> <span style={{fontSize: '5rem'}}>water<span className={classes.secondaryColor}>boy</span></span></h1>
      </div>
    </div>
  )
}

export default Header
