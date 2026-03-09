const https = require('https');
const apiKey = 'AIzaSyAsTkqOs1-YBzXvpiNI6NF4fQsAs2mqeBY';
const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;

https.get(url, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    try {
      const json = JSON.parse(data);
      console.log('Available models:');
      if (json.models) {
        json.models.forEach(m => console.log(`- ${m.name} (methods: ${m.supportedGenerationMethods.join(', ')})`));
      } else {
        console.log(json);
      }
    } catch (e) {
      console.log(data);
    }
  });
}).on('error', err => console.error(err));
