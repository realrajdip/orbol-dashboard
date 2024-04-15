import React from "react";
import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
  BsSearch,
  BsJustify,
} from "react-icons/bs";
import { FaArrowDown } from "react-icons/fa";
import person from "./assets/person.jpeg";
import upload from "./assets/upload.png";
function Header({ OpenSidebar }) {

  function open_file() {
            document.getElementById('input_file').click();
        }
  return (
    <header className="header">
      <div className="menu-icon">
        <BsJustify className="icon" onClick={OpenSidebar} />
      </div>
      <div className="header-left">
        <div className="search-bar">
          <BsSearch className="icon" />
          <input type="text" placeholder="Search for anything..." />
          <button>
            <FaArrowDown />
          </button>
        </div>
      </div>
      <div className="header-right">
        {/* <BsFillBellFill className='icon'/>
            <BsFillEnvelopeFill className='icon'/>
            <BsPersonCircle className='icon'/> */}
        <div className="profile">
          <img src={person} height={40} alt="" />
          <select name="" id="">
            <option value="">Admin</option>
            <option value="">Employee</option>
            <option value="">Owner</option>
          </select>
        </div>

        <div className="upload">
          <button onClick={open_file}>
          <input type="file" name="" id='input_file' hidden></input>
            <img src={upload} alt="" />
            Upload
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
