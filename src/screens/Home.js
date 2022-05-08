import React from 'react'
import './Home.css'
import { Button } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div class="header">
        <div class="inner-header flex">
          <h1 id='name'>Eslam Magdy</h1>
          <h1 id='career'>Software Engineer</h1>
        </div>
        <div>
          <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
            <defs>
              <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g class="parallax">
              <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
              <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
              <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
          </svg>
        </div>
      </div>
      <div class="content flex">
        <Link to='/about'>
          <Button colorScheme='blue' size='lg' variant='outline' rightIcon={<ArrowForwardIcon />}>
            More About Me
          </Button>
        </Link>
      </div>
    </>
  )
}

export default Home