import React, { Component } from 'react'
import './Gallery.scss';

import { AiFillCaretLeft, AiFillCaretRight, AiFillFire,AiFillTrophy } from "react-icons/ai";
import { GiSwordsPower } from 'react-icons/gi';
import { BsMusicNote } from 'react-icons/bs';
import {FaHandsHelping} from 'react-icons/fa'


export default class SideBarGallery extends Component {
   
  render() {
    return (
      <div className={this.props.expanded ? "sidebar sidebar--expanded" : "sidebar"}  >
        <div className="stickySidebar">
        {
          this.props.expanded ? <AiFillCaretLeft size='50' color='white' style={{ marginLeft: 240, marginTop: 0 }} onClick={this.props.toggleSidebar} /> 
            :
            <AiFillCaretRight size='50' color='black' style={{ marginLeft: 235, marginTop: 0 }} onClick={this.props.toggleSidebar} />
        }
        
         {
          this.props.expanded ? < h1 className='box' >Inauguration</ h1 >
            :
            <AiFillFire size='50' color='black' style={{ marginLeft: 235, marginTop: 5 }}  />
        }
         {
          this.props.expanded ? < h1 className='box' >Allure</ h1 >
            :
            <GiSwordsPower size='50' color='black' style={{ marginLeft: 235, marginTop: 15 }}  />
        }
        {
          this.props.expanded ? < h1 className='box' >ProShows</ h1 >
            :
            <BsMusicNote size='50' color='black' style={{ marginLeft: 235, marginTop: 15 }}  />
        }
        {
          this.props.expanded ? < h1 className='box' >Social Acts</ h1 >
            :
            <FaHandsHelping size='50' color='black' style={{ marginLeft: 235, marginTop: 15 }}  />
        }
        {
          this.props.expanded ? < h1 className='box' >Events</ h1 >
            :
            <AiFillTrophy size='50' color='black' style={{ marginLeft: 235, marginTop: 15 }}  />
        }
        
       

        <span className="shape"></span>
        <span className="shape"></span>
       
        </div>
        </div>
    )
  }
}
