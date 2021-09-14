import Axios from "axios";

const HTTPMethod = Object.freeze({
  GET: "GET",
  POST: "POST",
  DELETE: "DELETE"
});

async function GET(path) {
  return await sendHTTP(HTTPMethod.GET, path);
}

async function POST(path, data) {
  return await sendHTTP(HTTPMethod.POST, path, data);
}

async function DELETE(path) {
  return await sendHTTP(HTTPMethod.DELETE, path);
}

async function sendHTTP(method, path, data) {
  let response;

  switch (method) {
    case HTTPMethod.GET:
      response = await Axios.get(path); 
      break;
    case HTTPMethod.POST:
      response = await Axios.post(path, data);
      break;
    case HTTPMethod.DELETE:
      response = await Axios.delete(path);
      break;
    default:
    // Should never reach here
  }

  return await response;
  // return await getReport(response);
}

export default {
  GET,
  POST,
  DELETE
};
