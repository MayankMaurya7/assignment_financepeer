This Application is built using React.js
react-router is used for internal routing in the application.

It is a simple application where authorized user can do following:

On Initial render user will see a Login-Page , where once user enters authorized Username/Password

a. Authorized user names and passwords are - {
username: "mayank1",
password: "ok12345",
},
{
username: "mayank2",
password: "ok123456",
}

b. Once logged in successfully, Application will take user to file upload dashboard 1. Here user can choose a file to upload , note: file type should be json or else Application will throw an alert. 2. once a json file is chosen and upload button hit , Application takes user to Display file page where a hardcoded file is displayed . 3. User can Navigate to Display file page using the button given on top of the page. 4. User can Signout using the button given on top of the page.

c. After landing to Display file page , user can view the data displayed in an organised manner 1. User can Navigate to Upload file page using the button given on top of the page. 1. User can Signout using the button given on top of the page.

## Instructions

Make sure that your present working directory is ./assignment_financepeer

1. Install dependencies. Make sure you already have nodejs & npm installed in your system.

   ```
   $ npm install # or yarn

   ```

2. Run it.

   ```
   $ npm start # or yarn start

   ```
