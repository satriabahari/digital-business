import FAQS from "@/common/constants/faqs";
import Container from "../elements/Container.astro";
import PageHeading from "../elements/PageHeading.astro";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface FaqListProps {
  faqs: {
    question: string;
    answer: string;
  }[];
}

const FaqList = ({ faqs }: FaqListProps) => {
  const [isActive, setIsActive] = useState(-1);
  const handleClick = (id: number) => {
    isActive === id ? setIsActive(-1) : setIsActive(id);
  };
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full grid grid-cols-1 lg:grid-cols-2"
    >
      {faqs.map((faq, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className={cn(
            " px-4 border",
            isActive === index && "dark:bg-neutral-800 bg-white"
          )}
        >
          <AccordionTrigger
            className="dark:text-neutral-50 text-neutral-900 text-lg"
            onClick={() => handleClick(index)}
          >
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="dark:text-neutral-400">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FaqList;
