import React from "react";
// import './custome_carousel.css';
// import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
// import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { CCarousel,CCarouselItem, CImage } from '@coreui/react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class CustomeCarousel extends React.Component {

    constructor(){
        super();

        this.state = {
            screenCrousalIndex: 0,
            screen: [
                "https://firebasestorage.googleapis.com/v0/b/miraclesstyle-1d805.appspot.com/o/Crousel%2FGroup%204.png?alt=media&token=cf83c6c7-c727-437f-933f-c724330d6ef4",
                
            ]
        }
    }

    render() {

        
        
        return (

            <CCarousel controls>
            <CCarouselItem>
                <CImage className="d-block w-100" src={this.state.screen[0]} alt="slide 1" />
            </CCarouselItem>
            <CCarouselItem>
                <CImage className="d-block w-100" src={this.state.screen[0]} alt="slide 2" />
            </CCarouselItem>
            <CCarouselItem>
                <CImage className="d-block w-100" src={this.state.screen[0]} alt="slide 3" />
            </CCarouselItem>
            </CCarousel>


        );
    }

    onPrevClick = () =>{
        if(this.state.screenCrousalIndex === 0)
        {
            this.setState({
                screenCrousalIndex: this.state.screen.length-1
            })
        }
        else{
            this.setState({
                screenCrousalIndex: this.state.screenCrousalIndex-1
            })        
        }
    }

    onNextClick = () => {
        this.setState({
            screenCrousalIndex: (this.state.screenCrousalIndex+1)%this.state.screen.length
        })
    }

    getCrouselView = (val) => {
        return <div className="mySlides fade">
            <img src={this.state.screen[val]} alt=""/>
        </div>
    }
    
}