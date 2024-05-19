import { e as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, g as addAttribute, i as renderComponent, h as createAstro, u as unescapeHTML, j as Fragment, k as renderHead, l as renderSlot } from '../astro_Bh8uhX-N.mjs';
import 'kleur/colors';
/* empty css                          */
import { getIconData, iconToSVG } from '@iconify/utils';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { jsx, jsxs } from 'react/jsx-runtime';
import { create } from 'zustand';
import { IoClose } from 'react-icons/io5';
import { GiHamburgerMenu } from 'react-icons/gi';
import { NavigationMenuItem, NavigationMenuLink, NavigationMenu, NavigationMenuList } from '@radix-ui/react-navigation-menu';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Sun, Moon, ChevronDown } from 'lucide-react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import AOS from 'aos';
import { useIntersectionObserver } from 'usehooks-ts';
import { FaCircleCheck } from 'react-icons/fa6';
import * as AccordionPrimitive from '@radix-ui/react-accordion';


const cache = /* @__PURE__ */ new WeakMap();

const $$Astro$2 = createAstro();
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Icon;
  class AstroIconError extends Error {
    constructor(message) {
      super(message);
    }
  }
  const req = Astro2.request;
  const { name = "", title, "is:inline": inline = false, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = !inline && i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new AstroIconError(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new AstroIconError('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new AstroIconError(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new AstroIconError(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new AstroIconError(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}> ${title && renderTemplate`<title>${title}</title>`} ${inline ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "id": id }, { "default": ($$result2) => renderTemplate`${unescapeHTML(normalizedBody)}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}>${unescapeHTML(normalizedBody)}</symbol>`}<use${addAttribute(`#${id}`, "xlink:href")}></use> ` })}`} </svg>`;
}, "C:/Users/ASUS/Documents/coding/competition/digital-business/node_modules/astro-icon/components/Icon.astro", void 0);

const MENUS = [
  {
    title: "Home",
    href: "#",
    isShow: true
  },
  {
    title: "About",
    href: "#about",
    isShow: true
  },
  {
    title: "Courses",
    href: "#courses",
    isShow: true
  },
  {
    title: "Testimonials",
    href: "#testimonials",
    isShow: true
  },
  {
    title: "Faq",
    href: "#faq",
    isShow: true
  },
  {
    title: "Contact",
    href: "#contact",
    isShow: true
  }
];

const SOSMEDS = [
  {
    title: "Gmail",
    href: "mailto:satriaabaharii@gmail.com",
    icon: "gmail",
    isShow: true
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/satriabaharii_/",
    icon: "instagram",
    isShow: true
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/satria-bahari/",
    icon: "linkedin",
    isShow: true
  },
  {
    title: "Tiktok",
    href: "https://www.tiktok.com/@satriaabaharii/",
    icon: "tiktok",
    isShow: true
  },
  {
    title: "Github",
    href: "https://github.com/satriabahari",
    icon: "github",
    isShow: true
  }
];

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const $$Astro$1 = createAstro();
const $$BackgroundGradient = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BackgroundGradient;
  const { className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cn("absolute -z-10 rounded-full bg-gradient-to-b blur-[15rem] h-52 w-52 dark:bg-sky-500", className), "class")}></div>`;
}, "C:/Users/ASUS/Documents/coding/competition/digital-business/src/components/elements/BackgroundGradient.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer id="contact" class="relative grid min-h-96 grid-cols-1 space-y-8 bg-white px-12 py-8 dark:bg-dark-tertiary lg:grid-cols-2 lg:px-28"> ${renderComponent($$result, "BackgroundGradient", $$BackgroundGradient, { "className": "  bottom-0 right-0 z-10 blur-[11rem]" })} <div class="flex flex-col justify-between space-y-4 text-center lg:text-left"> <div class="flex flex-col justify-between gap-y-4"> ${MENUS.map((menu) => renderTemplate`<a${addAttribute(menu.href, "href")} class="text-lg font-medium text-neutral-800 dark:text-neutral-50 dark:hover:text-neutral-50"> ${menu.title} </a>`)} </div> <span class="text-sm text-neutral-500">© Copyright 2023</span> </div> <div class="flex flex-col items-center justify-between space-y-6 px-8 text-center lg:items-start lg:text-start"> <div class="flex flex-col items-center space-y-3 lg:items-start"> <h2 class="text-3xl font-semibold text-neutral-900 dark:text-neutral-50">Subscribe</h2> <p class="text-neutral-700 dark:text-neutral-200 lg:w-3/4">
Sign up to our newsletter for feature updates and our undying love.
</p> <div class="flex w-fit items-center justify-center rounded-xl border-[1.5px] border-neutral-400 bg-neutral-200 px-4 py-1 dark:border-primary dark:bg-secondary"> <input type="text" placeholder="youremail@gmail.com" class="bg-neutral-200 px-2 outline-none dark:bg-secondary dark:text-neutral-50"> <button class="rounded-lg border-[1.5px] border-neutral-300 p-1 dark:border-primary dark:text-neutral-50"> ${renderComponent($$result, "Icon", $$Icon, { "name": "arrow" })} </button> </div> </div> <div class="flex gap-x-3"> ${SOSMEDS.map((sosmed) => renderTemplate`<a${addAttribute(sosmed.href, "href")}> <div class="rounded-full border-[1.5px] border-neutral-400 bg-neutral-200 p-2 dark:border-primary dark:bg-secondary dark:text-neutral-50"> ${renderComponent($$result, "Icon", $$Icon, { "name": sosmed.icon })} </div> </a>`)} </div> </div> </footer>`;
}, "C:/Users/ASUS/Documents/coding/competition/digital-business/src/layouts/footer/Footer.astro", void 0);

