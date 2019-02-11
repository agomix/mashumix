$(window).load(function(){
	$('#loader').fadeOut(500);
	$('#content').fadeIn(500);
	$("meta[name='theme-color']").attr("content", "#ac5877");
	$("meta[name='msapplication-TileColor']").attr("content", "#ac5877");
});
$(".track.one").click(function(){
	$(".cover").attr("src","img/cover/1.png");
	$(".track.one").addClass('on');
	$(".track.two, .track.three").removeClass('on');
	$(".download").attr("href", "https://docs.google.com/uc?export=download&id=1G8bj7eBGgkMedmRR7PrKtNlR311tzeON");
	$(".cover-download").css("background-color", "#ac5877");
	$("meta[name='theme-color']").attr("content", "#ac5877");
	$("meta[name='msapplication-TileColor']").attr("content", "#ac5877");
});
$(".track.two").click(function(){
	$(".cover").attr("src","img/cover/2.png");
	$(".track.two").addClass('on');
	$(".track.one, .track.three").removeClass('on');
	$(".download").attr("href", "https://docs.google.com/uc?export=download&id=1q4zm-Ig4BsX2DQHNE6KznSJI6SGUr-Rh");
	$(".cover-download").css("background-color", "#a89b71");
	$("meta[name='theme-color']").attr("content", "#a89b71");
	$("meta[name='msapplication-TileColor']").attr("content", "#a89b71");
});
$(".track.three").click(function(){
	$(".cover").attr("src","img/cover/3.png");
	$(".track.three").addClass('on');
	$(".track.two, .track.one").removeClass('on');
	$(".download").attr("href", "https://docs.google.com/uc?export=download&id=1NpUh-tLoLvmHrE1HnDpf-mi6h3Q-8yw7");
	$(".cover-download").css("background-color", "#405c63");
	$("meta[name='theme-color']").attr("content", "#405c63");
	$("meta[name='msapplication-TileColor']").attr("content", "#405c63");
});
