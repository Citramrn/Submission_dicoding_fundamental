import foods from './foods.js'
class DataSearch {
    static searchfoods (katakunci) {
        return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${katakunci}`)
         .then(response => response.json()).then(responseJson => {
            if(responseJson.meals) {
                return Promise.resolve(responseJson.meals);
            } else {
                return Promise.reject(`${katakunci} is not found`);
            }
         })
        }         
    }                                                                 //   


export default DataSearch;