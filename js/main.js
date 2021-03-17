/*
    Ian Anderson
	University of Colorado Denver CSCI 4800 E01
	Web Application Developement
	Vue.js classwork 1

	March 17th, 2021

	Status = Functional, pageination work in progress
*/

/*
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
            result: null
        }
    },
    methods: {
        searchGoogleBooks() {
            //use this line for pagenation
            //fetch('https://www.googleapis.com/books/v1/volumes?q=' + this.keyword + "&startIndex=0&maxResults=20")

            fetch('https://www.googleapis.com/books/v1/volumes?q=' + this.keyword + "&startIndex=" + this.currentIndex + "&maxResults=20")
                .then(response => response.json())
                .then(json => this.result = json)

        },

        nextPage() {
                this.currentIndex += 20;

                fetch('https://www.googleapis.com/books/v1/volumes?q=' + this.keyword + "&startIndex=" + this.currentIndex + "&maxResults=20")
                    .then(response => response.json())
                    .then(json => this.result = json)
        },

        prevPage() {
            if (this.currentIndex < 20) {
                this.currentIndex = 0;           
            } else {
                this.currentIndex -= 20;
            }

            fetch('https://www.googleapis.com/books/v1/volumes?q=' + this.keyword + "&startIndex=" + this.currentIndex + "&maxResults=20")
                    .then(response => response.json())
                    .then(json => this.result = json)
        }
    }
    //computed: {
    //    getCurrentIndex() {
    //        return this.currentIndex;
    //    }
    //}
});

//function nextPage() {
//    app.$set(app.$data, 'currentIndex', app.getCurrentIndex + 20);
//}