<?php
/**
 * This file adds the Landing template to the Parallax Pro Theme.
 *
 * @author StudioPress
 * @package Parallax
 * @subpackage Customizations
 */

/*
Template Name: Homepage Entrecore
*/

?>
<html class="no-js" lang="en">
<head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# website: http://ogp.me/ns/website#">


  <meta property="fb:app_id" content="302184056577324" /> 
  <meta property="og:type"   content="website" /> 
  <meta property="og:url"    content="https://entrecore.com" /> 
  <meta property="og:title"  content="Entrecore: High-Speed Web Hosting for Online Entrepreneurs" /> 
  <meta property="og:image"  content="https://entrecore.com/assets/images/newtheme/monitoring-new.png" /> 

    <meta charset="utf-8" />
    <base href="https://entrecore.com/">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta description="description" content="High-Speed Web Hosting for Online Entrepreneurs"/>
    <meta name="keywords" content="Entrecore, Ontracore, Entercore, Managed Hosting, Managed Wordpress Hosting, Web Hosting, Conversion, On Page SEO, Site Optimization, WP Engine, Wpengine, Dedicated Hosting, VPS Hosting"/>
    <title>Entrecore | Ultra Fast Cloud Servers</title>
    
    <script src="//cdn.optimizely.com/js/2462660670.js"></script>

    <link rel="shortcut icon" href="assets/images/newtheme/icons/new-favicon.png" />
    <link href='https://fonts.googleapis.com/css?family=Lato:300,400,700,900' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href='<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/assets/css/newtheme/normalize.css'/>
    <link rel="stylesheet" href='<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/assets/css/newtheme/foundation.css' />
    <link rel="stylesheet" href='<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/assets/css/newtheme/toggle.css' />
    <link rel="stylesheet" href='<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/assets/css/newtheme/font-awesome.min.css' />
    <link rel="stylesheet" href='<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/assets/css/newtheme/animate.min.css' />
    <link rel="stylesheet" href='<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/assets/css/newtheme/morphext.css' />
    <link rel="stylesheet" href='<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/assets/css/newtheme/owl.carousel.css'>
    <link rel="stylesheet" href='<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/assets/css/newtheme/owl.theme.css'>
    <link rel="stylesheet" href='<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/assets/css/newtheme/owl.transitions.css'>
    <link rel="stylesheet" href='<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/assets/css/newtheme/slicknav.css'>
    <link rel="stylesheet" href='<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/assets/css/newtheme/style.css' />
    <link href='<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/assets/css/newtheme/modal.css' rel="stylesheet">
    <link rel="stylesheet" href='<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/assets/css/bootstrap-modal.css" type="text/css" media="all' />
    <link rel="stylesheet" href='<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/assets/css/bootstrap-modal-bs3patch.css' type="text/css" media="all" />
    <script src='<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/assets/js/newtheme/vendor/modernizr.js'></script>
    <script src='<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/assets/js/newtheme/vendor/jquery.js'></script>
    <script type="text/javascript">
    var base_url = 'https://entrecore.com/';
    var fb_app_id = '750412035051561';

        /*

        var ischeck = $('#checkbox')[0].checked;
        if(ischeck){
            //$('#green').css('color', '#00e359');
            alert("check"+ischeck);
        }
        else{
            //$('#blue').css('color', '#74A5CC');
            alert("not check"+ischeck);
        }
        */

            $(document).ready(function(){

if($('#checkbox').prop("checked") == true){

    $('#green').css('color', '#00e359');
}
else{
    $('#blue').css('color', '#5a5a5a');
}
$('#overview').click(function(){
var count = $('#count').val();
 //alert("test");
 if(count==0){
  document.querySelector('#flip-toggle').classList.toggle('flip');
  //document.querySelector("#myCard").classList.toggle("flip")
  $('#overview').html("See Tech Specs");
    $('#count').val("1");
}
else{
  document.querySelector('#flip-toggle').classList.toggle('flip');
  $('#overview').html("See Overview");
     $('#count').val("0");
}
  });

  $('#overview1').click(function(){

var count1 = $('#count1').val();
 //alert("test");
 if(count1==0){
  document.querySelector('#flip-toggle1').classList.toggle('flip');
  $('#overview1').html("See Tech Specs");
    $('#count1').val("1");
}
else{
  document.querySelector('#flip-toggle1').classList.toggle('flip');
  $('#overview1').html("See Overview");
     $('#count1').val("0");
}


    });

    $('#overview2').click(function(){

var count2 = $('#count2').val();
 //alert("test");
 if(count2==0){
  document.querySelector('#flip-toggle2').classList.toggle('flip');
  $('#overview2').html("See Tech Specs");
    $('#count2').val("1");
}
else{
  document.querySelector('#flip-toggle2').classList.toggle('flip');
  $('#overview2').html("See Overview");
     $('#count2').val("0");
}
   });
        $('#checkbox').click(function(){

            if($(this).prop("checked") == true){

                $('#green').css('color', '#00e359');
                 $('#blue').css('color', '#5a5a5a');
$('#theprice').html("<span>$649</span>YEARLY");
$('#theprice1').html("<span>$999</span>YEARLY");
$('#theprice2').html("<span>$3399</span>YEARLY");
            }

            else if($(this).prop("checked") == false){

                $('#blue').css('color', '#74A5CC');
                 $('#green').css('color', '#5a5a5a');
            $('#theprice').html("<span>$59</span>MONTHLY");
            $('#theprice1').html("<span>$99</span>MONTHLY");
            $('#theprice2').html("<span>$319</span>MONTHLY");
            }

        });


    });
    </script>

