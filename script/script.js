	var script_v = 1;
	var all_id = get_last_id('#all_deposits'),
		my_id = get_last_id('#my_deposits'),
		pays_id = get_last_id('#pays')
		referal_id = get_last_id('#referals');

	$('#add_new_pay--off').submit(function(event) {
		event.preventDefault();
		$.when(send_ajax($('#add_new_pay').serialize(), "ajax/new_pay.php")).done(function(data) {
			if(data) {
				alertify.log(data,"success",13000);
				$('#pay_block').hide();
				console.log(data);
				$('#pay_message').html(data).show();
			}
		})
	});




	function send_ajax(form,url,callback) {
		return $.ajax({
			type:"POST",
			url:url,
			dataType: 'json',
			data:form
		});
	}

	function get_last_id(parent) {
		id=$(parent).find('tbody').first().find('tr').attr('countdown_time');
		if(typeof id!=="undefined") {
			return id;
		} else {
			return 1;
		}
	}


	function get_server_event() {
		$.when(send_ajax('all='+all_id+'&my='+my_id+'&pays='+pays_id+'&referal='+referal_id,'/ajax/my_events')).done(function(data) {
			if(data.pays.all_deposits.length) {
				pays_add_to_table('#all_deposits',data.pays.all_deposits,'Активирован новый депозит, выплата через 150 часов',false);
				all_id=get_last_id('#all_deposits');
			}

			if(data.pays.my_deposits.length) {
				pays_add_to_table('#my_deposits',data.pays.all_deposits,'Мы получили от вас платеж, загляните в "Мои депозиты"',true);
				my_id=get_last_id('#my_deposits');
			}

			if(data.pays.pays.length) {
				pays_add_to_table('#pays',data.pays.pays,'Произведена выплата',false);
				pays_id=get_last_id('#pays');
			}

			if(data.pays.my_referals.length) {
				pays_add_to_table('#referals',data.pays.my_referals,'У вас появился проплаченный реферал!',true);
				referal_id=get_last_id('#referals');
			}

			if(typeof data.count!=="undefined") {
				all=$('#count_all');
				all_o=parseFloat(all.html());

				if(all_o!=data.count.all)
					all.html(data.count.all)
				my = $('#count_my');
				my_o = parseFloat(my.html());

				if(my_o!=data.count.my)
					my.html(data.count.my)
				pays=$('#count_pays');
				pays_o=parseFloat(pays.html());

				if(pays_o!=data.count.pays)
					pays.html(data.count.pays)
				r_all=$('#all_refs');
				r_all_o=parseFloat(r_all.html());

				if(r_all_o!=data.count.referals.all)
					r_all.html(data.count.referals.all)
				r_pay=$('#pay_refs');
				r_pay_o=parseFloat(r_pay.html());

				if(r_pay_o!=data.count.referals.payed)
					r_pay.html(data.count.referals.payed)
			}
		})
	}

	function new_pay() {
		$('#pay_block').show('fast');
		$('#pay_message').hide('fast');
	}

	function pays_add_to_table(k,v,msg,sound) {
		res='';
		node=$(k).find('tbody');
		$(v).each(function(key,val) {
			obj=node.find('#'+ val.id);
			if(!obj.length) {
				res='<tr class="dn" id ="'+val.id+'" pay_out="'+val.pay_out_clear+'" countdown_time="'+val.countdown_time+'">'+'<td>'+val.date+'</td>'+'<td>QIWI</td>'+'<td>'+val.phone+'</td>'+'<td>'+val.pay_in+'</td>'+'<td class="countdown">'+val.status+'</td>'+'<td>'+val.pay_out+'</td>'+'</tr>'+ res;
			}
		});

		if(res.length) {
			if(node.find('tr').length>0) {
				console.log('2');
				node.find('tr').first().before(res);
			} else {
				node.html(res);
				console.log('3')
			}
			countdown('.countdown');node.find('.dn').show(1500);if(sound)
			play_sound();
			alertify.log(msg,"",7000);
		}
	}

	function show() {
		/*$.ajax({
			url: "ajax/is_login.php",
			cache: false,
			success: function(html){
				$("#pay_message").html(html);
			}
		});*/
	}

	function autoselectps(wallet){
		console.log(wallet);
		
	  //var wallet=$('input[name="wallet"]').val();		  
      if(wallet[0]=="D" && wallet.length>=31){
          var newclass="DogeCoin";
        }else
        if(wallet[0]=="0" && wallet[1]=="x"){
          var newclass="Ethereum";
        }else    
        if(wallet[0]=="U" && wallet.length>5){
          var newclass="PerfectMoney";
        }else
        if(wallet[0]=="P" && wallet.length>5){
          var newclass="Payeer";
        }else
        if(wallet[0]=="l" && wallet[1]=="t" && wallet[1]=="c" && wallet.length>70){
          var newclass="LiteCoin";
        }else
        if(wallet[0]=="L" && wallet.length>30){
          var newclass="LiteCoin";
        }else
        if(wallet[0]=="M" && wallet.length>30){
			
			iziToast.error({
				title: "Error",
				message: "Incorrect wallet number",
				theme: 'light',
				position: 'topRight',
				titleSize: '24',
				messageSize: '14',
				maxWidth: '377',
				icon: true,
				timeout: 5000,
				transitionIn: 'fadeInLeft',
				transitionOut: 'fadeOutRight',
				transitionInMobile: 'fadeInLeft',
				transitionOutMobile: 'fadeOutLeft'
			});
			$("input[name=wallet]").val("");
			$("form#auth_form button").click(function(event){
			  event.preventDefault(); 
			});
          //var newclass="LiteCoin";
        }else
        if(wallet[0]=="b" && wallet[1]=="c" && wallet.length>70){
          var newclass="BitCoin";
        }
        else  
        if(wallet[0]=="3" && wallet.length>30){
          if($('select[name="typeofwallet"]').val()!='LiteCoin'){
              var newclass="BitCoin";        
          }else{
              var newclass="LiteCoin";    
          }
        }else
        if(wallet[0]=="1" && wallet.length>30){
          var newclass="BitCoin";
        }else{
          var newclass="none";
        }
      if(newclass!="none"){		
        $('#js-system').val(newclass);
        $('.label_icon [class^="svg-system--"]').css('display', 'none');
        $('.label_icon .svg-system--' + newclass).css('display', 'block');
		$('#auth_error').text('');
		console.log(newcalss)
		// $('.payment_system').toggleClass('none');
          // fpJS(newclass);
      }
    }




	$('.label_icon').click(function () {
        $('.payment_system').toggleClass('none');
    });
    $('.payment_system--item').click(function () {
        let system = $(this).data('system');
        $('#js-system').val(system);
        $('[class^="svg-system--"]').css('display', 'none');
        $('.svg-system--' + system).css('display', 'block');
        $('#auth_error').text('');
		$('.payment_system').toggleClass('none');
    });


    (function () {
        $("#auth_form").submit(function () {
            var $form = $(this);
            $.ajax({
                type: "post",
                url: '/ajax/auth_user.php',
                data: $form.serialize(),
                success: function (data) {
                    if (!data.error) {
                        $("#auth_error")
                            .css("color", "blue")
                            .css("font-weight", "bold")
                            .text(data.message);
                        window.setTimeout(function () {
                            window.location.reload();
                        }, 1000);
                    } else if (data.error && data.message) {
                        $("#auth_error")
                            .css("color", "red")
                            .css("font-weight", "bold")
                            .text(data.message);
                    } else {
                        $("#auth_error")
                            .css("color", "red")
                            .css("font-weight", "bold")
                            .text("Ошибка ответа сервера!");
                    }
					// grecaptcha.reset(captcha_modal_login);
                },
                error: function () {
                    window.alert("Ошибка запроса!");
                },
            });
            return false;
        });
    })();
	
	