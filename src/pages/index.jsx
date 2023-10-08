import React from "react";
import { Button } from "../components/button";
import {
  Section,
  SectionHeading,
  SectionDescription,
  SectionTag,
  SectionExplain,
} from "../components/section";
import { Card, CardDesc, CardTitle } from "../components/card";

function HeroSection() {
  return (
    <Section className="pt-20 gap-20" row>
      <SectionExplain className="flex flex-col gap-3 w-5/6">
        <SectionHeading className="animate-fade-up animate-duration-[300ms] animate-delay-300 animate-ease-in">
          Happy Life With Coding
        </SectionHeading>
        <SectionDescription className="animate-fade-up text-white animate-duration-[500ms] animate-delay-500 animate-ease-in">
          Care about your mental health and your body, don't just coding and sit down in your room
          We serve you our best services for your health and your happy life, enjoy our services and stay coding
        </SectionDescription>

        <div className="flex gap-6 animate-fade-up animate-duration-[700ms] animate-delay-700 animate-ease-in-out">
          <Button>Discover Now</Button>
          <Button variant="secondary">Book a tour</Button>
        </div>
      </SectionExplain>

      <div className="w-5/6 border shadow-lg shadow-primary-default border-primary-default animate-fade-left animate-duration-1000 animate-delay-500">
        <img src="/programming/front-code.jpg" alt="hero" />
      </div>
    </Section>
  );
}

const services = [
  {
    title: "Consultation",
    desc: "Tell your problem to our professional experts",
    icon: "./icons/services1.png",
  },
  {
    title: "Articles",
    desc: "We provide many interesting articles that you can read",
    icon: "./icons/services2.png",
  },
  {
    title: "Plan Makers",
    desc: "We help you plan your future for health in a digital world",
    icon: "./icons/services3.png",
  },
];

