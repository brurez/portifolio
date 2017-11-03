import express from 'express';
import path from 'path';
import logger from 'morgan';
import bodyParser from 'body-parser';
import hbs from 'hbs';
import reload from 'reload';

import routes from './routes';

const app = express();

app.set('views', path.join(__dirname, '..','views'));
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, 'views', 'partials'));

app.use(logger('dev', {
  skip: () => app.get('env') === 'test'
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/public', express.static(path.join(__dirname, '..', 'public')));
app.use('/scripts', express.static(path.join(__dirname, '..', 'node_modules')));

// Routes
app.use('/', routes);

reload(app);

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

export default app;
