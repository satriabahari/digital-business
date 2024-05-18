import { cn } from "@/lib/utils.ts";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card.tsx";
import { FaStar as StarIcon } from "react-icons/fa";

interface TestimonialCardProps {
  name: string;
  course: string;
  testimonial: string;
  rating: number;
  date: string;
  col_span: boolean;
}

const TestimonialCard = ({
  name,
  course,
  testimonial,
  rating,
  date,
  col_span,
}: TestimonialCardProps) => {
  const generateStars = (rating: number) => {
    return Array(rating).fill("⭐").join("");
  };

  return (
    <Card
      className={cn(
        "border-[1.5px] dark:border-neutral-500 rounded-xl dark:bg-neutral-800",
        col_span && "lg:col-span-2"
      )}
    >
      <CardHeader>
        <CardTitle className="dark:text-neutral-50 text-xl">{course}</CardTitle>
      </CardHeader>
      <CardContent>
        <h2 className="dark:text-neutral-400">"{testimonial}"</h2>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex gap-x-3 items-center">
          <div className="p-[2.5px] border-[1.5px] border-neutral-700 rounded-full">
            <img
              src="/images.jpeg"
              width={50}
              height={50}
              alt={name}
              className="rounded-full object-cover w-8 h-8"
            />
          </div>
          <p className="font-semibold dark:text-neutral-300">{name}</p>
        </div>
        <div className="flex px-2">{generateStars(rating)}</div>
      </CardFooter>
    </Card>
  );
};

export default TestimonialCard;
