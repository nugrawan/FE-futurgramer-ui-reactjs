import React from "react";

const footItems = [
  {
    title: "About",
    children: [
      {
        name: "About Us",
        link: "#",
      },
      {
        name: "Pricing ",
        link: "#",
      },
      {
        name: "Offices",
        link: "#",
      },
      {
        name: "Spaces",
        link: "#",
      },
    ],
  },
  {
    title: "Product",
    children: [
      {
        name: "Office Space",
        link: "#",
      },
      {
        name: "Business Lounge",
        link: "#",
      },
      {
        name: "Meeting Room",
        link: "#",
      },
      {
        name: "Virtual Office",
        link: "#",
      },
    ],
  },
  {
    title: "Contact",
    children: [
      {
        name: "Help Desk",
        link: "#",
      },
      {
        name: "Book A Tour",
        link: "#",
      },
      {
        name: "Blog",
        link: "#",
      },
      {
        name: "Forum",
        link: "#",
      },
    ],
  },
];

const icons = [
  { icon: "./icons/facebook.svg" },
  { icon: "./icons/linkedin.svg" },
  { icon: "./icons/instagram.svg" },
  { icon: "./icons/twitter-x.svg" },
  { icon: "./icons/whatsapp.svg" },
  { icon: "./icons/envelope.svg" },
];

export function Footer() {
  return (
    <footer className="bg-background-default pb-10 hidden md:block text-white">
      <div className="flex justify-between cont border-t pt-16">
        <div>
          <h1 className="text-primary-default text-2xl font-bold">Futurgramer</h1>
          <p className="text-sm leading-6 opacity-90 text-left max-w-xs mt-4">
            We want to build more than nice, shared office spaces. We want to
            build a community.
          </p>
          <div className="flex gap-5 my-10">
            {icons.map((icon, i) => (
              <a href="#" key={i}><img className="h-7 rounded-md bg-primary-default p-1" src={icon.icon} alt="icon" /></a>
            ))}
          </div>
        </div>

        <div className="flex gap-20 lg:gap-48 text-sm">
          {footItems.map((item, i) => (
            <div key={i}>
              <h4 className="font-bold text-xl">{item.title}</h4>
              <ul className="flex flex-col gap-4 mt-6">
                {item.children.map((child, i) => (
                  <li key={i}>
                    <a href={child.link} className="hover:underline">
                      {child.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 cont">
        <p className="opacity-80 text-sm">
          © 2023 All rights reserved - Futurgramer
        </p>
      </div>
    </footer>
  );
}

export function FooterMobile() {
  return (
    <footer className="pt-16 cont md:hidden block text-white">
      <div className="flex flex-col items-center border-b py-5">
        <h1 className="text-2xl font-bold flex gap-2">Futurgramer</h1>
        <ul className="flex flex-col gap-4 mt-12 text-center">
          <a href="/about">
            About Us
          </a>
          <a href="/pricing">
            Pricing
          </a>
          <a href="/office">
            Offices
          </a>
          <a href="/articles">
            Articles
          </a>
          <a href="/contact-us">
            Contact
          </a>
        </ul>
        <div className="flex gap-5 mt-5">
          {icons.map((icon, i) => (
            <img key={i} className="h-5" src={icon.icon} alt="icon" />
          ))}
        </div>
      </div>

      <div className="py-6 cont">
        <p className="text-center">
          © 2023 All rights reserved - Futurgramer
        </p>
      </div>
    </footer>
  );
}
