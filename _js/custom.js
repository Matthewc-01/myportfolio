var e ="";
$.fn.typewriter = function() {
    this.each(function() {
      var c = $(this),
        b = c.html(),
        a = 0,
        d = 0;
      c.html("");
       e = function() {
        if ("<" == b.substring(a, a + 1)) {
          var f = new RegExp(/<span class="instant"/),
            g = new RegExp(/<span class="clear"/);
          if (b.substring(a, b.length).match(f)) a += b.substring(a, b.length).indexOf("</span>") + 7;
          else if (b.substring(a, b.length).match(g)) d = a, a += b.substring(a, b.length).indexOf("</span>") + 7;
          else
            for (;
              ">" != b.substring(a, a + 1);) a++
        }
        c.html(b.substring(d, a++) + (a & 1 ? "_" : ""));
        a >= b.length || setTimeout(e, 20 + 50 *
          Math.random())
      };
      e()
    });
    return this
  };
  $(".terminal").typewriter();
  const cursor = document.querySelector(".cursor-inner");
        const cursor2 = document.querySelector(".cursor-outer");
        document.addEventListener("mousemove", e=>{
            cursor.style.top = e.pageY + "px";
            cursor.style.left = e.pageX + "px";
            cursor2.style.top = e.pageY + "px";
            cursor2.style.left = e.pageX + "px";
        }
        )
        document.addEventListener("wheel", e=>{
            cursor.style.top = e.pageY + "px";
            cursor.style.left = e.pageX + "px";
 
            cursor2.style.top = e.pageY + "px";
            cursor2.style.left = e.pageX + "px";
        }
        )
        $("p, .image, .profilePicture").hover(function (){
            $(".cursor-outer").css( {"width": "90px","height": "90px", "mix-blend-mode": "difference",  "background": "#fff"});
            $(".cursor-inner").css( {"opacity": "0"});
            }, function(){
            $(".cursor-outer").css( {"width": "50px","height": "50px", "mix-blend-mode": "normal","background": "none"});
            $(".cursor-inner").css( {"opacity": "1"});
          });
          $("a,.facebook,.instagram,.linkedin,.github,.behance,.skill-lists,.message-close").hover(function (){
            $(".cursor-inner").css( {"background": "#d48200"});
            }, function(){
            $(".cursor-inner").css( {"background": "#fff"});
          });
          $(".facebook").hover(function () {$(".facebook svg g").css( {"fill": "#d48200"});
            }, function () {$(".facebook svg g").css( {"fill": "#fff"}); });
            $(".instagram").hover(function () {$(".instagram svg g").css( {"fill": "#d48200"});
            }, function () {$(".instagram svg g").css( {"fill": "#fff"});});
            $(".linkedin").hover(function () {$(".linkedin svg g").css( {"fill": "#d48200"});
            }, function () {$(".linkedin svg g").css( {"fill": "#fff"});});
            $(".github").hover(function () {$(".github svg g").css( {"fill": "#d48200"});
            }, function () {$(".github svg g").css( {"fill": "#fff"});});
            $(".behance").hover(function () {$(".behance svg g").css( {"fill": "#d48200"});
            }, function () {$(".behance svg g").css( {"fill": "#fff"});});
        
      // SKILLS 

      $(".skill-lists").click(function (e) { 
        $(".skill-lists").removeClass("active");
       
        $(this).addClass("active");
        // console.log ($(".terminal").html());
        if($(this).hasClass("web-design")){
          $(".terminal").html('<span class="dollar"></span><span> i can create a beautiful website design with an excellent user interface and can provide a great experience for the user</span><br><span class="dollar"></span><span> i can also convert psd or image design of a webpage to html and css</span><br><span class="dollar"></span><a href="‎_files/Growth-Driven-Design.png"  target="_blank"><span> growth-driven design certificate</span></a><br>');
          $(".terminal").typewriter();
        }
        if($(this).hasClass("web-development")){
          clearTimeout(e);
          $(".terminal").html('<span class="dollar"></span><span> i can create a web application from scratch </span><br><span class="dollar"></span><span> here are the languages, scripts, database, and libraries that i can use </span>><br><span class="dollar"></span><span> html, css, sass, bootstrap</span>><br><span class="dollar"></span><span> javascript, jquery, vuejs </span><br><span class="dollar"></span><span> php, java, sql server </span><br><span class="dollar"></span><a href="‎_files/Growth-Driven-Design.png"  target="_blank"><span> growth-driven design certificate</span></a><br>');
          $(".terminal").typewriter();
        }
        if($(this).hasClass("uiux")){
          clearTimeout(e);
          $(".terminal").html('<span class="dollar"></span><span> with my experiences in web development and design</span><br> <span class="dollar"></span><span> i know i can create an excellent user interface and user experience design for your digital needs</span><span> i am also knowledgeable with figma and adobe xd</span>');
          $(".terminal").typewriter();
        }
        if($(this).hasClass("graphic-design")){
          clearTimeout(e);
          $(".terminal").html('<span class="dollar"></span><span> i love creating unique and beautiful designs </span><br><span class="dollar"></span><span> i can create logos, banners, web page designs, photo manipulation, and vector and voxel art </span><br>');
          $(".terminal").typewriter();
        }
        if($(this).hasClass("digital-marketing")){
          clearTimeout(e);
          $(".terminal").html('<span class="dollar"></span><span> digital marketing can provide endless opportunities for your business</span><br><span class="dollar"></span><span> you can view my digital certificates here:</span><br><span class="dollar"></span><a href="‎_files/digital-garage.pdf"  target="_blank"><span> google digital garage certificate </span></a><br><span class="dollar"></span><a href="‎_files/digital-marketing.png"  target="_blank"><span> hubspot digital marketing certificate</span></a><br>');
          $(".terminal").typewriter();
        }
        if($(this).hasClass("seo")){
          clearTimeout(e);
          $(".terminal").html('<span class="dollar"></span><span> seo is the process of maximizing the number of visitors to a particular website by ensuring that the site appears high on the list of results returned by a search engine </span><br><span class="dollar"></span><span> great design, optimized images, clean elements, minified codes and passing the core web vitals can help you be ahead of your competition </span><br><span class="dollar"></span><span> if you dont know any of these, feel free to contact me </span>');
          $(".terminal").typewriter();
        }
        if($(this).hasClass("wordpress")){
          clearTimeout(e);
          $(".terminal").html('<span class="dollar"></span><span> wordpress is the simplest, most popular way to create your website or blog</span><br><span class="dollar"></span><span> i am knowledgeable in wordpress. i can create a template from scratch, optimize a wordpress site, create a child theme and many more</span><br><span class="dollar"></span><span> i also know elementor, woocommerce and some great plugins to maximize your wordpress site<span>');
          $(".terminal").typewriter();
        }
        if($(this).hasClass("shopify")){
          clearTimeout(e);
          $(".terminal").html('<span class="dollar"></span><span> shopify is a subscription-based software that allows anyone to set up an online store and sell their products</span><br><span class="dollar"></span><span> i can help you to set up your e-commerce website with shopify. shopify is an excellent software if you want to sell your products online</span><br><span class="dollar"></span><span> i personally recommend shopify if you want to start your online store</span><br><span class="dollar"></span><span> I have an app development certification badge on my shopify partners account </span>');
          $(".terminal").typewriter();
        }
        if($(this).hasClass("hubspot")){
          clearTimeout(e);
          $(".terminal").html('<span class="dollar"></span><span> hubspot cms is the first, and only, cms that combines website creation with the power of a crm to customize the entire buying journey, streamline marketing and sales alignment, and deliver true closed-loop reporting</span><br><span class="dollar"></span><span> i am a certified hubspot cms developer</span><br><span class="dollar"></span><a href="‎_files/hubspot-CMS.png"  target="_blank"><span> hubspot cms developer certificate</span></a><br>');
          $(".terminal").typewriter();
        }
        if($(this).hasClass("hardware")){
          clearTimeout(e);
          $(".terminal").html('<span class="dollar"></span><span> i am also knowledgeable in computer hardware and services</span><br><span class="dollar"></span><span> i have my national certificate in computer hardware and services</span><br><span class="dollar"></span><a href="_files/nc2.png"  target="_blank"><span> computer hardware and services national certificate ii</span></a>');
          $(".terminal").typewriter();
        }
      });
      

