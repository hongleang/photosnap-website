import React from 'react'
import ArticleBlock from "../components/ArticleBlock/ArticleBlock"

import { featureFocus } from "../data/features"
import FeaturesArticle from "../components/Features/FeaturesArticle"
import BannerCard from "../components/Banner/BannerCard"

export default function Features() {
    return (
        <>
            <ArticleBlock articleBlock={featureFocus} reverse={true} />
            <FeaturesArticle />
            <BannerCard />
        </>
    )
}
