import React, { Component } from 'react';
import './css/Nav.css';
import MaterialIcon from 'material-icons-react';

class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><button>
            <MaterialIcon icon="home" color="#212121"  />
          </button></li>
          <li><button>
            <MaterialIcon icon="restaurant_menu" color="#212121" />
          </button></li>
          <li><button>
            <MaterialIcon icon="shopping_cart" color="#212121" />
          </button></li>
          <li><button>
            <MaterialIcon icon="event" color="#212121" />
          </button></li>
          <li><button>
            <MaterialIcon icon="contact_mail" color="#212121" />
          </button></li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
