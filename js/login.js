// JavaScript Document
$(document).ready(function(){
	//Login Modal loading
	var $modal = $('#Login-modal');
	$('#Login').on('click', function(){
	  // create the backdrop and wait for next modal to be triggered
	  $('body').modalmanager('loading');
	 
	  setTimeout(function(){
		 $modal.load(base_url+'auth/login', '', function(){
		 $modal.modal();
		 $modal.on('shown', function () {
		  bindForgotPassword($modal);
		  $('#login-form').validate({
			  submitHandler: function(form) {
				  sendLogin(form);
				  return false;
			  }
		  });
		 });
		});
	  }, 1000);
	});
	//Signup Modal loading
	var $modal = $('#Signup-modal');
	$('#Signup').on('click', function(){
	  // create the backdrop and wait for next modal to be triggered
	  $('body').modalmanager('loading');
	 
	  setTimeout(function(){
		 $modal.load(base_url+'auth/signup', '', function(){
		  $modal.modal();
		  $modal.on('shown', function () {
		  $("#phone").inputmask("mask", {
          	"mask": "(999) 999-9999"
          }); //specifying fn & options
		  $('#signup-form').validate({
			  submitHandler: function(form) {
				  sendSignup(form);
				  return false;
			  }
		  });
		 });
		});
	  }, 1000);
	});
});

function bindForgotPassword($modalLogin){
	//Forgot Password Modal loading
	var $modal = $('#Forgot_password-modal');
	$('#forgot_password').on('click', function(e){
		$modalLogin.modal('toggle');
		e.preventDefault();
	  // create the backdrop and wait for next modal to be triggered
	  $('body').modalmanager('loading');
	 
	  setTimeout(function(){
		 $modal.load(base_url+'auth/forgotPassword', '', function(){
		  $modal.modal();
		  $modal.on('shown', function () {
		  $('#password-reset-form').validate({
			  submitHandler: function(form) {
				  sendPasswordReset(form);
				  return false;
			  }
		  });
		 });
		});
	  }, 1000);
	});
}

function sendPasswordReset(form){
	var data = $(form).serialize();
	$("#error-message").remove();
	$('body').modalmanager('loading');
	$.ajax({
		type: 'POST',
		url: base_url+'auth/sendForgotPassword',
		data: data,
		cache: false,
		dataType: 'json',
		success: function(response){
			$('body').modalmanager('removeLoading');
			if(response.result == 'error'){
				var html = '<div class="alert alert-danger display-hide" id="error-message" style="display: block;"><button class="close" data-close="alert"></button>'+response.message+'</div>';
				$(form).before(html);
			}else{
				document.getElementById("password-reset-form").reset();
				var html = '<div class="alert alert-success display-hide" id="error-message" style="display: block;"><button class="close" data-close="alert"></button>'+response.message+'</div>';
				$(form).before(html);
			}
		}
	});
}

function sendLogin(form){
	var data = $(form).serialize();
	$("#error-message").remove();
	$('body').modalmanager('loading');
	$.ajax({
		type: 'POST',
		url: base_url+'auth/verifyLogin',
		data: data,
		cache: false,
		dataType: 'json',
		success: function(response){
			$('body').modalmanager('removeLoading');
			if(response.result == 'error'){
				var html = '<div class="alert alert-danger display-hide" id="error-message" style="display: block;"><button class="close" data-close="alert"></button>'+response.message+'</div>';
				$(form).before(html);
			}else{
				if(response.redirect_after_login)
					window.location = response.redirect_after_login;
				else
					window.location = base_url+'servers';
			}
		}
	});
}                         

function sendSignup(form){
	var data = $(form).serialize();
	$("#error-message").remove();
	$('body').modalmanager('loading');
	$.ajax({
		type: 'POST',
		url: base_url+'auth/verifySignup',
		data: data,
		cache: false,
		dataType: 'json',
		success: function(response){
			$('body').modalmanager('removeLoading');
			if(response.result == 'error'){
				var html = '<div class="alert alert-danger display-hide" id="error-message" style="display: block;"><button class="close" data-close="alert"></button>'+response.message+'</div>';
				$(form).before(html);
			}else{
				window.location = base_url+'servers';
			}
		}
	});
}

//Handling Facebook login
// This is called with the results from from FB.getLoginStatus().
  function statusChangeCallback(response) {
    //console.log('statusChangeCallback');
    //console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      sendAPICall();
    } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
      //document.getElementById('status').innerHTML = 'Please log ' +'into this app.';
    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
      //document.getElementById('status').innerHTML = 'Please log ' +'into Facebook.';
    }
  }

  // This function is called when someone finishes with the Login
  // Button.  See the onlogin handler attached to it in the sample
  // code below.
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }
  
  function loginFacebook(){
	  FB.login(function(response) {
	   statusChangeCallback(response);
	 }, {scope: 'public_profile,email,user_hometown,user_location,user_about_me,user_work_history'});
  }

  window.fbAsyncInit = function() {
  FB.init({
    appId      : fb_app_id,
    cookie     : true,  // enable cookies to allow the server to access 
                        // the session
	//scope		: 'public_profile,email,user_hometown,user_location,user_about_me,user_work_history', //Scopes
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.1' // use version 2.1
  });

  // Now that we've initialized the JavaScript SDK, we call 
  // FB.getLoginStatus().  This function gets the state of the
  // person visiting this page and can return one of three states to
  // the callback you provide.  They can be:
  //
  // 1. Logged into your app ('connected')
  // 2. Logged into Facebook, but not your app ('not_authorized')
  // 3. Not logged into Facebook and can't tell if they are logged into
  //    your app or not.
  //
  // These three cases are handled in the callback function.

  /*FB.getLoginStatus(function(response) {
    //statusChangeCallback(response);
  });*/

  };

  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.
  function sendAPICall() {
    //console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
		$('body').modalmanager('loading');
		$.ajax({
			type: 'POST',
			url: base_url+'auth/fbLogin',
			data: response,
			cache: false,
			dataType: 'json',
			success: function(response){
				$('body').modalmanager('removeLoading');
				if(response.result == 'error'){
					var html = '<div class="alert alert-danger display-hide" id="error-message" style="display: block;"><button class="close" data-close="alert"></button>'+response.message+'</div>';
					$('form #signup-form').before(html);
				}else{
					if(response.redirect_after_login)
						window.location = response.redirect_after_login;
					else
						window.location = base_url+'servers';
				}
			}
		});
    });
  }