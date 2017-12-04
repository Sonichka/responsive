$(document).ready(() => {
const $gift = $('.gift');
const $pop = $('.popuptext');
const $table = $('.table');
const $up = $('.up');
const $down= $('.down');

$gift.on('click', () => {
	$pop.fadeToggle()
})

$gift.on('mouseenter', () =>{
    $gift.addClass('zoom');
  }).on('mouseleave', () => {
    $gift.removeClass('zoom');
  })

$pop.on('click', () => {
	$pop.fadeToggle();	
})

$up.on('mouseenter', () =>{
    $up.addClass('change');
  }).on('mouseleave', () => {
    $up.removeClass('change');
  })
  
$down.on('mouseenter', () =>{
    $down.addClass('change');
  }).on('mouseleave', () => {
    $down.removeClass('change');
})

$down.on('click', () => {
	$table.slideDown();	
	$down.hide();
	$up.show()
})

$up.on('click', () => {
	$table.slideUp();	
	$down.show();
	$up.hide();
})

new Date($.now());
  
});