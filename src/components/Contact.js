import React from 'react'
import Navbar from './Navbar'
import {makeStyles, withStyles} from '@material-ui/core/styles'
import SendIcon from '@material-ui/icons/Send'
import {
    TextField,
    Typography,
    Button,
    Grid,
    Box
} from '@material-ui/core'

const useStyles = makeStyles({
    form: {
        top: "50%",
        left: "50%",
        transform:"translate(-50%, -50%)",
        position: "absolute",
    },
    button: {
        marginTop: "1rem",
        color: "tomato",
        borderColor: "tomato"
    }
})

const InputField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "tomato"
        },
        "& label": {
            color: "tomato"
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "tomato"
            },
            "&:hover fieldset": {
                borderColor: "tomato"
            },
            "&.Mui-focused fieldset": {
                borderColor: "tomato"
            }
        }
    },

})(TextField);

const Contact = () => {
    const classes = useStyles();
    return (
        <>
            <Navbar />
            <Box component="div" style={{ background: "tan", height: "100vh" }}>
                <Grid container justify="center">
                    <form className={classes.form}>
                        <Typography 
                            variant="h5" 
                            
                        > 
                            Contact Me
                        </Typography>
                        <InputField fullWidth={true} label="Nom" variant="outlined" margin="dense" />
                        <InputField fullWidth={true} label="Email" variant="outlined" margin="dense"/>
                        <InputField fullWidth={true} label="Entreprise" variant="outlined" margin="dense"/>
                        <Button className={classes.button} variant="outlined" fullWidth={true} endIcon={< SendIcon/>}>
                            Contact Me
                        </Button>
                    </form>

                </Grid>

            </Box>
            
        </>
    )
}

export default Contact
