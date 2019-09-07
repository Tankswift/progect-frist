;(function(){
//登录的正则验证
var re1=/^[\w\-\u4e00-\u9fa5]{4,20}$/;
$('.txt1').focus(function(){
    $(this).val('');
})
$('.txt1').blur(function(){
    if (re1.test($(this).val())) {
        $('.countpeople').html('可以使用').css({
            color:'green',
        });

    }else{
        $('.countpeople').html('输入格式错误，请重新输入').css({
            color:'red',
        });

    }
})
var re2=/^.{6,18}$/;
$('.txt2').blur(function(){
    if (re2.test($(this).val())) {
        $('.countkey').html('可以使用').css({
            color:'green',
        });

    }else{
        $('.countkey').html('输入格式错误，请重新输入').css({
            color:'red',
        });

    }
})
$('.txt3').blur(function(){
    console.log($('.txt2').val()==$('.txt3').val());
    //console.log($('.txt3').val());
    if ($('.txt2').val()==$('.txt3').val()){
        console.log(111);
        $('.countagainkey').html('正确').css({
            color:'green',
        });
    }else{
        $('.countagainkey').html('两次密码不一致').css({
            color:'red',
        });
    }
})
























})()