const path = require('path')

module.exports.localData = path.join(path.dirname(__dirname), 'localData');
module.exports.localMetadata = path.join(path.dirname(__dirname), 'localMetadata', 'data.json');
