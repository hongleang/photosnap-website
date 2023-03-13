import { BStoriesLg, BStoriesMd, BStoriesSm, CreateAndShareLg, CreateAndShareMd, CreateAndShareSm, DesignForEveryLg, DesignForEveryMd, DesignForEverySm } from "../assets/importer/articleBlocksImg";

const articleBlocks = [
    {
        title: "Create and share your photo stories.",
        desc: "Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.",
        image: {
            lg: CreateAndShareLg,
            md: CreateAndShareMd,
            sm: CreateAndShareSm
        },
        theme: "dark"
    },
    {
        title: "Beautiful stories every time",
        desc: "We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.",
        image: {
            lg: BStoriesLg,
            md: BStoriesMd,
            sm: BStoriesSm
        },
        theme: "light"
    },
    {
        title: "Designed for everyone.",
        desc: "Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it.",
        image: {
            lg: DesignForEveryLg,
            md: DesignForEveryMd,
            sm: DesignForEverySm
        },
         theme: "light"
    }
];

export default articleBlocks;