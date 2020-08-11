import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Typography, Box} from '@material-ui/core'
import Navbar from './Navbar'

const useStyles = makeStyles({
    mainContainer: {
        background:"#FFF"
    }
})
const Resume = () => {
    const classes = useStyles();
    return (
        <>
            <Navbar />
            <Box component="header" className="classes.mainContainer">
                <Typography variant="h4" align="center">
                    Experience professionnelle
                </Typography>
            </Box>
            <Box component="div">
                <Typography variant="h2">2019</Typography>
            </Box>
        </>
    )
}

export default Resume
