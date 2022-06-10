const paginate = (followers) => {
    const itemsPerPage=10;//on one page how many items 
    const pages=Math.ceil(followers.length / itemsPerPage);//calculate how many pages will create
    //console.log(pages);
    //Array.from(length of array, data with map like function)
    const newFollowers=Array.from({length:pages},(_,index)=>{
        const start=index * itemsPerPage;//start value increment every iteration
        return followers.slice(start,start + itemsPerPage)//starts with zero and end with 9
    })
    console.log(newFollowers);
    return newFollowers;
}

export default paginate
