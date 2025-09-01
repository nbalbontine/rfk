import './App.css'
import { Suspense, lazy } from 'react'
import { VideoProvider, useVideoContext } from './contexts/VideoContext'
import { LoadingScreen } from './components/LoadingScreen'

// Critical above-the-fold components (loaded immediately)
import { Header7 } from './components/Header7'
import { Layout354 } from './components/Layout354'

// Lazy load components that appear below the fold
const Layout348 = lazy(() => import('./components/Layout348').then(m => ({ default: m.Layout348 })))
const CarsPassingBy = lazy(() => import('./components/CarsPassingBy').then(m => ({ default: m.CarsPassingBy })))
const Header80 = lazy(() => import('./components/Header80').then(m => ({ default: m.Header80 })))
const Layout355 = lazy(() => import('./components/Layout355').then(m => ({ default: m.Layout355 })))
const HeaderZoomIn = lazy(() => import('./components/HeaderZoomIn').then(m => ({ default: m.HeaderZoomIn })))
const Header33New = lazy(() => import('./components/Header33New').then(m => ({ default: m.Header33New })))
const HeaderFinal = lazy(() => import('./components/HeaderFinal').then(m => ({ default: m.HeaderFinal })))

// Component loading fallback
const ComponentLoader = () => (
  <div className="flex items-center justify-center py-8">
    <div className="animate-pulse text-gray-500">Loading...</div>
  </div>
)

function AppContent() {
  const { isLoading, progress } = useVideoContext();

  if (isLoading) {
    return <LoadingScreen progress={progress} />;
  }

  return (
    <div className="App">
      {/* Critical above-the-fold content */}
      <Header7 />
      <Layout354 />
      
      {/* Lazy loaded components wrapped in Suspense */}
      <Suspense fallback={<ComponentLoader />}>
        <Layout348 />
      </Suspense>
      
      <Suspense fallback={<ComponentLoader />}>
        <CarsPassingBy />
      </Suspense>
      
      <Suspense fallback={<ComponentLoader />}>
        <Header80 />
      </Suspense>
      
      <Suspense fallback={<ComponentLoader />}>
        <Layout355 />
      </Suspense>
      
      <Suspense fallback={<ComponentLoader />}>
        <HeaderZoomIn />
      </Suspense>
      
      <Suspense fallback={<ComponentLoader />}>
        <Header33New />
      </Suspense>
      
      <Suspense fallback={<ComponentLoader />}>
        <HeaderFinal />
      </Suspense>
    </div>
  );
}

function App() {
  return (
    <VideoProvider>
      <AppContent />
    </VideoProvider>
  );
}

export default App