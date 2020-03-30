// Define the Stitch client (YOU MUST UPDATE YOUR app_id)
const app_id = '<YOUR-APP-ID-HERE>';
const client = stitch.Stitch.initializeDefaultAppClient(app_id);

/* 
    Define the GraphQL Query used to retrieve data (This is used by
     the getMovies() function below)
    
    If you wanted to change the fields/data retrieved from the API,
     you could do so by altering this query
*/
const gqlQuery = `
query {
    movies {
        _id
        title
        year
        plot
    }
}`;

// Call the getMovies() function to retrieve the movies and update the web page
getMovies();

 
// Define the getMovies function
async function getMovies() {
    try {
        // Authenticate with MongoDB Stitch using Anonymous Credentials
        const user = await client.auth.loginWithCredential(new stitch.AnonymousCredential());

        /*
            Retrieve data from the GraphQL endpoint, this uses:
                - The app_id defined at the beginning of the script
                - The accessToken retrieved from the Anonymous Authentication
                - The query defined at the begnning of the script
            The result from the GraphQL query will be stored in the 'resp' variable
        */
        const resp = await axios({
            url: 'https://stitch.mongodb.com/api/client/v2.0/app/' + app_id + '/graphql',
            method: 'post',
            headers: {
                'Authorization': `Bearer ${user.auth.activeUserAuthInfo.accessToken}`
            },
            data: {
                query: gqlQuery,
            }
        });

        /*
            The query returns metadata regarding the query as well as the data itself
            As we just want to work with the data, we are pulling the movies data into its own variable (movies)
            This variable is an array of movie objects
        */
        var movies = resp.data.data.movies;

        /*
            For each movie object in the movies array, call the addToList() function
            This adds each to the results list on screen
        */
        for (var i = 0; i < movies.length; i++) {
            addToList(movies[i]);
        }

    } catch (error) {
        console.error(error);
    }
};

/*
    The addToList function takes a movie object parameter and generates an HTML string to add to the webpage
    It creates some special formating around the 'title' field in the movie object
    All remaining fields are added to the HTML page as key value pairs
*/
function addToList(movie) {
    // Initialise the htmlStr variable
    var htmlStr = "";

    // If there is a title field in this movie, add it to htmlStr with special formatting
    if ("title" in movie) {
        htmlStr += `<b><p style="color:green; font-size: 1.8em">${movie["title"]}</p></b>`;
        delete movie["title"];
    }

    // For all other fields in the object, add them to htmlStr with the field name in bold, and the field value in plain text
    for (field in movie) {
        htmlStr += `<b>${field}:</b> ${movie[field]} <br />`
    }
    
    // Add a horizontal rule at the end of the htmlStr for this movie
    htmlStr += `<hr />`;

    // Retrieve the "results" element from the HTML document and append the htmlStr to that element
    document.getElementById("results").innerHTML += htmlStr;
};