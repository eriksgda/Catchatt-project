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
      <Avatar Border={false} src="https://i.pinimg.com/236x/5a/7d/60/5a7d60172c3beca9d1a60ac1835f1513.jpg" alt="" />

      <div className={s.commentBox}>
        <div className={s.commentContent}>
          <header>
            <div className={s.authorAndTime}>
              <strong>Sr Miau Meow</strong>
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