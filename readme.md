# MongoDB GraphQL Lab
**Time to Complete:** 45 minutes

This is a tutorial on how to use [MongoDB Atlas](https://cloud.mongodb.com) and [MongoDB Stitch](https://www.mongodb.com/cloud/stitch) to create a flexible GraphQL API. 

Through this tutorial, you will see how GraphQL on MongoDB Stitch can be used to have a loose coupling between front-end applications and the back-end APIs they depend on - specifically, it will show how a front-end application is able to change and adapt with changing requirements without having depend on backend API changes. 

This tutorial is intended to be completed as part of a digital workshop run by [MongoDB](https://www.mongodb.com) however, it can also be completed on it's own using the resources described below.

# Technology
**Technical Complexity:** Beginner to Intermediate

This tutorial is set out in a way that most people with a hands-on technical background should be able to complete it without too much trouble, however familiarity with some of the following concepts would be beneficial:

* MongoDB
* HTML, CSS
* Javascript
* RESTful APIs

The tutorial will introduce the following concepts, however no prior knowledge is assumed:
* MongoDB Atlas
* MongoDB Stitch
* GraphQL

## Software Requirements
1. A modern web browser such as [Google Chrome](https://chrome.google.com) or [Mozilla Firefox](https://www.mozilla.org/en-GB/firefox/)
2. A text or code editor to alter a javascript application (Notepad (Windows) or TextEdit (OS X) will work fine, although we use [Visual Studio Code](https://code.visualstudio.com/download))
3. Optionally install [MongoDB Compass](https://www.mongodb.com/products/compass) - the GUI for MongoDB


# Overview
As the pace of change in technology has increased, so too has the pace of change in requirements for the systems we build and maintain. Being able to adapt and change systems in line with requirements is essential to delivering the best product, however with more complex architectures and dependencies this can be a challenge.

In this lab, you will deploy a MongoDB Cluster on MongoDB Atlas, before loading it with some sample data. You will then expose this data via a GraphQL API endpoint, and deploy a *very* simple web application to expose this data to users on the internet.

Once the application is live, the requirements will change - your Product Owner wants an additional field to be shown on the web application! Because you have exposed the data via a GraphQL endpoint, this will be easy to adapt and change, without having to make changes to you back-end API. 

This will demonstrate the flexibility of using GraphQL to expose data to other systems, while also showing you how quickly and easily you are able to deliver new services using MongoDB Atlas and MongoDB Stitch.

# Detailed Steps
You are going to be deploying a web application which lists information about a series of movies on a website. The data will be stored in a MongoDB Cluster hosted on Atlas, and will be accessed through a GraphQL endpointed deployed on MongoDB Stitch. The Web Application itself consists of a very simple set of HTMl/CSS/Javascript files which you will also host MongoDB Stitch. 

To complete the lab, step into each of the guides described below in the order set out. 

## 1. Getting Started with MongoDB Atlas
Follow the documentation linked below to **deploy a MongoDB cluster** on MongoDB Atlas and load it with sample data. In particular, you will load a collection called `sample_mflix` which contains data regarding several thousand movies. 

**Guide 1:** [Set up your MongoDB Atlas Cluster](docs/01-mongodb-atlas.md)

If you aren't familiar with how data is stored in MongoDB and/or how to query it, it's probably worth also taking the time to explore the sample dataset using MongoDB Compass. This is not required in order to complete the rest of the lab. 

**Guide 1-1:** [Explore the sample data with MongoDB Compass](docs/01-1-mongodb-compass.md) *(optional - additional 45 minutes)*

## 2. Create your MongoDB Stitch Application and Configure GraphQL
In this section you will create a MongoDB Stitch application, before generating a GraphQL schema in order to **expose data through the GraphQL endpoint**. At the end of this section you will be able to access the data stored in your MongoDB Cluster (created in Step 1) through a hosted GraphQL endpoint.

**Guide 2:** [Configure MongoDB Stitch for GraphQL](docs/02-mongodb-stitch-graphql.md)

## 3. Build and Host your simple Web Application on MongoDB Stitch
In this section, you will deploy/host a simple web application on MongoDB Stitch. The web application is made up of three files; `index.html`, `index.css` and `app.js`. Sample files are provided in the [sampleFiles folder](./sampleFiles) or as a Zip file on [Google Drive](https://drive.google.com/file/d/1CzKfHdR0rwH1PO8jHKppQhDMaLTHgJC-/view?usp=sharing). 

These files **create a simple website which shows a list of movies** (including some detailed movie information) which is retrieved through the GraphQL endpoint you deployed in step 2. 

**Guide 3:** [Deploy Sample Code](docs/03-deploy-sample.md)

## 4. The Requirements Changed!
Your Product Owner just walked over to your desk and mentioned that they were getting a lot of feedback from users that it would be really useful to have the movie rating on the site so they can determine which movies are suitable for their kids to watch. **They want you to add the `rated` field that's in the database to the front-end**. 

If you were using a RESTful API which wasn't already configured to return the `rated` field, then you might need to go see the back-end team to develop a new version of the API. But you're using GraphQL, will that make things easier?

*I wonder how many lines of code you'll need to change to get this working...*

If you're comfortable reading a javascript file, open the `app.js` file you downloaded in step 3 and see if you can work out what you need to do, don't forget to re-upload your updated work to Stitch (and flush the CDN) in order to test if you've got it right! *(hint: the explanations of each code block in step 3 will probably be useful)*

If you're not so confident and want to follow a guide for this step as well you'll find it here: 

**Guide 4:** [Change the front-end](docs/04-changing-requirements.md)

## List of Guides
All of the following links are also described above in each step, they are included here as a summary of the subpages in this repo:

1. [Set up your MongoDB Atlas Cluster](docs/01-mongodb-atlas.md)
2. [Configure MongoDB Stitch for GraphQL](docs/02-mongodb-stitch-graphql.md)
3. [Deploy Sample Code](docs/03-deploy-sample.md)
4. [Change the front-end](docs/04-changing-requirements.md)

# Ideas for Extra Credit
1. Integrate 3rd party authentication ([MongoDB Stitch Docs](https://docs.mongodb.com/stitch/authentication/providers/))
2. Create a filter to show movies by year (e.g. if we were returning lists of movies)
3. Integrate MongoDB Atlas Search and create a search screen
4. Add movie image/poster to each of the listed movies
5. Create a mechanism to page through results on the web page (currently it just returns the first 100 movies)
6. Allow people to edit each movie record and use GraphQL to write this data back to MongoDB
7. Incorporate comments from the comments collection by creating a relationship in the GraphQL schema

# Resources
The following links are to external pages which contain further reading and resources for some of the key topics covered in this lab:

## Additional Hands-on Exercises
* [Introduction to GraphQL on MongoDB Atlas and MongoDB Stitch](https://developer.mongodb.com/how-to/graphql-support-atlas-stitch)
* [Build a simple To-Do app using MongoDB Stitch and GraphQL](https://github.com/mongodb-appeng/taskit)
* [Build a simple image posting app using MongoDB Stitch and GraphQL](https://github.com/JoeKarlsson/mongodb-graphql-demo)
    * [Joe Karlsson explaining GraphQL and this app in particular](https://www.youtube.com/watch?v=XsD2ZKqMbgo)

## MongoDB Docs
* [MongoDB Atlas](https://docs.atlas.mongodb.com/)
* [MongoDB Stitch](https://docs.mongodb.com/stitch/)
* [GraphQL on MongoDB Stitch](https://docs.mongodb.com/stitch/graphql/)

## GraphQL Docs
* [GraphQL Spec](http://spec.graphql.org/)
* [Learn GraphQL](https://graphql.org/learn/)

