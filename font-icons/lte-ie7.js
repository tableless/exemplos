/* Use this script if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-tablet' : '&#x21;',
			'icon-user' : '&#x22;',
			'icon-diamond' : '&#x23;',
			'icon-trophy' : '&#x24;',
			'icon-cube' : '&#x25;',
			'icon-puzzle' : '&#x26;',
			'icon-smiley' : '&#x27;',
			'icon-happy' : '&#x28;',
			'icon-download' : '&#x29;',
			'icon-cloud' : '&#x2a;',
			'icon-thumbs-up' : '&#x2b;',
			'icon-thumbs-down' : '&#x2c;',
			'icon-menu' : '&#x2d;',
			'icon-cars' : '&#x2e;',
			'icon-briefcase' : '&#x2f;',
			'icon-bus' : '&#x30;',
			'icon-bars' : '&#x31;',
			'icon-pie' : '&#x32;',
			'icon-comments' : '&#x33;',
			'icon-comments-2' : '&#x34;',
			'icon-user-2' : '&#x35;',
			'icon-gift' : '&#x37;',
			'icon-busy' : '&#x38;',
			'icon-drawer' : '&#x36;',
			'icon-box-remove' : '&#x39;',
			'icon-box-add' : '&#x3a;',
			'icon-phone' : '&#x3b;',
			'icon-arrow-down' : '&#x3c;',
			'icon-arrow-right' : '&#x3d;',
			'icon-arrow-up' : '&#x3e;',
			'icon-star' : '&#x3f;',
			'icon-star-2' : '&#x40;',
			'icon-star-3' : '&#x41;',
			'icon-heart' : '&#x42;',
			'icon-heart-2' : '&#x43;',
			'icon-cloud-2' : '&#x44;',
			'icon-remove' : '&#x45;',
			'icon-remove-2' : '&#x46;',
			'icon-briefcase-2' : '&#x47;',
			'icon-grid-view' : '&#x48;',
			'icon-github' : '&#x49;',
			'icon-github-2' : '&#x4a;',
			'icon-linkedin' : '&#x4b;',
			'icon-lastfm' : '&#x4c;',
			'icon-blogger' : '&#x4d;',
			'icon-tumblr' : '&#x4e;',
			'icon-dribbble' : '&#x4f;',
			'icon-flickr' : '&#x50;',
			'icon-gplus' : '&#x51;',
			'icon-facebook' : '&#x52;',
			'icon-IcoMoon' : '&#x53;',
			'icon-safari' : '&#x54;',
			'icon-opera' : '&#x55;',
			'icon-IE' : '&#x56;',
			'icon-firefox' : '&#x57;',
			'icon-chrome' : '&#x58;',
			'icon-css3' : '&#x59;',
			'icon-html5' : '&#x5a;',
			'icon-html5-2' : '&#x5b;',
			'icon-file-css' : '&#x5c;',
			'icon-file-xml' : '&#x5d;',
			'icon-file-zip' : '&#x5e;',
			'icon-file-powerpoint' : '&#x5f;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; i < els.length; i += 1) {
		el = els[i];
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c) {
			addIcon(el, icons[c[0]]);
		}
	}
};