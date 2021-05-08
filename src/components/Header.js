
import { AppBar, Collapse, IconButton, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import EcoIcon from '@material-ui/icons/Eco';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useEffect, useState } from 'react'

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

  appBarIcon: {
    color: '#fff',
    fontSize: '2rem',
  },
  icon: {
    color: '#fff',
    fontSize: '4rem',
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
    color: '#fff',
    fontSize: '2rem',
    textAlign: 'center'
  }

}));

function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
 }, [])

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} elevation={0}>
        <Toolbar className={classes.appBarWrapper}>
          <h1 className={classes.appBarTitle}>water<span className={classes.secondaryColor}>boy</span></h1>
          <IconButton>
            <EcoIcon className={classes.appBarIcon} />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Collapse 
      in={checked} 
      {...(checked ? { timeout: 1000 } : {})}
      collapsedHeight={50}
      >
        <div className={classes.title}>
          <h1>
            hi, i'm your <br />
            <span style={{ fontSize: '5rem' }}>water<span className={classes.secondaryColor}>boy</span></span>
          </h1>
          <IconButton>
            <ExpandMoreIcon className={classes.icon} />
          </IconButton>
        </div>
      </Collapse>
    </div>
  )
}

export default Header
