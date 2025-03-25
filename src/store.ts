import { create } from 'zustand';
import { Tile } from './types';

interface GameState {
    tiles: Tile[];
    isComplete: boolean;
    initializeGame: () => void;
    moveTile: (tileId: number, newPosition: number) => void;
}

const createInitialTiles = (): Tile[] => {
    const tiles: Tile[] = [];

    for (let i = 0; i < 25; i++) {
        tiles.push({
            id: i + 1001,
            value: i + 1,
        });
    }

    // Shuffle tiles
    return tiles
        .map((tile: Tile) => ({ ...tile }))
        .sort(() => Math.random() - 0.5)
        .map((tile: Tile) => ({ ...tile }));
};

export const useGameStore = create<GameState>((set, get) => ({
    tiles: [],
    isComplete: false,

    initializeGame: () => {
        const tiles = createInitialTiles();
        set({ tiles, isComplete: false });
    },

    moveTile: (index1: number, index2: number) => {
        console.log(`${index1} swap ${index2}`);

        const tiles = get().tiles.map((tile) => ({ ...tile })); // Create a new copy of each tile

        const old = {...tiles[index1]};
        tiles[index1] = {...tiles[index2]};
        tiles[index2] = {...old};

        set({ tiles, isComplete: false });

        // const tileFrom = tiles.find(t => t.id === tileId); // нашли по ID нужый тайл
        // if (tileFrom == null) return;

        // const tileTo = tiles.find(t => t.currentPosition === newPosition); // нашли по ID нужый тайл
        // if (tileTo == null) return;

        // console.log(tileFrom);
        // console.log(tileTo);

        // const pos1 = tileFrom.currentPosition;
        // const pos2 = tileTo.currentPosition;
        // console.log(`${pos1} swap ${pos2}`);

        // tileFrom.currentPosition = pos2;
        // tileTo.currentPosition = pos1;

        // const tileToMove = tiles.find((t) => t.id === tileId);
        // const tileAtNewPosition = tiles.find((t) => t.currentPosition === newPosition);

        // if (tileToMove && tileAtNewPosition) {
        //     // Swap positions
        //     const oldPosition = tileToMove.currentPosition;
        //     tileToMove.currentPosition = newPosition;
        //     tileAtNewPosition.currentPosition = oldPosition;

        //     const isComplete = tiles.every((tile) => tile.currentPosition === tile.id);
        //     set({ tiles, isComplete });
        // }
    },
}));
