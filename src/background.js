// Listen for the stuff

// http://developer.chrome.com/extensions/messaging.html#simple
chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
    /*
    console.log(sender.tab ?
      "from a content script:" + sender.tab.url :
      "from the extension");
    */

    if (request.command == "DELETE_COOKIES" && request.domain) {

      var cookies_to_delete = [];
      filter = { "domain": request.domain }
      // console.log(filter);
      chrome.cookies.getAll(filter, function(cookies) {
        for(i=0; i<cookies.length; i++) {
          // console.log("deleting...");
          // console.log(cookies[i]);
          var url = "http" + (cookies[i].secure ? "s" : "") + "://" + cookies[i].domain + cookies[i].path;
          chrome.cookies.remove({"url": url, "name": cookies[i].name});
        }

        // console.log('deleted cookies');
      });

      sendResponse({status: "OK"});
    }
});
