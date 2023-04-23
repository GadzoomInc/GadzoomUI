### A Simple UI for testing SDS API functionality and displaying results from server queries

Before this UI can be used, 2 things must be done:

1. Run **npm install**. The script.js file uses the Axios library to send GET requests to the server, which needs to be installed.

2. Enable **CORS**. If using Chrome, this can be done using the [Allow CORS extension](https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en). If CORS is not enabled in the browser running the UI, it may block communication with the server.

At the top of the script.js file there is a `SERVER_ADDR` variable that can be changed to query the server when it is being hosted from a new location other than `localhost:5000` (such as puttin it in production).
