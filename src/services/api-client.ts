import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key:'175ca86901954f3d8214f0cd486bf2ae'
  }
});