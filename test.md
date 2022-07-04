<!-- User Management -->
1. Register:
    ✅ User must be able to Register.         
    ✅ Duplicate Email Should not be allowed.
    ✅ Passowrd should be atleast 8 characters and it should throw notification error.
    ✅ User will be redirected after login to home page.
    ✅ Empty feild while trying to register should throw error.

2. Login:
    ✅ User should be able to login with email and passowrd.
    ✅ Incorrect in any of the credentials must be not shown specifically.
    ✅ When entered empty passowrd it should throw an error notification.
    ✅ When both feild empty it should throw an error notification.

3. Session:
    🔴 User should be logged out auto after session is ended.

4. LogOut:
    🔴 While loggin Out user cookies and local data should be removed.

5. Reset Password:
    🔴 Passowrd must be sent to email.
    🔴 Email will redirect to change and add new password.

6. Details Management.
    ✅ User should be able to view their profile.
    ✅ User should be able to view their role.
    ✅ User should be able to change their name , email and other details.
    ✅ User should be able to change their password.
    ✅ User password should match while updating.
    🔴 If user password feild is empty while updating it should throw notification error.
    🔴 If user password feild is less than 8 char it should throw notification error.


7. Termination
    ✅ User can delete their account and it will be removed from the database completely. 
    🔴 They will be redirected to Login/Register Page if they delete it.
    🔴 All Cookies and Local Storage will be cleared when deleting their account.

<!-- Movies Management. -->
1.  🔴 In Home there will show tops recommendation of the day for the user.
2.  🔴 User should be able to serach movies and shows and will show in details.
3.  ✅ User should be able to Add movies to watchlist and toggle to remove it.
4.  ✅ User should be able to rate movies and it should remove from watch list as it assume user watched the movies.
5.  ✅ User should be able to Add rated movies again as they might want to watch movie again even after rating it.



<!-- Recommendation Management. -->
1. 🔴  Tops recommendation will carosoel will show after they have rated enough movies.
2. 🔴  If user has not rated enough movies it will top trending movies from API.
3. 🔴  If user clicks and open a movie it wil show similar movies from the AI.
4. 🔴  If there is no information of such movies in database then it will fetch similar movies from API.



<!-- Admin Management. -->
1.  ✅  Admin should be able to search user on the basis of their name/email.
2.  🔴  The dashboard will show user from database and will use pagination.
3.  ✅  Admin will be able to view name, email, age , gender role of their user.
4.  ✅  Admin can update info of their user.
5.  ✅  Admin can update the role of user to admin.
6.  ✅  Admin can delete user.
7.  ✅  Admin can not delete admin.


<!-- Problems --> 🔴🔴🔴🔴
1. 🔴  User should not be able to access admin panel.
2. 🔴  Admin should have seperate route and different login credentials system.
3. 🔴  Admin should only have admin view and different spereate route.
4. 🔴  While clicking on User profile the sidebar highlights to movies tab.
5. 🔴  It should be responsive.
5. 🔴  Fix error for search result in navbar.
6. 🔴  Fix the hamburger menu not showing.


<!-- question to ask manne -->
1. in app.js in react about token and better way to handle cookie and session.
2. cookie and session expire after time limit, logout,  delete account,
3. passing pros for movie and tv shows as data.
4. error msg is handled from post man without res.