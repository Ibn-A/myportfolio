import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import MobilRightMenuSlider from "@material-ui/core/Drawer"
import Footer from './Footer'
import {
AppBar,
Toolbar,
ListItem,
ListItemIcon,
IconButton,
ListItemText,
Avatar,
Divider,
List,
Typography,
Box
} from '@material-ui/core'
import {
Dehaze,
AssignmentInd,
Home,
Apps,
ContactMail
} from '@material-ui/icons'
import avatar from "../images/avatar.png"

// CSS STYLES
const useStyle = makeStyles(theme=>({
    menuSliderContainer: {
        width: 250,
        background: "#FFF",
        height: "100%",
    },
    avatar: {
        display: "block",
        margin: "1rem auto",
        width: theme.spacing(13),
        height: theme.spacing(16),
    },
    listItem: {
        color:"tan"
    }
}));

const menuItems = [
    {
        listIcon:<Home/>,
        listText: "Home",
        listPath: "/"
    },
    {
        listIcon:<AssignmentInd/>,
        listText: "Resume",
        listPath: "resume"
    },
    {
        listIcon:<Apps/>,
        listText: "Portfolio",
        listPath:"portfolio"
    },
    {
        listIcon:<ContactMail/>,
        listText: "Contacts",
        listPath:"contact"
    }
]

const Navbar = () => {
    const [state, setState] = useState({
        right: false
    }) 

    const toggleSlider = ((slider, open) => () => {
        setState({ ...state, [slider]: open});
    });

    const classes = useStyle()

    const sideList = slider => (
        <Box 
        className={classes.menuSliderContainer} 
        component = "div"
        onClick={toggleSlider(slider, false)}
        >
        <Avatar className={classes.avatar} src={avatar} alt="Ibn Ali Mrehouri" />
        <Divider />
            <List>
            {menuItems.map((listItem, key)=>(
                <ListItem button key={key} component={Link} to={listItem.listPath}>
                    <ListItemIcon className={classes.listItem}>
                        {listItem.listIcon}
                    </ListItemIcon>
                    <ListItemText primary={listItem.listText} />
                </ListItem>
                ))}
            </List>
        </Box>
    )
    return (
        <>
            <Box component="nav">
                <AppBar position="static"  style={{ background: 'transparent', boxShadow: 'none'}}>
                    <Toolbar>
                        <IconButton onClick={toggleSlider("right", true)}>
                            <Dehaze style={{color:"tomato"}} />
                        </IconButton>
                        <Typography variant="h5" style={{color:"tan"}}>
                            Portfolio
                        </Typography>
                        <MobilRightMenuSlider 
                        anchor="left" 
                        open={state.right}
                        onClose={toggleSlider("right",false)}
                        >
                            {sideList("right")}
                        <Footer />
                        </MobilRightMenuSlider>
                        
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Navbar
