const posts = [
    { image: 'assets/images/Rectangle 1.png', title: 'Today', date: '9-08-2016', likes: 128, comments: 31, status: 'Image upload', dateUplaod: '11-04-2016'},
    { image: 'assets/images/Rectangle 2.png', title: 'Today', date: '9-08-2016', likes: 128, comments: 31, status: 'Image upload', dateUplaod: '11-04-2016'},
    { image: 'assets/images/Rectangle 3.png', title: 'Today', date: '9-08-2016', likes: 128, comments: 31, status: 'Image upload', dateUplaod: '11-04-2016'},
    { image: 'assets/images/Rectangle 4.png', title: 'Today', date: '9-08-2016', likes: 128, comments: 31, status: 'Image upload', dateUplaod: '11-04-2016'},
    { image: 'assets/images/Rectangle 5.png', title: 'Today', date: '9-08-2016', likes: 128, comments: 31, status: 'Image upload', dateUplaod: '11-04-2016'},
    { image: 'assets/images/Rectangle 6.png', title: 'Today', date: '9-08-2016', likes: 128, comments: 31, status: 'Image upload', dateUplaod: '11-04-2016'},
    { image: 'assets/images/Rectangle 7.png', title: 'Today', date: '9-08-2016', likes: 128, comments: 31, status: 'Image upload', dateUplaod: '11-04-2016'},
    { image: 'assets/images/Rectangle 8.png', title: 'Today', date: '9-08-2016', likes: 128, comments: 31, status: 'Image upload', dateUplaod: '11-04-2016'},
    { image: 'assets/images/Rectangle 9.png', title: 'Today', date: '9-08-2016', likes: 128, comments: 31, status: 'Image upload', dateUplaod: '11-04-2016'},
]
const container = document.getElementById('posts-container');
const listBtn = document.getElementById('listBtn');
const gridBtn = document.getElementById('gridBtn');


container.innerHTML = posts.map(post => `
    <article class="post-item">
        <div class="post-item__image">
            <img src="${post.image}" alt="">
        </div>
        <div class="post-item__content">
            <div class="post-item__info">
                <p class="post-item__title">${post.title}</p>
                <div class="post-item__stats">
                    <span class="post-item__stat">
                        <img src="assets/icons/heart.png" alt="">
                        ${post.likes}
                    </span>
                    <span class="post-item__stat">
                        <img src="assets/icons/comments.png" alt="">
                        ${post.comments}
                    </span>
                </div>
            </div>
            <div class="post-item__meta">
                <p class="post-item__date">${post.date}</p>
                <div class="post-item__stats">
                    <span class="post-item__stat">
                        <img src="assets/icons/heart.png" alt="">
                        ${post.likes}
                    </span>
                    <span class="post-item__stat">
                        <img src="assets/icons/comments.png" alt="">
                        ${post.comments}
                    </span>
                </div>
            </div>
            <div class="post-item__upload">
                <p class="post-item__status">${post.status}</p>
                <span class="post-item__upload-date">
                    ${post.dateUpload}
                </span>
            </div>
        </div>
    </article>
`).join('');


listBtn.addEventListener('click', () => {
    listBtn.classList.add('active');
    gridBtn.classList.remove('active');

    container.classList.remove('grid');
});

gridBtn.addEventListener('click', () => {
    gridBtn.classList.add('active');
    listBtn.classList.remove('active');

    container.classList.add('grid');
});


document.getElementById('gridBtn').addEventListener('click', () => {
    container.classList.add('grid');
});

document.getElementById('listBtn').addEventListener('click', () => {
    container.classList.remove('grid');
});