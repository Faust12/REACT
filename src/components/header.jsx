import React from 'react';

class Header extends React.Component {
    render() {
      return (
        <div className="header">
          <h1>Shopping List for {this.props.name}</h1>
          <ul>
            <li>Instagram</li>
            <li>WhatsApp</li>
            <li>Oculus</li>
          </ul>
        </div>
      );
    }
  }
  
export default Header;