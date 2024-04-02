import http from "./httpService";
import config from "../config.json";

const apiEndpoint = config.apiURL + "/users";

export function register(user) {
  try {
    return http.post(apiEndpoint, {
      email: user.username,
      password: user.password,
      name: user.name,
    });
  } catch (e) {
    console.log("mihai");
    console.log(e);
  }
}