<script>(function() {
  var _fbq = window._fbq || (window._fbq = []);
  if (!_fbq.loaded) {
    var fbds = document.createElement('script');
    fbds.async = true;
    fbds.src = '//connect.facebook.net/en_US/fbds.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(fbds, s);
    _fbq.loaded = true;
  }
  _fbq.push(['addPixelId', '836977013006342']);
})();
window._fbq = window._fbq || [];
window._fbq.push(['track', 'PixelInitialized', {}]);
</script>
<noscript><img height="1" width="1" alt="" style="display:none" src="https://www.facebook.com/tr?id=836977013006342&amp;ev=PixelInitialized" /></noscript> 
 </head>
 <body class="home">



  <div id="fb-root"></div>

<!--  HEADER -->
<header>
    <div class="top">
        <div class="row">
            <div class="small-12 large-3 medium-3 columns">
               <div class="logo">
                <a href="<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/" title="Home"><img src="<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/assets/images/newtheme/new-logo.png" alt="" title=""/></a>
               </div>
            </div>
    
            <div class="small-12 large-9 medium-9 columns">
            
                <!--  NAVIGATION MENU AREA -->
                <nav class="desktop-menu">
                    <ul class="sf-menu">

                        <li class="current-menu-item"><a href="http://entrecore.dev">HOME</a></li>
                        <li><a href="#features">HOSTING</a> </li>
                        <li><a href="http://blog.entrecore.com">BLOG</a></li>
                        <li><a href="http://entrecore.dev/faq/">FAQ's</a></li>
                        <li><a href="http://entrecore.dev/login/">LOGIN</a></li>
                        <li><a href="http://entrecore.dev/signup/">SIGNUP</a></li>
                    </ul>
                </nav>
                <!--  END OF NAVIGATION MENU AREA --> 
            
                <!--  MOBILE MENU AREA -->
                <nav class="mobile-menu">
                    <ul>
                      <li class="current-menu-item"><a href="http://entrecore.dev">HOME</a></li>
                      <li><a href="#features">HOSTING</a></li>
                      <li><a href="http://blog.entrecore.com">BLOG</a></li>
                      <li><a href="/faq">FAQ's</a></li>
                      <li><a href="/login">LOGIN</a></li>
                      <li><a href="/signup">SIGNUP</a></li>
                    </ul>

                </nav>
                <!--  END OF MOBILE MENU AREA -->
            
            
            </div>
        </div>
    </div>

  <!--  MESSAGES ABOVE HEADER IMAGE -->
    

      <div class="message">
            <div class="row">
                <div class="small-12 columns">
                    
                  <h1>
                      High-Speed Web Hosting for Online Entrepreneurs
                    </h1>
                    <div class="message-intro">
                        <span class="message-line"></span>
                        <!--<p>Flexible Cloud Hosting</p>-->
                        <p>Convert MORE visitors into customers, faster</p>
                        <span class="message-line"></span>
                    </div>


                    
