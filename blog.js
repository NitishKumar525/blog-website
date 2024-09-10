const express = require('express');
const blogroute = require('./routes/blogroute');
const app = express();

// Middleware and configurations
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Routes
app.use('/', blogroute);
app.use('/blog', blogroute);

// Dynamic port assignment
const PORT = process.env.PORT || 5000;  // Use the port assigned by the environment, default to 5000 locally

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
