import React from 'react'
import logo from './assets/logo.png'
import illustration from './assets/illustration.png'
import img2 from './assets/Clients Logos.png'
import img3 from './assets/Frame 4.png'
import img4 from './assets/Frame 35.png'
import './style.css'

const App = () => {
  return (
    <div>
      <header style={{backgroundColor: 'white', width: '100%'}}>
      <nav>
        <ul style={{listStyleType: 'none', display: 'flex', gap: '20px', color:'black', alignItems: 'center', margin: '0', padding: '0', position: 'fixed', top: '0', left: '0', right: '0', height: '60px', backgroundColor: 'white', justifyContent: 'space-evenly'}}>
          <li><img src={logo} alt="" /></li>
          <li>Home</li>
          <li>Features</li>
          <li>Community</li>
          <li>Blog</li>
          <li>Pricing</li>
          <li>Register now</li>
        </ul>
      </nav>

      <div className="main">
        <div className="first">
          <h1 style={{color: 'black'}}>Lessons and insights <br /> <span style={{color: 'green'}}>from 8 years</span></h1>
          
          <button className='btn'>Register</button>
        </div>

        <div className="second">
            <img className='img1' src={illustration} alt="" />
        </div>
      </div>
      </header>

      <section className='sec1'>
        <h1>Our clients</h1>
        <p>We have been working with some Fortune 500+ clients</p>

        <img src={img2} alt="" />

        <h2>Manage your entire community <br /> in a single system</h2>

        <img className='img3' src={img3} alt="" />
      </section>

      <section className='sec2'>
        <div className="main2">
          <img src={img4} alt="" />
        </div>

        <div className="main3">
          <h3>The unseen of spending three <br /> years at Pixelgrade</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed <br />accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. <br />Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. <br /> Etiam quisbr
           massa pulvinar, aliquam quam vitae, tempus sem. <br />Donec elementum pulvinar odio.</p>
        </div>
       </section>
    </div>
  )
}

export default App
