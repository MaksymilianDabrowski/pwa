import React, { useState } from 'react';
import Image from 'next/image';
import PomiaryImage from "../images/Pomiary.png"; 

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

export default function Measure() {
    const [unit, setUnit] = useState("metric");
    const [measurements, setMeasurements] = useState({
        neck: "",
        arm: "",
        forearm: "",
        wrist: "",
        chest: "",
        waist: "",
        hips: "",
        thigh: "",
        calf: "",
        weight: "",
    });

    const handleUnitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUnit(e.target.value);
        setMeasurements({
            weight: "",
            neck: "",
            arm: "",
            forearm: "",
            wrist: "",
            chest: "",
            waist: "",
            hips: "",
            thigh: "",
            calf: "",         
        });
    };

    const handleChange = (field: keyof typeof measurements) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setMeasurements({
            ...measurements,
            [field]: e.target.value,
        });
    };

    const handleSave = () => {
        alert('Pomiary zapisane');
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100">
            {/* Nagłówek i wybór jednostek */}
            <div className="mb-6">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Pomiar Ciała</h2>
                <div className="flex justify-center">
                    <label className="mr-4">
                        <input
                            type="radio"
                            name="unit"
                            value="metric"
                            checked={unit === "metric"}
                            onChange={handleUnitChange}
                        />
                        <span className="ml-2">cm/kg (Metric)</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="unit"
                            value="imperial"
                            checked={unit === "imperial"}
                            onChange={handleUnitChange}
                        />
                        <span className="ml-2">in/lbs (Imperial)</span>
                    </label>
                </div>
            </div>

            <div className="flex justify-center space-x-10">
                {/* Zdjęcie */}
                <div className="inline-block align-top">
                    <Image 
                        src={PomiaryImage} 
                        alt="Pomiar Ciała" 
                        width={580} // Wielkość obrazu
                    />
                </div>

                {/* Formularz */}
                <div className="flex-1 max-w-lg">
                    <div className="space-y-4">
                        <MeasurementField 
                            label="Waga"
                            value={measurements.weight}
                            onChange={handleChange("weight")}
                            unit={unit === "metric" ? "kg" : "lbs"}
                        />
                        <MeasurementField 
                            label="Kark"
                            value={measurements.neck}
                            onChange={handleChange("neck")}
                            unit={unit === "metric" ? "cm" : "in"}
                        />
                        <MeasurementField 
                            label="Ramię"
                            value={measurements.arm}
                            onChange={handleChange("arm")}
                            unit={unit === "metric" ? "cm" : "in"}
                        />
                        <MeasurementField 
                            label="Przedramię"
                            value={measurements.forearm}
                            onChange={handleChange("forearm")}
                            unit={unit === "metric" ? "cm" : "in"}
                        />
                        <MeasurementField 
                            label="Nadgarstek"
                            value={measurements.wrist}
                            onChange={handleChange("wrist")}
                            unit={unit === "metric" ? "cm" : "in"}
                        />
                        <MeasurementField 
                            label="Klatka Piersiowa"
                            value={measurements.chest}
                            onChange={handleChange("chest")}
                            unit={unit === "metric" ? "cm" : "in"}
                        />
                        <MeasurementField 
                            label="Talia (brzuch)"
                            value={measurements.waist}
                            onChange={handleChange("waist")}
                            unit={unit === "metric" ? "cm" : "in"}
                        />
                        <MeasurementField 
                            label="Biodra"
                            value={measurements.hips}
                            onChange={handleChange("hips")}
                            unit={unit === "metric" ? "cm" : "in"}
                        />
                        <MeasurementField 
                            label="Udo"
                            value={measurements.thigh}
                            onChange={handleChange("thigh")}
                            unit={unit === "metric" ? "cm" : "in"}
                        />
                        <MeasurementField 
                            label="Łydka"
                            value={measurements.calf}
                            onChange={handleChange("calf")}
                            unit={unit === "metric" ? "cm" : "in"}
                        />
                    </div>
                    <div className="flex justify-center">
    <button
        onClick={handleSave}
        className="mt-4 w-4/5 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 ml-12"
    >
        Zapisz
    </button>
</div>
                </div>
            </div>
        </div>
    );
}
