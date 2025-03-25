import { useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Grid } from './components/Grid';
import { useGameStore } from './store';
import { RefreshCw } from 'lucide-react';

function App() {
    const { initializeGame, isComplete, image, tick } = useGameStore();

    useEffect(() => {
        initializeGame();
    }, [initializeGame]);

    const formatTime = (seconds: number): string => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;

        return [
            hours.toString().padStart(2, '0'),
            minutes.toString().padStart(2, '0'),
            secs.toString().padStart(2, '0'),
        ].join(':');
    }

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
                <div className="bg-white p-8 rounded-xl shadow-xl">
                    <div className="flex items-center justify-between mb-6">
                        <h1 className="text-2xl font-bold text-gray-800">Image Puzzle</h1>
                        <button
                            onClick={initializeGame}
                            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                        >
                            <RefreshCw size={20} />
                            Reset
                        </button>
                    </div>

                    <div className="flex gap-4">
                        <div>
                            <Grid />
                        </div>
                        <div>
                            <div>
                                <img src={image} width={320} />
                            </div>
                            <div className='text-4xl flex items-center justify-center p-5' style={{ fontFamily: 'monospace'}}>
                                {formatTime(tick)}
                            </div>
                        </div>
                    </div>

                    {isComplete && (
                        <div className="mt-6 p-4 bg-green-100 text-green-700 rounded-lg text-center">
                            Congratulations! You've completed the puzzle! 🎉
                        </div>
                    )}

                    <p className="mt-6 text-sm text-gray-600 text-center">
                        Перетаскивайте элементы для того, чтобы получилась цельная картинка
                    </p>
                </div>
            </div>
        </DndProvider>
    );
}

export default App;
