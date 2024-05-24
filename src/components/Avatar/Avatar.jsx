import s from './Avatar.module.css';

export function Avatar({Border=true, src}){
  // const hasBorder = props.Border != false;
  // className={hasBorder ? s.avatarBorder : s.avatar}

  return(
    <img
      className={Border ? s.avatarBorder : s.avatar}
      src={src}
    />
  )
}