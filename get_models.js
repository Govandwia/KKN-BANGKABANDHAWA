const https = require('https');
const fs = require('fs');
const apiKey = 'AIzaSyAsTkqOs1-YBzXvpiNI6NF4fQsAs2mqeBY';
const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;

https.get(url, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    try {
      const json = JSON.parse(data);
      const names = json.models.map(m => m.name).join('\n');
      console.log(names);
    } catch (e) {
      console.log(e);
    }
  });
});
