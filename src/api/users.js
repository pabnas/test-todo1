import axios from "axios";

async function createUser(dataUser) {
  let url = process.env.REACT_APP_USERS_URL ;
  return await axios.post(url, dataUser);
}

async function getUser(id) {
  let url = process.env.REACT_APP_USERS_URL  + id ;
  return await axios.get(url);
}

async function editUser(id, dataUser) {
  let url = process.env.REACT_APP_USERS_URL + id;
  return await axios.patch(url,dataUser);
}

async function deleteUser(id) {
  let url = process.env.REACT_APP_USERS_URL + id ;
  return await axios.delete(url);
}

export default { editUser,deleteUser,createUser,getUser }