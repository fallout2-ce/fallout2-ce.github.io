import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
  useLocation,
} from "react-router";
import "@/index.css";
import App from "@/App";
import ErrorBoundary from "@/ErrorBoundary";
import Header from "@/components/Header";
import Footer from "./components/Footer";

/* eslint-disable react-refresh/only-export-components */
const NotFound = () => {
  const location = useLocation();
  throw new Error(`404 Not Found: ${location.pathname}`);
};

/* eslint-disable react-refresh/only-export-components */
const Layout = () => {
  return (
    <div
      data-role="layout-container"
      className="relative flex min-h-[100dvh] flex-col w-full m-0 p-0"
    >
      <div
        data-role="background"
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/background-o6Zjbf_N.jpg")' }}
      />
      <div
        data-role="layout-overlay"
        className="absolute inset-0 bg-black/60"
      />
      <div className="relative z-10 flex flex-col min-h-[100dvh] w-full m-0 p-0">
        <Header />
        <main className="w-full flex-1 flex justify-center">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<App />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>
);
