import { useState } from 'react';

import { LucideHandHeart, Trash2 } from 'lucide-react'
import s from './Comments.module.css'
import { Avatar } from '../Avatar/Avatar'

export function Comments({content, onDeleteComment}) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment(){
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    });
  }

  return (
    <div className={s.comment}>
      <Avatar Border={false} src="https://i.pinimg.com/236x/97/af/77/97af774d991d6851e0d6b98e810b93b7.jpg" alt="" />

      <div className={s.commentBox}>
        <div className={s.commentContent}>
          <header>
            <div className={s.authorAndTime}>
              <strong>Rei dos gatos</strong>
              <time title="24 de Maio de 2024">Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash2 size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <LucideHandHeart size={28} />
            Curtir 
            <span>
              {likeCount}
            </span>
          </button>
        </footer>
      </div>
    </div>
  )
}