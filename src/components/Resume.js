import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Typography, Box} from '@material-ui/core'
import Navbar from './Navbar'

const useStyles = makeStyles(theme=>({
    mainContainer: {
        background:"tan"
    },
    timeline: {
        position: "relative",
        padding: "1rem",
        marigin :"0 auto",
        "&:before": {
            content: "''",
            position: "absolute",
            height: "100%",
            border: "1px solid white",
            right: "40px",
            top: 0
        },
        "&:after": {
            content: "''",
            display: "table",
            clear: "both"
        },
        [theme.breakpoints.up('md')]: {
            padding: "2rem",
            "&:before": {
                left: "calc(50% - 1px)",
                right: "auto"
            }
        }
    },
    timeLineItem: {
        padding: "1rem",
        borderBottom: "2px solid tan",
        position: "relative",
        margin: "1rem 3rem 1rem 1rem",
        clear: "both",
        "&:after": {
            content: "''",
            position: "absolue"
        },
        "&before": {
            content: "''",
            position: "absolute",
            right: "-0.625rem",
            top: "calc(50% -5px)",
            borderStyle: "solid",
            borderColor: "tomato tomato transparent transparent",
            borderWidth: "0.625",
            transform: "rotate(45deg)"
        },
        [theme.breakpoints.up("md")]: {
            width: "44%",
            margin: "1rem",
            "&:nth-of-type(2n)": {
                float: "right",
                margin: "1rem",
                borderColor: "tan"
            },
            "&:nth-of-type(2n):before": {
                right: "auto",
                left: "-0.625rem",
                borderColor: "transparent transparent tomato tomato"
            }
        }
    },

    timeLineYear: {
        textAlign: "center",
        maxWidth: "9.375rem",
        margin: "0 3rem 0 auto",
        fontSize: "1.8rem",
        background: "tomato",
        color: "black",
        lineHeight: 1,
        padding: "0.5rem 0 1rem",
        "&before": {
            display: "none"
        },
        [theme.breakpoints.up('md')]: {
            textAlign: "center",
            margin: "0 auto",
            "&:nth-of-type(2n)": {
                float: "none",
                margin: "0 auto"
            },
            "&:nth-of-type(2n): before": {
                display: "none"
            }
        }
    },
    heading: {
        color: "tomato",
        padding: "3rem 0",
        textTransform: "uppercase"
    },
    subHeading: {
        color: "white",
        padding: "0",
        textTransform: "uppercase"
    },

}));

const Resume = () => {
    const classes = useStyles();
    return (
        <>
            <Navbar />
            <Box component="header" className={`${classes.mainContainer} ${classes.heading}`}>
                <Typography variant="h4" align="center">
                    Experience professionnelle
                </Typography>
                <Box component="div" className={classes.timeline}>
                    <Typography 
                        variant="h2" 
                        className={ `${classes.timeLineYear} ${classes.timeLineItem}`}
                    >
                        2020
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            ReactJs
                        </Typography>
                        <Typography variant="body1" align="center" style={{color: "tomato"}}>
                            Philippe Frey Consulting
                        </Typography>
                        <Typography variant="subtitle2" align="center" style={{color: "black"}}>
                        Esse reprehenderit cupidatat et fugiat officia ex id. Veniam deserunt ullamco laborum adipisicing cillum reprehenderit. Sint et nostrud sunt cupidatat consectetur. Nisi qui commodo mollit ipsum in culpa veniam. Deserunt non exercitation fugiat Lorem reprehenderit ad nostrud magna esse id ea.
                        </Typography>
                    </Box>
                    <Typography 
                        variant="h2" 
                        className={ `${classes.timeLineYear} ${classes.timeLineItem}`}
                    >
                        2019
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            PHP/Symfony 4/ Laravel 6
                        </Typography>
                        <Typography variant="body1" align="center" style={{color: "tomato"}}>
                            Association P.D.D.T
                        </Typography>
                        <Typography variant="subtitle2" align="center" style={{color: "black"}}>
                        Esse reprehenderit cupidatat et fugiat officia ex id. Veniam deserunt ullamco laborum adipisicing cillum reprehenderit. Sint et nostrud sunt cupidatat consectetur. Nisi qui commodo mollit ipsum in culpa veniam. Deserunt non exercitation fugiat Lorem reprehenderit ad nostrud magna esse id ea.
                        </Typography>
                    </Box>

                </Box>
            </Box>
            
        </>
    )
}

export default Resume
