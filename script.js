const url = 'https://jsonplaceholder.typicode.com/posts';

async function getPosts() {
    return (await fetch(url)).json();
}

getPosts().then(data => {
    data.forEach((el) => {
        //console.log(el);
    })
})