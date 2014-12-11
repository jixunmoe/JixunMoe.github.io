(function (document, boot) {
	if (document.body) {
		boot ();
	} else {
		document.addEventListener('DOMContentLoaded', boot, false);
	}
})(document, function () {
	[].map.call(document.getElementsByTagName('a'), function (a) {
		if (!a.hasAttribute('target')) {
			a.setAttribute('target', '_blank');
		}
	});
});