import React, {useEffect} from 'react'
import './footer.css'

import {FiSend} from 'react-icons/fi'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
import {BsChevronRight} from 'react-icons/bs'

import video2 from  '../../Assets/video (2).mp4'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

  useEffect(()=> {
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className='footer'>
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>
    <div className="secContent container">
      <div className="contactDiv flex">
        <div data-aos="fade-up" className="text">
          <small>KEEP IN TOUCH</small>
          <h2>Travel with us</h2>
        </div>
        <div className="inputDiv flex">
          <input type="text" data-aos="fade-up" placeholder='Enter Email Address' />
          <button data-aos="fade-up" className="btn flex" type="submit">SEND <FiSend className="icon" /></button>
        </div>
      </div>

      <div className="footerCard flex">
        <div className="footerIntro flex">
          <div className="logoDiv">
            <a href="#" className="logo flex">
              <MdOutlineTravelExplore className="icon" /> Travel.
            </a>
          </div>

          <div data-aos="fade-up" className="footerParagraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam inventore eos fuga hic cum voluptatem minima, tempore non odio provident nobis ipsam at, doloreque sed cuopiditate ipsum in, atque soluta?
          </div>

          <div data-aos="fade-up" className="footerSocials flex">
            <AiOutlineTwitter className="icon"/>
            <AiFillYoutube className="icon"/>
            <AiFillFacebook className="icon"/>
            <AiFillInstagram className="icon"/>
          </div>
        </div>

        <div className="footerLinks grid">
          <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
            <span className="groupTitle">
              OUR AGENCY
            </span>
            <li className="footerList flex">
              <BsChevronRight className="icon"/>
              Services
            </li>
            <li className="footerList flex">
              <BsChevronRight className="icon"/>
              Insurance
            </li>
            <li className="footerList flex">
              <BsChevronRight className="icon"/>
              Agency
            </li>
            <li className="footerList flex">
              <BsChevronRight className="icon"/>
              Tourism
            </li>
            <li className="footerList flex">
              <BsChevronRight className="icon"/>
              Payment
            </li>
          </div>

          <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
            <span className="groupTitle">
              PARTINERS
            </span>
            <li className="footerList flex">
              <BsChevronRight className="icon"/>
              Bookings
            </li>
            <li className="footerList flex">
              <BsChevronRight className="icon"/>
              Rentcars
            </li>
            <li className="footerList flex">
              <BsChevronRight className="icon"/>
              HostelWorld
            </li>
            <li className="footerList flex">
              <BsChevronRight className="icon"/>
              Trivago
            </li>
            <li className="footerList flex">
              <BsChevronRight className="icon"/>
              TripAdvisor
            </li>
          </div>

          <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
            <span className="groupTitle">
              LAST MINUTE
            </span>
            <li className="footerList flex">
              <BsChevronRight className="icon"/>
              London
            </li>
            <li className="footerList flex">
              <BsChevronRight className="icon"/>
              California
            </li>
            <li className="footerList flex">
              <BsChevronRight className="icon"/>
              Indonesia
            </li>
            <li className="footerList flex">
              <BsChevronRight className="icon"/>
              Eourpore
            </li>
            <li className="footerList flex">
              <BsChevronRight className="icon"/>
              Oceania
            </li>
          </div>
        </div>

        <div className="footerDiv flex">
          <small>BEST TRAVEL WEBSITE THEMO</small>
          <small>COPYRIGHTS RESERVED - ISRATECH</small>
          <small>2023</small>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Footer
