var http = require('http');
var path = require('path');
var parts = __dirname.split(path.sep);
var user = parts[parts.length-2];
var request = function(option){
	var method = option.toLowerCase();
	var url = ['http://itp-stepsync.rhcloud.com/',method,user].join('/');
	http.get(url, function(res) {
		res.on('data',function(chunk){
			console.log(chunk.toString());
		})
	}).on('error', function(e) {
		console.log(e.message);
	});
	return true;
};

var showUsage = function(){
	console.log('node assignment.js submit \t => submits your revision.js');
	console.log('node assignment.js refresh \t => refreshes your revisionTest.js');
};
var option = process.argv[2];
var screen = function(option){
	var method = option.toLowerCase();
	var dontProceed = (method == 'submit') && doTestsFail();
	return !dontProceed;
};
var doTestsFail = function(){
	try{
		require('child_process').execSync('node runTest.js revisionTest.js');
	}catch(e){
		console.log('Your tests are not yet passing');
		return true;
	}
}
if(option) screen(option) && request(option);
else showUsage();
