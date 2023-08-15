import React from 'react';
import {FaShoppingCart} from 'react-icons/fa';
const MedicineCard = ({ name, company, imageSrc, description,addToCart }) => {
  const cardStyles = {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
    margin: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    width: '400px',
    height: '200px',
  };

  const imageStyles = {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    marginRight: '15px',
  };

  const detailsStyles = {
    flexGrow: '1',
  };

  const nameStyles = {
    margin: '0',
    fontSize: '1.25rem',
  };

  const companyStyles = {
    margin: '5px 0',
    color: '#888',
  };

  const descriptionStyles = {
    margin: '0',
    fontSize: '0.9rem',
  };
  const handleAddToCart = () => {
    console.log(name);
    const medicine = {
      name: name,
      company: company,
      imageSrc: imageSrc,
      description: description,
    };

    addToCart(medicine);
  };

  return (
    <div style={cardStyles} className="medicine-card">
      <img src={imageSrc} alt={name} style={imageStyles} className="medicine-image" />
      <div style={detailsStyles} className="medicine-details">
        <h3 style={nameStyles} className="medicine-name">{name}</h3>
        <p style={companyStyles} className="medicine-company">{company}</p>
        <p style={descriptionStyles} className="medicine-description">{
        
        description.length > 100
            ? `${description.substring(0, 100)}...`
            :
            description
            
        }</p>
      </div>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '10px',

            }}>
            <FaShoppingCart className="cart-icon"
              style={{
                marginLeft: "10px",
                color: "green",
                cursor: "pointer",
                fontSize: "30px",
                marginTop: "5px",
                marginRight: "10px",
              }}
              onClick={handleAddToCart}
            />
            {/* <button className="block-btn"
            onClick={addToCart(name)}
            >Add to Cart</button> */}
        </div>
    </div>
  );
};

export default MedicineCard;
