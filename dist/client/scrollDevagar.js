'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = () => {
  (0, _jquery2.default)('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function (event) {
    // On-page links
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      let target = (0, _jquery2.default)(this.hash);
      target = target.length ? target : (0, _jquery2.default)('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        (0, _jquery2.default)('html, body').animate({
          scrollTop: target.offset().top - 80
        }, 1000, function () {
          const $target = (0, _jquery2.default)(target);
          $target.focus();
          if ($target.is(':focus')) {
            return false;
          } else {
            $target.attr('tabindex', '-1');
            $target.focus();
          }
        });
      }
    }
  });
};
//# sourceMappingURL=scrollDevagar.js.map