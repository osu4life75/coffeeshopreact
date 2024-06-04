# coffeeshopreact

# Coffee Shop
# Plan
 - The goal is to make a fully functional serverless SPA coffee shop site.
 - for inspiration [elementalcoffee.com](https://elementalcoffee.com/)
# Stack (and other goodies)
 - React
  - [React](https://react.dev/)
  - npx create-react-app appName
 - Bootstrap
  - [Bootstrap](https://getbootstrap.com/)
  - npm i bootstrap@5.3.3
 - MySql
    - [freesqldatabase.com](https://www.freesqldatabase.com)
    - can access via vscode and [phpMyAdmin](https://www.phpmyadmin.co)
 - Netlify Functions
  - [Netlify Functions](https://www.netlify.com/platform/core/functions/)
  - create netlify site
  - npm install -g netlify-cli
  - netlify login
  - netlify init
  - mkdir functions and cd into it
  - create function file (ex: hello.js)
  - netlify deploy
  - function should be accessible in app from this endpoint:
      - https://yourSubDomain.netlify.app/.netlify/functions/functionName
 - Material UI
    - [MaterialUI](https://mui.com/material-ui/)
 - WeatherAPI
   - [Open Weather Map](https://openweathermap.org/api)
 - Responsive Design  
# Components
   - Header
   - Nav (we will only have one page, so this will be for changing what's in the Main)
   - Main
   - Menu
   - Cart
   - Footer
# Bonus
  - setup authentication for returning customers
  - discount system
  - Stripe for payments
  - Typescript :disappointed:

  # Deployment
  [![Netlify Status](https://api.netlify.com/api/v1/badges/ba395711-5fe1-4964-8306-8156c15ab77a/deploy-status)](https://app.netlify.com/sites/silver-melomakarona-0f3505/deploys)