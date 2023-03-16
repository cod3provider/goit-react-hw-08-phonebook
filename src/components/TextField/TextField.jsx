import { useMemo } from 'react';
import { nanoid } from 'nanoid';

import s from './TextField.module.css';

const TextField = ({label, handleChange, ...props}) => {
  const id = useMemo(() => nanoid(), []);

  return (
    <div className={s.wrap}>
      <label className={s.label} htmlFor={id}>{label}</label>
      <input className={s.input} id={id} onChange={handleChange} {...props} />
    </div>
  )
}

export default TextField;
