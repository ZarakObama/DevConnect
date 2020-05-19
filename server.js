const express = require('express');
const connectDB = require('./config/db');

const app = express();
// Connect Database
connectDB();

// Init Middleware
app.use(express.json());

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

app.get('/', (req, res) => res.send('API running'));
// start server
const PORT =
  process.env.NODE_ENV === 'production' ? process.env.PORT || 80 : 5000;
app.listen(PORT, () => console.log('Server listening on port ' + PORT));
