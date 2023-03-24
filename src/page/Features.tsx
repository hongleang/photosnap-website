import React from 'react'
import ArticleBlock from "../components/ArticleBlock/ArticleBlock"

import { featureFocus } from "../data/features"
import FeaturesArticle from "../components/Features/FeaturesArticle"
import BannerCard from "../components/Banner/BannerCard"
import AnimationBlock from "../components/AnimationBlock/AnimationBlock"

export default function Features() {
    return (
        <AnimationBlock>
            <ArticleBlock articleBlock={featureFocus} reverse={true} />
            <FeaturesArticle />
            <BannerCard />
        </AnimationBlock>
    )
}
