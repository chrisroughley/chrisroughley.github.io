const axios = require("axios");

export const sendEmail = () => {
  const postObj = {
    name: "chris",
    email: "test.test@test.com",
    message: "hello again",
  };
  axios.post("https://portfolio-email-api-app.herokuapp.com/", postObj);
};
