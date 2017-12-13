module.exports = function(content) {
    this.cacheable && this.cacheable();
    this.value = content;
    var newContent = JSON.parse(content)
    for (var key in newContent) {
      for (var i = 0; i < key.length; i++) {
        if (key[i] === key[i].toUpperCase()) {
          var keyArr = key.split('')
          keyArr.splice(i, 1, '-', key[i].toLowerCase());
          var newKey = keyArr.join('')
          newContent[newKey] = newContent[key];
          delete newContent[key]
          key = newKey;
        }
      }
    }
    return "module.exports = " + JSON.stringify(newContent);
}
module.exports.seperable = true;
