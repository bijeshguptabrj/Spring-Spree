import React, { Component } from 'react'
import './Gallery.scss';
import Sidebar from './SideBarGallery.js';
import MainContent from './MainContent.js';
import Navbar from '../Navbar.js';

export default class LayoutGallery extends Component {
    constructor(props) {
    super(props);
    this.state = {
      expanded: false
    }
  }

  toggleSidebar() {
    this.setState({
      expanded: !this.state.expanded
    })
  }

  render() {
      return (
          <>
        <Navbar />
              <main style={{ marginTop: 90 }} 
               >
        <Sidebar toggleSidebar={this.toggleSidebar.bind(this)} expanded={this.state.expanded} />
        <MainContent expanded={this.state.expanded} />
      </main>
          
          </>
    )
  }
}

  
