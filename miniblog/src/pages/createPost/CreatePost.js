import './CreatePost.css'

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthValue } from '../../components/context/AuthContext'
import { useInsertDocument } from '../../hooks/useInsertDocument';

const CreatePost = ( ) => {
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]); 
  const [formError, setFormError] = useState("");

  const {insertDocument, response} = useInsertDocument('post');
  const {user} = useAuthValue();

  const handleSubmit  = (e) => {
    e.preventDefault()

    setFormError('')

    insertDocument({
      title,
      img,
      body,
      tags,
      uid: user.id,
      createdBy: user.displayName
    })

  };

  return (
    <div className='div-create-post'>
      <h1>Novo Post</h1>
      <p>Escreva sobre os seus interesses!</p>

      <form onSubmit={handleSubmit}>

        <label>
          <span>Título:</span>
          <input type="text" required 
          name='title'
          placeholder='Escolha um bom título...'
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          >
          </input> 
        </label>
        
        <label>
          <span>URL da imagem:</span>
          <input type="img" required 
          name='image'
          placeholder='Insira uma imagem que representa o seu post'
          onChange={(e) => setImg(e.target.value)}
          value={img}
          >
          </input> 
        </label>

        <label>
          <span>Conteúdo</span>
          <textarea required 
          name='body'
          placeholder='Insira o conteúdo do post...'
          onChange={(e) => setBody(e.target.value)}
          value={body}
          >
          </textarea> 
        </label>
        <label>
          <span>Tags:</span>
          <input type="text" required 
          name='tags'
          placeholder='Insira as tags separadas por vírgula'
          onChange={(e) => setTags(e.target.value)}
          value={tags}
          >
          </input> 
        </label>
        {!response.formError && <button className='btn-primary'>ENVIAR</button>}
        {response.formError && <button className='btn-primary' disabled>ENVIAR</button>}
      </form>
    </div>
  );
}
export default CreatePost;