const useMenu = create()((set) => ({
  isActive: "Home",
  setIsActive: (title) => set({ isActive: title }),
  isOpen: false,
  showMenu: () => set({ isOpen: true }),
  hideMenu: () => set({ isOpen: false }),
  toggleMenu: () => set((prev) => ({ isOpen: !prev.isOpen }))
}));

const MobileMenuButton = () => {
  const { isOpen, toggleMenu } = useMenu();
  const iconSize = 22;
  return /* @__PURE__ */ jsx("button", { onClick: toggleMenu, className: "text-neutral-900 dark:text-neutral-50", children: isOpen ? /* @__PURE__ */ jsx(IoClose, { size: iconSize }) : /* @__PURE__ */ jsx(GiHamburgerMenu, { size: iconSize }) });
};

const MenuItem = ({ href, title }) => {
  const { setIsActive, hideMenu } = useMenu();
  const handleClick = () => {
    hideMenu();
    setIsActive(title);
  };
  return /* @__PURE__ */ jsx(NavigationMenuItem, { onClick: handleClick, children: /* @__PURE__ */ jsx("a", { href, children: /* @__PURE__ */ jsx(NavigationMenuLink, { asChild: true, className: "w-full rounded-md px-2 py-1 dark:bg-dark-tertiary dark:bg-transparent", children: /* @__PURE__ */ jsx("p", { className: "font-medium dark:text-slate-50", children: title }) }) }) });
};

const MenuItemList = () => {
  const filteredMenus = MENUS.filter((menu) => menu.isShow);
  return /* @__PURE__ */ jsx(NavigationMenu, { children: /* @__PURE__ */ jsx(NavigationMenuList, { className: "flex h-screen cursor-pointer flex-col gap-x-8 gap-y-4 lg:h-auto lg:flex-row", children: filteredMenus.map((menu, index) => /* @__PURE__ */ jsx(MenuItem, { href: menu.href, title: menu.title }, index)) }) });
};

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300",
  {
    variants: {
      variant: {
        default: "bg-neutral-900 text-neutral-50 hover:bg-neutral-900/90 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90",
        destructive: "bg-red-500 text-neutral-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-neutral-50 dark:hover:bg-red-900/90",
        outline: "border border-neutral-200 bg-white hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",
        secondary: "bg-neutral-100 text-neutral-900 hover:bg-neutral-100/80 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80",
        ghost: "hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",
        link: "text-neutral-900 underline-offset-4 hover:underline dark:text-neutral-50"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";

const ThemeToggleButton = () => {
  const [theme, setThemeState] = useState("light");
  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setThemeState(isDarkMode ? "dark" : "light");
  }, []);
  useEffect(() => {
    const isDark = theme === "dark" || theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
  }, [theme]);
  const toggleTheme = () => {
    setThemeState((prevTheme) => prevTheme === "light" ? "dark" : "light");
  };
  return /* @__PURE__ */ jsx(
    Button,
    {
      variant: "outline",
      size: "icon",
      onClick: toggleTheme,
      className: "rounded-full dark:bg-secondary dark:text-neutral-50 dark:hover:bg-neutral-900",
      children: theme === "light" ? /* @__PURE__ */ jsx(Sun, { className: "h-[1.2rem] w-[1.2rem]" }) : /* @__PURE__ */ jsx(Moon, { className: "h-[1.2rem] w-[1.2rem]" })
    }
  );
};

const MobileMenu = () => {
  const { isOpen } = useMenu();
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  return /* @__PURE__ */ jsxs("nav", { className: "fixed z-[999] block w-full space-y-2 border-b-2 bg-neutral-300 px-4 py-2 backdrop-blur-3xl dark:border-primary dark:bg-dark-tertiary/30 lg:hidden ", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-end gap-4", children: [
      /* @__PURE__ */ jsx(ThemeToggleButton, {}),
      /* @__PURE__ */ jsx(MobileMenuButton, {})
    ] }),
    isOpen && /* @__PURE__ */ jsx(MenuItemList, {})
  ] });
};

