import './app.css'
import {useContext} from "react";
import {ThemeContext} from "./context";
import Toggle from "./components/Toggle";
import {AppBar,Typography} from "@material-ui/core";
import { makeStyles} from "@material-ui/core/styles";
import VideoPlayer from "./components/VideoPlayer";
import Options from "./components/Options";
import Notification from "./components/Notification";

const useStyles=makeStyles((heme)=>
    ({
    appBar:
    {
        borderRadius: 15,
            margin: '30px 100px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: '600px',
            border: '2px solid black',

            [heme.breakpoints.down('xs')]: { width: '90%'},
    },
    image:
    {
        marginLeft: '15px',
    },
    wrapper:
    {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
    }
}))
const App = () =>
{
    const theme =useContext(ThemeContext)
    const darkMode=theme.state.darkMode
    const classes=useStyles()
  return (
      <div className={classes.wrapper}  style={{ backgroundColor: darkMode ? "#222" : "white",  color: darkMode && "white" }}>
          <AppBar className={classes.appBar} position="static" color="inherit">
              <Typography variant="2" align="center">Wideo Call</Typography>
          </AppBar>
          <VideoPlayer/>
          <Options>
              <Notification/>
          </Options>
          <Toggle />
      </div>
  );
};

export default App;
