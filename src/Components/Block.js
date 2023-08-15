import React,{useState}from 'react'
const  Block = (props) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      setSelectedFile(file);
    };
    return (
        <div style={{
          backgroundColor: 'skyblue',
          borderRadius: '10px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        //   alignItems: 'center',
          padding: '20px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            width: '400px',
            height: '300px', 
            margin: '10px',
        }} 
        
        className="pharmacy-block">
          <div style={{
            fontSize: '18px',
            fontWeight: 'bold',
            marginTop: '10px',
          }} className="block-title">{props.name}</div>
          <div style={{
            flexGrow: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }} className="block-content">
            <img src={props.image} alt="Shopping Cart" style={{
              width: '70px',
              height: '70px',
            }} className="shopping-cart-image" />
          </div>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '10px',
                }}>
                  {props.button==="Upload"?
                  <input type="file"
                  style={{
                    fontSize: '15px',
                    fontWeight: 'bold',
                    marginTop: '10px',
                  }}

                onChange={handleFileChange} />
                :null}

                <button className="block-btn"      
                >{props.button}</button>
                
            </div>
        </div>
      );
    };

export default Block
