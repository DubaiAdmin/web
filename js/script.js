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
				pays_add_to_table('#all_deposits',data.pays.all_deposits,'ÐÐºÑ‚Ð¸Ð²Ð¸Ñ€Ð¾Ð²Ð°Ð½ Ð½Ð¾Ð²Ñ‹Ð¹ Ð´ÐµÐ¿Ð¾Ð·Ð¸Ñ‚, Ð²Ñ‹Ð¿Ð»Ð°Ñ‚Ð° Ñ‡ÐµÑ€ÐµÐ· 150 Ñ‡Ð°ÑÐ¾Ð²',false);
				all_id=get_last_id('#all_deposits');
			}

			if(data.pays.my_deposits.length) {
				pays_add_to_table('#my_deposits',data.pays.all_deposits,'ÐœÑ‹ Ð¿Ð¾Ð»ÑƒÑ‡Ð¸Ð»Ð¸ Ð¾Ñ‚ Ð²Ð°Ñ Ð¿Ð»Ð°Ñ‚ÐµÐ¶, Ð·Ð°Ð³Ð»ÑÐ½Ð¸Ñ‚Ðµ Ð² "ÐœÐ¾Ð¸ Ð´ÐµÐ¿Ð¾Ð·Ð¸Ñ‚Ñ‹"',true);
				my_id=get_last_id('#my_deposits');
			}

			if(data.pays.pays.length) {
				pays_add_to_table('#pays',data.pays.pays,'ÐŸÑ€Ð¾Ð¸Ð·Ð²ÐµÐ´ÐµÐ½Ð° Ð²Ñ‹Ð¿Ð»Ð°Ñ‚Ð°',false);
				pays_id=get_last_id('#pays');
			}

			if(data.pays.my_referals.length) {
				pays_add_to_table('#referals',data.pays.my_referals,'Ð£ Ð²Ð°Ñ Ð¿Ð¾ÑÐ²Ð¸Ð»ÑÑ Ð¿Ñ€Ð¾Ð¿Ð»Ð°Ñ‡ÐµÐ½Ð½Ñ‹Ð¹ Ñ€ÐµÑ„ÐµÑ€Ð°Ð»!',true);
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
