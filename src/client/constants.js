const production = {
  url: "https://resource-app-backend.herokuapp.com/api",
};
const development = {
  url: "http://localhost:5000/api",
};
export const config =
  process.env.NODE_ENV === "development" ? development : production;
