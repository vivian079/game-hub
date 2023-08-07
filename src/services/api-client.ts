import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api/games', 
    params:{
        key: '6ba7b68ce48840358d7e98879490dfed'
    }
})