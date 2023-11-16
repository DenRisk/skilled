import React from 'react';
import Header from "./sections/header/header";
import Introduction from "./sections/intro/introduction";
import Categories from "./sections/categories/categories";
import Footer from "./sections/footer/footer";

function App() {
    return (
        <main className="content-grid">
            <Header/>
            <Introduction/>
            <Categories/>
            <Footer/>
        </main>
    );
}

export default App;
