import { useState } from 'react';
import styles from './Ordenador.module.scss';
import opcoes from './opcoes.json';
import classNames from 'classnames';
import {MdKeyboardArrowUp, MdKeyboardArrowDown} from 'react-icons/md';

interface Props{
	ordenador: string,
	setOrdenador: React.Dispatch<React.SetStateAction<string>>
}

export default function Ordenador({ordenador, setOrdenador} : Props) {

  const [aberto, setAberto] = useState(false);

  return (
    <button className={styles.ordenador} onClick={() => setAberto(!aberto)} onBlur={() => setAberto(false)}>
      <span>Ordenar por:</span>
      {aberto ? < MdKeyboardArrowUp size={20}/> : < MdKeyboardArrowDown size={20}/>}
      <div className={classNames({
        [styles.ordenador__options]: true,
        [styles['ordenador__options--ativo']]: aberto,
      })}>
        {opcoes.map((opcao) => (
          <div className={styles.ordenador__option} key={opcao.value} onClick={()=> setOrdenador(opcao.value)}>{opcao.nome}</div>
        ))}
      </div>
    </button>
  );
}