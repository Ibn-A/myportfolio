import React from 'react'
import Particles from 'react-particles-js'
import {makeStyles} from '@material-ui/styles'
import Navbar from './Navbar'
import Header from './Header'
import { TextFormatOutlined } from '@material-ui/icons'

const useStyles = makeStyles({
    particlesCanva: {
        postion: "absolute",
        
    }
})

const Home = () => {

    const classes= useStyles()

    return (
        <div>
            <Navbar />
            <Header />
            <Particles
                canvasClassName={classes.particlesCanva}
                params={{
                    particles: {
                        number: {
                            value: 65,
                            density: {
                              enable: true,
                              value_area: 900
                            }
                        },
                        shape: {
                            type: "circle",
                            stroke: {
                                width: 1,
                                color: "tomato",
                            }
                        },
                        size: {
                            value: 2,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 6,
                                size_min: 0.1,
                                sync: true
                            }
                        },
                        color: {
                            value: "#D2B48C"
                        },
                    }
                }}
            />
        </div>
    )
}

export default Home;
