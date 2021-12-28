import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Intro from './pages/Intro';
import Main from './pages/Main/Home';
import Footer from './components/Footer';
import QuickMenu from './components/QuickMenu';
import FaqList from './pages/Faq/List';
import ArtList from './pages/Art/List';
import NoticeList from './pages/Notice/List';

const App=()=>{
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route index exact path="/" element={<Main />}></Route>
				<Route path="/intro" element={<Intro />}></Route>
				<Route path="/art" element={<ArtList />}></Route>
				<Route path="/faq" element={<FaqList />}></Route>
				<Route path="/notice" element={<NoticeList />}></Route>
			</Routes>
			<Footer />
			<QuickMenu />
		</BrowserRouter>
	)
}

export default App;