<div class="row">
<div class="small-12 columns">
  <iframe class="large-7 medium-12 xs-12 about-vid" src="https://player.vimeo.com/video/124783391?autoplay=0&title=0&byline=0&portrait=0" width="650" height="370" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> 
          <div class="clearfix"></div>
          <p class="text-center">Scaleable High Traffic Servers, Free Migrations, and a Super Simple Dashboard</p>
       <a href="https://entrecore.com/#pricingboxes"><button class="btn-bullet large-4 medium-12 small-12 xs-12">See Our Plans</button></a>

      
  </div>
  
</div><!--Bullets Row End-->

</div>

</div>

</div>
      <!--  END OF MESSAGES ABOVE HEADER IMAGE -->

</header>  
<!--  END OF HEADER -->  

  <!--  FEATURES -->
<section class="features" id="features">
    <div class="row">
        <div class="small-12 columns">
            <h2>How much money is slipping through your fingers because of slow one-size-fits-all hosting, limited scalability and hard to manage sites?</h2>

            <p>See how Entrecore super charges your website and conversion, eliminates horrible support and makes your technology easy to manage.</p>
            
            <ul class="small-block-grid-1 large-block-grid-2 medium-block-grid-3">
            
                <li  data-wow-delay="0.2s" class="wow fadeInLeft">
                   <img class="icons" alt="" src="<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/assets/images/newtheme/new icons/laptop.png" width="100" height="100">
                    <h3 class="title">Super Simple Dashboard</h3>
                    <p>Our non-technical dashboard lets you send all of your server passwords to a dev with a click</p>
                </li>
                
                <li data-wow-delay="0.4s" class="wow fadeInLeft">
           <img class="icons" alt="" src="<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/assets/images/newtheme/icons/free-migration.png" width="100" height="100">
                    <h3 class="title">FREE Migrations</h3>
                    <p>Painless, Quick and Always Free Migrations</p>
                </li>
                <li data-wow-delay="0.4s" class="wow fadeInLeft">
                <img class="icons" alt="" src="<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/assets/images/newtheme/new icons/open.png" width="100" height="100">

                    <h3 class="title">24/7 Support</h3>
                    <p>Our north american support team is available 24/7/365 via phone and chat</p>
                </li>
                
                <li data-wow-delay="0.2s" class="wow fadeInRight">
                   <img class="icons" alt="" src="<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/assets/images/newtheme/icons/backup.png" width="100" height="100">
                    <h3 class="title">Peace of Mind with Auto-backups</h3>
                    <p>We create daily offsite backups and weekly onsite backups of your server</p>
                </li>
                
                <li data-wow-delay="0.4s" class="wow fadeInRight">
                  <img class="icons" alt="" src="<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/assets/images/newtheme/icons/fast.png" width="100" height="100">
                    <h3 class="title">Conversion Optimized - Wicked Fast</h3>
                    <p> Increase your rank in google and convert more sales with your super-fast SSD only Entrecore server </p>
                   
                </li>
                
                <li data-wow-delay="0.6s" class="wow fadeInRight">
                   <img class="icons" alt="" src="<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/assets/images/newtheme/new icons/firewall.png" width="100" height="100">
                    <h3 class="title">Advanced Security</h3>
                    <p>Each server has an advanced firewall to prevent unwanted access</p>
                    
                </li>
                <li data-wow-delay="0.4s" class="wow fadeInRight">
                       <img class="icons" alt="" src="<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/assets/images/newtheme/new icons/rocket.png" width="100" height="100">
                    <h3 class="title">Scaleable & Launch Ready</h3>
                    <p>Entrecore can handle massive traffic from your next marketing campaign</p>
                    
                </li>
                
                <li data-wow-delay="0.6s" class="wow fadeInRight">
                  <img class="icons" alt="" src="<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/assets/images/newtheme/new icons/secure.png" width="100" height="100">
                    <h3 class="title">Free Virus Removals</h3>
                    <p>In the unlikely event your site(s) get infected with malware we will remove it for free</p>
                   
                </li>
            
            </ul>
        </div>
    </div>
</section>
<!--  END OF FEATURES -->

