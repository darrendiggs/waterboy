

import { CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import Background from './assests/bg.jpg'
import Header from './components/Header';
import Info from './components/info';
import Service from './components/Service';



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
    <div>
      <div className={classes.root}>
        <CssBaseline />
        <Header />
        <Service />
      </div>
      <Info />
    </div>
  );
}

export default App;
