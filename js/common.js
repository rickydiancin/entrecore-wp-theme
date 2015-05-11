// JavaScript Document
// Server pages JS
$(document).ready(function(){
	$(".cust-rad").click(function(){
		//$('#distribution').val('');
		$('.dist-selected').each(function(){
			$(this).removeClass('dist-selected');
		});
		$('#current_type_title').text($(this).text());
	});
	
	$.validator.addMethod('IP4Checker', function(value) {
			var ip = "^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$";
			return value.match(ip);
	}, 'Invalid IP address');
	$('.size').on('click', function(){
		$('.size').removeClass('pricing-active');
		$(this).addClass('pricing-active');
		$('#selected_size').val($(this).attr('id'));
		loadSnapshots();
	});
	
	/*$('.region').on('click', function(e){
		var target = $(e.target);
		if(target.is('.region .btn')){
			var target_id = $(e.target).attr('id');
			$('.region .btn').removeClass('active');
			$('#'+target_id).addClass('active');
			$('#selected_region').val(target_id);
			loadSnapshots();
		}else{
			var target_id = $(this).find('.btn-group .btn:first').attr('id');
			$('.region .btn').removeClass('active');
			$('#'+target_id).addClass('active');
			$('#selected_region').val(target_id);
			loadSnapshots();
		}
		$('.region').removeClass('pricing-active');
		$(this).addClass('pricing-active');
	});*/
	/*$('.distribution').on('click', function(){
		$('.distribution').removeClass('pricing-active');
		$(this).addClass('pricing-active');
		$('input:radio[name=distribution]').removeAttr('checked');
		$(this).find('input:radio[name=distribution]:first').attr('checked', 'checked');
	});*/
	$(".btn-tooltip").tooltip();
	prepareCreateServer();
	$('#add_ssh_key').on('click', function(e){
		e.preventDefault();
		$('#ssh_key_box').toggleClass('hide');
	});
	$('#close_ssh_blok').on('click', function(e){
		e.preventDefault();
		$('#ssh_key_box').addClass('hide');
	});
	$('#save_ssh_key').on('click', function(e){
		e.preventDefault();
		if($('#ssh_key').valid()){
			$(this).attr('disabled', 'disabled');
			$("#key_error").remove();
			$('#save_ssh_key').after('<div style="float:left;" class="editableform-loading"></div>');
			$.ajax({
				type: 'POST',
				url: base_url+'servers/saveSSHKey',
				data: "ssh_key="+$('#ssh_key').val()+"&ssh_key_comments="+$('#ssh_key_comments').val(),
				cache: false,
				dataType: 'json',
				success: function(response){
					$('#save_ssh_key').removeAttr('disabled');
					$('.editableform-loading').remove();
					if(response.result == 'error'){
						$("#ssh_key").before('<div id="key_error"><div class="clearfix"></div><div class="alert alert-danger"><button class="close" data-close="alert"></button>'+response.message+'</div><div class="clearfix"></div></div>');
					}else{
						$("#ssh_keys_btns").html(response.html);
						$('#ssh_key').val('');
						$('#ssh_key_comments').val('');
						$('#ssh_key_box').addClass('hide');
						Metronic.initAjax(); // init metronic core components
						Layout.init(); // init current layout
					}
				}
			});
		}
	});
	$('#ssh_keys_btns').on('click', function(){
		setTimeout(count);
	});
	var count =  function(){
		var val = '';
		$("#ssh_keys_btns").children('label').each(function(i, btn){
			if($(btn).hasClass('active') ){
				val++;
			}
		});
		if(val > 0){
			if(val == 1){
				$('#keys_count').html('an SSH Key');
			}else{
				$('#keys_count').html(val+' SSH Keys');
			}
			$('#ssh_key_selected').removeClass('hide');
			$('#no_ssh_key').addClass('hide');
		}else{
			$('#ssh_key_selected').addClass('hide');
			$('#no_ssh_key').removeClass('hide');
		}
		
	}
	Metronic.init(); // init metronic core components
	QuickSidebar.init() // init quick sidebar

	if($('#vmap').length > 0 ){
	   // initiate layout and plugins
		//MapsVector.init();
		jVectorMap.init();
		/*var fc = '#c9dfaf';
		$('#vmap').vectorMap('set', 'colors', {ca:fc});*/
		//loadSnapshots('nyc3');
		/*jQuery('#vmap').bind('regionClick.jqvmap',function(event, code, region){
			var selected  = (code == 'ca')?'sfo1':'nyc1';
			$('#selected_region').val(selected);
			loadSnapshots(region);
		});*/
	}
	//Layout.init(); // init current layout
	
	
});

