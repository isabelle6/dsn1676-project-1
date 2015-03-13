var $nav = $('.nav');
var $navPanel = $('.nav-panel');

var $tabs = $('.tabs');
var $tabPanels = $('.tab-panel');

$nav.on('click', function () {
    $navPanel.toggleClass('js-nav-panel-open');
});

$tabs.on('click', 'a', function (e) {
    e.preventDefault();
    var id = $(this).attr('href');
    $tabPanels.filter(':not([hidden])').attr('hidden', true);
    $(id).removeAttr('hidden');
    $tabs.find('.js-current').removeClass('js-current');
    $(this).addClass('js-current');
});