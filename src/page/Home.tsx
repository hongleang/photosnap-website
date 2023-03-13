import HomeArticleBlocks from "../components/HomeArticle/HomeArticle"
import StoriesBlock from "../components/StoriesCard/StoriesBlock"
import FeaturesArticle from "../components/Features/FeaturesArticle"

export default function Home() {
    return (
        <>
            <HomeArticleBlocks />
            <StoriesBlock limit={4} hasDate={false} />
            <FeaturesArticle limit={3} singleCol={true}/>
        </>
    )
}
