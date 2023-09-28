const url = 'https://jsonplaceholder.typicode.com/posts';
const scrollContainer = document.getElementById('posts-scroll-container');

async function getPosts() {
    return (await fetch(url)).json();
}

getPosts().then(data => {
    data.forEach((element) => {
        const idValue = element['id'];
        const userIdValue = element['userId'];
        const titleValue = element['title'];
        const bodyValue = element['body'];

        const post = document.createElement('div')
        post.classList.add('post')

        const postHeader = document.createElement('div');
        postHeader.classList.add('post-header');

        const idDiv = document.createElement('div');
        idDiv.classList.add('id');
        idDiv.textContent = idValue + '.';

        const titleParagraph = document.createElement('p');
        titleParagraph.classList.add('title');
        titleParagraph.textContent = titleValue;

        postHeader.appendChild(idDiv);
        postHeader.appendChild(titleParagraph)

        const textDiv = document.createElement('div');
        textDiv.classList.add('text');
        textDiv.textContent = bodyValue;

        const userIdParagraph = document.createElement('p');
        userIdParagraph.classList.add('user-id');
        userIdParagraph.textContent = 'UID: ' + userIdValue;

        post.appendChild(postHeader);
        post.appendChild(textDiv);
        post.appendChild(userIdParagraph);

        scrollContainer.appendChild(post);
    })
})