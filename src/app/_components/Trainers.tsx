"use client";
import { useState } from "react";
import Image from "next/image";

const Trainers = () => {
  const trainer = { name: "Rasheedh", image: "/images/trainer.jpg" };
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [formErrors, setFormErrors] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    let errors = { name: "", email: "", phone: "" };
    if (formData.name.trim() === "") errors.name = "Name is required.";
    if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Valid email is required.";
    if (!/^\d{10}$/.test(formData.phone)) errors.phone = "Phone must be 10 digits.";
    setFormErrors(errors);
    return !errors.name && !errors.email && !errors.phone;
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!validateForm()) return; 

    if (confirm("Do you want to submit the form?")) {
      setIsSubmitting(true); 
      setTimeout(() => {
        setSubmitted(true);
        setIsSubmitting(false);
      }, 2000); 
    }
  };

  return (
    <section className="bg-lightBg dark:bg-darkBg trainers py-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 animate-fadeInUp text-black dark:text-white text-center">
        Meet Expert Trainers
      </h2>

      <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-12 max-w-6xl mx-auto">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <div className="aspect-[4/4] overflow-hidden rounded-lg mb-4">
            <Image
              src={trainer.image}
              alt={trainer.name}
              width={500}
              height={500}
              className="object-cover w-full h-full transition-transform duration-500 ease-in-out hover:scale-105"
            />
          </div>
          <h3 className="text-xl font-semibold animate-fadeInUp text-black dark:text-white">
            {trainer.name}
          </h3>
        </div>

        <div className="lg:w-1/2 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg transition-all duration-500 ease-in-out transform hover:shadow-2xl">
        {submitted ? (
            <div className="text-green-500 font-semibold">Form submitted successfully!</div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="relative">
                <label htmlFor="name" className="block text-black dark:text-white">
                  Name <span className="text-[#D92D20]">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform duration-300 ease-in-out ${
                    formErrors.name ? "border-red-500" : ""
                  }`}
                />
                {formErrors.name && <span className="text-red-500 text-sm">{formErrors.name}</span>}
              </div>

              <div className="relative">
                <label htmlFor="email" className="block text-black dark:text-white">
                  Email <span className="text-[#D92D20]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform duration-300 ease-in-out ${
                    formErrors.email ? "border-red-500" : ""
                  }`}
                />
                {formErrors.email && <span className="text-red-500 text-sm">{formErrors.email}</span>}
              </div>

              <div className="relative">
                <label htmlFor="phone" className="block text-black dark:text-white">
                  Phone <span className="text-[#D92D20]">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform duration-300 ease-in-out ${
                    formErrors.phone ? "border-red-500" : ""
                  }`}
                />
                {formErrors.phone && <span className="text-red-500 text-sm">{formErrors.phone}</span>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-all duration-300 ease-in-out transform ${
                  isSubmitting ? "cursor-not-allowed opacity-50" : "hover:scale-105"
                }`}
              >
                {isSubmitting ? "Submitting..." : "Register"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
