import { useLogs } from '@/context/logContext';

function EnableConsole() {
    const {enableLogs, setEnableLogs} = useLogs();

    const handleToggleLogs = () => {
        setEnableLogs((prevState:any) => !prevState);
    };

    return (
        <>
            <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-gray-700 mr-2">Console Logging:</span>
                <label htmlFor="toggle" className="flex items-center cursor-pointer">
                    <div className="relative">
                        <input
                            id="toggle"
                            type="checkbox"
                            className="sr-only"
                            checked={enableLogs}
                            onChange={handleToggleLogs}
                        />
                        <div className="block bg-gray-600 w-14 h-8 rounded-full" />
                        <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition transform ${enableLogs ? 'translate-x-6' : 'translate-x-0'}`} />
                    </div>
                </label>
            </div>
            {/* Conditionally render the usePersonLogger hook based on enableLogs state */}
            {enableLogs}
        </>
    );
}

export default EnableConsole;
