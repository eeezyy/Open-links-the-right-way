var domain_pattern = new RegExp("(?:http|https|file)://(?:/)?(?:[^\\.]*\\.)?([^/]*)/.*");
var match = domain_pattern.exec(document.URL);
var domain = match[1];
console.log("URL: " + domain);
var pattern = new RegExp("(http(s)?|file)://(/)?([^.]*\\.)?" + domain + "/.*");
var require_pattern = new RegExp("(http(s)?|file)://(/)?([^.]*\\.)?[^/]*/.*");

$("a").each(function() {
	if(!pattern.test(this.href) && require_pattern.test(this.href)) {
		console.log("no match: " + this.href + ", target: " + this.target);
		this.target="_blank";
	}
});