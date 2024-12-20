import React from 'react'
import AboutSec from '../Component/AboutSec'
import ServiceSec from '../Component/ServiceSec'
import ContactSec from '../Component/ContactSec'
import GuarderSec from '../Component/GuarderSec'
import Testimonial from '../Component/Testimonial'
import Header from '../Component/Header'
import Slider from '../Component/Slider'

export default function Home() {
  return (
    <>
      <Header/>
      <Slider/>
      <AboutSec showHeader={false} showHero={false} />
      <ServiceSec showHeader={false} showHero={false}/>
      <Testimonial showHeader={false} showHero={false}/>
      <ContactSec showHeader={false} showHero={false}/>
      <GuarderSec showHeader={false} showHero={false}/>
    </>
  )
}
