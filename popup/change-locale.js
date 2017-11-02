	/*
		Given an URL and a locale, returns URL with new locale.
	*/
	function transformURL(currentURL, locale) {
		if (locale === 'Reset') {
			return currentURL.replace(/(?:\?locale=([a-zA-Z]{2}))*#/g, '#');
		} else {
			return currentURL.replace(/(?:\?locale=([a-zA-Z]{2}))*#/g, '?locale=' + locale + '#');
		}
	}
	
	/*
		Listen popup clicks.
		On click, get the active tab's current URL, transforms it and navigate to the new URL.
	*/
	document.addEventListener("click", (e) => {
		let locale = e.target.textContent;

		chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
			const tabId = tabs[0].id;
			chrome.tabs.get(tabId, (tab) => {
				const currentURL = tab.url;
				let newURL = transformURL(currentURL, locale);
				const updateProperties = {
					url: newURL
				};
				return chrome.tabs.update(tabId, updateProperties);
			});
		});
		
	});
