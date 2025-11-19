require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const expressWinston = require('express-winston');
const winston = require('winston');

const app = express();
const PORT = process.env.PORT || 3000;

// view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(expressWinston.logger({
  transports: [new winston.transports.Console()],
  format: winston.format.combine(winston.format.colorize(), winston.format.simple())
}));

// Mount routes (placeholders)
app.use('/auth', require('./routes/auth'));
app.use('/products', require('./routes/products'));
app.use('/tags', require('./routes/tags'));
app.use('/discounts', require('./routes/discounts'));
app.use('/users', require('./routes/users'));

// Front page
app.get('/', (req, res) => res.render('index'));

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
