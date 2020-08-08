import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
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
ArrowBack,
AssignmentInd,
Home,
Apps,
ContactMail
} from '@material-ui/icons'
//import avatar from "../avatar.png"

// CSS STYLES
const useStyle = makeStyles(theme=>({
    menuSliderContainer: {
        width: 250,
        background: "#511",
        height: "30rem"
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    listItem: {
        color:"tan"
    }
}));

const menuItems = [
    {
        listIcon:<Home/>,
        listText: "Home"
    },
    {
        listIcon:<AssignmentInd/>,
        listText: "Resume"
    },
    {
        listIcon:<Apps/>,
        listText: "Portfolio"
    },
    {
        listIcon:<ContactMail/>,
        listText: "Contacts"
    }
]

const Navbar = () => {
    const classes = useStyle()
    return (
        <>
            <Box className={classes.menuSliderContainer} component = "nav">
                <Avatar className={classes.avatar} src="" alt="Ibn Ali Mrehouri" />
                <Divider />
                <List>
                    {menuItems.map((listItem, key)=>(
                    <ListItem button key={key}>
                        <ListItemIcon className={classes.listItem}>
                            {listItem.listIcon}
                        </ListItemIcon>
                        <ListItemText primary={listItem.listText} />

                    </ListItem>
                    ))}
                </List>
            </Box>
            <Box component="nav">
                <AppBar position="static" style={{background:"#FFF"}}>
                    <Toolbar>
                        <IconButton>
                            <ArrowBack style={{color:"tomato"}} />
                        </IconButton>
                        <Typography variant="h5" style={{color:"tan"}}>
                            Portfolio
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Navbar
