import { create } from 'zustand';
import { Tile } from './types';

interface GameState {
    tiles: Tile[];
    isComplete: boolean;
    image: string;
    tick: number;
    initializeGame: () => void;
    moveTile: (tileId: number, newPosition: number) => void;
}

let tickTimer: any;

const createInitialTiles = (): Tile[] => {
    const tiles: Tile[] = [];

    for (let i = 0; i < 100; i++) {
        tiles.push({
            id: i + 1001,
            value: i,
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
    image: '',
    tick: 0,

    initializeGame: () => {
        const tiles = createInitialTiles();
        clearInterval(tickTimer);
        tickTimer = setInterval(() => {  set({ tick: get().tick + 1 }); }, 1000);
        set({ tiles, isComplete: false, image: `img00${Math.floor(Math.random() * 4) + 1}.jpg`, tick: 0 });
    },

    moveTile: (index1: number, index2: number) => {
        console.log(`${index1} swap ${index2}`);

        const tiles = get().tiles.map((tile) => ({ ...tile })); // Create a new copy of each tile

        const old = {...tiles[index1]};
        tiles[index1] = {...tiles[index2]};
        tiles[index2] = {...old};

        set({ tiles, isComplete: false });
    },
}));
