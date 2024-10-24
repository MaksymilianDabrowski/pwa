const MeasurementField = ({
    label,
    value,
    onChange,
    unit,
}: {
    label: string;
    value: string; // Zmiana typu na string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    unit: string;
}) => (
    <div className="flex items-center justify-center">
        <div className="flex-grow text-right">
            <label className="text-sm font-medium text-gray-700">{label}</label>
        </div>
        <input
            type="number"
            value={value}
            onChange={onChange}
            className="w-32 p-2 ml-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Pomiar"
            min="0"
            step="0.01"
        />
        <span className="ml-2">{unit}</span>
    </div>
);
