
//Selecting the carousel element
const carousel = document.querySelector('.carousel');
//Array to store our slider such that we can modify them 
let sliders = []

//variable to tell out current slide index
let slideindex = 0;

//a function whose purpose in life is to create a new slide
const createSlide = () = {
    //check the current slide index. if it is greater than the no of movies we have, then set it zero
    if(slideindex >= movies.length){
        slideindex = 0;
    }
}