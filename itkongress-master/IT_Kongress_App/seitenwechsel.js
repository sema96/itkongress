
var currentPage = 'login';

function showPage(page) {
    $('#'+currentPage).hide();
    $('#'+page).show();
    currentPage = page ;
}

$(document).ready(function() {
    $('div[role=page]').hide();
    showPage(currentPage)
});


