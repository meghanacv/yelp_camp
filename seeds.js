var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment   = require("./models/comment");
 
var data =[
	{
	 name: "Cloud's Rest", 
	 image: "https://images.unsplash.com/photo-1530488562579-7c1dd2e6667b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
	 description: "Sirloin ground round beef ribs, t-bone hamburger biltong burgdoggen ball tip jerky tenderloin sausage pastrami landjaeger fatback drumstick. Corned beef t-bone landjaeger tail alcatra. Turducken beef ribs pork chop pig, tongue spare ribs bacon shank brisket meatball buffalo pancetta chicken pork. Swine pork loin tri-tip capicola ham ribeye beef chislic cow shank flank venison pork chop."
	},
	{
	 name: "Wayanad", 
	 image: "https://images.unsplash.com/photo-1528433556524-74e7e3bfa599?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
	 description: "Sirloin ground round beef ribs, t-bone hamburger biltong burgdoggen ball tip jerky tenderloin sausage pastrami landjaeger fatback drumstick. Corned beef t-bone landjaeger tail alcatra. Turducken beef ribs pork chop pig, tongue spare ribs bacon shank brisket meatball buffalo pancetta chicken pork. Swine pork loin tri-tip capicola ham ribeye beef chislic cow shank flank venison pork chop."
	},
	{
	 name: "Death Valley", 
	 image: "https://images.unsplash.com/photo-1494112142672-801c71472ba5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
	 description: "Sirloin ground round beef ribs, t-bone hamburger biltong burgdoggen ball tip jerky tenderloin sausage pastrami landjaeger fatback drumstick. Corned beef t-bone landjaeger tail alcatra. Turducken beef ribs pork chop pig, tongue spare ribs bacon shank brisket meatball buffalo pancetta chicken pork. Swine pork loin tri-tip capicola ham ribeye beef chislic cow shank flank venison pork chop."
	}
];

function seedDB(){
	Campground.remove({}, function(err){
		if(err){
			console.log(err);
		}
		console.log("removed campgrounds");
		//add a new campground
		data.forEach(function(seed){
		Campground.create(seed, function(err, campground){
			if(err){
				console.log(err);
			}else {
				console.log("addded a campground");
				//create a comment
				Comment.create(
					{
                    	text: "this is great",
						author: "cv"
					}, function(err, comment){
						if(err){
							console.log(err);
						} else {
							campground.comments.push(comment);
						    campground.save();
							console.log("created");
						}
				});
			}
		});
	});
	});
}
 
module.exports = seedDB;