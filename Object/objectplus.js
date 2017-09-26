var pageViewCounts = {
	homePage:399,
	aboutMePage:450,
	termsOfService:25
};

Object.keys(pageViewCounts).map(function(keys){
	console.log(
		'the '+ keys +' page has ' + pageViewCounts[keys] + ' views.')
})
