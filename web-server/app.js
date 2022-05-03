import express from 'express';
import hbs from 'hbs';
import { geocode } from './src/utils/geocode.js';
import { forecast } from './src/utils/forecast.js';


const port = process.env.PORT || 3000
const app = express();
const viewsPath = 'C:/Users/Kamil/Documents/Academy/Node.js/Udemy-course/web-server/templates/views';
const partialsPath = 'C:/Users/Kamil/Documents/Academy/Node.js/Udemy-course/web-server/templates/partials'

// Setup handlebars engine and views location
app.set('view engine','hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static('public'));

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: 'Kamil Beeli de Belfort'
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About page',
    name: 'Kamil Beeli de Belfort'
  })
});

app.get('/help', (req, res) => {
  res.render('help', {
    message: 'Here we solve all you problems',
    title: 'Help page',
    name: 'Kamil Beeli de Belfort'
  })
});

app.get("/weather", (req, res) => {
  const address = req.query.address;
  if(!address) {
    return res.send({
      error: 'You must provide an address term.'
    })
  } else {
    geocode(address, (error, { latitude, longitude, location } = {}) => {
      if (error) {
        return res.send({
          error: error
        });
      }

      forecast(latitude, longitude, (error, forecastData) => {
        if (error) {
          return res.send({
            error: error
          });
        }
        res.send({
          forecast: forecastData,
          location: location,
          address: address
        });
      })
    })
  }
});

app.get("/products", (req, res) => {
  if(!req.query.search){
    return res.send({
      error: 'You must provide a search term.'
    })
  }

  console.log(req.query.search);
  res.send({
    products: []
  });
});

app.get('/help/*', (req, res) => {
  res.render('404', {
    message: 'Help article not found!',
    title: '404 page',
    name: 'Kamil Beeli de Belfort'
  })
})

app.get("*", (req, res) => {
  res.render('404', {
    message: 'Page not found!',
    title: '404 Page',
    name: 'Kamil Beeli de Belfort'
  })
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}.`);
});