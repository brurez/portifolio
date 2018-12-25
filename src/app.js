import express from 'express';
import path from 'path';
import logger from 'morgan';
import bodyParser from 'body-parser';
import hbs from 'hbs';
import compression from 'compression';

import routes from './routes';

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, 'views', 'partials'));

app.use(
  logger('dev', {
    skip: () => app.get('env') === 'test',
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());

app.use('/public', express.static(path.join(__dirname, '..', 'public')));
app.use('/scripts', express.static(path.join(__dirname, '..', 'node_modules')));

// Routes
app.use('/', routes);

if (process.env.NODE_ENV !== 'production') require('reload')(app);

export default app;
