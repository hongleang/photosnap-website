import React from 'react'
import ArticleBlock from "../components/ArticleBlock/ArticleBlock"
import BannerCard from "../components/Banner/BannerCard"

import pricing from "../data/pricing"
import Plans from "../components/Plans/Plans"

export default function Pricing() {
	const { pricingFocus } = pricing

	return (
		<>
			<ArticleBlock articleBlock={pricingFocus}  reverse={true}/>
			<Plans />
			<BannerCard />
		</>
	)
}
