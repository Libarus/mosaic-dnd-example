import React from 'react';
import { useDrag } from 'react-dnd';
import { Tile as TileType } from '../types';

interface TileProps {
    tile: TileType;
    size: number;
    index: number;
}

export const Tile: React.FC<TileProps> = ({ tile, size, index }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'tile',
        item: { index },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }));

    return (
        <div
            ref={drag}
            className={`
                w-full h-full flex items-center justify-center
                bg-blue-500 text-white font-bold text-xl
                cursor-move
                ${isDragging ? 'opacity-0' : 'opacity-100'}
                hover:bg-blue-600 transition-colors
            `}
            style={{ width: `${size}px`, height: `${size}px` }}
        >
            {tile.value}
        </div>
    );
};
