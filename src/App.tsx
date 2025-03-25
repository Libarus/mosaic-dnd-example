import { useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Grid } from './components/Grid';
import { useGameStore } from './store';
import { RefreshCw } from 'lucide-react';

function App() {
    const { initializeGame, isComplete } = useGameStore();

    useEffect(() => {
        initializeGame();
    }, [initializeGame]);

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
                <div className="bg-white p-8 rounded-xl shadow-xl">
                    <div className="flex items-center justify-between mb-6">
                        <h1 className="text-2xl font-bold text-gray-800">Number Puzzle</h1>
                        <button
                            onClick={initializeGame}
                            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                        >
                            <RefreshCw size={20} />
                            Reset
                        </button>
                    </div>

                    <Grid />

                    {isComplete && (
                        <div className="mt-6 p-4 bg-green-100 text-green-700 rounded-lg text-center">
                            Congratulations! You've completed the puzzle! 🎉
                        </div>
                    )}

                    <p className="mt-6 text-sm text-gray-600 text-center">
                        Drag and drop the numbers to put them in order from 1 to 100
                    </p>
                </div>
            </div>
        </DndProvider>
    );
}

export default App;
