import React from "react";
import './custome_carousel.css';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default class CustomeCarousel extends React.Component {

    constructor(){
        super();

        this.state = {
            screenCrousalIndex: 0,
            screen: [
                "https://soxytoes.com/cdn/shop/files/Theme_1A_Website.png?v=1697116566&width=2000",
                "https://img.freepik.com/premium-vector/collection-cute-christmas-red-clothing-items-winter-warm-knitted-clothes-background_865741-363.jpg"
            ]
        }
    }

    render() {
        
        return (<section style={{display: "flex"}}>
            <div class="slideshow-container">
                <div className="mySlides">
                    <img src={this.state.screen[this.state.screenCrousalIndex]} alt=""/>
                </div>
                <i class="prev" onClick={this.onNextClick}><NavigateBeforeIcon style={{
                    fontSize: "30px"
                }}/></i>
                <i class="next" onClick={this.onNextClick}><NavigateNextIcon style={{
                    fontSize: "30px"
                }}/></i>
            </div>
        </section>
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