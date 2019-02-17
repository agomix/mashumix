$(window).load(function(){
	$('#loader').fadeOut(500);
	$('#content').fadeIn(500);
});
$(".track.one, .cover.one").click(function(){
	$(".cover.one").addClass('center');
	$(".cover.two").addClass('left');
	$(".cover.three").addClass('right');
	$(".cover.two, .cover.three").removeClass('center');
	$(".cover.one, .cover.two").removeClass('right');
	$(".cover.one, .cover.three").removeClass('left');
	$(".track.one").addClass('on');
	$(".track.two, .track.three").removeClass('on');
	$(".download").attr("href", "https://docs.google.com/uc?export=download&id=1G8bj7eBGgkMedmRR7PrKtNlR311tzeON");
});
$(".track.two, .cover.two").click(function(){
	$(".cover.one").addClass('left');
	$(".cover.two").addClass('center');
	$(".cover.three").addClass('right');
	$(".cover.one, .cover.three").removeClass('center');
	$(".cover.one, .cover.two").removeClass('right');
	$(".cover.two, .cover.three").removeClass('left');
	$(".track.two").addClass('on');
	$(".track.one, .track.three").removeClass('on');
	$(".download").attr("href", "https://docs.google.com/uc?export=download&id=1q4zm-Ig4BsX2DQHNE6KznSJI6SGUr-Rh");
});
$(".track.three, .cover.three").click(function(){
	$(".cover.one").addClass('right');
	$(".cover.two").addClass('left');
	$(".cover.three").addClass('center');
	$(".cover.two, .cover.one").removeClass('center');
	$(".cover.one, .cover.three").removeClass('left');
	$(".cover.two, .cover.three").removeClass('right');
	$(".track.three").addClass('on');
	$(".track.two, .track.one").removeClass('on');
	$(".download").attr("href", "https://docs.google.com/uc?export=download&id=1NpUh-tLoLvmHrE1HnDpf-mi6h3Q-8yw7");
});