<!--  CALL TO ACTION  -->
<section class="calltoaction">
    <div class="row">
        <div class="small-12 columns">
            <!--<div data-wow-delay="0.3s" class="longshadow wow fadeInDown">NEW CUSTOMER?</div>
            <div data-wow-delay="0.5s" class="calltoactioninfo wow fadeInUp">
                <h2><span id="discount">0</span><span>%</span> OFF YOUR ORDER</h2>
                <h3>USE PROMO CODE <strong>"CLOUDMENEW"</strong></h3>
                <a href="#" class="small radius button">SIGN UP NOW!</a>
            </div>-->
        <h2>How We Are Different</h2>
        <ul class="small-block-grid-1 large-block-grid-2 medium-block-grid-3">

        <li data-wow-delay="0.4s" class="wow fadeInLeft">
        <img class="check" alt="" src="<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/assets/images/newtheme/blue-check.png" width="48" height="48">
        <p>We know online business and cater to your specific needs - speed, iteration and peace of mind. We make it easy to create one or many wordpress sites in less than 60 seconds with no technical knowledge.</p></li>

        <li data-wow-delay="0.4s" class="wow fadeInLeft">
            <img class="check" alt="" src="<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/assets/images/newtheme/blue-check.png" width="48" height="48">
            <p>Entrecore servers are dedicated cloud servers, not managed wordpress (which is code for fancy shared hosting). This means you can scale and handle REAL traffic and load during a launch.</p></li>
       
        <li data-wow-delay="0.4s" class="wow fadeInRight">
            <img class="check" alt="" src="<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/assets/images/newtheme/blue-check.png" width="48" height="48">
            <p>Other hosting companies are focused on one-size-fits-all solutions while Entrecore is made for online businesses who sell or market something online, everything about our technology stems from this core goal.</p></li>
       
        <li data-wow-delay="0.4s" class="wow fadeInRight">
            <img class="check" alt="" src="<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/assets/images/newtheme/blue-check.png" width="48" height="48">
            <p>We aren't just focused on hosting, we are focused on creating solutions for online businesses and growing with you as partners in your vision.</p></li>
</ul>
<h2 class="warning-h2 wow zoomIn animated">*Stop wasting time and money on your technology let us help you give your gift to the world!</h2>
        </div>
    </div>
</section>
<!--  END OF CALL TO ACTION -->

<!--  PRICING BOXES  -->
<div class="pricingboxes">
    
<a id="pricingboxes"></a>
    
<div class="row"> 
    <div class="small-12 columns">

            <h2>FIND A PLAN THAT'S RIGHT FOR YOU</h2>
            <p>Choose a plan that meets your needs, if you need help selecting a plan someone on our online chat will assist you, or you can call us at <span style="font-weight:bold">+1 512-298-4061</span> during business hours. Remember we can scale your server to a higher or lower package later based on your changing needs!</p>
    </div>
</div>
<div class="row"> 
<div id="toggle">
    <h5 id="blue">Monthly</h5>
    <div style="width: 110px; float:left;">
        <label><input type="checkbox" id="checkbox" class="ios-switch green tinyswitch"/><div><div></div></div></label>
    </div>
    <h5 id="green">Yearly</h5>
    <p id="save">( Save over 10% with yearly plans )</p>
</div>
</div>
    <div class="spacing-30"></div>

    <div class="row" id="package">

        <div data-wow-delay="0.2s"  class="small-12 large-3 medium-4 columns wow zoomIn">
            <div class="title">STARTER</div>
                <ul class="pricing-table">
               <div id="flip-toggle" class="flip-container flip">
                <div class="flipper">
                
                    <div class="back">
                        <li class="description bullet-item">100,000 Visits / mo</li>
                     <li class="bullet-item">Up to 3 Sites</li>
                    <li class="bullet-item">Daily Automatic Backups</li>
                    <li class="bullet-item">Auto Speed Enhancements</li>
                    <li class="bullet-item">Amazing 24/7 Support</li>
                    <li class="bullet-item">Stupid Easy Dashboard</li>
                    
                </div>

               
<div class="front">
                    <li class="description bullet-item">1vCPU</li>
                    <li class="bullet-item">1GB Ram</li>
                    <li class="bullet-item">30GB SSD Hard Drive</li>
                    <li class="bullet-item">2TB Bandwidth</li>
                    <li class="bullet-item">24/7 Uptime Monitoring</li>
                      <li class="bullet-item"></li>
                   
                </div>


                </div>
                </div>
<li class="price" id="theprice"><span>$59</span>MONTHLY</li>
                    <li class="bullet-item">
