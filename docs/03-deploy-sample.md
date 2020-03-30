Return to the home of this repository [here](../readme.md).

# Explanation of Sample Files
In this section, we will deploy a simple web application to Stitch using the Stitch Hosting feature. The web application is made up of three files; `index.html`, `index.css` and `app.js`. The sample files are provided in the [sampleFiles folder](./sampleFiles). 


## index.html
This file ([index.html](../sampleFiles/index.html)) is a simple HTML website which imports a number of style scripts, JavaScript and a Font. It also creates the basic structure for our website. 

There are two critical lines in the file which I will explain a little further:

```html    
<p id="results" style="font-size: 1em"></p>
```

The `<p id="results"` creates a paragraph element within the webpage, and assigns it the id `results`. With this id, the element can be updated later using the JavaScript. 

```html    
<script src="./app.js"></script>
```

This imports/executes the `app.js` JavaScript file onto the page. 

## app.js
This file ([app.js](../sampleFiles/app.js)) is the JavaScript file which is referred to in the `index.html` file discussed above. It contains the JavaScript based logic used to retrieve data from the GraphQL endpoint and display it on the webpage. 

**Review the file in detail**, it is heavily commented to explain the application logic. It follows this rough flow:
1. Declare some basic variables
2. Call a getMovies function
3. Anonymously Authenticates with Stitch
4. Queries the GraphQL endpoint using the app_id and query defined in 1 and the Access Token retrieved in 3
5. Calls addToList for each movie returned by the end point
6. Generates formatted HTML for each movie and updates the web page to show it

## index.css
This file ([index.css](../sampleFiles/index.css)) is a simple style sheet which defines some styles which make the webpage look a little more pleasing to the eye. It doesn't functionally affect the web application - just the way it looks.

1. Introduce the sample files
2. Explain the HTML structure
3. Explain the Javascript structure
4. Update the Stitch IDs

# Updating and Hosting the Web Application
Download all three files to your desktop;
- [index.html](../sampleFiles/index.html)
- [app.js](../sampleFiles/app.js)
- [index.css](../sampleFiles/index.css)



1. Deploy the files
2. Access via Web (may need to refresh, some kind of auth issue)
3. Note about flushing cache

---
**Congratulations** - you've deployed your first Web App to MongoDB Stitch, leveraging the GraphQL endpoint you created earlier. 

Return back to the [home page](../readme.md) to proceed to the next step.