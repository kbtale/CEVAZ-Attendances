// opens a communication port
chrome.runtime.onConnect.addListener(function(port) {

    // listen for every message passing throw it
    port.onMessage.addListener(function(o) {

        // if the message comes from the popup
        if (o.from && o.from === 'popup' && o.start && o.start === 'Y') {

            // inserts a script into your tab content
            chrome.scripting.executeScript(null, {

                // the script will click the button into the tab content
                //code: "document.getElementById('pageBtn').click();"
            });
        }
    });
});
