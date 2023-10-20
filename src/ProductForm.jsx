// Import required React and other libraries
import React, { useState, useRef } from 'react';
// Import CSS styles
import './ProductForm.css';

// Define the ProductForm component
const ProductForm = () => {
  // Define state to store error message
  const [errorMessage, setErrorMessage] = useState('');

  // Define refs to store references to input elements
  const nameRef = useRef(null);
  const descriptionRef = useRef(null);
  const categoryRef = useRef(null);
  const quantityRef = useRef(null);
  const priceRef = useRef(null);

  // Define function to handle form submission
  const handleSubmit = (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();
    // Get values from input elements using refs
    const name = nameRef.current.innerText;
    const description = descriptionRef.current.innerText;
    const category = categoryRef.current.innerText;
    const quantity = quantityRef.current.innerText;
    const price = priceRef.current.innerText;

    // Validate input values and set error message if invalid
    if (!name.match(/^[a-zA-Z\s]+$/)) {
      setErrorMessage('Please enter a valid name (only letters and spaces)');
      return;
    } else if (!description.match(/^[a-zA-Z\s]+$/)) {
      setErrorMessage('Please enter a valid description (only letters and spaces)');
      return;
    } else if (!category.match(/^[a-zA-Z\s]+$/)) {
      setErrorMessage('Please enter a valid category (only letters and spaces)');
      return;
    } else if (!quantity.match(/^[0-9]+(\.[0-9]+)?$/)) {
      setErrorMessage('Please enter a valid quantity (only integers or decimal numbers)');
      return;
    } else if (!price.match(/^[0-9]+(\.[0-9]+)?$/)) {
      setErrorMessage('Please enter a valid price (only integers or decimal numbers)');
      return;
    }

    // Reset error message and alert with form values if validation passes
    setErrorMessage('');
    alert(`Form submitted with:
    Name: ${name}
    Description: ${description}
    Category: ${category}
    Quantity: ${quantity}
    Price: ${price}`);
  };

  // Define function to handle form cancel
  const handleCancel = () => {
    // Clear input element values
    nameRef.current.innerText = '';
    descriptionRef.current.innerText = '';
    categoryRef.current.innerText = '';
    quantityRef.current.innerText = '';
    priceRef.current.innerText = '';
  };

  // Return the form UI elements
  return (
    <div className="formContainer">
      <h1 className="heading">New Product</h1>
      <form onSubmit={handleSubmit}>
        {/* Input wrapper for Name */}
        <div className="inputWrapper">
          <span>Name:</span>
          <div ref={nameRef} contentEditable={true} className="editableInput"></div>
          <hr className="inputLine" />
        </div>
        {/* Input wrapper for Description */}
        <div className="inputWrapper">
          <span>Description:</span>
          <div ref={descriptionRef} contentEditable={true} className="editableInput"></div>
          <hr className="inputLine" />
        </div>
        {/* Input wrapper for Category */}
        <div className="inputWrapper">
          <span>Category:</span>
          <div ref={categoryRef} contentEditable={true} className="editableInput"></div>
          <hr className="inputLine" />
        </div>
        {/* Input wrapper for Quantity */}
        <div className="inputWrapper">
          <span>Quantity:</span>
          <div ref={quantityRef} contentEditable={true} className="editableInput"></div>
          <hr className="inputLine" />
        </div>
        {/* Input wrapper for Price */}
        <div className="inputWrapper">
          <span>Price:</span>
          <div ref={priceRef} contentEditable={true} className="editableInput"></div>
          <hr className="inputLine" />
        </div>
        {/* Error message display */}
        <div className="errorWrapper">
          {errorMessage && <div className="errorMessage">{errorMessage}</div>}
        </div>
        {/* Submit and Cancel buttons */}
        <div className="buttonWrapper">
          <button type="submit" className="submitButton">SUBMIT</button>
          <button type="button" onClick={handleCancel} className="cancelButton">CANCEL</button>
        </div>
      </form>
    </div>
  );
};

// Export the ProductForm component
export default ProductForm;
