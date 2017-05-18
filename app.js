//
'use strict';
const fs = require('fs');

fs.readdir('./csv_files', 'utf8', (err, files) => {
    let output = [];

    files.forEach(filename => {
        let contents = fs.readFileSync(`./csv_files/${filename}`, 'utf8');
        let ids = [];
        let result = {
            name: filename,
            quantity: null,
            csv: null
        };

        contents.split('\n').forEach(record => {
            if (/^\d+$/.test((record.split(',')[0]))) {
                let id = record.split(',')[0];
                // if (id > 6000)
                    ids.push(id);
                }
            });

        result.quantity = ids.length;
        result.csv = ids.join(',');
        output.push(result);

    });

    output = JSON.stringify(output);
    fs.writeFile('./output.js', output, (err) => {
        if (err)
            console.error(err);
        console.log(JSON.parse(output));
    });
});
