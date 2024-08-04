import React from 'react'

export default function Progress({ bgcolor, completed }) {
    const containerStyles = {
        height: 10,
        width: '100%',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
      
      }
    
      const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
      }
    
    
      return (
        <div style={containerStyles}>
          <div style={fillerStyles}>
          </div>
        </div>
      );
    };
    
   
