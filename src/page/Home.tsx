import HomeArticleBlocks from "../components/HomeArticle/HomeArticle"
import StoriesBlock from "../components/StoriesCard/StoriesBlock"
import FeaturesArticle from "../components/Features/FeaturesArticle"
import AnimationBlock from "../components/AnimationBlock/AnimationBlock"

export default function Home() {
    return (
        <AnimationBlock>
            <HomeArticleBlocks />
            <StoriesBlock limit={4} hasDate={false} />
            <FeaturesArticle limit={3} singleCol={true}/>
        </AnimationBlock>
    )
}
