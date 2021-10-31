import React, {useState} from 'react';
import { SliderData } from './SliderData';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';



const ImageSlider = () => {
    const [current, setCurrent] = useState(0);
    const length = SliderData.length;
    return (
        <div className="slider">
            <NavigateNextIcon className="right-arrow"/>
            <NavigateBeforeIcon className="left-arrow"/>
            {SliderData.map((slide, index) => {
                return (
                    <img src={slide.image} alt="image" key={index}/>
                )
            })}
        </div>
    )
}

export default ImageSlider
