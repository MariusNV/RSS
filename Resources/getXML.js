function xhr_xml(_args){
	var self = Ti.UI.createWindow({
		backgroundColor:'#F8F8F8',
		layout:'vertical'
	});
	var scrollView = Ti.UI.createScrollView({
		backgroundColor:'white',
		layout:'vertical'
	});
	self.add(scrollView);
	var xhr = Titanium.Network.createHTTPClient();
	xhr.onload = function(){
		if (this.responseXML == null) 
          var doc = Ti.XML.parseString(this.responseText).documentElement;
         else
		  var doc = this.responseXML.documentElement;
		var elements = doc.getElementsByTagName("time");
		for (var c=0;c<elements.length;c++){
			var course = elements.item(c).getChildNodes().item(0);
			Ti.API.info("course = " + course.text);
			var courseName = Ti.UI.createLabel({
				textAlign:'center',
				height:'auto',
				width:'auto',
				top:20,
				text:course.text
			});
			scrollView.add(courseName);
		}
		var textarea = Ti.UI.createTextArea({borderRadius:5,borderWidth:2,borderColor:'#999',backgroundColor:'#111',color:'yellow',bottom:10,left:10,right:10,height:300,font:{fontFamily:'courier',fontSize:10}});
		textarea.value = this.responseText;
	};
	xhr.open('GET','http://skema.eal.dk/services/elevSkemaXML.ashx?idx=ulri2274&uge=12');//+_args.weekNo);
	xhr.send();
	return self;
};
module.exports = xhr_xml;