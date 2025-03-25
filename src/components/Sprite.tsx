import { TSprite } from '../types';
import '../sprites.css'; // Создадим этот файл ниже
import { useGameStore } from '../store';

export function Sprite({ x, y, width, height }: TSprite) {
    const image = useGameStore(store => store.image);
    
    const style = {
        backgroundImage: `url(${image})`,
        backgroundPosition: `-${x}px -${y}px`,
        width: `${width}px`,
        height: `${height}px`,
        display: 'inline-block'
    };

    return <div style={style}></div>;
}
