//Create Window.
var homePage = Titanium.UI.createWindow({
	backgroundColor: 'white'
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

//Add the View to the Window
homePage.add(actor);
homePage.add(actor1);

//Open Window
homePage.open();
