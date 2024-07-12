
$(function () {
    console.log('Lets get ready to party with jQuery!')
})

// adding a class to img
$('article img').addClass('img-center');

//removing the last paragraph
$('article p').eq(5).remove();

//giving the title random font-size
$('title').each(() => {
    let randimFontSize = Math.floor(Math.random() * 101) + 'px';
    $(this).css('font-size',randimFontSize);
})

//adding item to the list
$('aside li').eq(3).after("<li>this was hard to find for some reason</li>");

//removing the list with an apilogy
$('aside').html('<p>I am sorry for my existinse</p>');

//matching the input val with background color
$('.form-control').on("keyup blur change", () => {
    let red = $('.form-control').eq(0).val();
    let blue = $('.form-control').eq(1).val();
    let green = $('.form-control').eq(2).val();
    $('body').css('background-color', "rgb("+ red + "," + green + "," + blue + ")");
})

//removing the img by a click
$('img').on('click', function() {
    $(this).fadeOut("500", () =>{
        $(this).remove();
    })
})