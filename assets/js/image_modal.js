$(function() {
    $('img').on('click', function(clickedImage) {
        if (clickedImage.currentTarget.parentElement.className != 'no-modal') {
            var modalSourceImg = clickedImage.currentTarget.src;
            $('#modalImageUrl').attr('src', modalSourceImg);
            $('#imageModal').modal('show'); 
        }
    });
});
