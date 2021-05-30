export default (totalPages = [], action) =>{
    switch (action.type){
        case 'GET_TOTALPAGES':
            return [action.payload]
        default:
            return totalPages;      
    }
}