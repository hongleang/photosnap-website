export type Story = {
    name: string;
    author: string;
    date: string;
    img: Image;
}

type Image = {
    lg: string;
    md: string;
    sm: string;
}