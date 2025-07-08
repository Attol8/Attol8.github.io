# Simple Static Blog

A minimal static blog that converts Markdown files to individual HTML pages.

## How to Create a New Post

### 1. Write your post
Create a new `.md` file in the `posts/` directory:
```
posts/my-new-post.md
```

### 2. Add post metadata
Edit `posts/posts.json` and add your post:
```json
{
    "title": "My New Post",
    "date": "2024-01-20",
    "type": "markdown",
    "filename": "my-new-post.md",
    "excerpt": "A brief description of what this post is about...",
    "tags": ["tag1", "tag2"]
}
```

### 3. Build and serve
```bash
npm run build
npm run serve
```

Your post will be available at `http://localhost:8000/posts/my-new-post.html`

## Customization

- **Blog title/description**: Edit `index.html`
- **Styling**: Edit `css/style.css`
- **Contact links**: Update footer in `index.html`

## Deploy

Upload all files to any static hosting service (GitHub Pages, Netlify, etc.) 