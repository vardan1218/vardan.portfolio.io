import React from 'react'
import Header from './components/Header'
import Content from './components/Content'
import Description from './components/Description'
import PortfolioSection from './components/PortfolioSection'
import WhyHireMeSection from './components/whyHireMeSection'


const App = () => {
  return (
    <div>
      <Header />
      <Content />
      <Description />
      <PortfolioSection />
      <WhyHireMeSection  />
    </div>
  )
}

export default App