// NAVIGATION
$("nav a").click(function () { 
  // alert("ey");
  $("nav a").removeClass("navactive");
  $(this).addClass("navactive");
});


var works = new Waypoint({
  element: document.getElementById('works-section'),
  handler: function(direction) {
    // alert('Scrolled to waypoint!')
    $("nav a").removeClass("navactive");
    $("#works-nav").addClass("navactive");
  }
});
var works = new Waypoint({
  element: document.getElementById('works'),
  handler: function(direction) {
    // alert('Scrolled to waypoint!')
    $("nav a").removeClass("navactive");
    $("#works-nav").addClass("navactive");
  }
});
var about = new Waypoint({
  element: document.getElementById('about-section'),
  handler: function(direction) {
    // alert('Scrolled to waypoint!')
    $("nav a").removeClass("navactive");
    $("#about-nav").addClass("navactive");
  }
});

var about = new Waypoint({
  element: document.getElementById('about'),
  handler: function(direction) {
    // alert('Scrolled to waypoint!')
    $("nav a").removeClass("navactive");
    $("#about-nav").addClass("navactive");
  }
});

var contact = new Waypoint({
  element: document.getElementById('contact-section'),
  handler: function(direction) {
    // alert('Scrolled to waypoint!')
    $("nav a").removeClass("navactive");
    $("#contact-nav").addClass("navactive");
  },
  offset: '50%'
});

var contact = new Waypoint({
  element: document.getElementById('contact'),
  handler: function(direction) {
    // alert('Scrolled to waypoint!')
    $("nav a").removeClass("navactive");
    $("#contact-nav").addClass("navactive");
  }
});

var contact = new Waypoint({
  element: document.getElementById('main-banner'),
  handler: function(direction) {
    // alert('Scrolled to waypoint!')
    $("nav a").removeClass("navactive");
  },
  offset: '-50%'
});

// WORKS SECTION
$(document).ready(function () {
  $(".hide").hide();
});

$(".view-more").click(function () { 
  $(this).text($(this).text() == 'sHoW MoRe' ? 'sHoW Less' : 'sHoW MoRe');
  $(".hide").slideToggle("slow");
});

