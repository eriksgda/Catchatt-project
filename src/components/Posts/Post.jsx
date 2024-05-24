import { Comments } from '../Comments/Comments'
import s from './Post.module.css'

export function Post(){
  return(
    <article className={s.post}>
      <header>
        <div className={s.author}>
          <img className={s.avatar} src="https://i.pinimg.com/236x/97/af/77/97af774d991d6851e0d6b98e810b93b7.jpg"/>
          <div className={s.authorInfo}>
            <strong>Sr Miau Meow</strong>
            <span>Gato Fuxiqueiro</span>
          </div>

        </div>
        <time title='24 de maio de 2024' datetime="2024-05-24  08:08:57">Publicada há 1h</time>
      </header>

      <div className={s.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉 <a href="">jane.design/doctorcare</a></p>
        <p><a href="">#novoprojeto</a> <a href="">#nlw</a> <a href="">#rocketseat</a></p>
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