const fs = require('fs');
const path = require('path');

const jsonFuncs = {
    newData: function(data, json, jpath) {
        json.push(data)

        let newJSON = JSON.stringify(json, null, " ");
        fs.writeFileSync(path.resolve(jpath), newJSON);
    }
}

module.exports = jsonFuncs;