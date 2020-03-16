const express = require("express")
const app = express()

let history = require('connect-history-api-fallback')

//重定向到index.html
history({
  rewrites: [{
      from: /^\/libs\/.*$/,
      to: '/index.html'
    }]
});

app.use(history());

const port = 8081

app.use(express.static('./dist'))

app.listen(port, () => {
  console.log('Listening at http://localhost:' + port)
})