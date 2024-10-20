import React, { useState } from "react";

export default function Calculator() {
    const [weight, setWeight] = useState<number | "">("");
    const [height, setHeight] = useState<number | "">("");
    const [bmi, setBmi] = useState<number | null>(null);
    const [idealWeight, setIdealWeight] = useState<number | null>(null);
    const [gender, setGender] = useState<string>("female");
    const [description, setDescription] = useState<string>("");
  
    const calculateBMI = () => {
      if (weight && height) {
        const bmiValue = weight / Math.pow(height / 100, 2);
        setBmi(bmiValue);
  
        // Ustalanie idealnej wagi na podstawie wzoru Broca
        let ideal = height - 100;
        ideal *= gender === "female" ? 0.9 : 0.95;
        setIdealWeight(ideal);
  
        // Ustalanie opisu w zależności od BMI
        let desc = "";
        if (bmiValue < 16) {
          desc = "Twoje BMI wskazuje na wygłodzenie. To stan groźny dla zdrowia, który może prowadzić do poważnych problemów, takich jak osłabienie układu odpornościowego, brak energii i problemy z sercem. Koniecznie skontaktuj się z lekarzem lub dietetykiem, aby rozpocząć odpowiednie leczenie.";
        } else if (bmiValue < 17) {
          desc = "Twoje BMI wskazuje na wychudzenie. Może to świadczyć o niedostatecznym dostarczaniu składników odżywczych, co negatywnie wpływa na funkcjonowanie organizmu. Zadbaj o zbilansowaną dietę i skonsultuj się ze specjalistą, aby poprawić stan zdrowia.";
        } else if (bmiValue < 18.5) {
          desc = "Twoje BMI wskazuje na niedowagę. Choć nie jest to stan krytyczny, może prowadzić do osłabienia organizmu i niedoboru witamin oraz minerałów. Zwróć uwagę na zróżnicowaną dietę i rozważ konsultację z dietetykiem, aby zwiększyć masę ciała w zdrowy sposób.";
        } else if (bmiValue < 25) {
          desc = "Twoje BMI jest w normie. Oznacza to, że masz zdrową masę ciała. Aby ją utrzymać, kontynuuj zrównoważoną dietę bogatą w warzywa i owoce oraz regularną aktywność fizyczną.";
        } else if (bmiValue < 30) {
          desc = "Twoje BMI wskazuje na nadwagę. Może to zwiększać ryzyko wystąpienia chorób takich jak cukrzyca typu 2 czy problemy z sercem. Warto rozważyć wprowadzenie zdrowszej diety i regularnej aktywności fizycznej, aby stopniowo zredukować masę ciała.";
        } else if (bmiValue < 35) {
          desc = "Twoje BMI wskazuje na otyłość I stopnia. Otyłość może prowadzić do poważnych problemów zdrowotnych, takich jak nadciśnienie, cukrzyca i choroby serca. Ważne jest podjęcie działań w kierunku zrzucenia zbędnych kilogramów, zaczynając od zmiany diety i wprowadzenia aktywności fizycznej.";
        } else if (bmiValue < 40) {
          desc = "Twoje BMI wskazuje na otyłość II stopnia. Stan ten znacząco zwiększa ryzyko poważnych schorzeń, takich jak problemy sercowo-naczyniowe, cukrzyca czy choroby stawów. Zalecana jest konsultacja z lekarzem i dietetykiem, którzy pomogą w opracowaniu skutecznego planu odchudzania.";
        } else {
          desc = "Twoje BMI wskazuje na skrajną otyłość, co może prowadzić do wielu poważnych problemów zdrowotnych, takich jak choroby serca, cukrzyca, problemy z ruchomością czy nawet skrócenie długości życia. Konieczna jest pilna konsultacja z lekarzem, aby podjąć leczenie oraz wprowadzić zmiany w stylu życia.";
        }
        setDescription(desc);
      }
    };
  
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
            <p className="text-md">Idealna waga: {idealWeight?.toFixed(2) || 'Nieobliczona'} kg</p>
            <p className="text-md">{description}</p>
          </div>
        )}
      </div>
    );
  }