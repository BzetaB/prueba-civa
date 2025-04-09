import { ImgHTMLAttributes } from "react";

interface CardProps {
    title: string;
    description: string;
    img: ImgHTMLAttributes<HTMLImageElement>["src"];
}

export const Card = ({ title, description, img }: CardProps) => {
    return (
        <div className="flex flex-col items-center col-span-1 row-span-1 bg-purple-900 rounded-2xl shadow-md px-8 gap-4 max-w-md w-full">\
            <div>
                <img className="w-fit h-fit rounded-xl" src={img} alt={title} />
            </div>
            <h1 className="text-2xl font-bold text-center text-white">
                {title}
            </h1>
            <p className="text-md text-center font-semibold pb-4 text-white">{description}</p>
        </div>
    )
}