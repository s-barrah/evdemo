
$(document).ready(function() {

	
	
});

//FUNCTION TO EVALUATE EXPRESSION
function evaluateExpression() {
	//CLEAR ALERT
	$(".notif").html('');
	
	//GET STRING VALUE
	// strip anything other than digits,-+/* and .
	//using regex
	var expression = $("#expression").val().trim().replace(/[^-\d/*+.]/g, '');
	
	//INPUT VALIDATION
	//CHECK IF EMPTY, DONT PROCEED
	if(expression === '' || expression.length < 0){
		//$(".notif").html('<div class="alert alert-danger text-center" role="alert"><i class="fa fa-exclamation-triangle"></i> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button> Input cannot blank! </div>');
		$(".notif").html(alertDisplay('error','Input cannot blank!'));
		return;
	}	
	//Evaluate expression Javascript eval()	
	//$(".notif").html('<div class="alert alert-success text-center" role="alert"><i class="fa fa-check-circle"></i> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button> '+eval(expression)+'</div>');
	var result = eval(expression);
	
	//display result in alert div
	$(".notif").html(alertDisplay('success',result));
}


function customEval(fn) {
  return new Function('return ' + fn)();
}

function alertDisplay(type, message) {
	if(type == 'success'){
		return '<div class="alert alert-success text-center" role="alert"><i class="fa fa-check-circle"></i> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button> '+message+'</div>';
	}else{
		return '<div class="alert alert-danger text-center" role="alert"><i class="fa fa-exclamation-triangle"></i> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button> '+message+'</div>';
	}
  
}


function successAlert(message) {
  return '<div class="alert alert-success text-center" role="alert"><i class="fa fa-check-circle"></i> <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button> '+message+'</div>';
}



