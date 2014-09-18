//tweak so the box resizes if you click outside of it
//tweak so only the respective compose boxes resize
$('#tweet-controls').hide();
$('.tweet-compose').on('click', function(){
	$('.tweet-compose').css({'height' : '5em'});
	$('#tweet-controls').show();
})
//Tweak so the counter is correct at the keypress, not after
$('.tweet-compose').keyup(function(){
	var charCount = 140 - $('.tweet-compose').val().length;
	$('#char-count').html(charCount);
	if(charCount < 11){
		$('#char-count').css({'color':'red'});
	}
	else {$('#char-count').css({'color': '#999'});}
	if(charCount < 0/* || charCount >= 140*/) {
		$('.button').prop('disabled', true);
	}
	else {$('.button').prop('disabled', false)
	}
})

//Tweak so the tweet box clears on click
$('.button').on('click', function(){
	var newTweet = $('.tweet:first').clone();
	var newText = $('.tweet-compose').val();
	newTweet.find('.avatar').attr('src', 'img/alagoon.jpg');
	newTweet.find('.fullname').html('Your Name Here');
	newTweet.find('.username').html('@yourusername');
	newTweet.find('.tweet-text').text(newText);
	newTweet.prependTo('#stream');
})

//tweak so only the tweet that is hovered/clicked over expands
$('.tweet-actions').hide();
$('.tweet').hover(function(){
		$(this).find('.tweet-actions').show();
	}, function(){
		$(this).find('.tweet-actions').hide();
	}
)

//tweak so that clicking another tweet will hide the reply/stats of the previously clicked tweet
$('.stats').hide();
$('.reply').hide();
$('.tweet').on('click', function(){
	$('.stats').hide();
	$('.reply').hide();
	$(this).find('.stats').show();
	$(this).find('.reply').show();
})
