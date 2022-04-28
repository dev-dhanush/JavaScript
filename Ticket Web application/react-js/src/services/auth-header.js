export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.accessToken) {
    // For Spring Boot back-end
    // return { Authorization: "Bearer " + user.accessToken };

    // for Node.js Express back-end
    return { "Authorization": "Bearer " + user.accessToken };
  } else {
    console.log("No toke found user : ",user);
    return {};
  }
}
