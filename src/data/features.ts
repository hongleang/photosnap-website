import { BoostExposure, CustomDomain, DragNDropImg, Embeded, HeroFeatureLg, HeroFeatureMd, HeroFeatureSm, NoLimit, Responsive } from "../assets/importer/featuresImg";

export const featureFocus = {
    title: "Features",
    desc: "We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.",
    image: {
        lg: HeroFeatureLg,
        md: HeroFeatureMd,
        sm: HeroFeatureSm
    },
    theme: "dark"
}

const features = [
    {
        title: "100% Responsive",
        desc: "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.",
        img: Responsive
    },
    {
        title: "No Photo Upload Limit",
        desc: "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.",
        img: NoLimit
    },
    {
        title: "Available to Embed",
        desc: "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.",
        img: Embeded
    },
    {
        title: "Custom Domain",
        desc: "With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!",
        img: CustomDomain
    },
    {
        title: "Boost Your Exposure",
        desc: "Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.",
        img: BoostExposure
    },
    {
        title: "Drag & Drop Image",
        desc: "Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.",
        img: DragNDropImg
    }
]

export default features;