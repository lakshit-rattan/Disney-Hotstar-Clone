
//Selecting the carousel element
const carousel = document.querySelector('.carousel');
//Array to store our slider such that we can modify them 
let sliders = []

//variable to tell out current slide index
let slideindex = 0;

//a function whose purpose in life is to create a new slide
const createSlide = () => {
    //check the current slide index. if it is greater than the no of movies we have, then set it zero
    if(slideindex >= movies.length){
        slideindex = 0;
    }


    //Creating DOM elements
    let slide = document.createElement('div');
    let imgelement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    //Attaching all the elements to the DOM. MOST IMPORTANT
    /*
    Here, we need to make sure that we append these elements IN THE SAME ORDER AS OF THE SLIDER WE MADE IN index.html.
    reference - <div class="slider">
                <div class="slide-content">
                    <h1 class="movie-title">loki</h1>
                    <p class="movie-des">Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut aliquip 
                        ex ea commodo consequat.
                    </p>
                </div>
                <img src="images/slider 1.PNG" alt="sliderimg">
            </div> 

           attach and append it in the exact same way
    */
    //attaching empty string to the image source using the createTextNode function
    imgelement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideindex].name));
    p.appendChild(document.createTextNode(movies[slideindex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgelement);
    carousel.appendChild(slide);
    
    //Setting up the image source from data.js
    imgelement.src = movies[slideindex].image;
    slideindex++;

    //setting elements their classnames from the css file such that their effects apply

    slide.className = 'slider';
    content.className = 'slide-content';
    h1.className = "movie-title";
    p.className = "movie-des";
    sliders.push(slide);

    //adding sliding effect
    //remember that we only need to change the 1st slider's position. use slider.length to check if we have any sliders or not. 
    //If we have sliders, then give the slider the index 0 and use style.marginLeft to change it's margin property. Use template string here
    if (sliders.length){
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`
        /*This line here, does the main magic. VERY IMPORTANT TO UNDERSTAND THIS line.
        calc -> CSS formula to do calculations
        the negative sign indicates that we want the negative left margin
        100 -> because we want the slider to go 100 percent off the screen
        * sign -> multiplying 100 with this calculation because we want negative 100% per slide
        (sliders.length - 2) -> because we want the second slide to be in the middle
        % sign -> to indicate that this is a percentage value
        - sign -> subract the margin value from this 100%
        (sliders.length - 2) -> doing the same calculation but this time multiplying with 30 because we have 30 pixels margin on the right
        */
    }
}

for (let i=0;i<movies.length-1;i++) {
    createSlide();
}

setInterval(() => {
    createSlide();
}, 3000);

// Video Cards

const videoCards = document.querySelectorAll('.video-card');

videoCards.forEach(item => {
    item.addEventListener('mouseover', () => {
        let video = item.children[1];
        video.play();
    })

    item.addEventListener('mouseleave',() => {
        let video = item.children[1];
        video.pause();
    })
})


//Card Sliders

let cardContainer = document.querySelectorAll('card-container');
let prebtns = document.querySelectorAll('.pre-btn');
let nxtbtns = document.querySelectorAll('.nxt-btn');

cardContainer.forEach((item,i)=> {
    let containerDimensions = item.getBoundingClientRect();
    let containerwidth = containerDimensions.width();

    nxtbtns[i].addEventListener('click', () => {
        item.scrollLeft += containerwidth - 200;
    })

    prebtns[i].addEventListener('click', () => {
        item.scrollLeft += containerwidth + 200;
    })
})