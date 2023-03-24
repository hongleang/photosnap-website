import Navs from "../components/Navs/Navs"
import HomeArticleBlocks from "../components/HomeArticle/HomeArticle"
import StoriesBlock from "../components/StoriesCard/StoriesBlock"
import FocusStoryBlock from "../components/FocusStoryBlock/FocusStoryBlock"
import AnimationBlock from "../components/AnimationBlock/AnimationBlock"

export default function Stories() {
    return (
        <AnimationBlock>
            <FocusStoryBlock />
            <StoriesBlock />
        </AnimationBlock>
    )
}
