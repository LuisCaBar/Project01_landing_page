import axios from "axios"

const instance = axios.create({
  baseURL: "https://project01caba-laravel.herokuapp.com/api/"
})

const sendEmail = async (data) => {
  const response = await instance({
    method: 'post',
    url: 'about/save',
    data: data
  });

  return response
};

export {
  sendEmail
}
