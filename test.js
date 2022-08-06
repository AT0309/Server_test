'use strict';
const http=require('http');
//const pug=require('pug');
const fs=require('fs');

const server=http.createServer((req,res) => {
  res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
  switch(req.method){
case 'GET':
  if(req.url==='/'){
    fs.readFile('./test.html','utf-8',(error,data) => {
      res.write(data);
      console.log("request");
      res.end();
    });
    }
  break;
case 'POST':
    let raw='';
    req.on('data',chunk => {
      raw+=chunk;
    }).on('end',() =>{
      const qs=require('querystring');
      const answer=qs.parse(raw);
      const body=answer['name'];
      res.write('<!DOCTYPE html><html lang="ja"><body><h1>' +
      body + '</h1></body></html>');
      res.end();
    });
  }
  console.log(req.url);
});

server.listen(8000);