$(document).ready(function(){
    
    $(".counter").counterUp({
        time:2000
    })
});
AOS.init();
$(".sadra-carousel").owlCarousel({
    items:1,
    loop:true,
    autoplay:true,
    autoplayTimeout:2000,
    dots:false,
    nav:true,
    navText:["<i class='bi bi-arrow-left-circle arrow-h'></i>","<i class='bi bi-arrow-right-circle arrow-h'></i>"]
});

const hideloder=()=>{
    setTimeout(()=>{
        const wrapper=document.getElementById("wrapper");
        const loader=document.querySelector(".loader");
        loader.style.display="none";
        wrapper.style.display="block"
    },2000)
}