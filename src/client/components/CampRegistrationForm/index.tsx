import React from "react";
import type { CampRegistrationFormProps } from "./types";

const infoBoxClass = "bg-intraservice-yellow text-intraservice-black px-4 py-2 rounded-intraservice shadow-intraservice font-medium mb-6";

const CampRegistrationForm: React.FC<CampRegistrationFormProps> = () => {
  return (
    <form className="max-w-2xl mx-auto bg-white border border-intraservice-gray rounded-intraservice p-8 mt-8 shadow-intraservice font-sans">
      {/* Title and description */}
      <h1 className="text-4xl font-bold mb-2 text-intraservice-black">Anmälan lägerverksamhet</h1>
      <p className="mb-8 text-intraservice-black">Fyll i formuläret nedan för att anmäla dig till lägerverksamhet 2025.</p>

      {/* Personuppgifter */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-intraservice-black">Personuppgifter</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block font-medium mb-1 text-intraservice-black">För- och efternamn*</label>
          <input id="name" name="name" type="text" className="w-full border border-intraservice-gray rounded-intraservice px-3 py-2" required placeholder="Skriv ditt för- och efternamn" />
        </div>
        <div>
          <label htmlFor="email" className="block font-medium mb-1 text-intraservice-black">E-post*</label>
          <input id="email" name="email" type="email" className="w-full border border-intraservice-gray rounded-intraservice px-3 py-2" required placeholder="namn@example.com" />
        </div>
      </section>

      {/* Aktiviteter */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-intraservice-black">Aktiviteter</h2>
        {/* Info box for activities */}
        <div className="mb-4">
          <label className="block font-medium mb-1 text-intraservice-black">Välj 3 aktiviteter du är intresserad av</label>
          <select className="w-full border border-intraservice-gray rounded-intraservice px-3 py-2" multiple aria-label="Välj aktiviteter">
            <option>Paddling</option>
            <option>Matlagning</option>
            <option>Orientering</option>
            <option>Klättring</option>
            <option>Hantverk</option>
          </select>
        </div>
      </section>

      {/* Submit button and info */}
      <button type="submit" className="bg-blue-800 text-white border border-blue-800 rounded-intraservice px-6 py-2 font-medium hover:bg-blue-900 hover:border-blue-900 transition">Skicka in anmälan</button>
    </form>
  );
};

export default CampRegistrationForm;