function checkPwd_strong(str) {
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

function checkPwd_server(str) {
	var regex = /^[a-zA-Z0-9]*$/;
	if (str.length < 8) {
        return 2;
    } else if (str.length > 15) {
        return 3;
    } else if (str.search(/\d/) == -1) {
        return 4;
    } else if (str.search(/[a-zA-Z]/) == -1) {
        return 5;
    }/* else if(regex.test(str) == true) {
		return 6;
    }*/
    return 1;
}
function generate_random_password(target_id)
{
	$("#"+target_id).parent().next('div').prepend('<div class="editableform-loading" style="float:left;"></div>');
	$.ajax({
		type: 'POST',
		url: base_url+'servers/generate_random_password',
		data: "",
		cache: false,
		dataType: 'json',
		success: function(response){
			$(".editableform-loading").remove();
			$("#"+target_id).val(response.random_password);
		}
	});
}

var placeholder = "Enter all of your login information for your old server below and we will migrate your site(s) for free:\n\n-If you use cpanel please enter your cPanel login URL as well as your username and password.\n-If your server does not have cPanel we require your old server's root username and password.\n-We also need your registrar login, this is where you purchased your domain. \n\nWe need this to make your server live on the internet after the migration is complete. If you don't know where you purchased your domain enter your domain at http://who.is/\n"
function add_placeholder()
{
	$('#additional_information').attr('value', placeholder);
	$('#additional_information').css('color', '#C0C0C0');
	
	$('#additional_information').focus(function(){
		if($(this).val() === placeholder){
			$(this).attr('value', '');
			$('#additional_information').css('color', '');
		}
	});
	
	$('#additional_information').blur(function(){
		if($(this).val() ===''){
			$(this).attr('value', placeholder);
			$('#additional_information').css('color', '#C0C0C0');
		}    
	});
}
function prepareCreateServer(){
	/*if($('#selected_region').val() == ''){
		$('.region').first().find('.btn:first').click();
	}else{
		$('#'+$('#selected_region').val()).click();
	}*/
	//$('.distribution').first().click();
	if(typeof($('#returned').val()) != 'undefined'){
		$('input[name=distribution]:checked').click();
	}else{
		$('.distribution').first().find('input:radio[name=distribution]:first').click();
	}
}

function loadSnapshots(region){
	$("#snapshots_container").html('<div class="editableform-loading"></div>');
	$('#use_snapshot').val('0');
	$.ajax({
		type: 'POST',
		url: base_url+'servers/loadSnapshots',
		data: "region="+$('#selected_region').val()+'&selected_size='+$('#selected_size').val(),
		cache: false,
		dataType: 'json',
		success: function(response){
			if(response.result == 'error'){
				$("#server_Types_container").prepend('<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+response.message+'</div>');
				//$("#snapshots_container").html('<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+response.message+'</div>');
			}else{
				//console.log(response.html);
				$("#my_images_group").html(response.html);
				$(".selectabale_distribution").click(function(){
					var selected_distribution = $(this).children('a').attr('href');
					$('#distribution').val(selected_distribution);
					$('.dist-selected').each(function(){
						$(this).removeClass('dist-selected');
					});
					$(this).addClass('dist-selected');
					$(this).parents('.btn-group').children('.dropdown-toggle').addClass('dist-selected');
					$('.cust-rad').each(function(){
						$(this).removeClass('active');
					});
					$('#current_type_title').text($(this).text());
					if($(this).hasClass('snap'))
						$('#use_snapshot').val(1);
					else
						$('#use_snapshot').val(0);
				});
				/*$('#distribution').change(function ()
				{
					var dist_label=$('#distribution :selected').parent().attr('id');
					if(dist_label == 'my_images_group')
						$('#use_snapshot').val(1);
					else
						$('#use_snapshot').val(0);
				});*/
				
				/*$("#snapshots_container").html(response.html);*/
				/*$('#snapshots_buttons').on('click', function(){
					setTimeout(countSnapshot);
				});*/
				/*var countSnapshot =  function(){
					var val = '';
					$("#snapshots_buttons").children('label').each(function(i, btn){
						if($(btn).hasClass('active') ){
							val++;
						}
					});
					if(val > 0){
						$('#use_snapshot').val('1');
					}else{
						$('#use_snapshot').val('0');
					}
					
				}*/
			}
		}
	});
}

function loadFeatures(target_id){
	$("#features-div").html('<div class="editableform-loading"></div>');
	$.ajax({
		type: 'POST',
		url: base_url+'servers/loadFeatures',
		data: "target_id="+target_id,
		cache: false,
		dataType: 'json',
		success: function(response){
			if(response.result == 'error'){
				$("#features-div").html('<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+response.message+'</div>');
			}else{
				$("#features-div").html(response.html);
				Metronic.initAjax(); // init metronic core components
				Layout.init(); // init current layout
			}
		}
	});
}

function fetchDropletHistory(server_id, was_in_progress){
	var interval = 0;
	if(was_in_progress == 0){
		$("#droplet_history").html('<div class="editableform-loading"></div>');
	}
	$.ajax({
		type: 'POST',
		url: base_url+'servers/server_history',
		data: "server_id="+server_id,
		cache: false,
		dataType: 'json',
		success: function(response){
			if(response.result == 'error'){
				$("#droplet_history").html('<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+response.message+'</div>');
			}else{
				if(response.in_progress == 1){
					$('#tab_container').html('<div class="editableform-loading"><div class="col-md-2">Your event is processing...</div></div>');
					$("#droplet_history").html(response.html);
					Metronic.initAjax(); // init metronic core components
					TableAdvanced.init();
					interval = setInterval(function(){fetchDropletHistory(server_id, 1);}, recall_digitalocean_api_interval);					
				}else{
					if(response.in_progress == 0 && was_in_progress == 1){
						clearInterval(interval);
						window.location.reload();
					}else{
						$("#droplet_history").html(response.html);
						Metronic.initAjax(); // init metronic core components
						TableAdvanced.init();
					}
				}
			}
		}
	});
}


function payAlert(invoiceid){
	if(confirm('In order to continue you need to pay us. Are you sure you want to pay us invoice #'+invoiceid)){
		window.location = base_url+'billing/pay/'+invoiceid;
	}
}

function confirm_before_action(server_id, action_type, htmlelement)
{
	var splitted_action_type = action_type.split('-');
	action_type = splitted_action_type[0];
	var action_factor = splitted_action_type[1];
	
	 if(action_type == 'delete'){
		bootbox.confirm("Are you sure you want to delete server?", function(result) {
			if(result == true)
				serverAction(server_id, action_type, htmlelement);
		}); 
	}else if(action_type == 'powerOff'){
		bootbox.confirm("Are you sure you want to turn off this server?", function(result) {
			if(result == true)
				serverAction(server_id, action_type, htmlelement);
		});
	}else if(action_type == 'powerCycle'){
		bootbox.confirm("Are you sure you want to restart server?", function(result) {
			if(result == true)
				serverAction(server_id, action_type, htmlelement);
		});
	}else if(action_type == 'restore' && action_factor == 'snapshot'){
		bootbox.confirm("Are you sure you want to restore from image?", function(result) {
			if(result == true)
				serverAction(server_id, action_type, htmlelement);
		});
	}else if(action_type == 'restore' && action_factor != 'snapshot'){
		bootbox.confirm("Are you sure you want to restore from backup?", function(result) {
			if(result == true)
				serverAction(server_id, action_type, htmlelement);
		});
	}
}

function serverAction(server_id, action_type, htmlelement){
	var t = '';
	var splitted_action_type = action_type.split('-');
	action_type = splitted_action_type[0];
	var action_factor = splitted_action_type[1];
	var extra_data = '';
	$('#success').addClass('hide');
	$("#error_extra").remove();
	if(action_type == 'snapshot'){
		if($.trim($('#snapshot_name').val()) == ''){
			$('#snapshot_name').after('<div class="alert alert-danger" id="error_extra"><button class="close" data-close="alert"></button>Please enter image name to continue.</div>');
			return;
		}else{
			extra_data = '&extra_data='+$('#snapshot_name').val();
		}
	}else if(action_type == 'restore' && action_factor != 'snapshot'){
		if(typeof($('input[name=backup_id]:checked').val()) == 'undefined'){
			$('input[name=backup_id]').parent().parent().after('<div class="alert alert-danger" id="error_extra"><button class="close" data-close="alert"></button>Please select backup to continue.</div>');
			return;
		}else{
			extra_data = '&extra_data='+$('input[name=backup_id]:checked').val();
		}
	}else if(action_type == 'restore' && action_factor == 'snapshot'){
		if(typeof($('input[name=snapshot_id]:checked').val()) == 'undefined'){
			$('input[name=snapshot_id]').parent().parent().after('<div class="alert alert-danger" id="error_extra"><button class="close" data-close="alert"></button>Please select image to continue.</div>');
			return;
		}else{
			extra_data = '&extra_data='+$('input[name=snapshot_id]:checked').val();
		}
	}else if(action_type == 'rename'){
		if($.trim($('#droplet_name').val()) == ''){
			$('#droplet_name').after('<div class="alert alert-danger" id="error_extra"><button class="close" data-close="alert"></button>Please enter new hostname to continue.</div>');
			return;
		}else{
			extra_data = '&extra_data='+$('#droplet_name').val();
		}	
	}else if(action_type == 'changeKernel'){
		extra_data = '&extra_data='+$('select[name=kernel_id] :selected').val();
	}else if(action_type == 'rebuild' && action_factor == 'original'){
		extra_data = '&extra_data='+$('#original_droplet_image_id').val();
	}else if(action_type == 'rebuild' && action_factor != 'original'){
		if($.trim($('select[name=droplet_image_id] :selected').val()) == ''){
			$('#droplet_image_id').after('<div class="alert alert-danger" id="error_extra"><button class="close" data-close="alert"></button>Please select image to continue.</div>');
			return;
		}else{
			extra_data = '&extra_data='+$('select[name=droplet_image_id] :selected').val();
		}
	}else if(action_type == 'delete'){
		extra_data = '&extra_data='+$('#whmcs_order_id').val();
	}
	
	htmlelement.attr('disabled', 'disabled');
	htmlelement.after('<div id="server_action" class="editableform-loading"></div>');
	$.ajax({
		type: 'POST',
		url: base_url+'servers/server_actions',
		data: "server_id="+server_id+"&action_type="+action_type+extra_data,
		cache: false,
		dataType: 'json',
		success: function(response){
			if(response.result == 'error'){
				htmlelement.removeAttr('disabled');
				$('#server_action').remove();
				$("#droplet_history").html('<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+response.message+' <a href="javascript://" onclick="window.location.reload();">Try reloading page.</a></div>');
			}else{
				if(action_type == 'powerOn' || action_type == 'powerOff' || action_type == 'snapshot' || action_type == 'restore' || action_type == 'rename' || action_type == 'changeKernel' || action_type == 'rebuild'){
					t = setInterval(function(){clearInterval(t);window.location.reload();}, reload_page_interval);
				}else if(action_type == 'delete'){
					window.location = base_url+'servers';
				}else{
					action_type = action_type.replace('passwordReset', 'Password reset');
					$('#success_message').html(action_type);
					$('#success').removeClass('hide');
					htmlelement.removeAttr('disabled');
					$('#server_action').remove();
					fetchDropletHistory(server_id);
				}
			}
		}
	});
}

function loadIP(droplet_id){
	if(droplet_id){
		var exploded_ids = droplet_id.split('|');
		$('#ip_address').val(exploded_ids[1]);
	}else{
		$('#ip_address').val('');
	}
}

// Images pages JS
$(document).ready(function(){
	//Click event to show the very first tab for each main tab
	$('.main_menu').on('click', function(){
		if(!$(this).hasClass('active')){
			var red_link = $(this).children('ul.sub-menu').children('li').children('a').attr('href');
			window.location = red_link;
		}
	});
	$('.chld').on('click', function(){
		if(!$(this).hasClass('active')){
			var red_link = $(this).children('ul.sub-menu').children('li').children('a').attr('href');
			window.location = red_link;
		}
	});
	$('#my_details_link').on('click', function(){
		$('.smarty-ui').show();
	var liveaddress = $.LiveAddress({
		key: validate_address_key,
		autoVerify: true,
		geolocate: true,
		addresses: [{
			street: '#address1',
			street2: '#address2',
			city: '#city',
			state: '#state',
			zipcode: '#postcode',
			country: '#country'
		}]
	});
	});
	$('.other_profile_tabs').on('click', function(){
		
	});
	//Migration enable box handling
	$('input[name="migration_enabled"]').on('change', function(){
		if($(this).val() == 1)
		{
			$('#fa-arrow-down').css('margin-left', '90px');
			add_placeholder();
			$("#server_types_things").addClass('hide');
			$('#copm').trigger( "click" );
			$('#migration-container').removeClass('hide');
			$('#services').html('Migrate Existing Site');
			$('#use_snapshot').val('0');
		}
		else
		{
			$('#fa-arrow-down').css('margin-left', '0px');
			$('#migration-container').addClass('hide');
			$('#additional_information').attr('value', '');
			$("#server_types_things").removeClass('hide');
			$('#services').html('New Site');
			$('#cowp').trigger( "click" );
		}
	});
	
	//Take snapshot js handler
	$('#take_snapshot').validate({
	  submitHandler: function(form) {
		$('.green,.default').attr('disabled', 'disabled');
		$.ajax({
			type: 'POST',
			url: base_url+'images/take_snapshot',
			data: $(form).serialize(),
			cache: false,
			dataType: 'json',
			success: function(response){
				$('.green,.default').removeAttr('disabled');
				$("#message-div").removeClass('hide');
				if(response.result == 'error'){
					$("#message-div").html('<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+response.message+'</div>');
				}else{
					document.getElementById("take_snapshot").reset();
					$("#message-div").html('<div class="alert alert-success"><button class="close" data-close="alert"></button>'+response.message+'</div>');
				}
			}
		});
	  }
	 });
	 
	 //Take snapshot js handler
	$('#update_snapshot').validate({
	  submitHandler: function(form) {
		$('.green,.default').attr('disabled', 'disabled');
		$('#buttons_block').after('<div style="float:left;" class="editableform-loading"></div>');
		form.submit();
	  }
	 });
	 
	 //Create new SSH key js handler
	 $('#create_sshkey_form').validate({
	  submitHandler: function(form) {
	  	$("#message-div").removeClass('hide');
		$('.alert').remove();
		$('.green,.default').attr('disabled', 'disabled');
		$("#message-div").html('<div class="editableform-loading"></div>');
		$.ajax({
			type: 'POST',
			url: base_url+'images/saveSSHKey',
			data: $(form).serialize(),
			cache: false,
			dataType: 'json',
			success: function(response){
				$('.green,.default').removeAttr('disabled');
				if(response.result == 'error'){
					$("#message-div").html('<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+response.message+'</div>');
				}else{
					document.getElementById("create_sshkey_form").reset();
					$("#message-div").html('<div class="alert alert-success"><button class="close" data-close="alert"></button>'+response.message+'</div>');
				}
			}
		});
	  }
	 });
	 
	//remove key handler
	$('.remove-sshkey').on('click', function(e){
		var key_id = $(this).attr('id');
		
		if(confirm("Are you sure you want to delete this SSH key ?")){
			var element = $(this).parent().parent().parent();
			$("#message-div").removeClass('hide');
			$("#message-div").html('<div class="editableform-loading"></div>');
			$.ajax({
				type: 'POST',
				url: base_url+'images/deleteSSHKey',
				data: 'key_id='+key_id,
				cache: false,
				dataType: 'json',
				success: function(response){
					if(response.result == 'error'){
						$("#message-div").html('<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+response.message+'</div>');
					}else{
						element.remove();
						$("#message-div").html('<div class="alert alert-success"><button class="close" data-close="alert"></button>'+response.message+'</div>');
					}
				}
			});
		}
		else
			return false;
	});
	
	//Form validation for the post support ticket
	$('#create_support_ticket').validate();
	$('#reply_form').validate({
		submitHandler: function(form){
			$("#message-div").removeClass('hide');
			$('.alert').remove();
			$('#btn_reply').attr('disabled', 'disabled');
			$("#message-div").html('<div class="editableform-loading"></div>');
			$.ajax({
				type: 'POST',
				url: base_url+'support/replyticket',
				data: $(form).serialize(),
				cache: false,
				dataType: 'json',
				success: function(response){
					$('#btn_reply').removeAttr('disabled');
					if(response.result == 'error'){
						$("#message-div").html('<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+response.message+'</div>');
					}else{
						document.getElementById("reply_form").reset();
						$('#replycont').slideToggle();
						$('.replies_container').find("div.portlet:first").before(response.html);
						$('.status').html(response.status);
						$("#message-div").html('<div class="alert alert-success"><button class="close" data-close="alert"></button>'+response.message+'</div>');
						Metronic.initAjax(); // init metronic core components
					}
				}
			});
		}
	});
	$('.close_ticket').on('click', function(){
		$('.close_ticket').attr('disabled', 'disabled');
		$.ajax({
			type: 'POST',
			url: base_url+'support/deleteticket',
			data: 'ticketid='+$('#ticketid').val(),
			cache: false,
			dataType: 'json',
			success: function(response){
				$('.close_ticket').removeAttr('disabled');
				if(response.result == 'error'){
					$("#message-div").html('<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+response.message+'</div>');
				}else{
					$('.status').html('Closed');
					$("#message-div").html('<div class="alert alert-success"><button class="close" data-close="alert"></button>'+response.message+'</div>');
					window.location.reload();
				}
			}
		});
	});
	$('input[name="ccuse"]').on('change', function(){
		if($(this).val() == 'new'){
			$('#cctype').removeAttr('disabled');
			$('#ccnumber').removeAttr('disabled');
			$('#ccexpirymonth').removeAttr('disabled');
			$('#ccexpiryyear').removeAttr('disabled');
			$('#cardcvv').removeAttr('disabled');
			$('#existing_cardcvv').attr('disabled', 'disabled');
		}else{
			$('#cctype').attr('disabled', 'disabled');
			$('#ccnumber').attr('disabled', 'disabled');
			$('#ccexpirymonth').attr('disabled', 'disabled');
			$('#ccexpiryyear').attr('disabled', 'disabled');
			$('#cardcvv').attr('disabled', 'disabled');
			$('#existing_cardcvv').removeAttr('disabled');
		}
	});
	$('#pay-invoice-form').validate({
		submitHandler: function(form){
			$('.green').attr('disabled', 'disabled');
			$('#buttons_block').after('<div style="float:left;" class="editableform-loading"></div>');
			form.submit();
		}
	});
	$('#add_domain').validate({
		submitHandler: function(form){
			$('.green,.default').attr('disabled', 'disabled');
			$('#buttons_block').after('<div style="float:left;" class="editableform-loading"></div>');
			form.submit();
		}	
	});
	$('.addPTR').on('click', function(){
		$('#addPTRContainer').slideToggle();
	});
	/*$('#domain_record_types li').on('click', function(e){
		$('#domain_record_types li').removeClass('active');
		$(this).addClass('active');
	});*/
	$('.deletePTR').on('click', function(){
		var $this = $(this);
		$('.alert').remove();
		var PTRid = $(this).attr('title');
		$('.deletePTR').attr('disabled', 'disabled');
		$('#message-div').removeClass('hide');
		$('#message-div').html('<div class="editableform-loading"></div>');
		$.ajax({
			type: 'POST',
			url: base_url+'domains/deletePTR',
			data: 'PTRid='+PTRid+'&domain_name='+$('#domain_name').val(),
			cache: false,
			dataType: 'json',
			success: function(response){
				$('.deletePTR').removeAttr('disabled');
				if(response.result == 'error'){
					$("#message-div").html('<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+response.message+'</div>');
				}else{
					$this.parent().parent().remove();
					$("#message-div").html('<div class="alert alert-success"><button class="close" data-close="alert"></button>'+response.message+'</div>');
				}
			}
		});
	});
	$('form[role=form]').on('submit', function(e){
		$(this).find('button[type=submit]').attr('disabled', 'disabled');
		$(this).find('button[type=submit]').after('<div style="float:left;" class="editableform-loading"></div>');
	});
	
	//Profile page events handling
	
	
	
	$.validator.addMethod("pwcheck", function(value, element) {
		var pwcheck_msg = '';	
		var r_pass = element.value;
		var res = checkPwd_strong(value);
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
			pwcheck_msg = 'Password must contain an aphabet.';
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
	$('#password-form').validate();
	
	
	
	$('#profile-form').validate();
	$('.cc-number').payment('formatCardNumber');
  	$('.cc-cvc').payment('formatCardCVC');
	$('.cc-exp').payment('formatCardExpiry');
	$.fn.toggleInputError = function(erred) {
        this.parent().parent('.form-group').toggleClass('has-error', erred);
        return this;
      };
	$.fn.toggleCCInputError = function(erred, cardType, message) {
		if(cardType == null){
			this.addClass('error', erred);
			if($('label#'+this.attr('id')).length > 0){
			}else{
				this.after('<label for="'+this.attr('id')+'" id="'+this.attr('id')+'" class="error">'+message+'</label>');
			}
		}else{
			this.removeClass('error', erred);
			$('label#'+this.attr('id')).remove();
		}
		return this;
	  };
	//$('#creditcard-form').validate();
	/*$('#creditcard-form').on('submit', function(e){
		e.preventDefault();
		var cardType = $.payment.cardType($('.cc-number').val());
        $('.cc-number').toggleInputError(!$.payment.validateCardNumber($('.cc-number').val()));
        $('.cc-exp').toggleInputError(!$.payment.validateCardExpiry($('.cc-exp').payment('cardExpiryVal')));
        $('.cc-cvc').toggleInputError(!$.payment.validateCardCVC($('.cc-cvc').val(), cardType));
		if(!$('.cc-number').parent().parent().hasClass('has-error') && !$('.cc-cvc').parent().parent().hasClass('has-error') && !$('.cc-exp').parent().parent().hasClass('has-error')){
			$(this).unbind('submit').submit();
		}
	});*/
	$('.cc-number').on('blur', function(){
		var cardType = $.payment.cardType($(this).val());
		if(cardType == 'visa'){
			$('#cctype').val('Visa');
		}else if(cardType == 'dinersclub'){
			$('#cctype').val('Diners Club');
		}else if(cardType == 'jcb'){
			$('#cctype').val('JCB');
		}else if(cardType == 'amex'){
			$('#cctype').val('American Express');
		}else if(cardType == 'mastercard'){
			$('#cctype').val('MasterCard');
		}else if(cardType == 'discover'){
			$('#cctype').val('Discover');
		}
		//$(this).toggleCCInputError(!$.payment.validateCardNumber($(this).val()), cardType, 'Please enter a valid credit card number.');
		$(this).toggleInputError(!$.payment.validateCardNumber($(this).val()));
	});
	$('.cc-exp').on('blur', function(){
		$(this).toggleInputError(!$.payment.validateCardExpiry($(this).payment('cardExpiryVal')));
	});
	$('.cc-cvc').on('blur', function(){
		var cardType = $.payment.cardType($('.cc-number').val());
		$('.cc-cvc').toggleInputError(!$.payment.validateCardCVC($('.cc-cvc').val(), cardType));
	});
	$('.confirm').on('click', function(e){
		e.preventDefault();
		var title = $(this).attr('name');
		var redirect = $(this).attr('href');
		bootbox.confirm(title, function(result) {
			if(result){
				window.location = redirect;	
			}
		}); 
	});
	$('.graphs').bind('click', function (e) {
        $href = $(this).attr('href');
		// e.target is the new active tab according to docs
        // so save the reference in case it's needed later on
        //window.activeTab = e.target;
        // display the alert
		if($href == '#tab_graphs'){
        	$href = $($href).find('ul.nav-tabs').children('li.active').find('a').attr('href');
			load_result_log($href);
		}
		
		$check_id = $('#check_id').val();
		if(typeof($check_id) != 'undefined'){
			$('#site_statistics_main').remove();
			$($href).html('<div class="editableform-loading"></div>');
			
			$.ajax({
				type: 'POST',
				url: base_url+'servers/loadGraph',
				data: 'data='+$href+'&check_id='+$check_id,
				cache: false,
				dataType: 'json',
				success: function(response){
					$($href).html(response.html);
				}
			});
			
		}else{
			$($href).html('No Graph data to load.');
		}
    });
	
	$('#response_logs .res_tab').bind('click', function (e) {
        //var log_href = $(this).attr('href');
		load_result_log("#tab_1_days");
    });
	
	$('.result_log').click(function(){
		var href = $(this).attr('href');
		if( href == '#tab_graphs'){
        	href = $(href).find('ul.nav-tabs').children('li.active').find('a').attr('href');
		}
		load_result_log(href);
	})
	
	$('#vmap').parent('.portlet-body').css('display', 'none');
	$('#create_adv').css('display', 'none');
	$('#server_types_box').css('display', 'none');
	
	//jQuery('body').on('click', '.portlet > .portlet-title > .tools > .collapse, .portlet .portlet-title > .tools > .expand', function (e) {
//		e.preventDefault();
//		var el = jQuery(this).closest(".portlet").children(".portlet-body");
//		if (jQuery(this).hasClass("collapse")) {
//			jQuery(this).removeClass("collapse").addClass("expand");
//			el.slideUp(200);
//		} else {
//			jQuery(this).removeClass("expand").addClass("collapse");
//			el.slideDown(200);
//			if(el.children('#vmap').length >0 ){
//				//console.log('vmap found');
//				if( $.trim( $('#vmap').html() ).length ){
//					//console.log(1);
//				   	$("#vmap").removeAttr('style');
//						map = $("#vmap").vectorMap('get', 'mapObject');
//						//console.log(map);
//						map.updateSize();
//						//loadSnapshots('nyc3');
//				}
//			}
//			/*if(el.children('#vmap').length > 0)
//			{
//				map = $("#vmap").vectorMap('get', 'mapObject');
//				//console.log(map);
//				map.updateSize();
//			}*/
//		}
//	});

	jQuery('body').on('click', '.portlet .portlet-title', function (e) {
		e.preventDefault();
		var el = jQuery(this).closest(".portlet").children(".portlet-body");
		var ta = jQuery(this).children('.tools').children("a.collapse, a.expand");
		
		if(jQuery(ta).hasClass("collapse") || jQuery(ta).hasClass("expand")){
			if (jQuery(ta).hasClass("collapse")) {
				//console.log(1);
				jQuery(ta).removeClass("collapse").addClass("expand");
				el.slideUp(200);
			} else {
				//console.log(2);
				//console.log(jQuery('.portlet .portlet-title .tools > a').attr('class'));
				jQuery(ta).removeClass("expand").addClass("collapse");
				el.slideDown(200);
				if(el.children('#vmap').length >0 ){
					//console.log('vmap found');
					if( $.trim( $('#vmap').html() ).length ){
						//console.log(1);
						$("#vmap").removeAttr('style');
							map = $("#vmap").vectorMap('get', 'mapObject');
							//console.log(map);
							map.updateSize();
							//loadSnapshots('nyc3');
					}
				}
				/*if(el.children('#vmap').length > 0)
				{
					map = $("#vmap").vectorMap('get', 'mapObject');
					//console.log(map);
					map.updateSize();
				}*/
			}
		}
	});
		
	//$('.selectpicker').selectpicker();
	
});

function load_result_log(btn_href)
{
	if(btn_href == '#tab_graphs'){
		btn_href = '#tab_1_days';
	}
	$check_id = $('#check_id').val();
	if(typeof($check_id) != 'undefined'){
		$('#test_result_log').html();
		$('#test_result_log').html('<div class="editableform-loading"></div>');
		$.ajax({
			type: 'POST',
			url: base_url+'servers/loadCheckResults',
			data: 'data='+btn_href+'&check_id='+$check_id,
			cache: false,
			dataType: 'json',
			success: function(response){
				$('#test_result_log').html(response.log_html);
				TableAdvanced.initAjax();
			}
		});	
	}else{
		$('#test_result_log').html('No Logs data to load.');
	}
}

$(function() {
        var scntDiv = $('#dyn_domains_input');
        var i = $('#dyn_domains_input .form-group').size() + 1;
        
        $('#addScnt').live('click', function() {
                $('<div class="form-group"><label class="control-label col-md-3">Add Site(s) </label><div class="col-md-7"><input type="text" name="domain[]" id="domain_' + i +'" value="" class="form-control" placeholder="ex: glorioussalespage.com" /></div><div class="col-md-2"><a href="#" class="fa fa-minus-circle btn default remScnt"></a></div></div>').appendTo(scntDiv);
                i++;
				bind_domain_validation();
                return false;
        });
        
        $('.remScnt').live('click', function() { 
                if( i > 2 ) {
                        $(this).parents('div .form-group').remove();
                        i--;
                }
                return false;
        });
});
function bind_domain_validation()
{
	$('input[name="domain[]"]').on('blur', function(){
		$('input[name="domain[]"]').each(function(){
			var domainval = $(this).val();
			if(typeof domainval != 'undefined' && domainval != '') 
			{
				domainval = getDomain(domainval);
				//console.log(domain);
				$(this).val(domainval);
			}
		});
	});
}
function getDomain(url){

var TLDs = ["ac", "ad", "ae", "aero", "af", "ag", "ai", "al", "am", "an", "ao", "aq", "ar", "arpa", "as", "asia", "at", "au", "aw", "ax", "az", "ba", "bb", "bd", "be", "bf", "bg", "bh", "bi", "biz", "bj", "bm", "bn", "bo", "br", "bs", "bt", "bv", "bw", "by", "bz", "ca", "cat", "cc", "cd", "cf", "cg", "ch", "ci", "ck", "cl", "cm", "cn", "co", "com", "coop", "cr", "cu", "cv", "cx", "cy", "cz", "de", "dj", "dk", "dm", "do", "dz", "ec", "edu", "ee", "eg", "er", "es", "et", "eu", "fi", "fj", "fk", "fm", "fo", "fr", "ga", "gb", "gd", "ge", "gf", "gg", "gh", "gi", "gl", "gm", "gn", "gov", "gp", "gq", "gr", "gs", "gt", "gu", "gw", "gy", "hk", "hm", "hn", "hr", "ht", "hu", "id", "ie", "il", "im", "in", "info", "int", "io", "iq", "ir", "is", "it", "je", "jm", "jo", "jobs", "jp", "ke", "kg", "kh", "ki", "km", "kn", "kp", "kr", "kw", "ky", "kz", "la", "lb", "lc", "li", "lk", "lr", "ls", "lt", "lu", "lv", "ly", "ma", "mc", "md", "me", "mg", "mh", "mil", "mk", "ml", "mm", "mn", "mo", "mobi", "mp", "mq", "mr", "ms", "mt", "mu", "museum", "mv", "mw", "mx", "my", "mz", "na", "name", "nc", "ne", "net", "nf", "ng", "ni", "nl", "no", "np", "nr", "nu", "nz", "om", "org", "pa", "pe", "pf", "pg", "ph", "pk", "pl", "pm", "pn", "pr", "pro", "ps", "pt", "pw", "py", "qa", "re", "ro", "rs", "ru", "rw", "sa", "sb", "sc", "sd", "se", "sg", "sh", "si", "sj", "sk", "sl", "sm", "sn", "so", "sr", "st", "su", "sv", "sy", "sz", "tc", "td", "tel", "tf", "tg", "th", "tj", "tk", "tl", "tm", "tn", "to", "tp", "tr", "travel", "tt", "tv", "tw", "tz", "ua", "ug", "uk", "us", "uy", "uz", "va", "vc", "ve", "vg", "vi", "vn", "vu", "wf", "ws", "xn--0zwm56d", "xn--11b5bs3a9aj6g", "xn--3e0b707e", "xn--45brj9c", "xn--80akhbyknj4f", "xn--90a3ac", "xn--9t4b11yi5a", "xn--clchc0ea0b2g2a9gcd", "xn--deba0ad", "xn--fiqs8s", "xn--fiqz9s", "xn--fpcrj9c3d", "xn--fzc2c9e2c", "xn--g6w251d", "xn--gecrj9c", "xn--h2brj9c", "xn--hgbk6aj7f53bba", "xn--hlcj6aya9esc7a", "xn--j6w193g", "xn--jxalpdlp", "xn--kgbechtv", "xn--kprw13d", "xn--kpry57d", "xn--lgbbat1ad8j", "xn--mgbaam7a8h", "xn--mgbayh7gpa", "xn--mgbbh1a71e", "xn--mgbc0a9azcg", "xn--mgberp4a5d4ar", "xn--o3cw4h", "xn--ogbpf8fl", "xn--p1ai", "xn--pgbs0dh", "xn--s9brj9c", "xn--wgbh1c", "xn--wgbl6a", "xn--xkc2al3hye2a", "xn--xkc2dl3a5ee0h", "xn--yfro4i67o", "xn--ygbi2ammx", "xn--zckzah", "xxx", "ye", "yt", "za", "zm", "zw"].join()

	url = url.replace(/\s+/g, '');
	url = url.replace(/.*?:\/\//g, "");
	url = url.replace(/www./g, "");
	var parts = url.split('/');
	url = parts[0];
	var parts = url.split('.');
	
	if (parts[0] === 'www' && parts[1] !== 'com'){
		parts.shift()
	}
	var ln = parts.length
	  , i = ln
	  , minLength = parts[parts.length-1].length
	  , part

	// iterate backwards
	while(part = parts[--i]){
		// stop when we find a non-TLD part
		if (i === 0                    // 'asia.com' (last remaining must be the SLD)
			|| i < ln-2                // TLDs only span 2 levels
			|| part.length < minLength // 'www.cn.com' (valid TLD as second-level domain)
			|| TLDs.indexOf(part) < 0  // officialy not a TLD
		){
			var actual_domain = part;
			break;
			//return part
		}
	}
	var dup_parts = parts;
	
	var tid = '' ;
	if(typeof parts[ln-1] != 'undefined' && TLDs.indexOf(parts[ln-1]) >= 0)
	{
		tid = '.'+parts[ln-1];
		dup_parts.splice(ln-1, 1);
	}
	if(typeof parts[ln-2] != 'undefined' && TLDs.indexOf(parts[ln-2]) >= 0)
	{
		tid = '.'+parts[ln-2]+tid;
		dup_parts.splice(ln-2, 1);
	}
	
	
	if(typeof tid != 'undefined' && tid != '')
	{
		dup_parts.splice(dup_parts.indexOf(actual_domain), 1);
		actual_domain = actual_domain+tid;
	}
	else
	{
		dup_parts.splice(dup_parts.indexOf(actual_domain), 1);
		actual_domain = actual_domain+'.com';
	}
	if(dup_parts.length > 0)
		actual_domain = dup_parts[dup_parts.length-1]+'.'+actual_domain;
		
	return actual_domain;
}
function load_summary_graph(start)
{
	var domain_check_id = $('#summary_graph_'+start).attr('class');
	$.ajax({
		type: 'POST',
		url: base_url+'servers/loadShortGraph',
		data: 'data=1&container_id='+start+'&check_id='+domain_check_id,
		cache: false,
		dataType: 'json',
		success: function(response){
			//alert(domain_check_id);
			//console.log(start);
			$('#summary_graph_'+parseInt(start)).html(response.html);
			if(response.set_img == 'up' || response.set_img == 'down')
			{
				var p_class = (response.set_img == 'up')?'up-green':'down-red';
				$('#up_down_status_'+parseInt(start)).removeClass('fa-circle').addClass('fa-arrow-circle-'+response.set_img);
				$('#up_down_status_'+parseInt(start)).parent().removeClass('upd-gray').addClass(p_class);
			}
			else
			{
				$('#up_down_status_'+parseInt(start)).removeClass('fa-circle').html(response.set_img);
				$('#up_down_status_'+parseInt(start)).parent().removeClass('upd-gray').addClass('down-red smd');
			}
				
			//console.log('summary_graph_'+start);
			start = parseInt(start)+1;
			if($('#summary_graph_'+start).length >  0)
			{ 
				//console.log(start);
				setTimeout( function(){ load_summary_graph(start); }, 5000);
			}
		}
	});
}
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}