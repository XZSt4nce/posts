const url = 'https://jsonplaceholder.typicode.com/posts';

async function getPosts() {
    const posts = await fetch(url)
        .then(response => {
            return response.json();
        })
        .then((data) => {
            return
        })
}

getPosts();

// const postsRes = await fetch(url)
//         .then(response => {
//             return response.json();
//         })
//         .then((data) => data)
//
//
// const postsContainer = document.getElementById('posts-container');
// console.log(posts);
// console.log(postsRes);