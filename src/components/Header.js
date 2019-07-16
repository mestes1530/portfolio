import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      color: theme.palette.text.primary,
    },
    icon: {
      margin: theme.spacing(1),
      fontSize: 32,
    },
  }));

const Header = () => {
    const classes = useStyles();
    
    return (
        <div className="Header">
            <h1>Header</h1>
            <Link to="/">
                Home<br></br><HomeIcon className={classes.icon}/>
            </Link>
            <Link to="/contact">
                Contact<br></br><InfoIcon className={classes.icon}/>
            </Link>
        </div>
    );
}

export default Header;