// we still push .env file to git to allow interviewer
// run application with minimum effort
const config = {
  apiHost: process.env.API_HOST,
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
}

export default config