const Navbar = () => {
  return /* @__PURE__ */ jsxs("div", { className: "fixed left-1/2 top-6 z-[999] m-auto hidden -translate-x-1/2 items-center gap-x-6 rounded-full border-[1.5px] border-neutral-300 bg-white px-6 py-3 backdrop-blur-3xl dark:border-primary dark:bg-dark-tertiary/30 lg:flex", children: [
    /* @__PURE__ */ jsx(MenuItemList, {}),
    /* @__PURE__ */ jsx(ThemeToggleButton, {})
  ] });
};

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="w-full"> ${renderComponent($$result, "MobileMenu", MobileMenu, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "C:/Users/ASUS/Documents/coding/competition/digital-business/src/layouts/header/MobileMenu.tsx", "client:component-export": "default" })} ${renderComponent($$result, "Navbar", Navbar, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "C:/Users/ASUS/Documents/coding/competition/digital-business/src/layouts/header/Navbar.tsx", "client:component-export": "default" })} </header>`;
}, "C:/Users/ASUS/Documents/coding/competition/digital-business/src/layouts/header/Header.astro", void 0);

const ContainerLayout = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 50,
      once: true,
      offset: 200
    });
  }, []);
  return /* @__PURE__ */ jsx("div", { children });
};

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" class="!scroll-smooth"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="bg-neutral-100 dark:bg-dark-primary"> ${renderComponent($$result, "ContainerLayout", ContainerLayout, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/ASUS/Documents/coding/competition/digital-business/src/layouts/ContainerLayout", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} <main class="px-8 lg:px-28"> ${renderSlot($$result2, $$slots["default"])} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })} </body></html>`;
}, "C:/Users/ASUS/Documents/coding/competition/digital-business/src/layouts/Layout.astro", void 0);

const useIsIntersectionObserver = () => {
  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.5
  });
  return { isIntersecting, ref };
};

const Container = ({ id, className, isScreen, children, ...others }) => {
  const { isIntersecting, ref } = useIsIntersectionObserver();
  const { setIsActive, isActive } = useMenu();
  useEffect(() => {
    if (isIntersecting) {
      console.log(isActive);
      setIsActive(id);
    }
  }, [isIntersecting, id, setIsActive, isActive]);
  return /* @__PURE__ */ jsx(
    "section",
    {
      ref,
      id,
      className: cn(`relative mb-32 h-auto lg:scroll-mt-28 ${className}`, isScreen && "min-h-screen"),
      ...others,
      children
    }
  );
};

const $$Home = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Container", Container, { "client:idle": true, "id": "home", "data-aos": "fade-up", "isScreen": true, "className": "flex w-full flex-col items-center justify-center text-center lg:px-32", "client:component-hydration": "idle", "client:component-path": "C:/Users/ASUS/Documents/coding/competition/digital-business/src/components/elements/Container.tsx", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="gradient"></div> <h1 class="text-4xl font-bold tracking-tight dark:text-neutral-50 lg:text-6xl">
Selamat Datang di Kursus <span class="to-75 from-25% bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-purple-500 dark:to-sky-500">Coding Online</span> Terbaik
</h1> <p class="px-12 leading-5 dark:text-neutral-50 lg:px-24 lg:text-lg [&:not(:first-child)]:mt-6">
Tingkatkan keterampilan coding Anda bersama instruktur berpengalaman dan kurikulum berkualitas. Belajar kapan saja
    dan di mana saja sesuai kecepatan Anda sendiri.
