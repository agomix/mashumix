var Player = function ( $target )
{
	this.$ = {};
	this.$.body  	    = $target;
	this.$.prev 	 		= this.$.body.find('.prev');
	this.$.next 		    = this.$.body.find('.next');
	this.$.play 		    = this.$.body.find('.play');
	this.$.load 		    = this.$.body.find('.load');
	this.$.seek_bar			= this.$.body.find('.seek-bar');
	this.$.progress_bar		= this.$.body.find('.progress-bar');
	this.$.music			= this.$.body.find('.music');
	this.$.track 			= this.$.body.find('.track');

	this.count = this.$.track.length;
	this.init_events();
};

Player.prototype.index = 0;
Player.prototype.count = 0;
Player.prototype.progress_ratio = 0;

Player.prototype.init_events = function (){
	var that = this;

	this.$.next.on('click', function(){
		that.next();
		return false;
	});
	this.$.prev.on('click', function(){
		that.prev();
		return false;
	});

this.$.track.each(function (data) {
$(this).on('click', function (){
that.go_to( data, $carousel.index);
});});
this.changeMusic();
	this.$.play.on('click', function(){
		play = !play;
		that.changeMusic();
		return false;
	});

	this.$.music.bind('ended', function(){
		that.next();
	});
	
$(".music").bind('playing', function() {
	$(".load").removeClass("loading");
});

	window.setInterval(function () {
		this.progress_ratio = that.$.music[0].currentTime / that.$.music[0].duration;
	    that.$.progress_bar.css({
		  transform: "scaleX(" + progress_ratio + ")"
		});
	}, 50);
	this.$.seek_bar.on('click', function (e) {
	        var x = e.clientX - that.$.seek_bar.offset().left,
	        ratio = x / that.$.seek_bar.width(),
	        time = ratio * that.$.music[0].duration;
	    that.$.music[0].currentTime = time;
	});
};

Player.prototype.next = function()
{
	this.go_to( this.index + 1, this.index);
};
Player.prototype.prev = function()
{
	this.go_to( this.index - 1, this.index);

};

Player.prototype.go_to = function( index, currentIndex )
{	
	if (currentIndex != index) {

		index = index%this.count;
		if (index < 0)
			index = index + this.count;
		
		this.$.track[currentIndex].classList.remove('ativa');
		this.$.track[index].classList.add('ativa');
		this.$.music[0].setAttribute('src', 'song/' + index + '.mp3');
		
		this.changeMusic();
		this.index = index;
	}
};

Player.prototype.changeMusic = function()
{	
	if (play == true) {
		this.$.music[0].play();
		this.$.load[0].classList.add('loading');
		this.$.play[0].classList.add('icon-pause');
		$(".next, .previous").show();
		$(".play").addClass("yes");
		$(".controls").removeClass("bg");
	}
	else {
		this.$.play[0].classList.remove('icon-pause');
		this.$.load[0].classList.remove('loading');
		$(".next, .previous").hide();
		$(".play").removeClass("yes");
		$(".controls").addClass("bg");
	$(".play").removeClass("color");
		
		this.$.music[0].pause();
	}
};

var $carousel = new Player( $('body') );
var play = false
