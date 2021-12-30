module.exports = function(char) {
  var Key = ""
  var string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < char; i++) {
    Key += string.charAt(Math.floor(Math.random() * string.length))
  }
  return Key;
}
