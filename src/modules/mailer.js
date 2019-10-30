const path = require('path');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const {host, port, user, pass} = require('../config/mail');

const transport = nodemailer.createTransport({
    host,
    port,
    auth: {user, pass}
});


module.exports = transport;