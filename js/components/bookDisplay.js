/*
    Ian Anderson
	University of Colorado Denver CSCI 4800 E01
	Web Application Developement
	Vue.js classwork 1

	March 17th, 2021

	Status = Functional
*/

app.component('book-display', {
    props: {
        book: {
        type: String,
        required: true,
        default: null
        }
    },

    template: 
        /*html*/
        `<ul class="col-sm-12 col-md-6 col-xl-4">
        <a class="list-group-item list-group-item-action-active" :href="this.bookObj.selfLink"> {{this.bookObj.volumeInfo.title}} </a>
        <li class="list-group-item">   <img v-bind:src="this.bookObj.volumeInfo.imageLinks.smallThumbnail" class="imageproduit" />  </li>
        <li class="list-group-item"> {{this.bookObj.volumeInfo.authors}} </li>
        <li class="list-group-item"> {{this.bookObj.volumeInfo.publisher}}, {{this.bookObj.volumeInfo.publishedDate}} </li>
        <li class="list-group-item"> {{this.bookObj.volumeInfo.printType}} </li>
        <li class="list-group-item"> {{this.bookObj.volumeInfo.description}} </li>
        
        </ul>`,

    computed: {
        bookObj() {
            if(this.book != null)
                return JSON.parse(this.book)
            else
                return null;
        }
    }


})