$(document).ready(function() {
  $("#container1").twentytwenty({
    default_offset_pct: 0.5, // сколько показывать 'изображение до' в процентах (максимально 1) сразу после загрузки страницы
    orientation: 'horizontal', // ориентация слайдера ('horizontal' или 'vertical')
    before_label: 'before', // подпись 'до'
    after_label: 'after', // подпись 'после'
    no_overlay: false, // не показывать затемнение с надписями 'до' и 'после'
    move_slider_on_hover: false, // двигать "бегунок" слайдера вместе с курсором мыши
    move_with_handle_only: true, // двигать слайдер только за его "бегунок"
    click_to_move: false // разрешить перемещение "бегунка" слайдера по клику на изображении
  });
});

$(document).ready(function() {
  $("#container2").twentytwenty({
    default_offset_pct: 0.5, // сколько показывать 'изображение до' в процентах (максимально 1) сразу после загрузки страницы
    orientation: 'horizontal', // ориентация слайдера ('horizontal' или 'vertical')
    before_label: 'before', // подпись 'до'
    after_label: 'after', // подпись 'после'
    no_overlay: false, // не показывать затемнение с надписями 'до' и 'после'
    move_slider_on_hover: false, // двигать "бегунок" слайдера вместе с курсором мыши
    move_with_handle_only: true, // двигать слайдер только за его "бегунок"
    click_to_move: false // разрешить перемещение "бегунка" слайдера по клику на изображении
  });
});

$(document).ready(function() {
  $("#container3").twentytwenty({
    default_offset_pct: 0.5, // сколько показывать 'изображение до' в процентах (максимально 1) сразу после загрузки страницы
    orientation: 'horizontal', // ориентация слайдера ('horizontal' или 'vertical')
    before_label: 'before', // подпись 'до'
    after_label: 'after', // подпись 'после'
    no_overlay: false, // не показывать затемнение с надписями 'до' и 'после'
    move_slider_on_hover: false, // двигать "бегунок" слайдера вместе с курсором мыши
    move_with_handle_only: true, // двигать слайдер только за его "бегунок"
    click_to_move: false // разрешить перемещение "бегунка" слайдера по клику на изображении
  });
});

$(document).ready(function() {
  $("#container4").twentytwenty({
    default_offset_pct: 0.5, // сколько показывать 'изображение до' в процентах (максимально 1) сразу после загрузки страницы
    orientation: 'horizontal', // ориентация слайдера ('horizontal' или 'vertical')
    before_label: 'before', // подпись 'до'
    after_label: 'after', // подпись 'после'
    no_overlay: false, // не показывать затемнение с надписями 'до' и 'после'
    move_slider_on_hover: false, // двигать "бегунок" слайдера вместе с курсором мыши
    move_with_handle_only: true, // двигать слайдер только за его "бегунок"
    click_to_move: false // разрешить перемещение "бегунка" слайдера по клику на изображении
  });
});

$(document).ready(function() {
  $("#container5").twentytwenty({
    default_offset_pct: 0.5, // сколько показывать 'изображение до' в процентах (максимально 1) сразу после загрузки страницы
    orientation: 'horizontal', // ориентация слайдера ('horizontal' или 'vertical')
    before_label: 'before', // подпись 'до'
    after_label: 'after', // подпись 'после'
    no_overlay: false, // не показывать затемнение с надписями 'до' и 'после'
    move_slider_on_hover: false, // двигать "бегунок" слайдера вместе с курсором мыши
    move_with_handle_only: true, // двигать слайдер только за его "бегунок"
    click_to_move: false // разрешить перемещение "бегунка" слайдера по клику на изображении
  });
});




 
$(function(){
  $('a[href^="#"]').on('click', function(event) {
    // отменяем стандартное действие
    event.preventDefault();
    
    var sc = $(this).attr("href"),
        dn = $(sc).offset().top;
    /*
    * sc - в переменную заносим информацию о том, к какому блоку надо перейти
    * dn - определяем положение блока на странице
    */
    
    $('html, body').animate({scrollTop: dn}, 1000);
    
    /*
    * 1000 скорость перехода в миллисекундах
    */
  });
});

