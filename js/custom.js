
/**tabs */

  (function($) {
	$(function() {
	  
	  $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
		$(this)
		  .addClass('active').siblings().removeClass('active')
		  .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
	  });
	  
	});
    })(jQuery);

/** */    
$(function($){

    $('#brend1').click(function(){
        var a = $('#brend-list');
        if(!a.hasClass("active")){
             $(a).addClass('active');
            
        }else{
            $(a).removeClass('active');
        }
        return false;
    })
    $('#brend2').click(function(){
        var a = $('#brend-list2');
        if(!a.hasClass("active")){
             $(a).addClass('active');
            
        }else{
            $(a).removeClass('active');
        }
        return false;
    })

    $('.burger').click(function(){
        var b = $(this)
        var a = $('.left');
        if(!a.hasClass("active")){
             $(a).addClass('active');
             b.addClass('active')
            
        }else{
            $(a).removeClass('active');
            $('.submenu1').removeClass('active')
            $(".ico-menu").removeClass('active')
            b.removeClass('active')
        }
        return false;
    })

    $('.menu2').click(function(){
        var b = $(this)
        var a = $(this).parent();
        var c = a.find('.prod-menu-ul-mobi')
        if(!c.hasClass("active")){
             b.addClass('active');
             c.addClass('active');
        }else{
            b.removeClass('active');
            c.removeClass('active');
        }
        return false;
    })

}) 

/**select */
$('.select').each(function() {
  const _this = $(this),
      selectOption = _this.find('option'),
      selectOptionLength = selectOption.length,
      selectedOption = selectOption.filter(':selected'),
      duration = 450; // длительность анимации 

  _this.hide();
  _this.wrap('<div class="select"></div>');
  $('<div>', {
      class: 'new-select',
      text: _this.children('option:disabled').text()
  }).insertAfter(_this);

  const selectHead = _this.next('.new-select');
  $('<div>', {
      class: 'new-select__list'
  }).insertAfter(selectHead);

  const selectList = selectHead.next('.new-select__list');
  for (let i = 1; i < selectOptionLength; i++) {
      $('<div>', {
          class: 'new-select__item',
          html: $('<span>', {
              text: selectOption.eq(i).text()
          })
      })
      .attr('data-value', selectOption.eq(i).val())
      .appendTo(selectList);
  }

  const selectItem = selectList.find('.new-select__item');
  selectList.slideUp(0);
  selectHead.on('click', function() {
      if ( !$(this).hasClass('on') ) {
          $(this).addClass('on');
          selectList.slideDown(duration);

          selectItem.on('click', function() {
              let chooseItem = $(this).data('value');

              $('select').val(chooseItem).attr('selected', 'selected');
              selectHead.text( $(this).find('span').text() );

              selectList.slideUp(duration);
              selectHead.removeClass('on');
          });

      } else {
          $(this).removeClass('on');
          selectList.slideUp(duration);
      }
  });
});

/** end select */

