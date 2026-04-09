/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
window.PXUTheme.jsTopBarSlider = {
	init: function($section) {

    // Selectors

    const $slideshowTopBar = $section.find('[data-top-bar-slider]').removeClass('is-hidden');

    const $topbarSlider = $section.find('[data-top-bar-slider]');

    const $topBarSlider = $slideshowTopBar.flickity({
      initialIndex: 0,
      contain: true,
      wrapAround: true,
      prevNextButtons: false,
      pageDots: false,
      imagesLoaded: true,
      draggable: true,
      autoPlay: 5 * 1000,
    });

    $topBarSlider.on( 'settle.flickity', function() {
      $topBarSlider.flickity('resize');
    });
	},
  blockSelect: function($section, blockId) {
    var $topBarSlider = $section.find('[data-top-bar-slider]');

    var slideIndex = $('#shopify-section-' + blockId).data('promo-index');

    $topBarSlider.flickity('select', slideIndex, true, true);
  },
	unload: function($section) {
    var $slider = $section.find('.flickity-enabled');
    $slider.flickity('destroy');
    $('.featured-promotions__nav--prev').off();
    $('.featured-promotions__nav--next').off();

	}
}

/******/ })()
;