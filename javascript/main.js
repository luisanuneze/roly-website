/* sacado de http://carlitoxenlaweb.blogspot.com.es/2012/10/menu-lateral-flotante-con-jquery-y-css.html */

$(function() {
    $('#navigation a').stop().animate({ 'marginLeft': '-85px' }, 1000);

    $('#navigation > li').hover(
        function() {
            $('a', $(this)).stop().animate({ 'marginLeft': '-2px' }, 200);
        },
        function() {
            $('a', $(this)).stop().animate({ 'marginLeft': '-85px' }, 200);
        }
    );
});