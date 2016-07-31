//document.body.style.border = "5px solid red";


browser.browserAction.onClicked.addListener((tab) => {
	var action_url = "javascript:(function(){if(window.myBookmarklet!==undefined){myBookmarklet();}else{document.body.appendChild(document.createElement('script')).src='https://mvp.microsoft.com/Content/Scripts/bookmarklet.js?';}})();";
	browser.tabs.update(tab.id, {url: action_url});
});
