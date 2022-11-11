function validate(){
    var amount = $('#amount').val();
    var time_period = $('#time_period').val();
    var returns = $('#returns').val();

    console.log(amount, time_period, returns)

    if(amount == '' || amount < 100){
        $('.invalid-feedback.amount').css('display', 'block');
    } else {
        $('.invalid-feedback.amount').css('display', 'none');
    }

    if(time_period == '' || time_period < 3){
        $('.invalid-feedback.time_period').css('display', 'block');
    } else {
        $('.invalid-feedback.time_period').css('display', 'none');
    }

    if(returns == '' || returns == 0){
        $('.invalid-feedback.returns').css('display', 'block');
    } else {
        $('.invalid-feedback.returns').css('display', 'none');
    }
}
$('#submit').click(function() {
        
});