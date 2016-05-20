var app = app || {};

app.LibraryView = Backbone.View.extend({
    el : '#books',

    events : {
        'click #add' : 'addBook'
    },

    initialize : function(initialBooks){
        this.collection = new app.Library(initialBooks);
        this.render();

        this.listenTo(this.collection,'add',this.renderBook)
    },

    render : function(){
        this.collection.each(function(item){
            this.renderBook(item);
        },this)
    },

    renderBook : function(item){
        var bookView = new app.BookView({
            model : item
        });
        this.$el.append(bookView.render().el);
    },

    addBook : function(event){
        event.preventDefault();
        var formData = new Object();
        $('#addBook div').children('input').each(function(index,item){
            if($(item).val() !== ''){
                formData[item.id] = $(item).val();
            }
        });
        //this.collection.add(new app.Book(formData))
        this.collection.create(formData)
    }
});