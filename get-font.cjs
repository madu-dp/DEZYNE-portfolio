const https = require('https');

https.get('https://bungee.framer.website/', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const match = data.match(/font-family:[^;\"']+/g);
    if (match) {
      const uniqueFonts = [...new Set(match)];
      console.log('Fonts found:', uniqueFonts.slice(0, 10));
    } else {
      console.log('No font-family found in HTML');
    }
  });
}).on('error', (err) => {
  console.log('Error: ' + err.message);
});
