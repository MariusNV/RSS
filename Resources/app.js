//Create Window.
var homePage = Titanium.UI.createWindow({
	backgroundColor: 'white'
	});

//Create ScrollView
var scrollView = Ti.UI.createScrollView({
  contentWidth: 'auto',
  contentHeight: 'auto',
  showVerticalScrollIndicator: true,
  showHorizontalScrollIndicator: false,
  height: '100%',
  width: '100%'
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




//Add the Views to the ScrollViews
scrollView.add(actor);
scrollView.add(actor1);

//Add the ScrollView to the Window
homePage.add(scrollView);

//Open Window
homePage.open();
