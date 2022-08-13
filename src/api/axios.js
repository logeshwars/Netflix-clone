import axios from "axios"
const getList=axios.create({
    baseURL:"https://api.themoviedb.org/3",
})
export default getList;