const protect = require('static-auth');
const safeCompare = require('safe-compare');

// The sets of credentials that can be used to access the website
// DO NOT USE THESE PASSWORDS!
const valid_credentials = [
  "guest\nguest",
  "admin\nadmin",
  "john.doe\nJohnny1972!"
];

const app = protect(
  // Which sites should be protected? All. If you change this, remember that the search JSON file will leak the contents anyways, so you want to protect it or disable the search plugin
  '/*',
  // This code checks whether a set of credentials is valid
  (username, password) => {
    // Concatinate username and password to potentially block timing info that is leaked if you compare them sequentially
    const credentials = username + "\n" + password;
    for (cred of valid_credentials) {
      if (safeCompare(credentials, cred)) {
        return true;
      }
    }  
    return false;
  },
  // This code serves the website
  {
    directory: __dirname + '/public',
    realm: 'MkDocs',
    onAuthFailed: res => {
      res.end('401 Unauthorized');
    }
  }
);

module.exports = app;