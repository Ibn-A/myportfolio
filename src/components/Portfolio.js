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
import project1 from '../images/reactjs.png';
import project2 from '../images/laravel.jpg';
import project3 from '../images/php.png';
import project4 from '../images/symfony.png';

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
        <>
            <Navbar />
            <Box component="div" className={classes.mainContainer}>
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
                    {/* Project2 */}
                    <Grid item xs={12} sm={8} md={6}>
                        <Card className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia 
                                    component="img"
                                    alt="Project 2"
                                    height="140"
                                    image={project2}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5">
                                        trocServices App
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
                    {/* Project3 */}
                    <Grid item xs={12} sm={8} md={6}>
                        <Card className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia 
                                    component="img"
                                    alt="Project 3"
                                    height="140"
                                    image={project3}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5">
                                        My Blog
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
                    {/* Project4 */}
                    <Grid item xs={12} sm={8} md={6}>
                        <Card className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia 
                                    component="img"
                                    alt="Project 4"
                                    height="140"
                                    image={project4}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5">
                                        Elan Formation webApp
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

        </>
        
    )
}

export default Portfolio
