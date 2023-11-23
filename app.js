const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

// Handlebars
app.set( 'view engine', 'hbs' );
hbs.registerPartials( __dirname + '/views/partials');

// Servir contenido estático
app.use( express.static( 'public' ) );

app.get('/', ( req, res ) => {

    res.render( 'home', {
        
        nombre: 'Matias Chillo',
        titulo: 'Curso de Node'

    });
  
});

app.get('/generic', ( req, res ) => {

    res.render( 'generic', {
        
        nombre: 'Matias Chillo',
        titulo: 'Curso de Node'

    });
  
});

app.get('/elements', ( req, res ) => {

    res.render( 'elements', {
        
        nombre: 'Matias Chillo',
        titulo: 'Curso de Node'

    });
  
});

// Cualquier otra ruta va a devolver esto
app.get('/*', ( req, res ) => {

    res.sendFile( __dirname = 'C:/Users/PCCPCPC‎P/Desktop/Programación/Udemy/Node/06-webserver/public/404.html' );
  
});

app.listen(port, () => {

    console.log(`Example app listening on port ${port}`)

})