</p> <p></p> ` })}`;
}, "C:/Users/ASUS/Documents/coding/competition/digital-business/src/components/home/Home.astro", void 0);

const $$PageHeading = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<h1 class="mb-6 from-25% to-75% bg-clip-text text-4xl font-bold text-neutral-900 text-transparent dark:bg-gradient-to-r dark:from-purple-500 dark:to-sky-500"> ${renderSlot($$result, $$slots["default"])} </h1>`;
}, "C:/Users/ASUS/Documents/coding/competition/digital-business/src/components/elements/PageHeading.astro", void 0);

const ABOUTS = [
  {
    title: "Instruktur Berpengalaman",
    label: "Pengajaran Profesional",
    description: "Instruktur kami adalah para profesional yang berpengalaman di industri dan berdedikasi untuk memberikan pengajaran terbaik.",
    icon: "stars"
  },
  {
    title: "Kurikulum Up-to-Date",
    label: "Materi Terbaru",
    description: "Kurikulum kami selalu diperbarui sesuai dengan perkembangan teknologi terbaru untuk memastikan Anda mendapatkan pengetahuan terkini.",
    icon: "starship"
  }
];
const SUB_ABOUTS = [
  {
    title: "Pembelajaran Interaktif",
    icon: "turbo"
  },
  {
    title: "Sertifikat Resmi",
    icon: "fight"
  },
  {
    title: "Akses Seumur Hidup",
    icon: "fast"
  },
  {
    title: "Dukungan Mentor 24/7",
    icon: "magic"
  }
];

const Card = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn(
      "rounded-lg border border-neutral-200 bg-white text-neutral-950 shadow-sm dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50",
      className
    ),
    ...props
  }
));
Card.displayName = "Card";
const CardHeader = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("flex flex-col space-y-1.5 p-6", className), ...props })
);
CardHeader.displayName = "CardHeader";
const CardTitle = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("h3", { ref, className: cn("text-2xl font-semibold leading-none tracking-tight", className), ...props })
);
CardTitle.displayName = "CardTitle";
const CardDescription = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("p", { ref, className: cn("text-sm text-neutral-500 dark:text-neutral-400", className), ...props })
);
CardDescription.displayName = "CardDescription";
const CardContent = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("p-6 pt-0", className), ...props })
);
CardContent.displayName = "CardContent";
const CardFooter = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("flex items-center p-6 pt-0", className), ...props })
);
CardFooter.displayName = "CardFooter";

const $$AboutCard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="lg:px-32"> ${renderComponent($$result, "Card", Card, { "className": "grid grid-cols-2 overflow-hidden rounded-xl hover:scale-[1.03] transition duration-300 border-[1.5px] border-neutral-300 bg-white dark:border-primary dark:bg-dark-tertiary" }, { "default": ($$result2) => renderTemplate`${ABOUTS.map((item) => {
    return renderTemplate`${renderComponent($$result2, "CardContent", CardContent, { "className": "pt-6 lg:px-20" }, { "default": ($$result3) => renderTemplate` <div class="relative flex w-fit rounded-full border-[1.5px] border-neutral-400 p-0.5 dark:border-primary"> <div class="-tranneutral-x-1/2 absolute -top-12 left-1/2 h-12 border-r-[1.5px] border-neutral-300 dark:border-primary"></div> <div class="rounded-full bg-neutral-800 p-[3px] text-neutral-50 dark:bg-dark-secondary "> ${renderComponent($$result3, "Icon", $$Icon, { "name": item.icon })} </div> </div> <h4 class="mt-6 text-[.5rem] font-bold uppercase tracking-[2px] text-blue-400">${item.label}</h4> <h4 class="mt-2 text-2xl font-semibold text-neutral-800 dark:text-neutral-50 lg:text-3xl">${item.title}</h4> <p class="mt-2 text-sm text-neutral-600 dark:text-neutral-400">${item.description}</p> ` })}`;
  })}<div class="col-span-2"> ${renderComponent($$result2, "CardFooter", CardFooter, { "className": "grid grid-cols-2 gap-6 rounded-xl border-t-[1.5px] border-neutral-400 pt-6 dark:border-primary lg:grid-cols-4" }, { "default": ($$result3) => renderTemplate`${SUB_ABOUTS.map((item) => renderTemplate`<div class="flex flex-col items-center justify-center gap-y-2"> <div class="relative flex w-fit rounded-full  border-2 border-neutral-800 p-1 dark:border-dark-secondary dark:bg-dark-secondary"> ${renderComponent($$result3, "Icon", $$Icon, { "name": item.icon })} </div> <p class="text-center text-xs text-neutral-600 dark:text-neutral-300">${item.title}</p> </div>`)}` })} </div> ` })} </div>`;
}, "C:/Users/ASUS/Documents/coding/competition/digital-business/src/components/about/AboutCard.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Container", Container, { "client:idle": true, "data-aos": "fade-up", "id": "about", "className": "flex flex-col items-center justify-center gap-y-4", "client:component-hydration": "idle", "client:component-path": "C:/Users/ASUS/Documents/coding/competition/digital-business/src/components/elements/Container.tsx", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeading", $$PageHeading, {}, { "default": ($$result3) => renderTemplate`About` })} ${renderComponent($$result2, "AboutCard", $$AboutCard, {})} ` })}`;
}, "C:/Users/ASUS/Documents/coding/competition/digital-business/src/components/about/About.astro", void 0);

