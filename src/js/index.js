// Global app controller
import Search from './models/Search';
import * as searchView from './views/searchView';
import {elements} from './views/base';

const state = [];

const controlSearch = async() =>{
    //1.Get query
    const query = searchView.getInput();
    console.log(query)

    if(query){
   //2.New search object add to state
   state.search = new Search(query);

   //3.Getting UI ready

   //4.Search for recipes
   await state.search.getResults();

   //5.Render on UI
   console.log(state.search.result);
    }
}

elements.searchForm.addEventListener('submit',e =>{
    e.preventDefault();
    controlSearch();
});