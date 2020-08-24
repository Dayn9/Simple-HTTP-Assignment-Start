const fs = require('fs'); // file system module

const gar = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getImage = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'image/png' });
  res.write(gar);
  res.end();
};

module.exports.getImage = getImage;
