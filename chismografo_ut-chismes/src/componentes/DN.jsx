import React, { useState, useEffect } from 'react';

function DN() {
  const [posts, setPosts] = useState([]);
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostContent, setNewPostContent] = useState('');
  const [newComment, setNewComment] = useState('');

  // Cargar posts al cargar el componente
  useEffect(() => {
    const savedPosts = localStorage.getItem('DN_posts');
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    }
  }, []);

  // Guardar posts en almacenamiento local al actualizar
  useEffect(() => {
    if (posts.length > 0) {
      localStorage.setItem('DN_posts', JSON.stringify(posts));
    }
  }, [posts]);

  // Función para manejar el cambio en el input del nuevo comentario
  const handleNewCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  // Función para manejar el envío del nuevo comentario
  const handleNewCommentSubmit = (postId) => {
    if (newComment) {
      const updatedPosts = posts.map((post) => {
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

  // Función para manejar el cambio en el input del nuevo post
  const handleNewPostTitleChange = (event) => {
    setNewPostTitle(event.target.value);
  };

  // Función para manejar el cambio en el input del contenido del nuevo post
  const handleNewPostContentChange = (event) => {
    setNewPostContent(event.target.value);
  };

  // Función para manejar el envío del nuevo post
  const handleNewPostSubmit = () => {
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

  // Función para eliminar un comentario
  const eliminarComentario = (postId, commentId) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        post.comments = post.comments.filter((comment) => comment.id !== commentId);
      }
      return post;
    });

    setPosts(updatedPosts);
  };

  // Función para eliminar un post
  const eliminarPost = (postId) => {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
  };

  return (
    <div>
      <h1>DN</h1>
      <div>
        <h2>Nuevo Chisme...</h2>
        <input
          type="text"
          value={newPostTitle}
          onChange={handleNewPostTitleChange}
          placeholder="Título (máx. 30 caracteres)"
        />
        <textarea
          value={newPostContent}
          onChange={handleNewPostContentChange}
          placeholder="Contenido (máx. 255 caracteres)"
        />
        <button onClick={handleNewPostSubmit}>Publicar</button>
      </div>
      <div>
        <h2>Chismes</h2>
        {posts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p>Publicado por: {post.userId}</p>
            <p>Fecha: {post.date}</p>
            <button onClick={() => eliminarPost(post.id)}>Eliminar Post</button>
            <h4>Comentarios</h4>
            <input
              type="text"
              value={newComment}
              onChange={handleNewCommentChange}
              placeholder="Agregar comentario (máx. 255 caracteres)"
            />
            <button onClick={() => handleNewCommentSubmit(post.id)}>Comentar</button>
            {post.comments.map((comment) => (
              <div key={comment.id}>
                <p>{comment.content}</p>
                <p>Comentado por: {comment.userId}</p>
                <p>Fecha: {comment.date}</p>
                <button onClick={() => eliminarComentario(post.id, comment.id)}>Eliminar Comentario</button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DN;
