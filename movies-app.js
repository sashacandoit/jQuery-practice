//ADD NEW MOVIE TO LIST
$('#movies-app-form').on('submit', function () {
    let movieTitle = $('<span class="movie-title">Movie Title</span>').text($('#movie-title-input').val());
    let rating = $('<span class="rating"></span>').text($('#movie-rating-input').val());
    let listItem = $('<div class="movie-list-item"></div>');
    let removeBtn = $('<button class="remove-btn"></button>');

    if ($('input').val() !== '') {
        $('#movies-list').append(listItem);
        listItem.append(rating, movieTitle, removeBtn);

        $('input').val('');
    }
})


//REMOVE LIST ITEM
$('#movies-list').on('click', 'button', function () {
    $(this).parent().remove();
})



//PREVENT DOM FROM RELOADING ON FORM SUBMIT
let moviesAppForm = document.getElementById('movies-app-form');
moviesAppForm.addEventListener('submit', (e) => {
    e.preventDefault();
});