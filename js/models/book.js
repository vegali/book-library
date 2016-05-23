var app = app || {};

app.Book = Backbone.Model.extend({
    defaults:{
        coverImage:'img/placeholder.jpg',
        title : 'no title',
        author : 'unknown',
        keywords : 'none'
    },
    parse : function(response){
        response.id = response._id;
        return response;
    }
});