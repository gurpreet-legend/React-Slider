import React, {useState} from 'react';
import { SliderData } from './SliderData';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import {makeStyles} from '@mui/styles';


const useStyles = makeStyles(theme => ({
    slider : {
        position: "relative",
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    sliderImage: {
        width: "50vw",
        height: "auto",
        borderRadius: "10px",        
    },
    rightArrow: {
        position: "absolute",
        top: "50%",
        right: "18rem",
        fontSize: "3rem",
        color: "#000",
        cursor: "pointer",
        zIndex: "10",
        userSelect: "none"
    },
    leftArrow: {
        position: "absolute",
        top: "50%",
        left: "18rem",
        fontSize: "3rem",
        color: "#000",
        cursor: "pointer",
        zIndex: "10",
        userSelect: "none"
    },
    activeSlide : {
        opacity: "1",
        transitionDuration:"1s",
        transform: "scale(1.08)"
    },
    slide : {
        opacity: "0",
        transitionDuration: "1s ease"
    },
}))


const ImageSlider = () => {
    const classes = useStyles();
    const [current, setCurrent] = useState(0);
    const length = SliderData.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    console.log(current);


    if(!Array.isArray(SliderData) || SliderData.length <= 0){
        return null;
    }

    return (
        <div className={classes.slider}>
            <NavigateBeforeIcon className={classes.leftArrow}  onClick={prevSlide}/>
            <NavigateNextIcon className={classes.rightArrow} onClick={nextSlide}/>
            {SliderData.map((slide, index) => {
                return (
                    <div className={index === current ? classes.activeSlide : classes.slide} key={index}>
                        {index === current && (<img src={slide.image} alt="image" className={classes.sliderImage} />)}
                        
                    </div>
                )
            })}
        </div>
    )
}

export default ImageSlider
