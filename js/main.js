var $nav = $('.nav');
var $navPanel = $('.nav-panel');

var $tabs = $('.tabs');
var $tabPanels = $('.tab-panel');

var $btnDisplayBluetang = $('.btn-display-hide-bluetang');
var $bluetangInfo = $('.bluetang-info');

var $btnDisplayClownfish = $('.btn-display-hide-clownfish');
var $clownfishInfo = $('.clownfish-info');

var $btnDisplayStarfish = $('.btn-display-hide-starfish');
var $starfishInfo = $('.starfish-info');

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

$btnDisplayBluetang.on('click', function () {
    $bluetangInfo.toggleClass('js-fish-info-collapse-expand');
});

$btnDisplayClownfish.on('click', function () {
    $clownfishInfo.toggleClass('js-fish-info-collapse-expand');
});

$btnDisplayStarfish.on('click', function () {
    $starfishInfo.toggleClass('js-fish-info-collapse-expand');
});