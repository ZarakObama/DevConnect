const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('API running'));
// start server
const PORT =
  process.env.NODE_ENV === 'production' ? process.env.PORT || 80 : 5000;
app.listen(PORT, () => console.log('Server listening on port ' + PORT));
