import React from 'react'
import {Typography, Avatar, Grid,Box} from '@material-ui/core'
import Typed from "react-typed"
import {makeStyles} from "@material-ui/core/styles"
import avatar from "../images/avatar.png";

// CSS STYLES
const useStyles = makeStyles(theme=>({
    avatar: {
        width: theme.spacing(13),
        height: theme.spacing(16),
        margin: theme.spacing(1)
    },
    title: {
        color: "tomato"
    },
    subtitle: {
        color: "tan",
        marginBottom: "3rem"
    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        width: "100%",
        textAlign: "center",
        zIndex: 1
    }

}));

const Header = () => {
    const classes = useStyles();
    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
                <Avatar className={classes.avatar} src={avatar} alt="Ali Mrehouri"/>
            </Grid>
            <Typography className={classes.title} variant ="h4">
                <Typed 
                    strings={["Ibn Ali Mrehouri"]} 
                    typeSpeed={40}
                />
            </Typography>
            <br/>
            <Typography className={classes.subtitle} variant ="h5">
                <Typed 
                    strings={["Web Development","ReactJs","Laravel 6","Symfony 4"]} 
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
            </Typography>

        </Box>
    )
}

export default Header
