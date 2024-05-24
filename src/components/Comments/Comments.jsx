import { LucideHandHeart, Trash2 } from 'lucide-react'
import s from './Comments.module.css'

export function Comments() {
  return (
    <div className={s.comment}>
      <img src="https://i.pinimg.com/236x/97/af/77/97af774d991d6851e0d6b98e810b93b7.jpg" alt="" />

      <div className={s.commentBox}>
        <div className={s.commentContent}>
          <header>
            <div className={s.authorAndTime}>
              <strong>Diego Fernandes</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">Cerca de 1h atrás</time>
            </div>

            <button title="Deletar comentário">
              <Trash2 size={20} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <LucideHandHeart size={28} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}