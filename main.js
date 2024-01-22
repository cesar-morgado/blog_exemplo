document.addEventListener('DOMContentLoaded', function() {
    const blogContainer = document.getElementById('blog-container');
  
    // Dados simulados de postagens
    const posts = [
      { title: 'Primeira Postagem', content: 'Faça upload de uma foto.' },
      { title: 'Segunda Postagem', content: 'Poste uma foto do seu bichinho.' },
      { title: 'Terceira Postagem', content: 'Um prato que você cozinhou.' }
    ];
  
    function renderPosts() {
      blogContainer.innerHTML = 'Vamos lá! Tire uma foto e divirta - se';
  
      posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
  
        const titleElement = document.createElement('h2');
        titleElement.textContent = post.title;
  
        const contentElement = document.createElement('p');
        contentElement.textContent = post.content;
  
        postElement.appendChild(titleElement);
        postElement.appendChild(contentElement);
  
        blogContainer.appendChild(postElement);
      });
    }
  
    renderPosts();
  });
  