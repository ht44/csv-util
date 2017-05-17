const fs = require('fs');

fs.readFile('./scrape.txt', 'utf8', (err, data) => {
  const arrayOfIds = data.split('\n');
  const csvStr = arrayOfIds.join(',').slice(0, -1);
  fs.writeFile('./result.csv', csvStr, (err) => {
    console.error(err);
  });
});
