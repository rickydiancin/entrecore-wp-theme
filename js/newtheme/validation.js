// JavaScript Document
function checkPwd(str) {
	var regex = /^[a-zA-Z0-9]*$/;
	if (str.length < 8) {
        return 2;
    } else if (str.length > 15) {
        return 3;
    } else if (str.search(/\d/) == -1) {
        return 4;
    } else if (str.search(/[a-zA-Z]/) == -1) {
        return 5;
    } else if(regex.test(str) == true) {
		return 6;
    }
    return 1;
}
$(document).ready(function(){
	$('#login-form').validate({
		  submitHandler: function(form) {
			  $('.alert-box').remove();
			  $('body').modalmanager('loading');
			  $('input[type=submit]').addClass('disabled');
			  $('input[type=submit]').attr('disabled', 'disabled');
			  form.submit();
		  }
	  });
	  
	  
	  $.validator.addMethod("pwcheck", function(value, element) {
		var pwcheck_msg = '';	
		var r_pass = element.value;
		var res = checkPwd(value);
		console.log(res);
		if(value == '' || res == 1 )
		{
			return true;
		}
		else if(res == 2 )
		{
			pwcheck_msg = 'Password is too short.';
		}
		else if(res == 3 )
		{
			pwcheck_msg = 'Password is too long.';
		}else if(res == 4 )
		{
			pwcheck_msg = 'Password must contain a digit.';
		}else if(res == 5 )
		{
			pwcheck_msg = 'Password must contain an alphabet.';
		}
		else if(res == 6 )
		{
			pwcheck_msg = 'Password must contain a special charecter from (!, @, $, %, *, ?)';
		}
		else
		{
			return false;
		}
	}, '<label class="error" for="pwcheck">Password Must be of length 8-15<br>Must contains a digit<br />must contain an alphabet<br />must contain a special charecter from (!, @, $, %, *, ?)<br />  </label>'),
	  $('#signup-form').validate({
		  submitHandler: function(form) {
			  $('.alert-box').remove();
			  $('body').modalmanager('loading');
			  $('input[type=submit]').addClass('disabled');
			  $('input[type=submit]').attr('disabled', 'disabled');
			  form.submit();
		  }
	  });
	  
	  
	  
	  
	  
	  $('#password-reset-form').validate({
		  submitHandler: function(form) {
			  $('.alert-box').remove();
			  $('body').modalmanager('loading');
			  $('input[type=submit]').addClass('disabled');
			  $('input[type=submit]').attr('disabled', 'disabled');
			  form.submit();
		  }
	  });
});

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
	var form_id = ($('#signup-form').length > 0)?'signup-form':'login-form';
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
					$('body').modalmanager('removeLoading');
					var html = '<div class="alert-box alert" id="error-message" style="display: block;"><button class="close" data-close="alert"></button>'+response.message+'</div>';
					$('#'+form_id).before(html);
				}else if(response.result == 'info'){
					$('body').modalmanager('removeLoading');
					var html = '<div class="alert-box success" id="error-message" style="display: block;"><button class="close" data-close="alert"></button>'+response.message+'</div>';
					$('#'+form_id).before(html);
					window.location = base_url+'account/profile#tab_creditcard';
				}
				else{
					if(response.redirect_after_login)
						window.location = response.redirect_after_login;
					else
						window.location = base_url+'servers';
				}
			}
		});
    });
  }