const COURSES = [
  {
    title: "Kursus Pemrograman Dasar",
    price: "Rp 1.000.000",
    advantages: [
      "Materi mudah dipahami",
      "Dukungan mentor 24/7",
      "Proyek akhir untuk portofolio",
      "Akses ke forum diskusi"
    ],
    icon: "hexagon-dice"
  },
  {
    title: "Kursus Pemrograman Web",
    price: "Rp 2.000.000",
    advantages: [
      "Belajar HTML, CSS, dan JavaScript",
      "Proyek web responsif",
      "Pengetahuan tentang SEO",
      "Panduan membuat website dinamis"
    ],
    icon: "bolt",
    promotion: "Best Seller"
  },
  {
    title: "Kursus Pemrograman Mobile",
    price: "Rp 3.000.000",
    advantages: [
      "Pengembangan aplikasi Android dan iOS",
      "Belajar Kotlin dan Swift",
      "Integrasi dengan API",
      "Optimasi performa aplikasi"
    ],
    icon: "hexagon"
  }
];

const $$Courses = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Container", Container, { "client:idle": true, "data-aos": "fade-up", "isScreen": true, "id": "courses", "className": "flex flex-col items-center justify-center gap-y-8", "client:component-hydration": "idle", "client:component-path": "C:/Users/ASUS/Documents/coding/competition/digital-business/src/components/elements/Container.tsx", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BackgroundGradient", $$BackgroundGradient, { "className": "top-0 blur-[12rem]" })} ${renderComponent($$result2, "PageHeading", $$PageHeading, {}, { "default": ($$result3) => renderTemplate`Courses` })} ${maybeRenderHead()}<div class="relative grid w-full grid-cols-1 items-center gap-x-72 gap-y-12 lg:grid-cols-2"> ${COURSES.map((course, index) => renderTemplate`${renderComponent($$result2, "Card", Card, { "className": cn(
    "relative flex flex-col items-center justify-center rounded-3xl border-[1.5px] text-center transition duration-300 hover:scale-[1.03] dark:border-primary dark:bg-dark-tertiary",
    index === 1 && "left-1/2 z-10 -translate-x-1/2 lg:absolute lg:w-[350px]"
  ) }, { "default": ($$result3) => renderTemplate` <div class="absolute -top-4 left-1/2 w-fit -translate-x-1/2 rounded-full border-[1.5px] border-neutral-200 bg-dark-tertiary p-1 dark:border-primary"> <div class="rounded-full bg-neutral-700 p-3 text-neutral-50 dark:bg-dark-secondary"> ${renderComponent($$result3, "Icon", $$Icon, { "name": course.icon })} </div> </div> ${renderComponent($$result3, "CardHeader", CardHeader, { "className": cn(
    "mt-11 flex items-center",
    index !== 1 && "border-b-[1.5px] border-neutral-800 dark:border-primary"
  ) }, { "default": ($$result4) => renderTemplate` <div class="mb-4 w-fit rounded-full border-[1.5px] border-neutral-500 px-3 py-1 text-[10px] font-medium uppercase tracking-[3px] dark:border-primary "> 
test
</div> ${renderComponent($$result4, "CardTitle", CardTitle, { "className": "text-3xl font-bold" }, { "default": ($$result5) => renderTemplate`${course.price}` })} ${renderComponent($$result4, "CardDescription", CardDescription, {}, { "default": ($$result5) => renderTemplate`${course.title}` })} ` })} ${renderComponent($$result3, "CardContent", CardContent, { "className": cn(" flex w-full justify-center p-8", index === 1 && "bg-neutral-200 dark:bg-secondary") }, { "default": ($$result4) => renderTemplate` <ul class="space-y-2"> ${course.advantages.map((advantage) => renderTemplate`<li class="flex items-center gap-x-4"> <div${addAttribute(cn(
    "w-fit rounded-lg bg-neutral-700 p-1.5 text-neutral-50 dark:bg-secondary",
    index === 1 && "dark:bg-dark-tertiary"
  ), "class")}> ${renderComponent($$result4, "FaCircleCheck", FaCircleCheck, { "size": 12 })} </div> <p class="text-sm">${advantage}</p> </li>`)} </ul> ` })} ${renderComponent($$result3, "CardFooter", CardFooter, { "className": cn(
    " flex w-full justify-center",
    index === 1 && "flex flex-col gap-y-4 rounded-b-3xl bg-neutral-200 dark:bg-secondary"
  ) }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Button", Button, { "className": cn(
    "space-x-3 rounded-lg px-3 dark:bg-secondary  dark:hover:bg-dark-secondary",
    index === 1 && "dark:bg-dark-tertiary dark:hover:bg-dark-secondary "
  ) }, { "default": ($$result5) => renderTemplate` <div class="rounded-md bg-neutral-900 p-1 dark:bg-dark-tertiary dark:text-neutral-50"> ${renderComponent($$result5, "Icon", $$Icon, { "name": course.icon })} </div> <p class="text-xs font-semibold dark:text-neutral-50">GET STARTED</p> ` })} ${course.promotion && renderTemplate`<p class="text-xs font-medium">- ${course.promotion} -</p>`}` })} ` })}`)} </div> ` })}`;
}, "C:/Users/ASUS/Documents/coding/competition/digital-business/src/components/courses/Courses.astro", void 0);

const FAQS = [
  {
    question: "Bagaimana cara mendaftar kursus?",
    answer: "Anda bisa mendaftar melalui halaman pendaftaran di website kami. Isi formulir pendaftaran dan pilih kursus yang ingin diikuti."
  },
  {
    question: "Apakah ada diskon untuk pelajar?",
    answer: "Ya, kami menawarkan diskon khusus untuk pelajar. Silakan hubungi layanan pelanggan kami untuk informasi lebih lanjut."
  },
  {
    question: "Apakah saya bisa belajar sesuai jadwal saya sendiri?",
    answer: "Tentu saja. Kursus kami dirancang untuk fleksibel sehingga Anda bisa belajar sesuai dengan waktu yang Anda miliki."
  },
  {
    question: "Apakah saya akan mendapatkan sertifikat setelah menyelesaikan kursus?",
    answer: "Ya, setiap peserta yang menyelesaikan kursus akan mendapatkan sertifikat resmi dari kami."
  },
  {
    question: "Bagaimana cara mengakses materi kursus?",
    answer: "Setelah mendaftar, Anda akan mendapatkan akses ke platform pembelajaran kami di mana semua materi kursus tersedia."
  },
  {
    question: "Apakah ada sesi konsultasi dengan instruktur?",
    answer: "Ya, Anda bisa mengatur sesi konsultasi dengan instruktur kami untuk mendapatkan bantuan lebih lanjut."
  },
  {
    question: "Bagaimana jika saya kesulitan memahami materi?",
    answer: "Jangan khawatir, Anda bisa bertanya di forum diskusi atau menghubungi mentor untuk mendapatkan bantuan."
  },
  {
    question: "Apakah ada proyek akhir dalam kursus ini?",
    answer: "Ya, setiap kursus memiliki proyek akhir yang harus diselesaikan sebagai bagian dari evaluasi."
  }
];

const Accordion = AccordionPrimitive.Root;
const AccordionItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Item, { ref, className: cn("border-b", className), ...props }));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ jsxs(
  AccordionPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 shrink-0 transition-transform duration-200" })
    ]
  }
) }));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(
  AccordionPrimitive.Content,
  {
    ref,
    className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsx("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

const FaqList = ({ faqs }) => {
  const [isActive, setIsActive] = useState(-1);
  const handleClick = (id) => {
    isActive === id ? setIsActive(-1) : setIsActive(id);
  };
  return /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, className: "grid w-full grid-cols-1 gap-4 lg:grid-cols-2", children: faqs.map((faq, index) => /* @__PURE__ */ jsxs(
    AccordionItem,
    {
      value: `item-${index}`,
      className: cn(
        "rounded-xl border px-4 transition duration-300 hover:scale-[1.03] dark:border-primary dark:bg-dark-tertiary",
        isActive === index && "bg-white dark:bg-secondary"
      ),
      children: [
        /* @__PURE__ */ jsx(
          AccordionTrigger,
          {
            className: "text-left text-lg text-neutral-900 dark:text-neutral-50",
            onClick: () => handleClick(index),
            children: faq.question
          }
        ),
        /* @__PURE__ */ jsx(AccordionContent, { className: "dark:text-neutral-400", children: faq.answer })
      ]
    },
    index
  )) });
};

const $$Faq = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Container", Container, { "client:idle": true, "data-aos": "fade-up", "id": "faq", "className": "flex flex-col items-center justify-center", "client:component-hydration": "idle", "client:component-path": "C:/Users/ASUS/Documents/coding/competition/digital-business/src/components/elements/Container.tsx", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BackgroundGradient", $$BackgroundGradient, { "className": "top-0 blur-[12rem]" })} ${renderComponent($$result2, "PageHeading", $$PageHeading, {}, { "default": ($$result3) => renderTemplate`Faq` })} ${renderComponent($$result2, "FaqList", FaqList, { "faqs": FAQS, "client:idle": true, "client:component-hydration": "idle", "client:component-path": "C:/Users/ASUS/Documents/coding/competition/digital-business/src/components/faq/FaqList.tsx", "client:component-export": "default" })} ` })}`;
}, "C:/Users/ASUS/Documents/coding/competition/digital-business/src/components/faq/Faq.astro", void 0);

const TESTIMONIALS = [
  {
    course: "Kursus Pemrograman Dasar",
    testimonial: "Kursus ini sangat membantu saya memahami dasar-dasar pemrograman. Instruktur sangat ramah dan penjelasannya mudah dipahami.",
    rating: 5,
    name: "Budi Santoso"
  },
  {
    course: "Kursus Pemrograman Web",
    testimonial: "Sekarang saya bisa membuat website sendiri! Materi kursus sangat lengkap dan mendetail.",
    rating: 4,
    name: "Siti Aminah"
  },
  {
    course: "Kursus Pemrograman Mobile",
    testimonial: "Belajar membuat aplikasi mobile ternyata tidak sesulit yang saya kira. Terima kasih kepada para mentor yang selalu siap membantu.",
    rating: 5,
    name: "Andi Wijaya"
  },
  {
    course: "Kursus Pemrograman Dasar",
    testimonial: "Saya suka metode pengajaran di sini. Sangat interaktif dan tidak membosankan. Saya merasa lebih percaya diri dalam memahami konsep-konsep dasar pemrograman. Instruktur juga selalu siap membantu kapan pun saya menemui kesulitan.",
    rating: 4,
    name: "Lina Marlina",
    col_span: true
  },
  {
    course: "Kursus Pemrograman Web",
    testimonial: "Sekarang saya bekerja sebagai web developer berkat kursus ini. Materinya sangat relevan dengan pekerjaan saya.",
    rating: 5,
    name: "Rina Dewi"
  },
  {
    course: "Kursus Pemrograman Mobile",
    testimonial: "Kursus yang luar biasa! Saya bisa membuat aplikasi mobile untuk bisnis saya sendiri.",
    rating: 4,
    name: "Teguh Prasetyo"
  },
  {
    course: "Kursus Pemrograman Dasar",
    testimonial: "Kursus ini memberikan dasar yang kuat bagi saya untuk melanjutkan belajar ke level yang lebih tinggi. Sekarang, saya merasa siap untuk belajar bahasa pemrograman yang lebih kompleks.",
    rating: 5,
    name: "Ahmad Fauzi",
    col_span: true
  }
];

const TestimonialCard = ({ name, course, testimonial, rating, col_span }) => {
  const generateStars = (rating2) => {
    return Array(rating2).fill("⭐").join("");
  };
  return /* @__PURE__ */ jsxs(
    Card,
    {
      className: cn("rounded-xl border-[1.5px] dark:border-primary dark:bg-dark-tertiary hover:scale-[1.03] transition duration-300", col_span && "lg:col-span-2"),
      children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-xl dark:text-neutral-50", children: course }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("h2", { className: "dark:text-neutral-400", children: [
          '"',
          testimonial,
          '"'
        ] }) }),
        /* @__PURE__ */ jsxs(CardFooter, { className: "flex justify-between", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-x-3", children: [
            /* @__PURE__ */ jsx("div", { className: "rounded-full border-[1.5px] border-neutral-700 p-[2.5px] dark:border-primary", children: /* @__PURE__ */ jsx("img", { src: "/images.jpeg", width: 50, height: 50, alt: name, className: "h-8 w-8 rounded-full object-cover" }) }),
            /* @__PURE__ */ jsx("p", { className: "font-semibold dark:text-neutral-300", children: name })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex px-2", children: generateStars(rating) })
        ] })
      ]
    }
  );
};

const $$TestimonialList = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-1 gap-4 lg:grid-cols-3"> ${TESTIMONIALS.map((testimonial) => {
    return renderTemplate`${renderComponent($$result, "TestimonialCard", TestimonialCard, { ...testimonial })}`;
  })} </div>`;
}, "C:/Users/ASUS/Documents/coding/competition/digital-business/src/components/testimonials/TestimonialList.astro", void 0);

