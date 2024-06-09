document.addEventListener('DOMContentLoaded', () => {
    // Switch to Signup Page
    window.showSignUp = function() {
        document.getElementById('loginPage').style.display = 'none';
        document.getElementById('signupPage').style.display = 'block';
    };

    // Switch to Login Page
    window.showLogin = function() {
        document.getElementById('signupPage').style.display = 'none';
        document.getElementById('loginPage').style.display = 'block';
    };

    // Show Blog Page
    function showBlog() {
        document.getElementById('loginPage').style.display = 'none';
        document.getElementById('signupPage').style.display = 'none';
        document.getElementById('blogPage').style.display = 'block';
    }

    // Login Form Submission
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            // Placeholder for login logic
            alert(Logged in as ${username});
            showBlog();
        });
    }

    // Signup Form Submission
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('signupUsername').value;
            const password = document.getElementById('signupPassword').value;
            // Placeholder for signup logic
            alert(Signed up as ${username});
            showLogin();
        });
    }

    // Blog Post Form Submission
    const postForm = document.getElementById('postForm');
    if (postForm) {
        postForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const title = document.getElementById('title').value;
            const content = document.getElementById('content').value;

            const postList = document.getElementById('postList');
            const post = document.createElement('div');
            post.classList.add('post');

            const postTitle = document.createElement('h4');
            postTitle.textContent = title;

            const postContent = document.createElement('p');
            postContent.textContent = content;

            post.appendChild(postTitle);
            post.appendChild(postContent);
            postList.appendChild(post);

            postForm.reset();
        });
    }
});