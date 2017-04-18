$(document).ready(function(){
	
	let $body = $('body');

	if(localStorage.getItem('body')){
		$body.addClass('full');
		$('.btn-burguer').addClass('active');
	}

	$('a[data-toggle="tooltip"]').tooltip({'placement': 'top'});
	$('.full aside [data-toggle="tooltip"]').tooltip({'placement': 'right'});

	$(document).on('click', '.btn-burguer', function(){
		let $this = $(this);

	    if($('body').hasClass('full')) {
	        $('.full aside [data-toggle="tooltip"]').tooltip('disable');
	    	if(localStorage.getItem('body')){
	    		localStorage.removeItem('body');
	    	}
	    } else {
	    	localStorage.setItem('body', 'full');
	        $('.full aside [data-toggle="tooltip"]').tooltip({'placement': 'right'});
	        $('.full aside [data-toggle="tooltip"]').tooltip("enable");
	    }

		$this.toggleClass('active');
		$body.toggleClass('full');
	});

	setTimeout(() => {
		$('#loader').addClass('active');
	}, 1000);


});

