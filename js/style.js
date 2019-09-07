;(function(){

//1.实现搜索也的店铺和宝贝的切换

$('.baodian').hover(function(){
    var temp=1;
    $('#dianpu').parent('li').eq(0).stop().animate({
        top:35,
    },1).on('click',function(){
        if(temp){
            $('#baobei').html('店铺');
            $('#dianpu').html('宝贝');
            temp=0;
        }else{
            $('#baobei').html('宝贝');
            $('#dianpu').html('店铺'); 
            temp=1;
        }
        //$(this).stop().animate({top:0,})     
    })
},function(){
    $('#dianpu').parent('li').eq(0).stop().animate({
        top:0,
    },1)
})


//2.下拉菜单
$('.allkind').hover(function(){
    
    $('.xiala2').stop().show(1).children('.listbig').children('li').hover(function(){
        $(this).children('.biglist').stop().show(1);
        $(this)[0].style.background='#b20000';
        $(this).children('span')[0].style.color='#ffffff';
       
    },function(){
        $(this).children('.biglist').stop().hide(1);
        $(this)[0].style.background='#5a5a5a';
        $(this).children('span')[0].style.color='#787878';
    })
},function(){
    $('.xiala2').stop().hide(1)
})

//3.nav滑动效果
$('.navlanul').children('li').hover(function(){
$(this).css({
    background:'#680a00'
}).children('a').css({
    borderBottom:'1px solid #fff',
})
},function(){
    $(this).css({
        background:'none'
    }).children('a').css({
        borderBottom:'0',
    })
})

// 4.nav处的购物下拉

$('.shopcar').hover(function(){
    $(this).children('.listshopcar').stop().show(1).css({
        background:'red',
       
    });
   
},function(){
    $(this).children('.listshopcar').stop().hide(1);
})
 

// 5.轮播图
$(".boxbanner").banner({
    items:$(".boxbanner").find("img"), 
    list:true,         
    autoPlay:true,     
    moveTime:1000,
    delayTime:2000,     
    index:0         
});


//5.蒙版特效
$('#hotBuy').children('.margin').hover(function(){
    $(this).find('.moban').stop().show(1);
},function(){
    $(this).find('.moban').stop().hide(1);
})
$('.commo').hover(function(){
    $(this).find('.moban').stop().hide();
},function(){
    $(this).find('.moban').stop().show();
})































})()