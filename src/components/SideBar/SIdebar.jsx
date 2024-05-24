import { Avatar } from '../Avatar/Avatar';
import s from './Sidebar.module.css';
import { PenLine } from 'lucide-react';

export function Sidebar(){
  return(
    <aside className={s.sidebar}>
      <img 
        className={s.cover}
        src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className={s.profile}>
        <Avatar src='https://i.pinimg.com/236x/5a/7d/60/5a7d60172c3beca9d1a60ac1835f1513.jpg' />
        <strong>
          Sr. Miau Meow
        </strong>
        <span>
          Gato Fuxiqueiro
        </span>
      </div>

      <footer>
        <a href="#">
          <PenLine size={16}/>
          Editar o seu perfil
        </a>
      </footer>
    </aside>
  );
}