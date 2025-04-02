async function fetchRedditData() {
    const subreddit = document.getElementById('subreddit').value;
    const loading = document.getElementById('loading');
    const error = document.getElementById('error');
    const posts = document.getElementById('posts');

    loading.style.display = 'block';
    error.style.display = 'none';
    posts.innerHTML = '';

    try {
        const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
        if (!response.ok) {
            throw new Error('Invalid subreddit or API issue');
        }
        const data = await response.json();
        loading.style.display = 'none';

        data.data.children.forEach(post => {
            const postElement = document.createElement('div');
            postElement.innerHTML = `
                <h2>${post.data.title}</h2>
                <a href="${post.data.url}" target="_blank">Read more</a>
            `;
            posts.appendChild(postElement);
        });
    } catch (err) {
        loading.style.display = 'none';
        error.style.display = 'block';
        error.textContent = err.message;
    }
}
