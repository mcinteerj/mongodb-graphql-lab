Return to the home of this repository [here](../readme.md).

# MongoDB Atlas Setup

* Create a free account on MongoDB Atlas at [cloud.mongodb.com](https://cloud.mongodb.com). Click on “Get Started Free”  if you do not have an account or “Sign In” if you already have a login. Then create your account/sign in as required.

> <img src="./images/01-mongodb-atlas/atlas-1.png" height="300">

* Under the 'Starter Clusters' box (left-hand side), click 'Create a cluster'

> <img src="./images/01-mongodb-atlas/atlas-2.png" height="400">

* Select AWS as the Cloud Provider and then Ireland as the region

> <img src="./images/01-mongodb-atlas/atlas-3.png" height="350">

* Confirm the the 'M0 Sandbox' Cluster Tier is selected, then click create cluster

> <img src="./images/01-mongodb-atlas/atlas-4.png" height="350">

* While this spins up, lets click on the “Database Access” submenu, under “Security” on the left menu, then 'Add New User'.

> <img src="./images/01-mongodb-atlas/atlas-5.png" height="400">

* Enter a user name. For this lab, let’s enter `mdbadmin` and enter a secure password.  Record your user name and password in a safe location for reference later. Under “User Privileges”, select “Atlas admin” and click on the “Add User button to complete this section.

> <img src="./images/01-mongodb-atlas/atlas-6.png" height="400">

* Lets click on the “Network Access” submenu, under “Security” on the left menu. Click on “Add IP Address”.

> <img src="./images/01-mongodb-atlas/atlas-7.png" height="300">

* Select `Add Current IP Address` for the purpose of this demo and click on “Confirm”.  

*Note*:  When running a cluster in production, you will want to narrow the scope of where your database can be accessed and specify a specific IP address/CIDR block and/or using VPC peered connection. For this demo we are creating a temporary whitelist with only the IP address of the internet connection you are working from.

> <img src="./images/01-mongodb-atlas/atlas-8.png" height="300">

* Go to “Clusters” submenu, under “Atlas” on the left menu, then click "..." for your cluster, select "Load Sample Dataset".

> <img src="./images/01-mongodb-atlas/atlas-9.png" height="400">

---
**Congratulations** - you've set-up your first Atlas Cluster and loaded it with sample data! 

Return back to the [home page](../readme.md) to proceed to the next step (you can proceed while the sample dataset is still loading).