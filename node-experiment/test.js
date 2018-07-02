var fs = require('fs');
var https = require('https');

fs.writeFile(__dirname + '/index.html','<h1>HTML is great</h1>',function(error){
    if(error){
        return console.log(error);
    } else{
        console.log('Congrats');
    }
});


var myPhotoUrl = 'https://raw.githubusercontent.com/LearnWebCode/welcome-to-git/master/images/dog.jpg';
https.get(myPhotoUrl,function(response) {
    response.pipe(fs.createWriteStream(__dirname + '/mydog.jpg'));
});