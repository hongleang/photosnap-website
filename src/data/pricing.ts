import { HeroPricingLg, HeroPricingMd, HeroPricingSm } from "../assets/importer/pricingImg";

const pricing = {
    pricingFocus: {
        title: "Pricing",
        desc: "Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.",
        image: {
            lg: HeroPricingLg,
            md: HeroPricingMd,
            sm: HeroPricingSm
        },
        theme: "dark"
    },
    plans: [
        {
            type: "Basic",
            desc: "Includes basic usage of our platform. Recommended for new and aspiring photographers.",
            price: {
                month: 19.00,
                year: 190.00
            }
        },
        {
            type: "Pro",
            desc: "More advanced features available. Recommended for photography veterans and professionals.",
            price: {
                month: 39.00,
                year: 390.00
            }
        },
        {
            type: "Business",
            desc: "Additional features available such as more detailed metrics. Recommended for business owners.",
            price: {
                month: 99.00,
                year: 990.00
            }
        }
    ],
    comaprisonData: [
        {
            feature: "Unlimited story posting",
            availibility: ["basic", "pro", "business"]
        },
        {
            feature: "Unlimited photo upload",
            availibility: ["basic", "pro", "business"]
        },
        {
            feature: "Embedding custom content",
            availibility: ["pro", "business"]
        },
        {
            feature: "Customize metadata",
            availibility: ["pro", "business"]
        },
        {
            feature: "Advanced metrics",
            availibility: ["business"]
        },
        {
            feature: "Photo downloads",
            availibility: ["business"]
        },
        {
            feature: "Search engine indexing",
            availibility: ["business"]
        },
        {
            feature: "Custom analytics",
            availibility: ["business"]
        }
    ]
}


export default pricing;