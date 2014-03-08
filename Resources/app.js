//Create tabGroup in order to have a header
var tabGroup = Ti.UI.createTabGroup();

var myOnlyWin = Ti.UI.createWindow({
    backgroundColor: '#FFF',
    title:'Stiri',
    height: '44',
    tabBarHidden:true
});
 
//Hide the unused tabs 
var tab = Ti.UI.createTab({
    title:"Doesn't matter",
    window: myOnlyWin
});


var win = Ti.UI.createWindow();

var view = Ti.UI.createView({
	top: '64'
	
});


var table = Ti.UI.createTableView();

//Table -> View. Tab and View -> tabGroup.
view.add(table);
tabGroup.addTab(tab);

tabGroup.add(view);

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

//Show tabGroup
tabGroup.open();