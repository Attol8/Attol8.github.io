const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

// Post template
const postTemplate = (title, content, date) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <link rel="stylesheet" href="../css/style.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
    <style>
        .post-header {
            text-align: center;
            margin-bottom: 2rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid #eee;
        }
        .post-title {
            font-size: 2.5rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
            color: #111;
        }
        .post-date {
            color: #666;
            font-size: 0.9rem;
        }
        .back-link {
            display: inline-block;
            margin-bottom: 2rem;
            color: #666;
            text-decoration: none;
            font-size: 0.9rem;
        }
        .back-link:hover {
            color: #0066cc;
        }
        .post-content {
            line-height: 1.7;
        }
        .post-content h1 {
            font-size: 2rem;
            margin: 2rem 0 1rem 0;
            color: #111;
        }
        .post-content h2 {
            font-size: 1.5rem;
            margin: 1.5rem 0 1rem 0;
            color: #111;
        }
        .post-content h3 {
            font-size: 1.2rem;
            margin: 1.2rem 0 0.8rem 0;
            color: #111;
        }
        .post-content p {
            margin-bottom: 1rem;
            color: #333;
        }
        .post-content pre {
            background: #f5f5f5;
            padding: 1rem;
            border-radius: 4px;
            overflow-x: auto;
            margin: 1rem 0;
            border: 1px solid #e0e0e0;
        }
        .post-content code {
            background: #f5f5f5;
            padding: 0.2rem 0.4rem;
            border-radius: 3px;
            font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
            font-size: 0.9em;
        }
        .post-content pre code {
            background: none;
            padding: 0;
        }
        .post-content blockquote {
            border-left: 4px solid #ddd;
            padding-left: 1rem;
            margin: 1rem 0;
            color: #666;
            font-style: italic;
        }
        .post-content ul, .post-content ol {
            margin: 1rem 0;
            padding-left: 2rem;
        }
        .post-content li {
            margin-bottom: 0.5rem;
        }
        @media (max-width: 768px) {
            .post-title {
                font-size: 2rem;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <a href="../index.html" class="back-link">← Back to Blog</a>
        
        <article>
            <header class="post-header">
                <h1 class="post-title">${title}</h1>
                <div class="post-date">${date}</div>
            </header>
            
            <div class="post-content">
                ${content}
            </div>
        </article>
    </div>
</body>
</html>`;

// Read posts configuration
const postsConfig = JSON.parse(fs.readFileSync('posts/posts.json', 'utf8'));

// Process each markdown post
postsConfig.forEach(post => {
    if (post.type === 'markdown') {
        const markdownPath = path.join('posts', post.filename);
        const htmlPath = path.join('posts', post.filename.replace('.md', '.html'));
        
        // Read markdown content
        const markdownContent = fs.readFileSync(markdownPath, 'utf8');
        
        // Convert to HTML
        const htmlContent = marked(markdownContent);
        
        // Format date
        const date = new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        // Generate full HTML page
        const fullHtml = postTemplate(post.title, htmlContent, date);
        
        // Write HTML file
        fs.writeFileSync(htmlPath, fullHtml);
        
        console.log(`Generated: ${htmlPath}`);
    }
});

console.log('Build complete!'); 