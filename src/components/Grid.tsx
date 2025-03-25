import React from 'react';
import { Cell } from './Cell';
import { useGameStore } from '../store';
import { Tile } from '../types';

export const Grid: React.FC = () => {
    const tiles = useGameStore((state) => state.tiles);
    const cellSize = 63;

    return (
        <div className="grid grid-cols-10 gap-0 bg-gray-200 p-2 m-0" style={{ width: `${60 * 10 + 40}px` }}>
            {tiles.map((tile: Tile, index: number) => {
                return <Cell key={index} index={index} size={cellSize} tile={tile} />;
            })}
        </div>
    );
};
