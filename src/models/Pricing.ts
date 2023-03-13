export type PlansType = {
    type: string;
    desc: string;
    price: Price;
}

type Price = {
    month: number;
    year: number;
}

export type Comparision = {
    feature: string,
    availibility: string[]
}