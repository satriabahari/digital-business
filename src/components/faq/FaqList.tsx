import { useState } from "react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { cn } from "../../lib/utils";

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
    <Accordion type="single" collapsible className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2">
      {faqs.map((faq, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className={cn(
            "rounded-xl border px-4 transition duration-300 hover:scale-[1.03] dark:border-primary dark:bg-dark-tertiary",
            isActive === index && "bg-white dark:bg-secondary",
          )}
        >
          <AccordionTrigger
            className="text-left text-lg text-neutral-900 dark:text-neutral-50"
            onClick={() => handleClick(index)}
          >
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="dark:text-neutral-400">{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FaqList;
