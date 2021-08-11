export const userAuthorizationData = [
  {
    username: "mayank1",
    password: "ok12345",
  },
  {
    username: "mayank2",
    password: "ok123456",
  },
];

export const checkLoginCredentials = (username, password) => {
  const usernameCheck = userAuthorizationData.filter(
    (data) => data.username === username.toLowerCase()
  );
  console.log(usernameCheck);
  if (usernameCheck.length !== 0) {
    if (password == usernameCheck[0].password) {
      return "success";
    } else return alert("Incorrect Password");
  } else return alert("Username does not exits");
};

export const ROUTES = {
  signIn: "/sign-in",
  uploadFile: "/upload-file",
  displayFile: "/display-file",
};
