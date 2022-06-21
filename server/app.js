const express = require('express');
const path = require("path");

const app = express();

// Routes
app.use(express.json());

if(process.env.NODE_ENV === 'production') {
    app.use((req, res, next) => {
      if (req.header('x-forwarded-proto') !== 'https')
        res.redirect(`https://${req.header('host')}${req.url}`)
      else
        next()
    })
  }

if (process.env.NODE_ENV === "production") { 
    app.use(express.static("client/build")); 
    app.get("*", (req, res) => { 
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server Online at ${PORT}`);
});