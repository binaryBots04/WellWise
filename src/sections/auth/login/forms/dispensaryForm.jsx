// import React, { useState } from 'react';

// const DispensaryForm = () => {
//     const [formData, setFormData] = useState({
//         dispensaryName: '',
//         ownerName: '',
//         licenseNumber: '',
//         address: '',
//         city: '',
//         state: '',
//         zipCode: '',
//         phoneNumber: '',
//         email: '',
//         website: '',
//         openingHours: '',
//         closingHours: '',
//         services: [],
//         description: '',
//     });

//     const [errors, setErrors] = useState({});

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleCheckboxChange = (e) => {
//         const { value, checked } = e.target;
//         setFormData((prevState) => {
//             const services = checked
//                 ? [...prevState.services, value]
//                 : prevState.services.filter((service) => service !== value);
//             return { ...prevState, services };
//         });
//     };

//     const validateForm = () => {
//         const newErrors = {};
//         if (!formData.dispensaryName) newErrors.dispensaryName = 'Dispensary name is required';
//         if (!formData.ownerName) newErrors.ownerName = 'Owner name is required';
//         if (!formData.licenseNumber) newErrors.licenseNumber = 'License number is required';
//         if (!formData.address) newErrors.address = 'Address is required';
//         if (!formData.city) newErrors.city = 'City is required';
//         if (!formData.state) newErrors.state = 'State is required';
//         if (!formData.zipCode) newErrors.zipCode = 'Zip code is required';
//         if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone number is required';
//         if (!formData.email) newErrors.email = 'Email is required';
//         if (!formData.openingHours) newErrors.openingHours = 'Opening hours are required';
//         if (!formData.closingHours) newErrors.closingHours = 'Closing hours are required';
//         setErrors(newErrors);
//         return Object.keys(newErrors).length === 0;
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (validateForm()) {
//             console.log('Form submitted:', formData);
//             alert('Form submitted successfully!');
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit} className="dispensary-form">
//             <h2>Dispensary Registration Form</h2>
//             <div>
//                 <label>Dispensary Name:</label>
//                 <input
//                     type="text"
//                     name="dispensaryName"
//                     value={formData.dispensaryName}
//                     onChange={handleChange}
//                 />
//                 {errors.dispensaryName && <span className="error">{errors.dispensaryName}</span>}
//             </div>
//             <div>
//                 <label>Owner Name:</label>
//                 <input
//                     type="text"
//                     name="ownerName"
//                     value={formData.ownerName}
//                     onChange={handleChange}
//                 />
//                 {errors.ownerName && <span className="error">{errors.ownerName}</span>}
//             </div>
//             <div>
//                 <label>License Number:</label>
//                 <input
//                     type="text"
//                     name="licenseNumber"
//                     value={formData.licenseNumber}
//                     onChange={handleChange}
//                 />
//                 {errors.licenseNumber && <span className="error">{errors.licenseNumber}</span>}
//             </div>
//             <div>
//                 <label>Address:</label>
//                 <input
//                     type="text"
//                     name="address"
//                     value={formData.address}
//                     onChange={handleChange}
//                 />
//                 {errors.address && <span className="error">{errors.address}</span>}
//             </div>
//             <div>
//                 <label>City:</label>
//                 <input
//                     type="text"
//                     name="city"
//                     value={formData.city}
//                     onChange={handleChange}
//                 />
//                 {errors.city && <span className="error">{errors.city}</span>}
//             </div>
//             <div>
//                 <label>State:</label>
//                 <input
//                     type="text"
//                     name="state"
//                     value={formData.state}
//                     onChange={handleChange}
//                 />
//                 {errors.state && <span className="error">{errors.state}</span>}
//             </div>
//             <div>
//                 <label>Zip Code:</label>
//                 <input
//                     type="text"
//                     name="zipCode"
//                     value={formData.zipCode}
//                     onChange={handleChange}
//                 />
//                 {errors.zipCode && <span className="error">{errors.zipCode}</span>}
//             </div>
//             <div>
//                 <label>Phone Number:</label>
//                 <input
//                     type="text"
//                     name="phoneNumber"
//                     value={formData.phoneNumber}
//                     onChange={handleChange}
//                 />
//                 {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
//             </div>
//             <div>
//                 <label>Email:</label>
//                 <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                 />
//                 {errors.email && <span className="error">{errors.email}</span>}
//             </div>
//             <div>
//                 <label>Website:</label>
//                 <input
//                     type="text"
//                     name="website"
//                     value={formData.website}
//                     onChange={handleChange}
//                 />
//             </div>
//             <div>
//                 <label>Opening Hours:</label>
//                 <input
//                     type="time"
//                     name="openingHours"
//                     value={formData.openingHours}
//                     onChange={handleChange}
//                 />
//                 {errors.openingHours && <span className="error">{errors.openingHours}</span>}
//             </div>
//             <div>
//                 <label>Closing Hours:</label>
//                 <input
//                     type="time"
//                     name="closingHours"
//                     value={formData.closingHours}
//                     onChange={handleChange}
//                 />
//                 {errors.closingHours && <span className="error">{errors.closingHours}</span>}
//             </div>
//             <div>
//                 <label>Services Offered:</label>
//                 <div>
//                     <label>
//                         <input
//                             type="checkbox"
//                             value="Delivery"
//                             checked={formData.services.includes('Delivery')}
//                             onChange={handleCheckboxChange}
//                         />
//                         Delivery
//                     </label>
//                     <label>
//                         <input
//                             type="checkbox"
//                             value="In-Store Pickup"
//                             checked={formData.services.includes('In-Store Pickup')}
//                             onChange={handleCheckboxChange}
//                         />
//                         In-Store Pickup
//                     </label>
//                     <label>
//                         <input
//                             type="checkbox"
//                             value="Consultation"
//                             checked={formData.services.includes('Consultation')}
//                             onChange={handleCheckboxChange}
//                         />
//                         Consultation
//                     </label>
//                 </div>
//             </div>
//             <div>
//                 <label>Description:</label>
//                 <textarea
//                     name="description"
//                     value={formData.description}
//                     onChange={handleChange}
//                 />
//             </div>
//             <button type="submit">Submit</button>
//         </form>
//     );
// };

// export default DispensaryForm;