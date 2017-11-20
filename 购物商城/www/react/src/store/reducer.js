const reducer = (state,action) => {
	let {type,payload} = action;
	switch(type){
		case "SHOW_FOOT" : 
			return Object.assign({},state,{
				bFoot : true
			});
			break;
		case "HIDE_FOOT" : 
			return Object.assign({},state,{
				bFoot : false
			});
			break;
		case "SHOW_LOADING" : 
			return Object.assign({},state,{
				bLoading : true
			});
			break;
		case "HIDE_LOADING" : 
			return Object.assign({},state,{
				bLoading : false
			});
			break;
		case "ADD_ITEM" : 
			let find = false;
			state.buyCar.forEach((item,index)=>{
				if( item.id == payload.id ){
					find = true;
					item.number++
				}
			})
			if(!find){
				item.number = 1;
				state.buyCar.push(payload);
			}
			return Object.assign({},state,{
				buyCar : [...state.buyCar]
			});	
		case "REMOVE_ITEM" : 
			state.buyCar.forEach((item,index)=>{
				if( item.id == payload.id ){
					state.buyCar.splice(index,1);
				}
			})
			return Object.assign({},state,{
				buyCar : [...state.buyCar]
			});
		case "REMOVE_ALL" : 
			return Object.assign({},state,{
				buyCar : []
			});
			break;
		default :
      		return state;
	}
};
export default reducer;



