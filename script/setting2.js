$(document).ready(function(){
	wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();

	
	  //calculator1//
    
    
	

	function calc(){
	    var percent 	= [100];
		var minMoney 	= [1];
		var maxMoney	= [10000];

		if($("#amount").val().length == 0){
			$("#amount").val(minMoney[0]);
		}

		amount = parseFloat($("#amount").val());
		id = -1;
		var length = percent.length;
		var i = 0;
		do {
			if(minMoney[i] <= amount && amount <= maxMoney[i]){
				id = i;
				i = i + length;
			}
			i++
		}
		while(i < length)
		
		if(id != -1){
			profitDaily = amount / 100 * percent[id];
			profitDaily = profitDaily.toFixed(6);
			profitHourly = amount / 100 * percent[id];
			profitHourly = profitHourly.toFixed(6);
			profitTotal = profitDaily * 2;
			profitTotal = profitTotal.toFixed(6);
			profitMonthly = profitDaily * 30;
			profitMonthly = profitMonthly.toFixed(6);


			if(amount < minMoney[id] || isNaN(amount) == true){
				$("#profitHourly").text("Error!");
				$("#profitDaily").text("Error!");
				$("#profitTotal").text("Error!");
				$("#profitMonthly").text("Error!");
			} else {
				$("#profitHourly").text(profitHourly + " USD");
				$("#profitDaily").text(profitDaily + " USD");
				$("#profitTotal").text(profitTotal + " USD");
				$("#profitMonthly").text(profitMonthly + " USD");
			}
		} else {
			$("#profitHourly").text("Incorrect Value");
			$("#profitDaily").text("Incorrect Value");
			$("#profitTotal").text("Incorrect Value");
			$("#profitMonthly").text("Incorrect Value");
		}
	}

	calc();

	$("#amount").keyup(function(){
		calc();
	});

    
      //calculator2//

	function calc1(){
	    var percent 	= [4.8];
		var minMoney 	= [0.251];
		var maxMoney	= [100];
	
		if($("#amount1").val().length == 0){
			$("#amount1").val(minMoney[0]);
		}	
	
		amount = parseFloat($("#amount1").val());
		id = -1;
		var length = percent.length;
		var i = 0;
		do {
			if(minMoney[i] <= amount && amount <= maxMoney[i]){
				id = i;
				i = i + length;
			}
			i++
		}
		while(i < length)
		
		if(id != -1){
			profitDaily1 = amount / 100 * percent[id];
			profitDaily1 = profitDaily1.toFixed(6);
			profitHourly1 = amount / 100 * percent[id];
			profitHourly1 = profitHourly1.toFixed(6);
			profitTotal1 = profitDaily1 * 35;
			profitTotal1 = profitTotal1.toFixed(6);
			profitMonthly1 = profitDaily1 * 30;
			profitMonthly1 = profitMonthly1.toFixed(6);


			if(amount < minMoney[id] || isNaN(amount) == true){
				$("#profitHourly1").text("Error!");
				$("#profitDaily1").text("Error!");
				$("#profitTotal1").text("Error!");
				$("#profitMonthly1").text("Error!");
			} else {
				$("#profitHourly1").text(profitHourly1 + " BTC");
				$("#profitDaily1").text(profitDaily1 + " BTC");
				$("#profitTotal1").text(profitTotal1 + " BTC");
				$("#profitMonthly1").text(profitMonthly1 + " BTC");
			}
		} else {
			$("#profitHourly1").text("Error!");
			$("#profitDaily1").text("Error!");
			$("#profitTotal1").text("Error!");
			$("#profitMonthly1").text("Error!");
		}
	}

	calc1();

	$("#amount1").keyup(function(){
		calc1();
	});
    
	
	
	
});