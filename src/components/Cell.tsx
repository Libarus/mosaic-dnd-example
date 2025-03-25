import React from 'react';
import { useDrop } from 'react-dnd';
import { Tile } from './Tile';
import { useGameStore } from '../store';
import { Tile as TileType } from '../types';

interface CellProps {
    index: number;
    size: number;
    tile?: TileType;
}

export const Cell: React.FC<CellProps> = ({ index, size, tile }) => {
    const moveTile = useGameStore((state) => state.moveTile);

    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'tile',
        drop: (item: { index: number }) => {
            console.log(item);
            moveTile(item.index, index);
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    return (
        <div
            ref={drop}
            className={`
        flex items-center justify-center

        ${isOver ? 'bg-blue-100' : 'bg-gray-50'}
        transition-colors
      `}
            style={{ width: `${size}px`, height: `${size}px` }}
        >
            {tile && <Tile tile={tile} size={size} index={index} />}
        </div>
    );
};
