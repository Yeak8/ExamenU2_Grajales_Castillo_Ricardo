$(document).ready(function() {
    $('#learn-more-btn').click(function() {
        $('#modal').fadeIn();
    });

    $('#close-modal').click(function() {
        $('#modal').fadeOut();
    });

    $('#modal').click(function(event) {
        if ($(event.target).is('#modal')) {
            $('#modal').fadeOut();
        }
    });
});
