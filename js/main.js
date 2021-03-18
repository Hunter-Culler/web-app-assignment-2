/*
    Ian Anderson and Hunter Culler
    University of Colorado Denver CSCI 4800 E01
    Web Application Developement
    Group Assignment 2

    March 17th, 2021

    Status = Functional
*/


/*
original code from classwork

const app = Vue.createApp({
    data() {
        return {
            keyword: '',
            currentIndex: 0,
            result: null
        }
    },
*/



var app = Vue.createApp({
    data() {
        return {
            keyword: '',
            currentIndex: 0,
            result: null,
            pageSize: 20,
        }
    },
    methods: {
        searchGoogleBooks() {
            //original code from classwork
            //fetch('https://www.googleapis.com/books/v1/volumes?q=' + this.keyword + "&startIndex=0&maxResults=20")

            fetch('https://www.googleapis.com/books/v1/volumes?q=' + this.keyword + "&startIndex=" + this.currentIndex + "&maxResults=" + this.pageSize)
                .then(response => response.json())
                .then(json => this.result = json)
                .then(json => (document.getElementById("next").className = (this.result.totalItems > this.pageSize) ? "btn btn-primary active" : "btn btn-warning disabled"))
                .then(json => (document.getElementById("next").disabled = (this.result.totalItems <= this.pageSize)))
                .then(json => (document.getElementById("prev").className = (this.currentIndex >= this.pageSize) ? "btn btn-primary active" : "btn btn-warning disabled"))
                .then(json => (document.getElementById("prev").disabled = (this.currentIndex < this.pageSize)))

        },

        nextPage() {
            this.currentIndex += 20;
            this.searchGoogleBooks();
        },

        prevPage() {
            if (this.currentIndex < 20) {
                this.currentIndex = 0;
            } else {
                this.currentIndex -= 20;
            }
            this.searchGoogleBooks();
        }
    }
});

//function nextPage() {
//    app.$set(app.$data, 'currentIndex', app.getCurrentIndex + 20);
//}