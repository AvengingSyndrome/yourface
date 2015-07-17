var openingParagraph = $("#mw-content-text").children().filter("p")[0];

if (openingParagraph.childNodes[0].nodeType != Node.TEXT_NODE)
	$(openingParagraph).prepend("Your ");
else 
	openingParagraph.childNodes[0].nodeValue = "Your ";
$(openingParagraph.childNodes[1]).text("Face");