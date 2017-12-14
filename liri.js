
var keys = require('./keys.js');


var Twitter = require('twitter');

var spotify = require('spotify');

var request = require('request');
 
var client = new Twitter(keys.twitterKeys);

var getMyTweets = function (){

 
var params = {screen_name: 'dianachriswhite'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    // console.log(tweets);
    for (var i=0; i<tweets.length; i++) {

    	console.log(tweets[i].created_at);
    	console.log('');
    	console.log(tweets[i].text);
    }
  }
});
}

var getSpotify = function(){


 
spotify.search({ type: 'track', query: songName }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
 	console.log(data.tracks.items[0]);
});
}

var getMoviePick = function() {

request('http://www.omdbapi.com/?t=' + movieName + ', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log(body); // Print the HTML for the Google homepage.
});
}

var pick = function(caseData, functionData){
	switch(caseData){
		case 'my-tweets' :
		getMyTweets ();
	
        case 'spotify-this-song':
        getSpotify(functionData);

        case 'move-this':
        getMoviePick(functionData);

		default:
		console.log('LIRI does not understand request');
	}


}

var runThis = function (argOne, argTwo){
	pick(argOne, argTwo);
};

runThis(process.argv[2], process.argv[3]);

//need to add keys and fix minor syntax issues as described by running node