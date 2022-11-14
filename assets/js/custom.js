function validate(){
    var amount = $('#amount').val();
    var time_period = $('#time_period').val();
    var returns = $('#returns').val();
    var count = 0;
    var data = [];

    if(amount < 100 || amount == ''){
        $('.amount').css('display', 'block');
    } else {
        $('.amount').css('display', 'none');
        
        count = count + 1;
    }

    if(time_period < 3 || time_period == ''){
        $('.time_period').css('display', 'block');
    } else {
        $('.time_period').css('display', 'none');
        count = count + 1;
    }

    if(returns == ''){
        $('.returns').css('display', 'block');
    } else {
        $('.returns').css('display', 'none');
        count = count + 1;
    }
    
    if(count == 3){
        return 'pass';
    }
}

function amount_validate(){
    var amount = $('#amount').val();
    if(amount < 100 || amount == ''){
        $('.amount').css('display', 'block');
    } else {
        $('.amount').css('display', 'none');
    }
}

function time_period_validate(){
    var time_period = $('#time_period').val();
    if(time_period < 3 || time_period == ''){
        $('.time_period').css('display', 'block');
    } else {
        $('.time_period').css('display', 'none');
    }
}

function returns_validate(){
    var returns = $('#amount').val();
    if(returns == ''){
        $('.returns').css('display', 'block');
    } else {
        $('.returns').css('display', 'none');
    }
}


$('#submit').click(function() {
    if(validate() == 'pass'){
        var amount = $('#amount').val();
        var time_period = $('#time_period').val();
        var returns = $('#returns').val();

        console.log('Invest amount: '+amount);
        console.log('Invest time_period: '+time_period);
        console.log('returns: '+returns);
    }
});