<p style="cursor: pointer;" id="overview">See Tech Specs</p>
<input type="hidden" id="count" value="1"/>
                    </li>
                <li class="cta-button"><p><span><a href="#1gb" class="signup_with_selected_core">HOST MY SITES</a></span></p></li>
               


                </ul>
        </div>
    
        <div data-wow-delay="0.4s"  class="small-12 large-3 medium-4 columns wow zoomIn">
            <div class="title">WEB PRO</div>
            <ul class="pricing-table">

         <div id="flip-toggle1" class="flip-container flip">
                <div class="flipper">
                <div class="back">
                    <li class="description bullet-item">500,000 Visits / mo</li>
                    <li class="bullet-item">Up to 10 Sites</li>
                    <li class="bullet-item">Daily Automatic Backups</li>
                    <li class="bullet-item">Auto Speed Enhancements</li>
                    <li class="bullet-item">Amazing 24/7 Support</li>
                    <li class="bullet-item">Stupid Easy Dashboard</li>
                </div>

                
                    <div class="front">
                   
                    <li class="description bullet-item">1vCPU</li>
                    <li class="bullet-item">4GB Ram</li>
                    <li class="bullet-item">60GB SSD Hard Drive</li>
                    <li class="bullet-item">4TB Bandwidth</li>
                    <li class="bullet-item">24/7 Uptime Monitoring</li>
                      <li class="bullet-item"></li>
                   
                </div>
                </div>
                </div>
                 <li class="price" id="theprice1"><span>$99</span>MONTHLY</li>
                <li class="bullet-item"><p style="cursor: pointer;" id="overview1">See Tech Specs</p>
                    <input type="hidden" id="count1" value="1"/></li>

                <li class="cta-button"><p><span><a href="#4gb" class="signup_with_selected_core">HOST MY SITES</a></span></p></li>

                </ul>
        </div>
    
        <div data-wow-delay="0.6s"  class="small-12 large-3 medium-4 columns wow zoomIn">
            <div class="title">CRUSHIN' IT</div>
            <ul class="pricing-table">
                
                <div id="flip-toggle2" class="flip-container flip">
                <div class="flipper">
                    <div class="back">

                     <li class="description bullet-item">2,000,000 Visits / mo</li>
                    <li class="bullet-item">Up to 40 Sites</li>
                    <li class="bullet-item">Daily Automatic Backups</li>
                    <li class="bullet-item">Auto Speed Enhancements</li>
                    <li class="bullet-item">Amazing 24/7 Support</li>
                    <li class="bullet-item">Stupid Easy Dashboard</li>
                   
                </div>
                <div class="front">

                
                    <li class="description bullet-item">8vCPU</li>
                    <li class="bullet-item">16GB Ram</li>
                    <li class="bullet-item">160GB SSD Hard Drive</li>
                    <li class="bullet-item">6TB Bandwidth</li>
                    <li class="bullet-item">24/7 Uptime Monitoring</li>
                      <li class="bullet-item"></li>
                    

                </div>
                </div>
                </div>
<li class="price" id="theprice2"><span>$319</span>MONTHLY</li>
                   <li class="bullet-item"><p style="cursor: pointer;" id="overview2">See Tech Specs</p>
                    <input type="hidden" id="count2" value="1"/></li>
                <li class="cta-button"><p><span><a href="#16gb" class="signup_with_selected_core">CRUSH IT</a></span></p></li>

                </ul>
        </div>

        <div data-wow-delay="0.2s"  class="small-12 large-3 medium-4 columns wow zoomIn">
            <div class="title">TRAFFIC GURU</div>
               <ul class="pricing-table">


                    <li class="description bullet-item">Over 2,000,000 Visits / mo</li>
                    
                    <li class="bullet-item">Over 40 Sites</li>
                    <li class="bullet-item">Auto Speed Enhancements</li>
                    <li class="bullet-item">Amazing 24/7 Support</li>
                    <li class="bullet-item">Stupid Easy Dashboard</li>
                    <li class="bullet-item">Dedicated Support Rep</li>
                    <li class="bullet-item">Custom Environment</li>
                    <li class="bullet-item"></li>
                    <li class="bullet-item"></li>
                      <li class="bullet-item"></li>
                
                
                <li class="cta-button"><p><span><a href="/contact">CONTACT US</a></span></p></li>
                </ul>
          



            </div>