function OurServicesSection() {
  return (
    <Section className="mt-4 md:items-start" col>
      <SectionExplain className="md:w-[80%]">
        <SectionTag className="md:text-left text-center" >
          OUR SERVICES
        </SectionTag>
        <SectionHeading className="md:text-left text-center" >
          We Offer More Services For Your Digital Life
        </SectionHeading>
      </SectionExplain>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
        {services.map((service, i) => (
          <Card key={i} active={i === 1} >
            <img src={service.icon} alt="icon" className="w-10" />
            <CardTitle>{service.title}</CardTitle>
            <CardDesc>{service.desc}</CardDesc>
            <div className="inline-flex gap-2 cursor-pointer group items-center">
              <p className="text-primary-default font-bold">Learn more</p>
              <img src="./icons/r-arrow.png" alt="icon" className="transition-transform group-hover:translate-x-2 w-5 h-5" />
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

const secsOne = [
  {
    title: "Build Your Big Community In Your Environment",
    desc: "Our mission is to expand the awareness of digital warriors to pay more attention",
  },
  {
    title: "The Productifity Digital Warriors",
  },
  {
    title: "Design Your Own Happy Life",
  },
];

function SectionOne() {
  return (
    <Section className="pb-10 md:mb-20" row>
      <div className="my-0 md:my-20 ml-10 w-[40%]">
        <img
          data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="100"
          src="/programming/vertical-code.jpg"
          alt="hero"
          className="md:m-0 border h-[600px] hidden md:block shadow-lg shadow-primary-default border-primary-default"
        />
      </div>

      <SectionExplain className="md:w-2/5 w-full">
        <SectionHeading className="md:text-left text-center">
          A Helpfull Services And Big Communities In The World
        </SectionHeading>

        <div className="grid gap-7 pt-10">
          {secsOne.map((item, i) => (
            <Card key={i} active={i === 0}>
              <CardTitle>{item.title}</CardTitle>
              {item.desc && <CardDesc>{item.desc}</CardDesc>}
            </Card>
          ))}
        </div>
      </SectionExplain>
    </Section>
  );
}

const whyServiced = [
  {
    title: "Office Space",
    image: "/images/home-why1.png",
    desc: "Informal drop-in meeting spaces with secure WiFi, access to a printer, scanner and photocopier.",
  },
  {
    title: "Coworking Space",
    image: "/images/home-why2.png",
    desc: "Informal drop-in meeting spaces with secure WiFi, access to a printer, scanner and photocopier.",
  },
  {
    title: "Meeting Space",
    image: "/images/home-why3.png",
    desc: "Informal drop-in meeting spaces with secure WiFi, access to a printer, scanner and photocopier.",
  },
];

function WhyServicesSection() {
  return (
    <Section className="pt-10 flex flex-col">
      <SectionExplain className="md:w-2/3 w-full">
        <SectionTag className="text-center">WHY SERVICED OFFICE</SectionTag>
        <SectionHeading className="text-center">
          We've helped thousands of fast-growing startups and teams
        </SectionHeading>
        <SectionDescription className="text-center">
          Grow without restriction. By giving you space that can be changed as
          your business grows. Only pay for the space you use with everything
          you need to be included in one price.
        </SectionDescription>
      </SectionExplain>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-7">
        {whyServiced.map((item, i) => (
          <Card data-aos="fade-left" data-aos-duration="500" data-aos-delay="300" key={i}>
            <img src={item.image} alt="why" className="w-full" />
            <CardTitle>{item.title}</CardTitle>
            <CardDesc>{item.desc}</CardDesc>
            <div className="inline-flex gap-2 cursor-pointer group items-center">
              <p className="text-primary-default font-bold">Learn more</p>
              <img src="./icons/r-arrow.png" alt="icon" className="transition-transform group-hover:translate-x-2 w-5 h-5" />
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

const locations = [
  {
    name: "New Orleans, USA",
  },
  {
    name: "Bangalore, India",
  },
  {
    name: "Sydney, Australia ",
  },
];

function OurOfficeSection() {
  return (
    <Section className="mt-4 flex gap-x-28" row>
      <div data-aos-offset="0" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="100">
        <img src="/images/home2.png" alt="hero" className="w-5/6" />
      </div>
      <SectionExplain className="md:w-1/2 w-full">
        <SectionTag>OUR OFFICES</SectionTag>
        <SectionHeading>
          Discover the Location that Best Fits Your Business Needs
        </SectionHeading>
        <SectionDescription>
          As we headstart into this new normal, we are ensuring your workspace
          experience remains exceptional.
        </SectionDescription>

        <div className="space-y-5 py-10 text-primary-default" data-aos-offset="0" data-aos="fade-up" data-aos-duration="500" data-aos-delay="500">
          {locations.map((location, i) => (
            <div key={i} className="flex items-center gap-5">
              <img className="w-10" src="./icons/map.png" alt="icon" />
              <p className="font-bold text-lg opacity-80">
                {location.name}
              </p>
            </div>
          ))}
        </div>
      </SectionExplain>
    </Section>
  );
}

function SectionTwo() {
  return (
    <Section className="mt-20">
      <div className="p-12 md:p-20 w-full rounded-3xl flex md:flex-row flex-col-reverse justify-between items-center">
        <div className="flex flex-col gap-6 md:w-3/4 md:mt-0 mt-4">
          <SectionHeading className="text-lg">
            Call Our Teams For Free, We Response Your Call As Soon As Possible We Can
          </SectionHeading>
          <Button className="w-fit">Try Now</Button>
        </div>
        <div data-aos-offset="0" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="100">
          <img src="/images/home3.png" alt="hero" />
        </div>
      </div>
    </Section>
  );
}

function MainPage() {
  return (
    <div>
      <HeroSection />
      <OurServicesSection />
      <SectionOne />
      <WhyServicesSection />
      <OurOfficeSection />
      <SectionTwo />
    </div>
  );
}

export { MainPage, WhyServicesSection };
