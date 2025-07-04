import './App.css'
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import Layout from './components/layout/layout';
import AboutUs from './pages/AboutUs/AboutUs';
import BusinessSection from './pages/BusinessSection/Businesssection';
// import { ServicesSection } from './components/ServicesSection/ServicesSection';
import ResourceAllocation from './pages/ResourceAllocation/ResourceAllocation';
import DataDrivenMarketing from './pages/DataDrivenMarketing/DataDrivenMarketing';
// import WebAppDevelop from './pages/WebAppDevelop/WebAppDevelop';
import ContactForm from './pages/ContactUs.jsx/ContactUs';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Career from './pages/Careers/Career';
import AIAssignmentWriting from './components/generativeaipage';
import GenerativeAIPage from './components/generativeaipage';
import Privacypolicies from './components/privacypolicies';
import CookiesPolicy from './components/cookiespolicy';
import Jobs from './pages/Jobs/Jobs';
import PerformanceMarketing from './pages/performancemarketing';
import Webdevelopmentblog from './pages/webdevblog';
import Cloudservicesblog from './pages/cloudserviceblog';
import UiUxSinglePage from './pages/UiUxSinglePage/UiUxSinglePage';
import Services from './pages/WebAppDevelop/Services';
import WebnAppDev from './pages/WebAndAppDev/WebnAppDev';
import CloudServicesPage from './pages/CloudServicesPage/CloudServicesPage';
import CustomSalesforceSolutions from './pages/CustomSoftwareSolutions/CustomSoftwareSolutions';
import CustomSofts from './pages/CustomSofts/CustomSofts';
import GsapCarousel from './components/GsapCarousel/GsapCarousel';
// import AddsAndServices from './pages/AdsAndServices/AdsAndServices';

function App() {

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>

          {/* <Route
            path="/add-services"
            element={
              <Layout>
                <AddsAndServices />
              </Layout>
            }
          /> */}


          <Route
            path="/"
            element={
              <Layout>
                <HomePage />
              </Layout>
            }
          />

          <Route
            path="/about"
            element={
              <Layout>
                <AboutUs />
              </Layout>
            }
          />

          <Route
            path="/products"
            element={
              <Layout>
                <BusinessSection />
              </Layout>
            }
          />

          <Route
            path="/resource-allocation"
            element={
              <Layout>
                <ResourceAllocation />
              </Layout>
            }
          />

          <Route
            path="/data-driven-marketing"
            element={
              <Layout>
                <DataDrivenMarketing />
              </Layout>
            }
          />

          <Route
            path="/services"
            element={
              <Layout>
                <Services />
              </Layout>
            }
          />
          <Route
            path="/ui-ux-design"
            element={
              <Layout>
                <UiUxSinglePage />
              </Layout>
            }
          />
          <Route
            path="/web-and-app"
            element={
              <Layout>
                <WebnAppDev />
              </Layout>
            }
          />
          <Route
            path="/cloud-services"
            element={
              <Layout>
                <CloudServicesPage />
              </Layout>
            }
          />

          <Route
            path="/salesforce-development"
            element={
              <Layout>
                <CustomSalesforceSolutions />
              </Layout>
            }
          />

          <Route
            path="/custom-software-solutions"
            element={
              <Layout>
                <CustomSofts />
              </Layout>
            }
          />










          <Route
            path="/career"
            element={
              <Layout>
                <Career />
              </Layout>
            }
          />

          <Route
            path="/jobs/:id"
            element={
              <Layout>
                <Jobs />
              </Layout>
            }
          />

          <Route
            path="/contact-us"
            element={
              <Layout>
                <ContactForm />
              </Layout>
            }
          />

          <Route
            path="/blog/generative_ai"
            element={
              <Layout>
                <GenerativeAIPage />
              </Layout>
            }
          />

          <Route
            path="/blog/performance_marketing"
            element={
              <Layout>
                <PerformanceMarketing />
              </Layout>
            }
          />

          <Route
            path="/blog/web_developement"
            element={
              <Layout>
                <Webdevelopmentblog />
              </Layout>
            }
          />

          <Route
            path="/blog/cloudservices"
            element={
              <Layout>
                <Cloudservicesblog />
              </Layout>
            }
          />
          <Route
            path="/privacy_policy"
            element={
              <Layout>
                <Privacypolicies />
              </Layout>
            }
          />
          <Route
            path="/cookies_policy"
            element={
              <Layout>
                <CookiesPolicy />
              </Layout>
            }
          />

          <Route
            path="/gsapcar"
            element={
              <Layout>
                <GsapCarousel />
              </Layout>
            }
          />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App