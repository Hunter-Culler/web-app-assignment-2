# web-app-assignment-2

	Ian Anderson and Hunter Culler
	University of Colorado Denver CSCI 4800 E01
	Web Application Developement
	Group Assignment 2

	March 17th, 2021

	Status = Functional
	
------------------------------------------------------------------------------------------
Part 1 @Ian Anderson:

I started by using the search Google Books app developed in the previous classworks
as a template.

---Additional Results Display---

I added the smallThumbnail, Print type, and Book Description from the API results
to the displayBook template.

I added logic to the displayBook template that removes elements from the list if
the reuslt is 'undefined' so they will not be displyed on the page, reducing clutter.
This is handled using a series of 'v-if' statements.

The smallThumbnail element required additional logic as initailly it was causing a bug
when a result had an undefined thumbnail.

---Pageination---

added 'Next Page' and 'Previous Page' buttons to the page above the mainDiv.
both buttons are initially disabled and unclickable with the class 'btn-warning'

I made some modifications to the vue app in order to implement pageination:

added two new variables: currentIndex (int), pageSize (int)
added two new methods: nextPage(), prevPage()

pageSize can be used to dynamically change how many results will be displayed on the page.
This could be used later to allow the user to set how many results they want to view at a time
for example.

added additional logic to searchGoogleBooks() to dynamically alter the 'disabled'
property and the class of the 'Next Page' and 'Previous Page' buttons when appropriate
based on the how many results are returned from the API call and the current value of
'currentIndex'.

I noticed that results counter at the top of mainDiv would inscrease or decrease based
on what page is being viewed.  This is because of the way my functionality is set up and
I couldn't find a clean way to change this.  I decided to change the text displayed from
"found {{totalItems}} results" to "{{totalItems}} results remaining" in order to properly
reflect this attribute to the user.

the nextPage() and prevPage() methods are used to increment and decrement the currentIndex
variable as neccesary while making sure that currentIndex is never lesser than 0 and never
greater than 'totalItems'.  After currentIndex is updated, searchGoogleBooks() is called
again to display the new set of results.

---Page Styling---

Added increased dynamicity of all div elements to properly react to different screen sizes.
Added page title and footer.
Changed some of the placeholder text from what we had in the classworks.

*future plans* I would like to add some more color depth for extra beautification and add a 
second pair of 'Next Page' and 'Previous Page' buttons at the bottom of the screen to improve the
quality of the UI.

------------------------------------------------------------------------------------------
Part 2 @Hunter Culler:

signin, signup, and homepage are all modeled after facebooks style template.

Three validation checks added to the signup page to verify user info.

Form layout changes dynamically

