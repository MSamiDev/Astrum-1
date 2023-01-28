import React from "react";
import Header from "../partials/Header";
import HeroHome from "../partials/HeroHome";
import FeaturesHome from "../partials/Features";
import FeaturesBlocks from "../partials/FeaturesBlocks";
import Footer from "../partials/Footer";
import Tweet from "../utils/Tweet";

function Home() {
	return (
		<div className="flex flex-col min-h-screen overflow-hidden bg-back">
			{/*  Site header */}
			<Header />
			{/*  Page content */}
			<main className="flex-grow">
				{/*  Page sections */}
				<HeroHome />
				<FeaturesHome />
				<FeaturesBlocks />
			</main>
			<Tweet />
			{/*  Site footer */}
			<Footer />
		</div>
	);
}

export default Home;
