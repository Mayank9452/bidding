// ==================== src/App.tsx ====================
import React, { useState } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import MyBidsPage from './pages/MyBidsPage';
import LeaderboardPage from './pages/LeaderboardPage';

import ScrollToTop from './components/ScrollToTop';
import { routes } from "./routes/routes";
const queryClient = new QueryClient();
const App: React.FC = () => {
  

  // const renderPage = () => {
  //   switch (currentPage) {
  //     case 'home':
  //       return <HomePage />;
  //     case 'bids':
  //       return <MyBidsPage />;
  //     case 'leaderboard':
  //       return <LeaderboardPage />;
  //     default:
  //       return <HomePage />;
  //   }
  // };

  return (
    // <div style={{ minHeight: '100vh', paddingTop: '50px', paddingBottom: '2rem' }}>
    //   <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
    //   <Container className="mt-4">
    //     {renderPage()}
    //   </Container>
    // </div>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange={false}
      >
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <div className="mobile-container bg-background  sm:border-r sm:border-l overflow-hidden">
            <BrowserRouter>
              <ScrollToTop />
              
              <Routes>
                {/* <Route path="/" element={authToken?.data?.token ? <Navigate to="/dashboard" replace /> : <Loader />} />
                {
                  (authToken?.data?.token) && routes.map((item, index) => (
                    <Route path={item?.path} key={index} element={item?.element} />
                  ))
                }
                <Route path="*" element={authToken?.data?.token ? <NotFound /> : <Loader />} /> */}
                {routes.map((item, index) => (
                    <Route path={item?.path} key={index} element={item?.element} />
                  ))}
              </Routes>
            </BrowserRouter>
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;