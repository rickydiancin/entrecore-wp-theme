<?php
/**
 * This file adds the Landing template to the Parallax Pro Theme.
 *
 * @author StudioPress
 * @package Parallax
 * @subpackage Customizations
 */

/*
Template Name:Login Page
*/

?>

<html class="no-js" lang="en">
  <head>
    <meta charset="utf-8" />
    <base href="https://entrecore.com/">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Login - SSD Cloud Server | Entrecore</title>
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
    </script>
  </head>
  <body class="login-page">
	<div id="fb-root"></div>
	<div class="login-container">
    <div class="row">
        <div class="small-12 large-7 large-centered medium-7 medium-centered columns">
            <div class="login-form">
            					                            	                <form action="https://entrecore.com/auth/verifyLogin" id="login-form" method="post" novalidate="novalidate" autocomplete="off">
                    <input type="text" class="required email" placeholder="Email Address" name="email" id="email" value="" autocomplete="off" size="50" />
                    <input type="password" required placeholder="Password" name="password" id="password" size="20" />
                    <input type="submit" value="Login to my Account" />
                    <div class="clearfix"></div>
                    <div class="or_container">OR</div>
                    <a href="javascript://void(0);" onclick="loginFacebook();" class="tiny button"><img style="width:12px;" src="assets/images/1416592532_square-facebook-32.png" /> LOGIN USING FACEBOOK</a>
                </form>
                <div class="clearfix"></div>
                <div class="fpassword_container">
                	<a href="https://entrecore.com/forgot">Forgot Password?</a>
                </div>
                <div class="fpassword_container">
                	Don't have an account? <a href="https://entrecore.com/signup">Sign up</a>
                </div>
            </div>
        </div>
    </div>
</div>

	<a href="#top" id="back-to-top"><i class="fa fa-angle-up"></i></a>
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
            //fill_location_fields();		
        }
    });
    </script>
</body>
</html>
