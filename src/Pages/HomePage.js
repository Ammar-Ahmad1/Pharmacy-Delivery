import React,{useState} from "react";
import TopBar from "../Components/TopBar";
import Block from "../Components/Block";
import MedicineCard from "../Components/MedicineCard";
import "../App.css";
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const HomePage = () => {
    const dummyMedicines = [
        {
          name: "Dolo 650",
          company: "Micro Labs",
          imageSrc: "/paracetamol.jpeg",
          description: "Dolo 650 Tablet is a medicine used to relieve pain and to reduce fever. It is used to treat many conditions such as headache, body ache, toothache and common cold. It works by inhibiting the release of certain chemical that cause pain and fever.",
        },
        // Add more dummy medicine objects as needed
        {
          name: "MedicineX",
          company: "PharmaCorp",
          imageSrc: "/paracetamol.jpeg",
          description: "MedicineX is a powerful medication that targets various ailments and provides relief. It's known for its quick action and minimal side effects.",
        },
        {
          name: "HealAll",
          company: "HealthMeds",
          imageSrc: "/paracetamol.jpeg",
          description: "HealAll is a comprehensive solution for a wide range of health issues. Its unique formula ensures rapid recovery and improved well-being.",
        },
        // More random medicines
        {
          name: "ReliefPlus",
          company: "RemedyPharma",
          imageSrc: "/paracetamol.jpeg",
          description: "ReliefPlus offers a holistic approach to wellness. It combines ancient remedies with modern science to provide effective relief.",
        },
        {
          name: "CureMax",
          company: "WellnessMeds",
          imageSrc: "/paracetamol.jpeg",
          description: "CureMax is a trusted name in healthcare. It's dedicated to bringing quality medicines that promote well-being.",
        },
        {
          name: "VitalityCaps",
          company: "VitalMeds",
          imageSrc: "/paracetamol.jpeg",
          description: "VitalityCaps is your source of energy and vitality. Its natural ingredients work together to boost your overall health.",
        },
        // Add more random medicines here
        // ...
      ];
      const [medicines, setMedicines] = useState(dummyMedicines);
    const searchMedicine = (medicineName) => {
      const filteredMedicines = dummyMedicines.filter((medicine) =>
        medicine.name.toLowerCase().includes(medicineName.toLowerCase())
      );
      setMedicines(filteredMedicines);
    };
    const Logout = () => {
      localStorage.removeItem('token');
      window.location.href = '/';
      toast.success('Logged out successfully!');
    }
    const addToCart = (medicine) => {
      toast.success(`${medicine.name} added to cart!`);
    
      // Retrieve cart items from local storage
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      console.log(cart);
      // Push the new medicine object to the cart array
      // cart.push(medicine);
    
      // Save the updated cart array back to local storage
      localStorage.setItem("cart", JSON.stringify(cart));
    
      // Optional: Log the updated cart for debugging
    };
    
    
    const uploadFile = () => {
      //select file from system can be pdf or image

    }

  return (
    <div className="App">
      <ToastContainer />
      <TopBar 
      searchMedicine={searchMedicine}
      Logout={Logout}
      />
      <h1 className="text-center my-5">Pharmacy Delivery</h1>
      <Container className="my-5">
        <Row className="align-items-center">
          <Col md={10} >
            <Block name="Pharmacy" image="/R.png" button="Shop Now" />   
          </Col>
          <Col md={2}
          >
            <Block name="Have a prescription?" image="/pres.jpeg" button="Upload" />
          </Col>
        </Row>
      </Container>
      <h2 className="text-center my-5">Featured Medicines</h2>
      <Container>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            // justifyContent: "center",
          }}
        >
          {medicines.map((medicine, index) => (
            
              <MedicineCard
                name={medicine.name}
                company={medicine.company}
                imageSrc={medicine.imageSrc}
                description={medicine.description}
                addToCart={addToCart}
              />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
