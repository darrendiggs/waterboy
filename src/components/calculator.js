
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight:'50vh',
    backgroundColor: 'black'
  }
}))

function Calculator() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      
    </div>
  )
}

export default Calculator
