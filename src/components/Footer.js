import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles({
    root: {
        "& .MuiBottomNavigationAction-root": {
            minWidth: 0,
            maxWidth: 250,
        }
    }
});

const Footer = () => {
    const classes = useStyles()
    return (
        <BottomNavigation width="auto" style={{background: "tan"}}>
            <BottomNavigationAction
            className={classes.root} 
                style={{padding: 0}}
                icon={<GitHubIcon />}
            />
            <BottomNavigationAction 
            className={classes.root} 
                style={{padding: 0}}
                icon={<LinkedInIcon  />}
            />
            <BottomNavigationAction
            className={classes.root}  
                style={{padding: 0}}
                icon={<TwitterIcon />}
            />
        </BottomNavigation>
    )
}

export default Footer
