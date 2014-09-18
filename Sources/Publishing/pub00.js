var x = require('casper').selectXPath;
phantom.casperTest = true;

casper.userAgent('Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/30.0.1599.17 Safari/537.36');
/*	casper.options = {    
	verbose: true,
    logLevel: "debug"
	};*/
casper.test.begin('Publishing Demo Test', 2, function suite(test) {
casper.start('https://sites.accenture.com', function () 
{
		


});
casper.then(function () 
	{
			if(this.exists('#UserName'))
			{
					this.test.assertExists('#UserName');
					require('utils').dump(this.getElementInfo('#UserName'));
			}
			else
			{
			this.test.assertExists('#UserName');
		//	casper.test.renderResults(false, 1, getDateTime() );
			casper.exit();
			}
		this.sendKeys('#UserName', 'MOSS.TESTID001');
        console.log("Filling Name");
	});
casper.then(function () 
	{


	});
casper.then(function () 
	{

		this.test.assertExists('#Password');		
        this.sendKeys('#Password', 'lR12e6H7q540w93Fn');
        console.log("Filling Password");

	});
casper.thenClick(x('//*[@id="content"]/form/div/fieldset/div/div[3]/span[2]/input'), function () 
    {
        console.log("Clicking Button");
        console.log("Leaving Login Page");
    });

casper.then(function () 
	{


	});

casper.then(function () 
{
    console.log("Waiting to Enter Publishing");
    while (this.getTitle() != "Welcome to the home page for Accenture Portal's Publishing Service!") {
    
	}
    console.log("Logged into Publishing");
    this.capture('Pub01.png');
});
casper.then(function () 
{

});
});

casper.run(function() {
		casper.test.done();
		casper.test.renderResults(false, 1, getDateTime() );
    });
	
	
	
	
	
function getDateTime() {
    var now     = new Date(); 
    var year    = now.getFullYear();
    var month   = now.getMonth()+1; 
    var day     = now.getDate();
    var hour    = now.getHours();
    var minute  = now.getMinutes();
    var second  = now.getSeconds(); 
    if(month.toString().length == 1) {
        var month = '0'+month;
    }
    if(day.toString().length == 1) {
        var day = '0'+day;
    }   
    if(hour.toString().length == 1) {
        var hour = '0'+hour;
    }
    if(minute.toString().length == 1) {
        var minute = '0'+minute;
    }
    if(second.toString().length == 1) {
        var second = '0'+second;
    }   
    var dateTime = 'Publishing-' + year+month+day+hour+minute+second+'.xml';   
     return dateTime;
}	