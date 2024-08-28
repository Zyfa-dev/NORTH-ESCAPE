//box open on click
var navbar = document.getElementById('nav-js')
var nav_click=document.querySelector('.hov_nav')
var body=document.querySelector('body')
var nav_show=document.querySelector('.full_layer')
var exit=document.getElementById('exit')

function showbox(){

nav_click.addEventListener('click',(e)=>{
    nav_show.style.display=`block`
    e.stopPropagation()
    // nav_show.style.background=`rgba(0,0,0,0.4)`
    })
}
window.addEventListener('click',(e)=>{
    if (e.target !== nav_click && e.target !== nav_show 
        && !nav_show.contains(e.target)) {
       nav_show.style.display=`none`
       }
    })


//navbar transition on click btn
var nav_responsive=document.querySelector('.third-res')
nav_responsive.style.top='-180px'
function navshow() {
    if(nav_responsive.style.top=='-180px'){
        nav_responsive.style.top='70px'
        nav_responsive.style.transition='all 0.6s ease-in-out'
    }
    else{
        nav_responsive.style.top='-180px'
    }

    
}


//slider 1
var prev=document.getElementById('back_prev')
var next=document.getElementById('next')
var cards=document.getElementById('cards')
var no_img=document.querySelectorAll('#image').length
var currentvalue=0
// console.log(no_img);


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


//reponsive function

var Prev=document.querySelector('.back')
var nxt=document.querySelector('.nxt')
var move_2=document.querySelector('.destinations-2')
var loc_no_2=document.querySelectorAll('#loc_img-2').length
var localvalue_2=0

function loc_img_2(){
    console.log('in function');
    if (localvalue_2==1) {
    move_2.style.transform=`translateX(-${localvalue_2*101}%)`
    } else {
    move_2.style.transform=`translateX(-${localvalue_2*101.6}%)`
    }
}

nxt.addEventListener('click',() =>{
    
    if (localvalue_2==loc_no_2-1) {
        localvalue_2=0

    } 
    else {
        localvalue_2++
    }
    loc_img_2()
})

Prev.addEventListener('click',() =>{
    console.log('button is clicked');
    
    if(localvalue_2==0) {
        localvalue_2=loc_no_2-1
    } else {
        localvalue_2--
    
    }
    loc_img_2()
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
        value_res--
    }
    resort_result();
})


//responsive funtion
var resort2=document.querySelector('.all_resorts-2')
var imges_res2=document.querySelectorAll('#res_img_2').length
var btn_prev=document.querySelector('.btn_prev')
var btn_next=document.querySelector('.btn_next')
var value_res2=0

function resort_result2(){
    if (value_res2==1) {
        resort2.style.transform=`translateX(-${value_res2*101}%)`
        } else {
            resort2.style.transform=`translateX(-${value_res2*102}%)`
        }

}

btn_next.addEventListener('click',()=>{
    if(value_res2==imges_res2-1){
        value_res2=0
    }
    else{
// console.log('else is opened');
        value_res2++
    }
    resort_result2();
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

btn_prev.addEventListener('click',()=>{
    if(value_res2==0){
        value_res2=imges_res2-1
        console.log('working');
        
    }
    else{
        value_res2--
    }
    resort_result2();
})



var resort_2=document.querySelector('.all_resorts-second')
var imges_res_2=document.querySelectorAll('#res_img-2').length
var btn_next_2=document.querySelector('.btn_next-2')
var btn_prev_2=document.querySelector('.btn_prev-2')
var secondtime_value=0

function result_resort_2(){
    resort_2.style.transform=`translateX(-${secondtime_value*110}%)`
}

btn_next_2.addEventListener('click',()=>{
    if (secondtime_value==imges_res_2-4){
        secondtime_value=0
        
    } else {
        secondtime_value++
    }
    result_resort_2()
})

btn_prev_2.addEventListener('click',()=>{
    if (secondtime_value==0) {
        secondtime_value=imges_res_2-4
    } else {
        secondtime_value--
    }
    result_resort_2()
})



//responsive function
var resort_3=document.querySelector('.all_resorts-sec')
var imges_res_3=document.querySelectorAll('#res_img-3').length
var btn_next_2=document.querySelector('.btn_next-2')
var btn_prev_2=document.querySelector('.btn_prev-2')
var secondtime_value2=0

function result_resort_3(){
    resort_3.style.transform=`translateX(-${secondtime_value2*104}%)`
}

btn_next_2.addEventListener('click',()=>{
    if (secondtime_value2==imges_res_3-1){
        secondtime_value2=0
        
    } else {
        secondtime_value2++
    }
    result_resort_3()
})

btn_prev_2.addEventListener('click',()=>{
    if (secondtime_value2==0) {
        secondtime_value2=imges_res_3-1
    } else {
        secondtime_value2--
    }
    result_resort_3()
})


