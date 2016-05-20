var app = app || {};

$(function(){
    var books = [
        {title : '1Javascript : the good part',author : 'douglas crockford',releaseDate:'2008',keywords:'javascript programming'},
        {title : '2Javascript : the good part',author : 'douglas crockford',releaseDate:'2008',keywords:'javascript programming'},
        {title : '3Javascript : the good part',author : 'douglas crockford',releaseDate:'2008',keywords:'javascript programming'},
        {title : '4Javascript : the good part',author : 'douglas crockford',releaseDate:'2008',keywords:'javascript programming'},
        {title : '5Javascript : the good part',author : 'douglas crockford',releaseDate:'2008',keywords:'javascript programming'}
    ];
    new app.LibraryView(books)
});