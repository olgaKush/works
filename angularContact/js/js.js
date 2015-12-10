function blockScreen(elementIdWhichActivatesScreenBlocking, text){
	var div = document.createElement("div");
	div.innerHTML = "<!--[if lt IE 10]><i></i><![endif]-->";
	var isIeLessThan10 = (div.getElementsByTagName("i").length == 1);

	         var blockUIMethod= $(document).ready(function() {
	     $('#'+elementIdWhichActivatesScreenBlocking).click(function blockmyui() {
	      $.blockUI({  message: text,
	                  css: {
	              	     border: '3px solid #858585',
	            	     backgroundColor: '#343434',
		             color: '#E7E7E7' }
			});

			//Additional features for the IE8 and 9
			if (isIeLessThan10) {
			       	 $('.blockUI.blockPage').css('position', 'absolute');
			       	 $('.blockUI.blockPage').css('padding', '120 px 30 px 120 px 25 px');
			  	 $('.blockUI.blockOverlay').css('position', 'absolute');
			    	 $('.blockUI.blockOverlay').css('height', '1200px');
			     }

	     	 });
	 });
}