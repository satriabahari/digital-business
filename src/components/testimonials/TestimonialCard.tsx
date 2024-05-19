import { cn } from "../../lib/utils.ts";
import type { TestimonialProps } from "../../common/types/testimonial.ts";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card.tsx";

const TestimonialCard = ({ name, course, testimonial, rating, col_span }: TestimonialProps) => {
  const generateStars = (rating: number) => {
    return Array(rating).fill("⭐").join("");
  };

  return (
    <Card
      className={cn("rounded-xl border-[1.5px] dark:border-primary dark:bg-dark-tertiary hover:scale-[1.03] transition duration-300", col_span && "lg:col-span-2")}
    >
      <CardHeader>
        <CardTitle className="text-xl dark:text-neutral-50">{course}</CardTitle>
      </CardHeader>
      <CardContent>
        <h2 className="dark:text-neutral-400">"{testimonial}"</h2>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex items-center gap-x-3">
          <div className="rounded-full border-[1.5px] border-neutral-700 p-[2.5px] dark:border-primary">
            <img src="/images.jpeg" width={50} height={50} alt={name} className="h-8 w-8 rounded-full object-cover" />
          </div>
          <p className="font-semibold dark:text-neutral-300">{name}</p>
        </div>
        <div className="flex px-2">{generateStars(rating)}</div>
      </CardFooter>
    </Card>
  );
};

export default TestimonialCard;
