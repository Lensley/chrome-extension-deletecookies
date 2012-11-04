// console.log(window.location);

window.addEventListener("message", function(event) {
  // We only accept messages from ourselves
  if (event.source != window)
    return;

  if(event.data.command && (event.data.command == "DELETE_COOKIES")) {
    if(event.data.domain) {
      chrome.extension.sendMessage({command: event.data.command, domain: event.data.domain}, function(response) {
        // Haven't quite figured out how to resturn response from callback of callback
        // console.log(response.status);
        // return(response.status);
      });
    }
  }
  
}, false);
