const fs = require('fs');

fs.readFile('./raw.csv', 'utf8', (err, data) => {
  const records = data.split('\n');

  const results = [];
  let result;

  records.forEach(record => {
    if (/^\d+$/.test((record.split(',')[0]))) {
      results.push(record.split(',')[0]);
    }
  });
  results.pop();
  result = results.join(',')

  console.log(result);

  fs.writeFile('./result.csv', result, (err) => {
    if (err) console.error(err);
  });
});
