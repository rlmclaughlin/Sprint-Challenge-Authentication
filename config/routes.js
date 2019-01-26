const axios = require('axios');

const { authenticate } = require('../auth/authenticate');

module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  server.get('/api/jokes', authenticate, getJokes);
};

function register(req, res) {
  const creds = req.body; 
  const hash = bcrypt.hashSync(cred.password, 4); 
  creds.password = hash; 

  db('users')
    .insert(creds)
    .then(ids => {
      res.status(201).json(ids); 
    })
    .catch(err => { res.status(400).json({err: "there was an error"})
  })
}

function login(req, res) {
  const creds = req.body;

  db('users')
    .where({ username: creds.username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(creds.password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({ message: 'Hello! Welcome friend!', token });
      } else {
        res.status(401).json({ message: 'Incorrect password. Try again!' });
      }
    })
    .catch(err => res.json(err));
}

function getJokes(req, res) {
  const requestOptions = {
    headers: { accept: 'application/json' },
  };

  axios
    .get('https://icanhazdadjoke.com/search', requestOptions)
    .then(response => {
      res.status(200).json(response.data.results);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Jokes', error: err });
    });
}
