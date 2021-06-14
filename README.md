# **Bryan Godwin - Week 14 Challenge**

## **Tech Blog**

### This challenge is to build a CMS-style blog site where developers can publish and comment on blog posts.

This app follows a MVC architectural structure, with following technologies:

- Handlebars.js as the templating language
- Sequelize as the ORM
- mySQL as the database
- express-session npm package for user authentication
- node.js / express as the back-end server
- dotenv for environment variables
- bcrypt package to ash passwords
- Heroku for deployment & hosting

### **User Story**

    AS A developer who writes about tech
    I WANT a CMS-style blog site
    SO THAT I can publish articles, blog posts, and my thoughts and opinions

### **Acceptance Critera**

1.  Unauthenticated user can see content when visiting the site

        WHEN I visit the site for the first time
        THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in

2.  Unauthenticated user can navigate to homepage

        WHEN I click on the homepage option
        THEN I am taken to the homepage

3.  Unauthenticated user is taken to sign up or sign in when clicking on links that require an authenticated user

    WHEN I click on any other links in the navigation
    THEN I am prompted to either sign up or sign in

4.  Users can sign up

        WHEN I choose to sign up
        THEN I am prompted to create a username and password

5.  Users can create an account

        WHEN I click on the sign-up button
        THEN my user credentials are saved and I am logged into the site

6.  Users can sign in

        WHEN I revisit the site at a later time and choose to sign in
        THEN I am prompted to enter my username and password

7.  Authenticated users can see additional navigation links

        WHEN I am signed in to the site
        THEN I see navigation links for the homepage, the dashboard, and the option to log out

8.  Authenticated user can navigate to homepage

        WHEN I click on the homepage option in the navigation
        THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created

9.  Authenticated user can see post detail

        WHEN I click on an existing blog post
        THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment

10. Authenticated user can enter comments

    WHEN I enter a comment and click on the submit button while signed in
    THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created

11. Authenticated users can see their post history

    WHEN I click on the dashboard option in the navigation
    THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post

12. Authenticated users can provide information to create a new post

    WHEN I click on the button to add a new blog post
    THEN I am prompted to enter both a title and contents for my blog post

13. Authenticated users can create new posts

    WHEN I click on the button to create a new blog post
    THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post

14. Authenticated users can delete or update their own posts

    WHEN I click on one of my existing posts in the dashboard
    THEN I am able to delete or update my post and taken back to an updated dashboard

15. Authenticated users can sign out

    WHEN I click on the logout option in the navigation
    THEN I am signed out of the site

16. Idle users are automatically signed out

    WHEN I am idle on the site for more than a set time
    THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments

### **Challenge 14 - code repository**

<https://github.com/godwinbw/tech-blog>

### **Challenge 14 - screenshots**

<!---
<img src="./screenshot.png" style="width: 50%; height=auto;">
-->

### Challenge 14 - link to application

<!---
<https://streamable.com/jklj1y>
-->
