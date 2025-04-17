import React, { Suspense } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'

const Home = React.lazy(() => import('./Pages/Home'))
const Cashback = React.lazy(() => import('./Pages/Cashback'))
const FAQ = React.lazy(() => import('./Pages/FAQ'))
const Support = React.lazy(() => import('./Pages/Support'))
const HowToUse = React.lazy(() => import('./Pages/HowToUse'))

export default function AnimatedRoutes() {
    const location = useLocation()

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                    <Route path='/' element={<Home />} />
                    <Route path='/cashback' element={<Cashback />} />
                    <Route path='/faq' element={<FAQ />} />
                    <Route path='/support' element={<Support />} />
                    <Route path='/how-to-use' element={<HowToUse />} />
                </Routes>
            </AnimatePresence>
        </Suspense>
    )
}
