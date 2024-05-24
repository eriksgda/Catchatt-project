import { Header } from "./components/Header/Header"
import { Post } from "./components/Posts/Post"

import s from './App.module.css'
import './global.css'
import { Sidebar } from "./components/SideBar/SIdebar"

export function App() {
  return (
    <div>
      <Header />

      <div className={s.wrapper}>
        <Sidebar />
        <main>

          <Post
            author="José"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores perspiciatis voluptate neque autem saepe aliquid voluptas maxime qui unde doloribus! Illum maxime, atque delectus ad quae ut vel tenetur repudiandae." 
          />

          <Post 
            author="Miguel"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores perspiciatis voluptate neque autem saepe aliquid voluptas maxime qui unde doloribus! Illum maxime, atque delectus ad quae ut vel tenetur repudiandae." 
          />
        </main>
      </div>

    </div>
  )
}
