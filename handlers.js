
var fs = require('fs');


function index(response) {
  loadFile('/index.html', response);
}

function chat(response) {
  loadFile('/chat/index.html', response);
}

function wb(response, resource) {
  if(resource == '/wb') {
    loadFile('/wb/index.html', response);
  }
  else {
    loadFile(resource, response);
  }
}

function iwb(response) {
}

function loadFile(file, response) {
  fs.readFile(__dirname + file,
    function(err, data) {
      if(err) {
        response.writeHead(500);
        response.end('error loading file...');
      }
      else {
        response.writeHead(200);
        response.end(data);
      }
    }
  );
}

exports.index = index;
exports.chat = chat;
exports.wb = wb;
