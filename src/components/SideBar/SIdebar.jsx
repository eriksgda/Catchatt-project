import s from './Sidebar.module.css';

export function Sidebar(){
  return(
    <aside className={s.sidebar}>
      <img 
        className={s.cover}
        src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className={s.profile}>
        <strong>
          sr miau
        </strong>
        <span>
          gato fuxiqueiro
        </span>
      </div>

      <footer>
        <a href="#">Editar o seu perfil</a>
      </footer>
    </aside>
  );
}