import axios from 'axios'

interface Post{
    userID:number;
    title:string;
    body:string;
}

const url  =  'https://jsonplaceholder.typicode.com/posts/1'

axios.get(url).then(res=>{
    const post = res.data as Post
    const id = post.userID
    const header = post.title
    const content = post.body

    console.log(`
        User ID is ${id}
        Title of post: ${header}
        Post Content ${content}  
    `)
})


