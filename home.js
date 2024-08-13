
var prev=document.getElementById('back_prev')
var next=document.getElementById('next')
var cards=document.getElementById('cards')
var no_img=document.querySelectorAll('#image').length
var currentvalue=0
console.log(no_img);


function slide_img(){
    console.log('in function');
    cards.style.transform=`translateX(-${currentvalue*105}%)`
}

next.addEventListener('click',() =>{
    
    if (currentvalue==no_img-4) {
        currentvalue=0

    } 
    else {
        currentvalue++
    }
    slide_img()
})

prev.addEventListener('click',() =>{
    console.log('button is clicked');
    
    if(currentvalue==0) {
        currentvalue=no_img-4
    } else {
        currentvalue--
    
    }
    slide_img()
})

var Prev=document.querySelector('.back')
var nxt=document.querySelector('.nxt')
var move=document.querySelector('.destinations')
var loc_no=document.querySelectorAll('#loc_img').length
var localvalue=0

function loc_img(){
    console.log('in function');
    if (localvalue==1) {
    move.style.transform=`translateX(-${localvalue*113}%)`
    } else {
    move.style.transform=`translateX(-${localvalue*111}%)`
    }
}

nxt.addEventListener('click',() =>{
    
    if (localvalue==loc_no-4) {
        localvalue=0

    } 
    else {
        localvalue++
    }
    loc_img()
})

Prev.addEventListener('click',() =>{
    console.log('button is clicked');
    
    if(localvalue==0) {
        localvalue=loc_no-4
    } else {
        localvalue--
    
    }
    loc_img()
})



var resort=document.querySelector('.all_resorts')
var imges_res=document.querySelectorAll('#res_img').length
var btn_prev=document.querySelector('.btn_prev')
var btn_next=document.querySelector('.btn_next')
var value_res=0

function resort_result(){
    if (value_res==1) {
        resort.style.transform=`translateX(-${value_res*112}%)`
        } else {
            resort.style.transform=`translateX(-${value_res*111}%)`
        }

}

btn_next.addEventListener('click',()=>{
    if(value_res==imges_res-4){
        value_res=0
    }
    else{
// console.log('else is opened');
        value_res++
    }
    resort_result();
})

btn_prev.addEventListener('click',()=>{
    if(value_res==0){
        value_res=imges_res-4
        console.log('working');
        
    }
    else{
// console.log('else is opened in prev');
        value_res--
    }
    resort_result();
})


