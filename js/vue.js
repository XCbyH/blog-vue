var id = 0;      
var vm = new Vue({
                
                el : "#app",
        // 计算函数 动态变化的数据            
                
                methods : {     //   写函数
                    
                    addBook : function(){
                        
                        this.book.id = this.books.length + 1;
                        this.books.push(this.book);
                        this.book = {};
                        
                    },
                    
                    delBook : function(book){
                        var blength = this.books.length;
                        this.books.splice(book.id-1,1 );
                        
                        for(var i = 0;i < blength;i++){
                            if(book.id < this.books[i].id){
                                this.books[i].id -= 1;                                
                            }                            
                        }    
                    },
                    
      // 修改按钮                
                    updateBook : function(book){
                        
                        $("#add-book").css("display","none");
                        $("#update-book").css("display","block");
                        id = book.id;
                        
                    },
        
        // 修改完成后的 确认按钮点击事件
                    updatedBook : function(){
                        
                        this.book.id = id;
                        this.books.splice(id-1,1,this.book);
                        $("#add-book").css("display","block");
                        $("#update-book").css("display","none");
                        this.book = {};
                        
                    }
                    
                },
                
                // 计算属性（过滤） 查询功能
                
                computed : {
                    
                    filterBooks : function(){
                        var books = this.books;
                        var search = this.search;
                        
                        /*if(!search){         // 没有输入查询内容        
                            return books;
                }                        
                        var arr = [];                  
                        for(var i = 0; i < books.length;i++){
                            var index =  books[i].name.indexOf( search );
                            if(index > -1){
                                arr.push(books[i]);
                            }
                        }                    
                        return arr;   
                        */
                    // vue 中的过滤器
                    
                        return books.filter(function(book){
                            return book.name.toLowerCase().indexOf(search.toLocaleLowerCase()) != -1                        
                        });        
                    }
                    
                },
                                
                data : {
                    book : [{                        
                        id : 0,
                        author : '',
                        name : '',
                        price : ''                        
                    }],
                    
                    books : [{                        
                        id : 1,
                        author : '曹雪芹',
                        name : '红楼梦',
                        price : 36.00                        
                    },{                        
                        id : 2,
                        author : '曹雪芹',
                        name : '三国演义',
                        price : 37.00        
                    },{                        
                        id : 3,
                        author : '曹雪芹',
                        name : 'Good boy',
                        price : 85.00                
                    },{                    
                        id : 4,
                        author : '曹雪芹',
                        name : '红楼梦',
                        price : 39.00
                   
                    }],      
                    
                    search : ""      // 查询功能，""中不能加空格，否则默认查询空格
                    
                }
                
                
            })