<div class="money-back columns">
    <div class="row">
        <img data-wow-delay="0.4s" class="badge wow zoomIn"  alt="" src="<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/assets/images/60day.png" width="150" height="150">
        <h3 data-wow-delay="0.4s" class="wow zoomIn moneyback-h3">If you are not completely satisfied with our service, let us know within the first 60 days and we will give you a full refund.</h3>
    </div>
</div><!--End of Money Back  -->

 </div>
<!--  END OF PRCING BOXES  -->

<section id="wordpress">
    <div class="row">
    
                    <div class="columns text-center ">
                        <h2>See How To Create A Wordpress Site in 60 Seconds</h2>
                        <iframe class="large-8 medium-12 small-12 xs-12 wow fadeInUp" data-wow-delay="0.3s"  width="560" height="315" src="https://www.youtube.com/embed/tnMZEkk-PEk" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>
</section>


<!--  TESTIMONIALS  -->
<section class="testimonials">
    <div class="row">
        <div class="small-12 columns">
            <div class="circle"><i class="fa fa-heart"></i></div>
            <h2 id="entrepreneurs">ENTREPRENEURS LOVE US.</h2>
            <h2>OVER <span id="lovedby">0</span> CREATORS USE OUR PLATFORM.</h2>
            <!--<h2>LOVED BY <span id="lovedby">0</span> DEVELOPERS</h2>-->
            <hr class="small"/>
        
            <div id="testimonials-carousel" class="owl-carousel">

                <div class="item">
                    <div class="whoclient"><span>Ian Aldridge, CEO at <a href="">Progressive Legal</a></span></div>
                    <div class="testimonial-content">
                        <div class="testimonialimg"><img src="<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/assets/images/newtheme/Ian profile.jpg" alt="" /></div>
                        <p>Austin and his team are always there for me when I need them and whenever we launch a new product I feel like I have people to rely on to ensure our servers don't crash.</p>
                    </div>
                </div>

                 <div class="item">
                    <div class="whoclient"><span>Chris Monery, CEO at <a href="">mobymemory.co.uk</a></span></div>
                    <div class="testimonial-content">
                        <div class="testimonialimg"><img src="<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/assets/images/newtheme/Chris profile.jpg" alt="" /></div>
                        <p>Entrecore customer service and technical support have been top notch. Every hour of downtime costs us thousands in revenue, so being able to call at all hours and have someone fix the problem quickly and efficiently, whether it be a hosting or site issue, is extremely refreshing.</p>
                    </div>
                </div>

                <div class="item">
                    <div class="whoclient"><span>Brandon Epstein, Founder of <a href="">Entrepreneur Fitness</a></span></div>
                    <div class="testimonial-content">
                        <div class="testimonialimg"><img src="<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/assets/images/newtheme/Brandon profile.jpg" alt="" /></div>
                        <p>Austin was incredibly kind and generous with his time helping me get my site uploaded to his server. I am incredibly grateful to have the security of being on a hosting server that I know I can count on no matter what. If I had one word I would use to describe Austin and his business it would be integrity. He does what he says he is going to do and his service delivers what he promises. Did I mention my site is performing at supersonic speed since switching over to his hosting platform?</p>
                    </div>
                </div>

                <div class="item">
                    <div class="whoclient"><span>Blake Allen, Developer at <a href="">MetaMind</a></span></div>
                    <div class="testimonial-content">
                        <div class="testimonialimg"><img src="<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/assets/images/newtheme/Blake profile.png" alt="" /></div>
                        <p>What's most important to me is that I know my website will stay live during critical periods such as a launch... that's when you need someone like Austin the most. Luckily Austin Felton is one the most competent technologists I know, when you use his services you can rest easy that you are in good hands.</p>
                    </div>
                </div>

                <div class="item">
                    <div class="whoclient"><span>Dainis Graveris from <a href="">1stWebDesigner</a></span></div>
                    <div class="testimonial-content">
                        <div class="testimonialimg"><img src="<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/assets/images/newtheme/dainis-new-profile-picture.jpg" alt="" /></div>
                        <p>Since switching to EntreCore, I could finally forget about hosting issues and focus on running my business.</p>
                    </div>
                </div>

                
            
                </div>
        
        </div>
    </div>
</section>
<!--  END OF TESTIMONIALS -->

