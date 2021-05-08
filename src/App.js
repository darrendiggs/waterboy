

import { CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import Background from './assests/bg.jpg'
import Header from './components/Header';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${Background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
   
  }
}));

function App() {
const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
    </div>
  );
}

export default App;
