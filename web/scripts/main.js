let popUp = false;

$(document).ready(
	function () {
		showPagin();
		console.log('loaded');
	}
);


function showPagin(e) {
	$('.header-navigator').show();
}

$(function(){
        $("a[href^='#']").click(function(){
                const _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
                return false;
        });
});

$('#send').click(function(e,k){
	let good = true
	let data = [];
	$('form').find ('input, textearea, select').each(function(i) {
	  data[i] = $(this).val();
	  if(data[i].trim() === '')
		  good = false;
	  
	});
	if(good)
		$('.b-popup-content h1').text('Заявка отправлена.');
	else
		$('.b-popup-content h1').text('Заявка не отправлена. Не все поля верно заполнены');
	
	$('#b-popup').show();
	setTimeout(()=>{popUp = true;},50);
	
});

$(document).click(function(){
	if(popUp){
		popUp = false;
		$('#b-popup').hide();
	}
})