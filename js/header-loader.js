$(document).ready(function() {
    $.get('includes/header.html', function(data) {
        $('body').prepend(data);
    }).fail(function(xhr, status, error) {
        console.error("Failed to load header:", error);
    });
}); 