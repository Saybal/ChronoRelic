import React from 'react';
import Navbar from '../Shared/Components/Navbar';
import Footer from '../Shared/Components/Footer';
import { Outlet } from 'react-router';
import AutoScrollUp from './AutoScrollUp';

const RootLayout = () => {
    return (
        <div>
            <AutoScrollUp/>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default RootLayout;