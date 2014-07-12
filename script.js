// Get anchor tags within the content of the article
var links = document.getElementById("bodyContent").getElementsByTagName("a");

for (var i = links.length - 1; i >= 0; i--) {
	// Create a span to replace the anchor tag
	var span = document.createElement("SPAN");
	// set the span html to what the anchor tag contained
	span.innerHTML = links[i].innerHTML;
	// replace it!
	links[i].parentNode.replaceChild(span, links[i]);
}