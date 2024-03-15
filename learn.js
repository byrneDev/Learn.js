// src/yourLibraryName.js

(function(global) {
    'use strict';

    // Your library code goes here
    var YourLibraryName = {
        showMessage: function(message, options) {
            var messageBox = document.createElement('div');
            messageBox.className = 'your-library-message-box';
            messageBox.innerText = message;

            var body = document.body;
            body.appendChild(messageBox);

            // Apply custom options, such as duration or style modifications
        }
    };

    if (!global.YourLibraryName) {
        global.YourLibraryName = YourLibraryName;
    }
}(this));
