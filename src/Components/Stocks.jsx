import React, { useState } from 'react'
import Pharmacy from './Pharmacy'

function Stocks() {

  const [drugs, setDrugs] = useState([
    { id: "002", 
    drugname: "Acetaminophen",
    classification: "Analgesic", 
    brandname: "Panadol",
    active: false },
    { id: "003",
      drugname: "Insulin", 
      classification: "Antidiabetic",
      brandname: "Lantus", 
      active: true },
    { id: "004", 
      drugname: "Ibuprofen", 
      classification: "Analgesic", 
      brandname: "Brufen", 
      active: false },
    { id: "005", 
      drugname: "Metformin", 
      classification: "Antidiabetic", 
      brandname: "Glucomet", 
      active: true },
    { id: "006", 
      drugname: "Furosemide", 
      classification: "Antihypertensive", 
      brandname: "Lasix", 
      active: true },
    { id: "007", 
      drugname: "Loperamide", 
      classification: "Antidiarrheal", 
      brandname: "Imodium", 
      active: true },
    { id: "008", 
      drugname: "Phenytoin", 
      classification: "Anticonvulsant", 
      brandname: "Dilatin", 
      active: true },
    { id: "009", 
      drugname: "Azithromycin", 
      classification: "Antibiotic", 
      brandname: "Azycap", 
      active: true },
    { id: "010", 
      drugname: "Artemether-Lumefentrine", 
      classification: "Antimalarial", 
      brandname: "Lartem", 
      active: true },
    { id: "011", 
      drugname: "Metronidazole", 
      classification: "Antibiotic", 
      brandname: "Flagyl", 
      active: true },
    { id: "012", 
      drugname: "Cetrizine", 
      classification: "Antihistamine", 
      brandname: "Metrizin", 
      active: true },
    { id: "013", 
      drugname: "Hydrochlorothiazide", 
      classification: "Antihyphertensive", 
      brandname: "HCTZ", 
      active: true },
  ])


  const [newDrug, setNewDrug] = useState({
    id: "",
    drugname: "",
    classification: "",
    brandname: "",
    active: true
  })

  
  const addDrug = (e) => {
    e.preventDefault()

    
    setDrugs([...drugs, newDrug])

  
    setNewDrug({
      id: "",
      drugname: "",
      classification: "",
      brandname: "",
      active: true,
    })
  }

  return (
    <>
    <div className="max-w-6xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        📦 Active Pharmacy Stocks
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {drugs
          .filter((drug) => drug.active === true)
          .map((drug) => (
            <Pharmacy key={drug.id} data={drug} />
          ))}
      </div>


<form onSubmit={addDrug} 
className="bg-white p-4 rounded-lg shadow mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">

  <input
          type="text"
          placeholder="ID"
          className="border p-2 rounded"
          value={newDrug.id}
          onChange={(e) => setNewDrug({ ...newDrug, id: e.target.value })}
          required
        />

  <input
          type="text"
          placeholder="Drug Name"
          className="border p-2 rounded"
          value={newDrug.drugname}
          onChange={(e) => setNewDrug({ ...newDrug, drugname: e.target.value })}
          required
        />

  <input
          type="text"
          placeholder="Classification"
          className="border p-2 rounded"
          value={newDrug.classification}
          onChange={(e) => setNewDrug({ ...newDrug, classification: e.target.value })}
          required
        />

  <input
          type="text"
          placeholder="Brand Name"
          className="border p-2 rounded"
          value={newDrug.brandname}
          onChange={(e) => setNewDrug({ ...newDrug, brandname: e.target.value })}
          required
        />

  <button
          type="submit"
          className="col-span-1 sm:col-span-2 bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Add Medication
  </button>
  </form>
  </div>
  </>
  )
}

export default Stocks
