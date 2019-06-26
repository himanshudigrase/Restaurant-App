import axios from 'axios';
export default class Search{
    constructor(query){
        this.query = query;
    }
   

    async  getResults(){
       const key = 'a2aa960e6d9d5b9e626006585e79168e';
        const proxy = 'https://cors-anywhere.herokuapp.com/'
        try{
            const res = await axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
           // console.log(this.result);    
        }catch(err){
            alert(err);
        }
    }
} 