const bookmark = document.querySelector(".book");
const marked = document.querySelector(".marked");

bookmark.addEventListener('click', ()=>{  
    bookmark.classList.toggle("hide");
    marked.classList.toggle("show");
});

marked.addEventListener('click', ()=>{  
    marked.classList.toggle("show");
    bookmark.classList.toggle("hide");
});

const closed = document.querySelector('.close');
const backpop = document.querySelector('.backpop');
const backpop2 = document.querySelector('.backpop2');
const project = document.getElementById('project-button');
const project2 = document.getElementById('project-button2');
const project3 = document.getElementById('project-button3');
const project4 = document.getElementById('project-button4');
const projectEnd = document.getElementById('project-buttonEnd');

project.addEventListener('click', ()=>{
    backpop.classList.toggle("show")
});
project2.addEventListener('click', ()=>{
    backpop.classList.toggle("show");
    window.scrollTo(0, 300);
});
project3.addEventListener('click', ()=>{
    backpop.classList.toggle("show");
    window.scrollTo(0, 300);
});
project4.addEventListener('click', ()=>{
    backpop.classList.toggle("show");
    window.scrollTo(0, 300);
});

closed.addEventListener('click', ()=>{
    backpop.classList.toggle("show");
});

/*backpop.addEventListener('click', ()=> {
    backpop.classList.toggle("show")
})*/

projectEnd.addEventListener('click', ()=>{
    backpop2.classList.toggle("show")
})


const pledge1 = document.getElementById('pledge1');
const card1 = document.getElementById('card1');
const circle1 = document.getElementById('circle1');
const select = document.getElementById('select1');
const none = '';
pledge1.innerHTML = none;
function mytoogle(){
    const none = '';
    const enter_pledge = '<p class="dark-grey align-self-center auto">Enter your pledge</p><input class="btn rounded-pill fw-bold price" type="number" name="pledge" id="price" placeholder="$"><button class="btn btn-primary rounded-pill back fw-bold">Continue</button>';    
    if (pledge1.innerHTML === none){
        pledge1.innerHTML = enter_pledge;
    } else {
        pledge1.innerHTML = none;
    }  
}
card1.addEventListener('click', ()=>{
    mytoogle();
    pledge1.classList.toggle("border-top");
    pledge1.classList.toggle("py-4");
    pledge1.classList.toggle("px-4");
    select1.classList.toggle("border-success");
    circle1.classList.toggle("select");
    if (select2.classList.contains("border-success")){
        mytoogle2();
    pledge2.classList.toggle("border-top");
    pledge2.classList.toggle("py-4");
    pledge2.classList.toggle("px-4");
    select2.classList.toggle("border-success");
    circle2.classList.toggle("select");
    }
    if (select3.classList.contains("border-success")){
        mytoogle3();
    pledge3.classList.toggle("border-top");
    pledge3.classList.toggle("py-4");
    pledge3.classList.toggle("px-4");
    select3.classList.toggle("border-success");
    circle3.classList.toggle("select");
    }
});


const pledge2 = document.getElementById('pledge2');
const card2 = document.getElementById('card2');
const circle2 = document.getElementById('circle2');
const select2 = document.getElementById('select2');
pledge2.innerHTML = none;
function mytoogle2(){
    const none = '';
    const enter_pledge = '<p id="continue" class="dark-grey align-self-center auto">Enter your pledge</p><input class="btn rounded-pill fw-bold price" type="number" name="pledge" id="price" placeholder="$"><button class="btn btn-primary rounded-pill back fw-bold">Continue</button>';    
    if (pledge2.innerHTML === none){
        pledge2.innerHTML = enter_pledge;
    } else {
        pledge2.innerHTML = none;
    }  
}
card2.addEventListener('click', ()=>{
    mytoogle2();
    pledge2.classList.toggle("border-top");
    pledge2.classList.toggle("py-4");
    pledge2.classList.toggle("px-4");
    select2.classList.toggle("border-success");
    circle2.classList.toggle("select");
    if (select3.classList.contains("border-success")){
        mytoogle3();
    pledge3.classList.toggle("border-top");
    pledge3.classList.toggle("py-4");
    pledge3.classList.toggle("px-4");
    select3.classList.toggle("border-success");
    circle3.classList.toggle("select");
    }
    if (select1.classList.contains("border-success")){
        mytoogle();
    pledge1.classList.toggle("border-top");
    pledge1.classList.toggle("py-4");
    pledge1.classList.toggle("px-4");
    select1.classList.toggle("border-success");
    circle1.classList.toggle("select");
    }
});

const pledge3 = document.getElementById('pledge3');
const card3 = document.getElementById('card3');
const circle3 = document.getElementById('circle3');
const select3 = document.getElementById('select3');
pledge3.innerHTML = none;
function mytoogle3(){
    const none = '';
    const enter_pledge = '<p class="dark-grey align-self-center auto">Enter your pledge</p><input class="btn rounded-pill fw-bold price" type="number" name="pledge" id="price" placeholder="$"><button class="btn btn-primary rounded-pill back fw-bold">Continue</button>';    
    if (pledge3.innerHTML === none){
        pledge3.innerHTML = enter_pledge;
    } else {
        pledge3.innerHTML = none;
    }  
}
card3.addEventListener('click', ()=>{
    mytoogle3();
    pledge3.classList.toggle("border-top");
    pledge3.classList.toggle("py-4");
    pledge3.classList.toggle("px-4");
    select3.classList.toggle("border-success");
    circle3.classList.toggle("select");
    if (select2.classList.contains("border-success")){
        mytoogle2();
    pledge2.classList.toggle("border-top");
    pledge2.classList.toggle("py-4");
    pledge2.classList.toggle("px-4");
    select2.classList.toggle("border-success");
    circle2.classList.toggle("select");
    }
    if (select1.classList.contains("border-success")){
        mytoogle();
    pledge1.classList.toggle("border-top");
    pledge1.classList.toggle("py-4");
    pledge1.classList.toggle("px-4");
    select1.classList.toggle("border-success");
    circle1.classList.toggle("select");
    }
    
});



//<p class="dark-grey align-self-center auto">Enter your pledge</p>
          //<input class="btn rounded-pill fw-bold price" type="number" name="pledge" id="price" placeholder="$">
          //<button class="btn btn-primary rounded-pill back fw-bold">Continue</button>