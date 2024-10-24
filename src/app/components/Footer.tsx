import React from 'react'

export default function Footer() {
  return (
    <div className='border-t mt-10 p-4'>
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Kalkulator BMI</h2>

      <form className="max-w-md mx-auto">
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">Waga (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
            className="mt-1 block w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Wprowadź swoją wagę"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">Wzrost (cm)</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
            className="mt-1 block w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Wprowadź swój wzrost"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">Płeć</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="mt-1 block w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="female">Kobieta</option>
            <option value="male">Mężczyzna</option>
          </select>
        </div>

        <button
          type="button" 
          className="w-full bg-blue-600 text-white py-3 rounded-md mt-4 hover:bg-blue-700 transition duration-200"
          onClick={calculateBMI} 
        >
          Oblicz BMI i wagę idealną
        </button>
      </form>

      {bmi !== null && (
        <div className="max-w-md mx-auto mt-6 bg-gray-50 p-4 rounded-md shadow-sm"> 
          <p className="text-lg font-semibold">Twoje BMI: {bmi.toFixed(2)}</p>
          <p className="text-md font-semibold">Idealna waga: {idealWeight?.toFixed(2) || 'Nieobliczona'} kg</p>
          <p className="text-md text-center">{description}</p>
        </div>
      )}
    </div>
  );
}