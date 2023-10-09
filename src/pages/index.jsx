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
          Peduli dengan kesehatan mental dan tubuhmu sebagai programmer, jangan hanya duduk di depan layar setiap hari
        </SectionDescription>

        <div className="flex gap-6 animate-fade-up animate-duration-[700ms] animate-delay-700 animate-ease-in-out">
          <a href="/articles"><Button>Read Articles</Button></a>
          <a href="/contact-us"><Button>Contact Us</Button></a>
        </div>
      </SectionExplain>

      <div className="w-5/6 border-2 border-[#00DFC0] animate-fade-left rounded-xl animate-duration-1000 animate-delay-500">
        <img src="/programming/front-code.jpg" alt="hero" className="img-shadow rounded-xl" />
      </div>
    </Section>
  );
}

const services = [
  {
    title: "Consultation",
    desc: "Ceritakan masalah kesehatanmu kepada para ahli di bidangnya",
    icon: "./icons/heart-pulse.svg",
    to: '/contact-us'
  },
  {
    title: "Articles",
    desc: "Kami menyediakan artikel menarik khusus untuk para pejuang digital dalam menjaga kesehatannya",
    icon: "./icons/newspaper.svg",
    to: '/articles'
  },
  {
    title: "Plan Makers",
    desc: "Kami membantu para programmer muda dalam membuat rencana masa depan sehat sebagai programmer",
    icon: "./icons/book.svg",
    to: '/contact-us'
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
          Kami Menyediakan Layanan Untuk Membantu Kehidupan Digital Anda
        </SectionHeading>
      </SectionExplain>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
        {services.map((service, i) => (
          <Card key={i} active={i === 1} >
            <img src={service.icon} alt="icon" className="w-10 bg-primary-default p-2 rounded-md" />
            <CardTitle>{service.title}</CardTitle>
            <CardDesc>{service.desc}</CardDesc>
            <a href={service.to} className="inline-flex gap-2 cursor-pointer group items-center">
              <p className="text-primary-default font-bold">Get started</p>
              <img src="./icons/arrow-right-short.svg" alt="icon" className="transition-transform group-hover:translate-x-2 w-5 h-5" />
            </a>
          </Card>
        ))}
      </div>
    </Section>
  );
}

const secsOne = [
  {
    title: "Bangun komunitasmu sendiri mulai dari lingkungan sekitar",
    desc: "Misi kami adalah membantu anda dan programmer lain dalam menyadari pentingnya komunitas yang positif",
  },
  {
    title: "Belajar Bagaimana Mengontrol Waktumu Di Dunia Digital",
  },
  {
    title: "Desain Dan Bangun Kehidupan Yang Menyenangkan Di Dunia Digital",
  },
];

function SectionOne() {
  return (
    <Section className="pb-10 md:mb-20" row>
      <div className="my-0 md:my-20 ml-10 w-[80%]">
        <img
          data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="100"
          src="/programming/group-hacking.jpg"
          alt="hero"
          className="md:m-0 border-[#00DFC0] border-2 rounded-lg md:block img-shadow"
        />
      </div>

      <SectionExplain className="md:w-2/5 w-full">
        <SectionHeading className="md:text-left text-center">
          Bangun Komunitas Programmer Health Di Seluruh Penjuru Dunia
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

function SectionTwo() {
  return (
    <Section className="mt-20">
      <div className="p-12 md:p-20 rounded-lg def-shadow flex md:flex-row flex-col-reverse justify-between items-center">
        <div className="flex flex-col gap-10 md:w-3/4 md:mt-0 mt-4">
          <SectionHeading className="text-lg">
            Hubungi Tim Kami Untuk Informasi Dan Masalah Yang Perlu Disampaikan
          </SectionHeading>
          <a href="tel:12345"><Button className="w-fit">Call Now</Button></a>
        </div>
        <div data-aos-offset="0" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="100">
          <img src="/images/home3.png" alt="hero" className="img-shadow" />
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
      <SectionTwo />
    </div>
  );
}

export { MainPage };
