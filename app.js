//'use strict';
const fs = require('fs');

const austin24 = [
    "Ailanthus_altissima",
    "Lonicera_japonica",
    "Arundo_donax",
    "Macfadyena_unguis_cati",
    "Bothriochloa_ischaemum_var_songarica",
    "Melia_azedarach",
    "Broussonetia_papyrifera",
    "Nandina_domestica",
    "Centaurea_melitensis",
    "Phyllostachys_aurea",
    "Colocasia_esculenta",
    "Pistacia_chinensis",
    "Cynodon_dactylon",
    "Pueraria_montana",
    "Cyrtomium_falcatum",
    "Pyracantha_coccinea",
    "Eichhornia_crassipes",
    "Rapistrum_rugosum",
    "Firmiana_simplex",
    "Sorghum_halepense",
    "Hydrilla_verticillata",
    "Tamarex_ramosissima",
    "Ligustrum_lucidum",
    "Triadica_sebifera",
    "Albizia_julibrissin",
    "Ligustrum_quihoui",
    "Ligustrum_sinense"
];

console.log(austin24.length);

fs.readdir('./csv_files/', 'utf8', (err, files) => {
    let output = [];
    let trimmedFiles = [];
    files.forEach(filename => {
      if (!austin24.includes(filename)) {
        trimmedFiles.push(filename);
      }
    });

    trimmedFiles.forEach(filename => {
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
                if (id > 6000)
                    ids.push(id);
                }
            });

        result.quantity = ids.length;
        result.csv = ids.join(',');
        output.push(result);

    });
    console.log(output);
    output = JSON.stringify(output);
    fs.writeFile('./output.js', output, (err) => {
        if (err)
            console.error(err);
        // console.log(JSON.parse(output));
    });
});
