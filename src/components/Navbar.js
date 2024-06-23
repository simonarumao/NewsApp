import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropdown1Open: false,
      isDropdown2Open: false,
    };
    this.toggleDropdown1 = this.toggleDropdown1.bind(this);
    this.toggleDropdown2 = this.toggleDropdown2.bind(this);
    this.closeDropdown1 = this.closeDropdown1.bind(this);
    this.closeDropdown2 = this.closeDropdown2.bind(this);
  }

  toggleDropdown1() {
    this.setState((prevState) => ({
      isDropdown1Open: !prevState.isDropdown1Open,
    }));
  }

  toggleDropdown2() {
    this.setState((prevState) => ({
      isDropdown2Open: !prevState.isDropdown2Open,
    }));
  }

  closeDropdown1() {
    this.setState({ isDropdown1Open: false });
  }

  closeDropdown2() {
    this.setState({ isDropdown2Open: false });
  }

  render() {
    const { isDropdown1Open, isDropdown2Open } = this.state;

    return (
      <nav className="bg-customTeal p-3">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-xl font-bold">
            <Link to="/">NewsMonkey</Link>
          </div>
          <div className="space-x-4 flex items-center">
            <Link to="/" className="text-white hover:text-gray-400">Home</Link>
            <Link to="/about" className="text-white hover:text-gray-400">About</Link>
            <Link to="/contact" className="text-white hover:text-gray-400">Contact</Link>

            {/* First Dropdown */}
            <div className="relative inline-block">
              <button onClick={this.toggleDropdown1} className="text-white hover:text-gray-400 focus:outline-none">
                Categories
              </button>
              {isDropdown1Open && (
                <ul className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
                  <li>
                    <Link to="/business" className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={this.closeDropdown1}>Business</Link>
                  </li>
                  <li>
                    <Link to="/entertainment" className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={this.closeDropdown1}>Entertainment</Link>
                  </li>
                  <li>
                    <Link to="/health" className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={this.closeDropdown1}>Health</Link>
                  </li>
                  <li>
                    <Link to="/science" className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={this.closeDropdown1}>Science</Link>
                  </li>
                  <li>
                    <Link to="/sports" className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={this.closeDropdown1}>Sports</Link>
                  </li>
                  <li>
                    <Link to="/technology" className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={this.closeDropdown1}>Technology</Link>
                  </li>
                </ul>
              )}
            </div>

            {/* Second Dropdown */}
            <div className="relative inline-block">
              <button onClick={this.toggleDropdown2} className="text-white hover:text-gray-400 focus:outline-none">
                Country
              </button>
              {isDropdown2Open && (
                <ul className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
                  <li>
                    <Link to="/in" className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={this.closeDropdown2}>India</Link>
                  </li>
                  <li>
                    <Link to="/us" className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={this.closeDropdown2}>USA</Link>
                  </li>
                  
                </ul>
              )}
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
