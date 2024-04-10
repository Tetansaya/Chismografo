import React, { useState, useEffect } from 'react';

function Forum() {
  const [posts, setPosts] = useState([]);
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostContent, setNewPostContent] = useState('');
  const [newComment, setNewComment] = useState('');

  // Cargar posts al cargar el componente
  useEffect(() => {
    const savedPosts = localStorage.getItem('forum_posts');
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    }
  }, []);

  // Guardar posts en almacenamiento local al actualizar
  useEffect(() => {
    localStorage.setItem('forum_posts', JSON.stringify(posts));
  }, [posts]);

  const handleNewPost = () => {
    if (newPostTitle && newPostContent) {
      const newPost = {
        id: Date.now(),
        title: newPostTitle.substring(0, 30),
        content: newPostContent.substring(0, 255),
        comments: [],
        date: new Date().toISOString(),
        userId: 'user_id_here', // Aquí deberías obtener el ID del usuario desde Google Login API
      };

      setPosts([newPost, ...posts]);
      setNewPostTitle('');
      setNewPostContent('');
    }
  };

  const handleNewComment = postId => {
    if (newComment) {
      const updatedPosts = posts.map(post => {
        if (post.id === postId) {
          if (post.comments.length < 25) {
            post.comments.push({
              id: Date.now(),
              content: newComment.substring(0, 255),
              userId: 'user_id_here', // Aquí deberías obtener el ID del usuario desde Google Login API
              date: new Date().toISOString(),
            });
          } else {
            alert('Se ha alcanzado el límite de comentarios para este post.');
          }
        }
        return post;
      });

      setPosts(updatedPosts);
      setNewComment('');
    }
  };

  return (
    <div>
      <h1>Foro</h1>
      <div>
        <h2>Nuevo Post</h2>
        <input
          type="text"
          value={newPostTitle}
          onChange={e => setNewPostTitle(e.target.value)}
          placeholder="Título (máx. 30 caracteres)"
        />
        <textarea
          value={newPostContent}
          onChange={e => setNewPostContent(e.target.value)}
          placeholder="Contenido (máx. 255 caracteres)"
        />
        <button onClick={handleNewPost}>Publicar</button>
      </div>
      <div>
        <h2>Posts</h2>
        {posts.map(post => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p>Publicado por: {post.userId}</p>
            <p>Fecha: {post.date}</p>
            <h4>Comentarios</h4>
            <input
              type="text"
              value={newComment}
              onChange={e => setNewComment(e.target.value)}
              placeholder="Agregar comentario (máx. 255 caracteres)"
            />
            <button onClick={() => handleNewComment(post.id)}>Comentar</button>
            {post.comments.map(comment => (
              <div key={comment.id}>
                <p>{comment.content}</p>
                <p>Comentado por: {comment.userId}</p>
                <p>Fecha: {comment.date}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forum;
