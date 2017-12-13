var button = document.getElementById('postButton');
var outputDiv = document.getElementById('output');

button.addEventListener('click', function() {
  var form = document.getElementById('textPutIn').value;
  var frag = document.createDocumentFragment();
  debugger;
  var children = form.childNodes;
  for (var key in children) {
    var node = children[key];
    if (node.nodeName === 'INPUT') {
      var p = document.createElement('p');
      p.textContent = node.value;
      frag.appendChild(p);
    }
  }
  outputDiv.textContent = '';
  outputDiv.appendChild(frag);
});