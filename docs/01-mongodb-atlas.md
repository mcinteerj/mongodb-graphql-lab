Return to the home of this repository [here](../readme.md).

# MongoDB Setup

* Create a free account on MongoDB Atlas at [cloud.mongodb.com](https://cloud.mongodb.com). Click on “Get Started Free”  if you do not have an account or “Sign In” if you already have a login. Then create your account/sign in as required.

> ![](images/atlas-j-1.png)

* Under the 'Starter Clusters' box (left-hand side), click 'Create a cluster'

> <img src="images/atlas-j-2.png" height="500">

* Select GCP as the Cloud Provider and then Belgium as the region

>![](images/atlas-j-3.png)

* Confirm the the 'M0 Sandbox' Cluster Tier is selected, then click create cluster

>![](images/atlas-j-4.png)

* While this spins up, lets click on the “Database Access” submenu, under “Security” on the left menu, then 'Add New User'.

> <img src="images/atlas-j-5.png" height="400">

* Enter a user name. For our demo, let’s enter `mdbadmin` and enter a secure password.  Record your user name and password in a safe location for reference later. Under “User Privileges”, select “Atlas admin” and click on the “Add User button to complete this section.

>![](images/atlas-j-6.png)

* Lets click on the “Network Access” submenu, under “Security” on the left menu. Click on “Add IP Address”.

>![](images/atlas-j-7.png)

* Select “Allow Access from Anywhere” for the purpose of this demo, select "Save as temporary whitelist" and click on “Confirm”.  

*Note*:  When running a cluster in production, you will want to narrow the scope of where your database can be accessed and specify a specific IP address/CIDR block and/or using VPC peered connection. For this demo we are creating a temporary whitelist entry which will automatically be removed after the specified period of time, preventing general access to the cluster.

>![](images/atlas-j-8.png)

* Go to “Clusters” submenu, under “Atlas” on the left menu, then click "Collections" for your cluster.

> <img src="images/atlas-j-9.png" height="250">

* Click "Add My Own Data

>![](images/atlas-j-10.png)

* Create a database called `gcpdemo` with a collection called `democol` 

> <img src="images/atlas-j-11.png" height="300">

* Go to “Clusters” submenu, under “Atlas” on the left menu, then click "Connect"

> <img src="images/atlas-j-12.png" height="300">

* A window will open. Select “Connect Your Application.”

>![](images/atlas-j-13.png)

* Choose Python and version >3.6 then copy the connection string they give you and save it somewhere handy - We will need this later.

>![](images/atlas-j-14.png)
