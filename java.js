$(document).ready(() => {
const $gift = $('.gift');
const $pop = $('.popuptext');

$gift.on('click', () => {
	$pop.toggle();	
})

$gift.on('mouseenter', () =>{
    $gift.addClass('zoom');
  }).on('mouseleave', () => {
    $gift.removeClass('zoom');
  })


});