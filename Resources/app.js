var win = Ti.UI.createWindow();

var view = Ti.UI.createView();

var table = Ti.UI.createTableView();

var homeTitle = Ti.UI.createLabel({
	color : '#999',
	text : 'Stiri',
	font : {
		fontSize : 20,
		fontfamily : 'Arial'
	}
});

view.add(table);
win.add(homeTitle);
win.add(view);

var url = "http://realitatea.feedsportal.com/c/32533/fe.ed/rss.realitatea.net/stiri.xml", data = [];

//create the xhr
var xhr = Ti.Network.createHTTPClient({
	onload : function(e) {

		//get the returned xml
		var doc = this.responseXML.documentElement;
		//get an array of all items from feed
		var items = doc.getElementsByTagName("item");

		//traverse through items
		for (var c = 0; c < items.length; c++) {
			//get current item
			var item = items.item(c);

			//get title of the item
			var title = item.getElementsByTagName("title").item(0).text;

			//push a new row to the data array
			data.push({
				title : title
			});
		}

		table.data = data;
	},
	onerror : function(e) {
		alert("error");
	},
	timeout : 5000
});

xhr.open('GET', url);
xhr.send();

win.open(); 