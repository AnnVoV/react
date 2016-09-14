function generateText() {
  var ele = document.createElement('h2');
  ele.innerHTML = 'Hello h2 world!';
  return ele;
};


module.exports = generateText;