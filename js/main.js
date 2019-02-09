window.onload = function(){


    $('.reviews__list').slick({
        arrows: false,
        autoplay: true,
        dots: true
    });

    $('.header__btn').on('click', function(){
        $('.span2').toggleClass('span2Animate');
        $('.span3').toggleClass('span3Animate');
        $('.span1').toggleClass('span1Animate');
        $('.span4').toggleClass('span4Animate');
        $('.header__list').fadeToggle().css('display','flex');
    });

    $(".header__link,.btn").on("click", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		//event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top - 10+'%';
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1000);
	});
}