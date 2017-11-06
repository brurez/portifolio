'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _hbs = require('hbs');

var _hbs2 = _interopRequireDefault(_hbs);

var _reload = require('reload');

var _reload2 = _interopRequireDefault(_reload);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express2.default)();

app.set('views', _path2.default.join(__dirname, '..', 'views'));
app.set('view engine', 'hbs');
_hbs2.default.registerPartials(_path2.default.join(__dirname, 'views', 'partials'));

app.use((0, _morgan2.default)('dev', {
  skip: () => app.get('env') === 'test'
}));
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use('/public', _express2.default.static(_path2.default.join(__dirname, '..', 'public')));
app.use('/scripts', _express2.default.static(_path2.default.join(__dirname, '..', 'node_modules')));

// Routes
app.use('/', _routes2.default);

if (process.env.NODE_ENV !== 'production') (0, _reload2.default)(app);

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

exports.default = app;
//# sourceMappingURL=app.js.map