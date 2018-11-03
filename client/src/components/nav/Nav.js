import React, { Component } from 'react';
import './Nav.css';
import MaterialIcon from 'material-icons-react';

class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><button>
            <MaterialIcon icon="Home" color="#212121"  />
          </button></li>
          <li><button>
            <MaterialIcon icon="Menu" color="#212121" />
          </button></li>
          <li><button>
            <MaterialIcon icon="Shop" color="#212121" />
          </button></li>
          <li><button>
            <MaterialIcon icon="Events" color="#212121" />
          </button></li>
          <li><button>
            <MaterialIcon icon="Contact" color="#212121" />
          </button></li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
