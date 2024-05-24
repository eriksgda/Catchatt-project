import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from '../Avatar/Avatar'
import { Comments } from '../Comments/Comments'
import s from './Post.module.css'
import { useState } from 'react'


export function Post({author, publishedAt, content }){
  const publishedDate = format(publishedAt, "d 'de' LLLL 'às' HH:mm", {
    locale: ptBR
  })
  const publishedDateTime = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })


  const [comments, setComments] = useState([
    'Muito bom hein!!!',
  ])

  const [newCommentText, setNewCommentText] = useState('');

  function handlePublicComment(){
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  
  function handleNewCommentChange(){
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidity('Esse campo é obrigatório!');
  }

  function deleteComment(commentToDelete){
    const commentswithoutDeleted = comments.filter(comment => {
      return comment != commentToDelete;
    })
    setComments(commentswithoutDeleted);
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return(
    <article className={s.post}>
      <header>
        <div className={s.author}>
          <Avatar src={author.avatarUrl}/>
          <div className={s.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>

        </div>
        <time title={publishedDate} dateTime={publishedAt.toISOString()}>{publishedDateTime}</time>
      </header>

      <div className={s.content}>
        {content.map(line => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === 'link') {
            return <p key={line.content}><a href='#'>{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handlePublicComment} className={s.comments}>
        <strong>Deixe o seu feedback</strong>

        <textarea 
          name = 'comment'
          placeholder='Deixe um comentário...'
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button 
            type='submit' 
            disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={s.commentList}>
        {comments.map(comment => {
          return <Comments key={comment} content={comment} onDeleteComment={deleteComment}/>
        })}
      </div>
    </article>
  )
}