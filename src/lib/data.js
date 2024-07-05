// // TEMPORARY DATA
// const users = [
//     {id : 1, name: "John"}, 
//     {id : 2, name: "Johans"},
// ]

// const posts = [
//     {id:1, title: 'Post 1', body: '.asdf...', userId: '1'},
//     {id:2, title: 'Post 2', body: '..sasdf..', userId: '1'},
//     {id:3, title: 'Post 3', body: '...asdf.', userId: '2'},
// ]

export const getPosts = async () => {
    try {

    }catch(err){
        
    }
}

export const getPost = async (id) => {
    const post = posts.find((post) => post.id === parseInt(id));
    return post;
}

export const getUser = async (id) => {
    return users.find((user) => user.id === parseInt(id))
}
