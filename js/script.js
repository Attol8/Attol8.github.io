// Simple blog functionality
class SimpleBlog {
    constructor() {
        this.posts = [];
        this.postsContainer = document.getElementById('posts-list');
        this.loadPosts();
    }

    async loadPosts() {
        try {
            const response = await fetch('posts/posts.json');
            if (response.ok) {
                this.posts = await response.json();
                // Filter out notebook posts, only show markdown
                this.posts = this.posts.filter(post => post.type === 'markdown');
                this.renderPosts();
            } else {
                this.renderEmptyState();
            }
        } catch (error) {
            console.warn('No posts found or error loading posts:', error);
            this.renderEmptyState();
        }
    }

    renderPosts() {
        if (this.posts.length === 0) {
            this.renderEmptyState();
            return;
        }

        const sortedPosts = this.posts.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        this.postsContainer.innerHTML = sortedPosts.map(post => `
            <article class="post-item">
                <div class="post-date">${this.formatDate(post.date)}</div>
                <h2 class="post-title">
                    <a href="posts/${post.filename.replace('.md', '.html')}">${post.title}</a>
                </h2>
                <div class="post-excerpt">${post.excerpt}</div>
            </article>
        `).join('');
    }

    renderEmptyState() {
        this.postsContainer.innerHTML = `
            <div class="post-item">
                <h2 class="post-title">No posts yet</h2>
                <div class="post-excerpt">Add your first post by creating a markdown (.md) file in the posts directory and updating posts.json</div>
            </div>
        `;
    }



    formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    }
}

// Initialize the blog when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new SimpleBlog();
}); 