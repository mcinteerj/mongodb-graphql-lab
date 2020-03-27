const app_id = 'graphql-pov-phbbz';
const client = stitch.Stitch.initializeDefaultAppClient(app_id);
const gqlQuery = `
query {
    movies {
        _id
        title
        year
        plot
    }
}`;

getMovies();

async function getMovies() {
    try {
        const user = await client.auth.loginWithCredential(new stitch.AnonymousCredential());
        //console.info(user);

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

        //Construct HTML version of document
        var movies = resp.data.data.movies;

        for (var i = 0; i < movies.length; i++) {
            addToList(movies[i]);
        }


    } catch (error) {
        console.error(error);
    }
};

function addToList(movie) {
    var htmlStr = "";

    if ("title" in movie) {
        htmlStr += `<b><p style="color:green; font-size: 1.8em">${movie["title"]}</p></b>`;
        delete movie["title"];
    }

    /*if ("year" in movie) {
        htmlStr += `<b>Year: ${movie["year"]} </b><br />`
        delete movie["year"];
    }*/

    for (field in movie) {
        htmlStr += `<b>${field}:</b> ${movie[field]} <br />`
    }
    
    htmlStr += `<hr />`;
    document.getElementById("results").innerHTML += htmlStr;
};