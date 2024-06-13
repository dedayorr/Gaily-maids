"use client"
import React, {useState} from 'react'

const Hiring = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        workedWithCleaningBusiness: false,
        hasCar: false,
        hasInsurance: false,
      });
    
      const handleChange = (e: { target: { name: any; value: any; type: any; checked: any; }; }) => {
        const { name, value, type, checked } = e.target;
        setFormData({
          ...formData,
          [name]: type === 'checkbox' ? checked : value,
        });
      };
    
      const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log(formData);
      };

  return (
    <div>    <form className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow-md" onSubmit={handleSubmit}>
    <div className="mb-4">
      <label className="block text-gray-700">First Name</label>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700">Last Name</label>
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700">Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700">Phone Number</label>
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700">Have you worked with a cleaning business before?</label>
      <input
        type="checkbox"
        name="workedWithCleaningBusiness"
        checked={formData.workedWithCleaningBusiness}
        onChange={handleChange}
        className="mt-2"
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700">Do you have a car?</label>
      <div className="flex items-center">
        <label className="mr-4">
          <input
            type="radio"
            name="hasCar"
            value="true"
            checked={formData.hasCar === 'true'}
            onChange={handleChange}
            className="mr-2"
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="hasCar"
            value="false"
            checked={formData.hasCar === 'false'}
            onChange={handleChange}
            className="mr-2"
          />
          No
        </label>
      </div>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700">Do you have insurance?</label>
      <div className="flex items-center">
        <label className="mr-4">
          <input
            type="radio"
            name="hasInsurance"
            value="true"
            checked={formData.hasInsurance === 'true'}
            onChange={handleChange}
            className="mr-2"
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="hasInsurance"
            value="false"
            checked={formData.hasInsurance === 'false'}
            onChange={handleChange}
            className="mr-2"
          />
          No
        </label>
      </div>
    </div>
    <button type="submit" className="w-full px-4 py-2 text-white bg-[#823ec9] rounded-md hover:bg-white bore">
      Submit
    </button>
  </form>
</div>
  )
}

export default Hiring