const $$Testimonials = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Container", Container, { "client:idle": true, "data-aos": "fade-up", "isScreen": true, "id": "testimonials", "className": "flex flex-col items-center justify-center", "client:component-hydration": "idle", "client:component-path": "C:/Users/ASUS/Documents/coding/competition/digital-business/src/components/elements/Container.tsx", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BackgroundGradient", $$BackgroundGradient, { "className": "top-0 blur-[10rem]" })} ${renderComponent($$result2, "PageHeading", $$PageHeading, {}, { "default": ($$result3) => renderTemplate`Testimonial` })} ${renderComponent($$result2, "TestimonialList", $$TestimonialList, {})} ` })}`;
}, "C:/Users/ASUS/Documents/coding/competition/digital-business/src/components/testimonials/Testimonials.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<script>\n  const getThemePreference = () => {\n    if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {\n      return localStorage.getItem("theme");\n    }\n    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";\n  };\n  const isDark = getThemePreference() === "dark";\n  document.documentElement.classList[isDark ? "add" : "remove"]("dark");\n\n  if (typeof localStorage !== "undefined") {\n    const observer = new MutationObserver(() => {\n      const isDark = document.documentElement.classList.contains("dark");\n      localStorage.setItem("theme", isDark ? "dark" : "light");\n    });\n    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });\n  }\n<\/script> ', ""])), renderComponent($$result, "Layout", $$Layout, { "title": "Digital Business | Satria Bahari" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Home", $$Home, {})} ${renderComponent($$result2, "About", $$About, {})} ${renderComponent($$result2, "Courses", $$Courses, {})} ${renderComponent($$result2, "Testimonials", $$Testimonials, {})} ${renderComponent($$result2, "Faq", $$Faq, {})} ` }));
}, "C:/Users/ASUS/Documents/coding/competition/digital-business/src/pages/index.astro", void 0);

const $$file = "C:/Users/ASUS/Documents/coding/competition/digital-business/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };