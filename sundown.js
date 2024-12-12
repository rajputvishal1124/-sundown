const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});



var elemC = document.querySelector("#elem-container")
var fixed = document.querySelector("#fixed-image")

elemC.addEventListener("mouseenter", function(){
   fixed.style.display = "block"
  
})

elemC.addEventListener("mouseleave", function(){
    fixed.style.display = "none"

})

var elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var image = e.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`
    })
})

function swiperAnimation(){

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
}

swiperAnimation()



var project = document.querySelector("#project")
var design = document.querySelector("#design")
var execution = document.querySelector("#execution")
var line = document.querySelector(".elemline")
var paragraph = document.querySelector("#paragraph")
var right = document.querySelector("#pageright")
design.addEventListener("click", function(){
   line.style.position = "absolute";
   line.style.top = "0%"
   design.style.color = "#EFEAE3"
   project.style.color = " #504A45"
   execution.style.color =" #504A45"
   paragraph.style.color = "#DBD5CF"

   paragraph.innerHTML = "Our team works with our clients to refine an idea <br/>  and concept into an executable design. We create <br/> a final design that encompasses the brand <br/> narrative to bring stories to life and provide end- ,<br/>to-end design solutions from concept, design, and <br/>  architectural drawings to 3D renderings."
   right.style.backgroundImage = "url(https://uploads-ssl.webflow.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15e1_Project-p-1080.jpg)"
   
})
project.addEventListener("click", function(){
   project.style.color = "#EFEAE3"
   design.style.color = " #504A45"
   execution.style.color =" #504A45"

    line.style.position = "absolute";
    paragraph.style.color = "#DBD5CF"

    line.style.top = "30%"
    paragraph.innerHTML = "Once we have a design, our production team <br> takes the lead in bringing it to life. We manage all <br>  stages of the project, from build specifications and <br>  technical drawings to site surveys, vendor <br>  management, and 2D & 3D production. We have <br>  an extensive network of partners to meet each <br>  unique design and project need."
    right.style.backgroundImage = "url(https://uploads-ssl.webflow.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15d0_Project.webp)"

 })
 execution.addEventListener("click", function(){
   execution.style.color = "#EFEAE3"
   project.style.color = " #504A45"
   design.style.color =" #504A45"

    line.style.position = "absolute";
    line.style.top = "65%"
    paragraph.innerHTML = "We’re with you every step of the way, from the <br> project initiation to launch day. Our production and <br> design teams are onsite to direct and guide the <br> process down to the last point of completion, <br> ensuring success across the built space and <br> experience."
    paragraph.style.color = "#DBD5CF"
    right.style.backgroundImage = "url(https://uploads-ssl.webflow.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15cd_Execution-p-1080.jpg)"
 })