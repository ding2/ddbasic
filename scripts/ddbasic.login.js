(function($) {
    "use strict";

    $(document).ready(function() {
        // Focus on username form field when entering login form.
        $('#user-login-form #edit-name').focus();

        // Focus on username form field when clicking login tab.
        $('.topbar-link-user').bind('click', function(event) {
            $('#user-login-form #edit-name').focus();
        });
    });
}(jQuery));