<!--  MONITORING  -->
<section class="monitoring">
    <div class="row">
        <div class="small-12 columns">
            <h2>24/7 SITE UPTIME MONITORING</h2>
            <p class="text-center">The moment our scanning indicates that your server or site is down tech support is immediately alerted and we break the glass encasing our red emergency espresso machine.</p>
            <div data-wow-delay="0.3s" class="text-center wow fadeInUp">
                <img src="<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/assets/images/newtheme/monitoring-new.png" alt=""/>
            </div>
        </div>
        <div class="call-button columns text-center">
            <a href="https://entrecore.com/#pricingboxes"><button class="btn-bullet large-4 medium-12 small-12 xs-12">See Our Plans</button></a>
        </div>
    </div>
</section>
<!--  END OF MONITORING  -->


<!--  FOOTER  -->
<footer>
    <div class="row">
        <div class="small-12 columns">
            <div class="contacts">
                <div class="row">
                    <div class="small-12 large-3 medium-3 columns">
                      <i class="fa fa-map-marker"></i>
                      Austin, TX
                    </div>
                    <div class="small-12 large-3 medium-3 columns">
                        <i class="fa fa-mobile"></i>
                        512-298-4061
                    </div>
                    <div class="small-12 large-3 medium-3 columns">
                        <a href=""><i class="fa fa-comments"></i></a>
                        LIVE CHAT
                    </div>
                    <div class="small-12 large-3 medium-3 columns">
                        <a href=""><i class="fa fa-envelope-o"></i></a>
                        E-MAIL US
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="small-12 columns">
            <div class="footerlinks"> 
                <div class="small-12 large-3 medium-3 columns border-right">
                  <h2>Hosting</h2>
                  <ul>

                        <li><a href="https://entrecore.com/login">Login</a></li>
                        <li><a href="https://entrecore.com/signup">Signup</a></li>
                        <li><a target="_blank" href="https://www.youtube.com/watch?v=tnMZEkk-PEk">How To Create a Server in 60sec</a></li>
                        <li><a target="_blank" href="https://blog.entrecore.com/golive">How To Make a Site Live in 60sec</a></li>
                        <li><a href="">FAQ</a></li>
                        <li></li>
                    <!--<li><a href="https://entrecore.com/shared-hosting">Shared Hosting</a></li>
                    <li><a href="https://entrecore.com/cloud-vps">Managed VPS</a></li>
                    <li><a href="https://entrecore.com/dedicated-servers">Dedicated Services</a></li>
                    <li><a href="">Become a Reseller</a></li>
                    <li><a href="">Special Offers</a></li>-->
                  </ul>
                </div>
            
                <div class="small-12 large-3 medium-3 columns border-right">
                    <h2>Entrecore</h2>
                    <ul>
                        <!--<li><a href="">About us</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Terms of Service</a></li>
                        <li><a href="">Acceptable Use Policy</a></li>
                        <li><a href="">Affiliates</a></li>-->

                        <li><a target="_blank" href="http://blog.entrecore.com">Blog</a></li>
                        <li><a href="">Affiliates</a></li>
                        <li><a href="<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/terms-of-service/">Terms</a></li>
                        <li><a href="<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/privacy-policy/">Privacy Policy</a></li>
                        <li><a href="<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/acceptable-use-policy/">Acceptable Use Policy</a></li>
                        <li><a href="<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/copyright-infringement/">Copyright Infringement</a></li>
                        
                    </ul>
                </div>
            
                <div class="small-12 large-3 medium-3 columns border-right">
                    <h2>FAQ</h2>
                    <ul>

                        <li><a href="<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/faq">General</a></li>
                        <li><a href="<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/billing">Billing</a></li>
                        <li><a href="<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/technical">Technical</a></li>


                    </ul>
                </div>
            </div>
        
        </div>
    </div>

  <!--SOCIAL LINKS -->
    <div class="social">
        <div class="row">
            <div class="small-12 columns">
                <ul class="small-block-grid-1 large-block-grid-5 medium-block-grid-5"> 
                    <li class="facebook"><a target="_blank" href="http://facebook.com/entrecore">FACEBOOK</a></li> 
                    <li class="twitter"><a target="_blank" href="http://twitter.com/entrecore">TWITTER</a></li> 
                    <li class="googleplus"><a href="">GOOGLE+</a></li> 
                    <li class="linkedin"><a href="">LINKEDIN</a></li> 
                    <li class="pinterest"><a href="">YOUTUBE</a></li> 
                </ul>
            </div>
        </div>
    </div>
  <!-- END OF SOCIAL LINKS -->
  <p class="copyright">© Copyright Entrecore, all rights reserved. </p>
