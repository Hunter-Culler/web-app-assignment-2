/*
    Ian Anderson
	University of Colorado Denver CSCI 4800 E01
	Web Application Developement
	Vue.js classwork 1

	March 17th, 2021

	Status = Functional
*/

const app = Vue.createApp({
    data() {
        return {
            keyword: '',
            result: null
        }
    },
    methods: {
        searchGoogleBooks() {
            fetch('https://www.googleapis.com/books/v1/volumes?q=' + this.keyword + "&startIndex=0&maxResults=20")
                .then(response => response.json())
                .then(json => this.result = json)

        }
    }
})