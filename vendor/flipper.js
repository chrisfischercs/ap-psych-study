var currentPage = "#home";
var currentTab = "#homeTab";

function fadeToPage(dest) {

	console.log(dest)
	console.log("made it")
	console.log(currentPage)
	if(currentPage != dest) {
		$(currentTab).removeClass("active")
		$(dest+"Tab").addClass("active")
		currentTab = dest+"Tab";
		$(currentPage).fadeOut(400, function() {
			window.setTimeout(function(){$(dest).fadeIn(400)}, 200);
			console.log("this is currentPage "+currentPage)
			currentPage = dest;
		})
	}
}

function fadeInNewPage(dest) {
	$(dest).fadeIn(400)
}