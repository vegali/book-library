var app = app || {};

app.LibraryView = Backbone.View.extend({
    el : '#books',

    events : {
        'click #add' : 'addBook'
    },

    initialize : function(initialBooks){
        this.collection = new app.Library(initialBooks);
        this.collection.fetch({reset:true});
        this.render();

        this.listenTo(this.collection,'add',this.renderBook);
        this.listenTo(this.collection,'reset',this.render)
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
        var formData = {};
        $('#addBook div').children('input').each(function(index,item){
            if($(item).val() !== '') {
                if (item.id === 'keywords') {
                    formData[item.id] = [];
                    _.each($(item).val().split(' '), function (keyword) {
                        formData[item.id].push({'keyword': keyword});
                    })
                } else if (item.id === 'releaseDate') {
                    formData[item.id] = $('#releaseDate').datepicker('getDate').getTime()
                } else if(item.id === 'coverImage'){
                    var coverImgName = $(item).val().split('\\');
                    formData[item.id] = 'img/' + coverImgName[coverImgName.length - 1];
                }else {
                    formData[item.id] = $(item).val();
                }
            }
            $(item).val('');
        });
        //this.collection.add(new app.Book(formData))
        this.collection.create(formData)
    }
});