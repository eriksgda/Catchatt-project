import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from '../Avatar/Avatar'
import { Comments } from '../Comments/Comments'
import s from './Post.module.css'

export function Post({author, publishedAt, content }){
  const publishedDate = format(publishedAt, "d 'de' LLLL 'às' HH:mm", {
    locale: ptBR
  })

  const publishedDateTime = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

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
            return <p>{line.content}</p>
          } else if (line.type === 'link') {
            return <p><a href='#'>{line.content}</a></p>
          }
        })}
      </div>

      <form className={s.comments}>
        <strong>Deixe o seu feedback</strong>

        <textarea 
          placeholder='Deixe um comentário...'
        
        />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={s.commentList}>
        <Comments />
        <Comments />
        <Comments />
      </div>
    </article>
  )
}