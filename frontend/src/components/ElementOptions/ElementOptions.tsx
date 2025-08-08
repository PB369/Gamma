import { useEffect, useRef, type SetStateAction } from 'react';
import styles from './css/ElementOptions.module.scss'

type Props = {
  elementType: 'chatCard';
  setEditOption: React.Dispatch<SetStateAction<boolean>>,
  setDeleteOption: React.Dispatch<SetStateAction<boolean>>,
  cursorPosition: number[],
  onClose: ()=>void,
}

const ElementOptions = ({setEditOption, setDeleteOption, cursorPosition, onClose}: Props) => {
  const elementOptionsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (elementOptionsRef.current && !elementOptionsRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div 
      className={styles.elementOptionsContainer} 
      style={{
        transform: `translate(${cursorPosition[0]}px, ${cursorPosition[1]}px)`,
      }}
      ref={elementOptionsRef}
    >
      <button onClick={()=>setEditOption(true)}>
        <img src="/whiteIcons/edit-icon.png" alt="" />
        <p>Edit</p>
      </button>
      <button onClick={()=>setDeleteOption(true)}>
        <img src="/otherIcons/trash-icon.png" alt="" />
        <p>Delete</p>
      </button>
    </div>
  )
}

export default ElementOptions