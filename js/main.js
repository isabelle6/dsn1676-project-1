var $nav = $('.nav');
var $panel = $('.panel');

$nav.on('click', function () {
    $panel.toggleClass('js-panel-open');
});