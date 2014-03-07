//Create Window.
var homePage = Titanium.UI.createWindow({
	backgroundColor: 'white'
	});

//Create Image
var image = Ti.UI.createImageView({
	image: '123.png',
	width: 50,
	height: 50
});

//Create Label
var label1 = Ti.UI.createLabel({
	color: '#999',
	text: 'This is a text',
	font:{
		fontSize: 20,
		fontfamily:'Arial'
	},
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	width: Ti.UI.SIZE,
	height: Ti.UI.SIZE
});


//Create View
var actor = Ti.UI.createView({
	backgroundColor: 'red',
	width: 500,
	height: 500,
	top: 20
});
var actor1 = Ti.UI.createView({
	backgroundColor: 'blue',
	width: 500,
	height: 500,
	top: 540
});

//Create View in View
var ViewInActor = Ti.UI.createView({
	backgroundColor: 'black',
	width: 100,
	height: 100,
	top: 40
});

//Add the View in View
actor.add(ViewInActor);

//Add the View ,the Label and the Image to the Window
homePage.add(actor);
homePage.add(actor1);
homePage.add(label1);
homePage.add(image);

//Open Window
homePage.open();
