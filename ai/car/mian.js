const fs = require('fs');
const image = fs.readFileSync('./car4.jpg').toString("base64");
const AipOcrClient = require('baidu-aip-sdk').ocr;
const client = new AipOcrClient('17712429','uBFfDKFaS1tngo7r0ANnMTIi','al1RVdgiekSuNveaWPRxxOc4eGa1ByOd');

const options = {};
options["multi_detect"] = "true";
client.licensePlate(image,options)
.then(function(result){
    console.log(result);
})
