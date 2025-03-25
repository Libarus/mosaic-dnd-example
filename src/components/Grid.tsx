import React from 'react';
import { Cell } from './Cell';
import { useGameStore } from '../store';
import { Tile } from '../types';

export const Grid: React.FC = () => {
    const tiles = useGameStore((state) => state.tiles);
    const cellSize = 60;

    return (
        <div className="grid grid-cols-5 gap-1 bg-gray-200 p-2 rounded-lg" style={{ width: `${cellSize * 10 + 40}px` }}>
            {tiles.map((tile: Tile, index: number) => {
                return <Cell key={index} index={index} size={cellSize} tile={tile} />;
            })}
        </div>
    );
};
