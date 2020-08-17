import React from 'react';
import Navbar from './Navbar';
import { makeStyles } from '@material-ui/core/styles';
import {
    Box,
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
} from '@material-ui/core';
import project1 from '../images/reactjs.png'

const useStyles = makeStyles({
    mainContainer: {
        background: "tan",
        height: "100%"
    },
    cardContainer: {
        maxWidth: 345,
        margin: "3rem",
        margin: "5rem auto",
    }
});

const Portfolio = () => {
    const classes = useStyles();

    return (
        <Box component="div" className={classes.mainContainer}>
            <Navbar />
            <Grid container spacing={3} justify="center">
                {/* Project1 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia 
                                component="img"
                                alt="Project 1"
                                height="140"
                                image={project1}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Project 1
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    LoremVoluptate ut et minim deserunt voluptate fugiat ullamco. Labore irure in ipsum adipisicing commodo elit est officia. Id enim nostrud labore voluptate dolore esse ullamco qui. Magna occaecat aliqua est eiusmod tempor consectetur sint nisi reprehenderit ullamco ea quis pariatur duis. Aute Lorem ipsum ea dolor dolore quis nulla mollit do deserunt officia magna do magna. 
                                </Typography>
                            </CardContent>

                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <Button size="small" color="primary">
                                Live Demo
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
            
        </Box>
    )
}

export default Portfolio
