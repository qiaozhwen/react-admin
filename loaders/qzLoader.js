const recast = require('recast')
const {parse, print} = recast
module.exports = function(content, map, meta) {
  console.log('🍚my loader----->',content)
  return content;
};