</footer>
<!--  END OF FOOTER  -->
 
<a href="#top" id="back-to-top"><i class="fa fa-angle-up"></i></a>
<script src="assets/js/home-common.js" type="text/javascript"></script> 
<!--==============FORM VALIDATION JS=================--> 
<script type="text/javascript" src='<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/assets/global/plugins/jquery-validation/js/jquery.validate.min.js'></script>
<script src='<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/assets/global/plugins/jquery-validation/js/additional-methods.min.js'></script>
<script src='<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/assets/js/newtheme/validation.js'></script>
<!--==============BOOTSTRAP JS=================--> 
<script src='<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/assets/js/bootstrap.js' type="text/javascript"></script> 
<script src='<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/assets/js/bootstrap-modalmanager.js' type="text/javascript"></script>
<script src='<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/assets/js/bootstrap-modal.js' type="text/javascript"></script>
<!--==============FORM VALIDATION JS=================--> 
<script src='<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/assets/js/newtheme/foundation.min.js'></script>
<script src='<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/assets/js/newtheme/vendor/hoverIntent.js'></script>
<script src='<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/assets/js/newtheme/vendor/superfish.min.js'></script>
<script src='<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/assets/js/newtheme/vendor/morphext.min.js'></script>
<script src='<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/assets/js/newtheme/vendor/wow.min.js'></script>
<script src='<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/assets/js/newtheme/vendor/jquery.slicknav.min.js'></script>
<script src='<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/assets/js/newtheme/vendor/waypoints.min.js'></script>
<script src='<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/assets/js/newtheme/vendor/jquery.animateNumber.min.js'></script>
<script src='<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/assets/js/newtheme/vendor/owl.carousel.min.js'></script>
<script src='<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/assets/js/newtheme/vendor/retina.min.js'></script>
<script src='<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/assets/js/newtheme/custom.js'></script>
<script src='<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/assets/js/underscore-min.js'></script>
<script src="//maps.googleapis.com/maps/api/js?v=3.exp&amp;sensor=false&libraries=geometry" type="text/javascript"></script>
<script src='<?php echo get_bloginfo( 'stylesheet_directory' ); ?>/assets/assets/js/geolocation.js'></script>
<script>
$(document).ready(function(){
  if($('#include_geo').length > 0){
    fill_location_fields();   
  }
  $(".signup_with_selected_core").click(function(){
    var size_slug = $(this).attr('href');
    size_slug = size_slug.replace('#', '');
    setCookie('signup_with_selected_core', size_slug, 1);
    if($('#checkbox').prop("checked") == true)
      setCookie('signup_with_selected_billing_cycle', 1, 1);
        window.location = 'https://entrecore.com/signup';
        });
});
</script>
<!-- begin SnapEngage code -->
<script type="text/javascript">
(function() {
var se = document.createElement('script'); se.type = 'text/javascript'; se.async = true;
se.src = '//storage.googleapis.com/code.snapengage.com/js/dbb672eb-ad47-4539-bfa3-aaa69b79d298.js';
var done = false;
se.onload = se.onreadystatechange = function() {
if (!done&&(!this.readyState||this.readyState==='loaded'||this.readyState==='complete')) {
done = true;
/* Place your SnapEngage JS API code below */
/* SnapEngage.allowChatSound(true); Example JS API: Enable sounds for Visitors. */
}
};
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(se, s);
})();
</script>

<!-- end SnapEngage code -->
<!-- Google Code for Remarketing Tag -->

<script type="text/javascript">
/* <![CDATA[ */
var google_conversion_id = 967496241;
var google_custom_params = window.google_tag_params;
var google_remarketing_only = true;
/* ]]> */
</script>
<script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js">
</script>
<noscript>
<div style="display:inline;">
<img height="1" width="1" style="border-style:none;" alt="" src="//googleads.g.doubleclick.net/pagead/viewthroughconversion/967496241/?value=0&amp;guid=ON&amp;script=0"/>
</div>
</noscript>




</body>
</html>