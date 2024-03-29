import React, { useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Intro from './pages/Intro/Intro';
import Main from './pages/Main/Home';
import Footer from './components/Footer';
import QuickMenu from './components/QuickMenu';
import FaqList from './pages/Faq/List';
import FaqWrite from './pages/Faq/Write';
import ArtList from './pages/Art/List';
import ArtDetail from './pages/Art/Detail';
import NoticeList from './pages/Notice/List';
import NoticeAdmin from './pages/Notice/Admin';
import NoticeWrite from './pages/Notice/Write';
import NoticeDetail from './pages/Notice/Detail';
import LoginForm from './pages/Member/LoginForm';
import JoinForm from './pages/Member/JoinForm';
import MyPage from './pages/Member/MyPage';

const App=()=>{
	return (
		<>
			<Header />
			<Routes>
				<Route index path="/" element={<Main type={"canvas"}/>}></Route>
				<Route index path="/:type" element={<Main />}></Route>
				<Route path="/intro" element={<Intro />}></Route>
				<Route path="/art" element={<ArtList />}></Route>
				<Route path="/art/detail/:seq" element={<ArtDetail />}></Route>
				<Route path="/faq" element={<FaqList />}></Route>
				<Route path="/faq/save" element={<FaqWrite type={"save"} />}></Route>
				<Route path="/faq/update" element={<FaqWrite type={"update"} />}></Route>
				<Route path="/notice" element={<NoticeList />}></Route>
				<Route path="/notice/admin" element={<NoticeAdmin />}></Route>
				<Route path="/notice/detail/:id" element={<NoticeDetail />}></Route>
				<Route path="/notice/save" element={<NoticeWrite type={"save"} />}></Route>
				<Route path="/notice/update" element={<NoticeWrite type={"update"}/>}></Route>
				<Route path="/login" element={<LoginForm />}></Route>
				<Route path="/join" element={<JoinForm />}></Route>
				<Route path="/mypage" element={<MyPage />}></Route>
			</Routes>
			<Footer />
			<QuickMenu />
		</>
	)
}

export default App;