// обработка +-
jQuery(document).ready(function(){
	$(".plus").click( function(e) {
		e.preventDefault();
		field = "input[name=" + $(this).attr("field") + "]";
		var currentVal = parseInt($(field).val());
		if ( !isNaN(currentVal) && currentVal < 500000 ) {
		$(field).val(currentVal + 1);
	
		}
		
	});
	
	// This button will decrement the value till 0
	$(".minus").click( function(e) {
		e.preventDefault();
		field = "input[name=" + $(this).attr("field") + "]";
		var currentVal = parseInt($(field).val());
		if ( !isNaN(currentVal) && currentVal > 1 ) {
		$(field).val(currentVal - 1);
		}
		
	});

    $('.lic-kab__ico').click(function(){
        var us = $(this)
        if(!us.hasClass('mod')){
            us.addClass('mod')
            $('.teni').addClass('active')
            $('.modal1').addClass('active')
        }else{
            us.removeClass('mod')
            $('.teni').removeClass('active')
            $('.modal1').removeClass('active')
        }
    })
    $('.autorize').click(function(){
        var us = $(this)
        if(!us.hasClass('mod')){
            us.addClass('mod')
            $('.teni').addClass('active')
            $('.modal1').addClass('active')
        }else{
            us.removeClass('mod')
            $('.teni').removeClass('active')
            $('.modal1').removeClass('active')
        }
        return false
    })

    $('.close').click(function (){
        $('.teni').removeClass('active')
        $('.modal1').removeClass('active')
        $('.lic-kab__ico').removeClass('mod')
        $('.autorize').removeClass('mod')
        return false
    })

}); 
/*****menu*** */
$(function($){
    $('.ico-menu').click(function (){
        var a = $(this).parent();
        var s = a.find('.submenu1')
        if(!a.find(".ico-menu").hasClass('active')){
                $(".prod-content").removeClass('active')
                $(".shared-center").removeClass('active')
                $(".ico-menu").removeClass('active')
                $('.submenu1').removeClass('active')
            a.find(".ico-menu").addClass('active')
            a.find('.submenu1').addClass('active')
            if(s.hasClass('active')){
                $(".prod-content").addClass('active')
                $(".shared-center").addClass('active')
            }
        }else{
            $(".ico-menu").removeClass('active')
            a.find('.submenu1').removeClass('active')
            $(".prod-content").removeClass('active')
            $(".shared-center").removeClass('active')
        }
      return true 
    })
})

/**карусели */ 
$(function ($) {
	$(".menu-page-mobi").owlCarousel({
		//center:true,
		stagePadding:80,
		//loop:true,
		items: 3,
        autoWidth:true,
		//autoplay: false,
		dots: false,
		nav: false,
        margin:15,
		navText: ["<i class='news-str-left' aria-hidden='true'><img src='img/ico/left.svg'></i>", 
				"<i class='news-str-right' aria-hidden='true'><img src='img/ico/right.svg'></i>"],
		responsive : {
			0 : {
				center:true,
				stagePadding:0,
				items: 2,
               loop:true,

			},
			370 : {
				center:true,
				stagePadding:0,
				items: 2,
                loop:true,
			},
			480 : {
			//	center:true,
				stagePadding:100,
				items: 2,
			},
			570 : {
			//	center:true,
				stagePadding:0,
				items:2,
			},
			670 : {
			//	center:true,
			//stagePadding:60,
				items: 2
			},
			992 : {
				items: 3,
			},
		}
	});
  })

  $(function ($) {
	$(".gls").owlCarousel({
		//center:true,
		//stagePadding:80,
		//loop:true,
		items:1,
        //autoWidth:true,
		//autoplay: false,
		dots: false,
		nav: true,
        margin:15,
		navText: ["<i class='news-str-left' aria-hidden='true'><img src='img/ico/left.svg'></i>", 
				"<i class='news-str-right' aria-hidden='true'><img src='img/ico/left.svg'></i>"],

	});
  })


  var ratio = 1/1.5; // высота равна половине ширины
  if($(window).width()<992){var ratio = 1/1.3;}
  if($(window).width()>992){var ratio = 1/1.5;}
  if($(window).width()>1300){var ratio = 1/1.5;}
  var $box = $('.bl-2'); // кэшируем результат вызова функции
  var $box1=$('.bmb-img5'); 

    $box.height($box.width() * ratio);
    $box1.height($box.width()/2 * ratio);

 $(window).resize(function () {
     if($(window).width()>992){var ratio = 1/1.3;}
     if($(window).width()>1300){var ratio = 1/1.5;}
      if($(window).width()<992){var ratio = 1/1.5;}
      $box.height($box.width() * ratio);
      $box1.height($box.width()/2 * ratio);
 }) 

 /***radio */
$(".radio-button input[name='radio']").click(function(){
    $('.radio-button').removeClass('active');
    var a= $(this).parent();
    if ($('input[name="radio"]').is(':checked')){
        a.addClass('active');
    }
})

