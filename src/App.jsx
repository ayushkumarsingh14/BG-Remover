import React from 'react'
import './App.css'
import { MenuBar } from './components/MenuBar'
import { Home } from './pages/Home'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import UserSyncHandler from './components/UserSyncHandler'
import { RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react'
import Result from './pages/Result'
import BuyCredits from './pages/BuyCredits'

// Wrapper component to avoid fragment warnings
const ProtectedResult = () => (
  <>
    <SignedIn>
      <Result />
    </SignedIn>
    <SignedOut>
      <RedirectToSignIn />
    </SignedOut>
  </>
)

function App() {
  return (
    <div>
      <UserSyncHandler />
      <MenuBar />
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<BuyCredits/>} />
        <Route path="/result" element={<ProtectedResult />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
