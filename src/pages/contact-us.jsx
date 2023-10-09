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
    <>
      <Section className="mt-10">
        <SectionExplain className="m-auto md:w-[60%] text-center">
          <SectionTag>CONTACT US</SectionTag>
          <SectionHeading className="text-center">
            Kami memiliki kantor yang tersedia dan masih dibangun di penjuru dunia
          </SectionHeading>
          <SectionDescription className="text-center text-xs md:text-base">
            Cari tahu tempat kami dan menjadi bagian dari kami
          </SectionDescription>
        </SectionExplain>
      </Section>

      <div className="cont mb-32">
        <img src="/images/contact-map.png" alt="hero" />
      </div>
    </>
  );
}

const contacts = [
  {
    title: "Headquarters",
    desc: "Makassar city, Sulawesi Selatan",
    link: "Open in map",
    to: 'https://www.google.com/maps/place/Makassar,+Kota+Makassar,+Sulawesi+Selatan/@-5.1111265,119.2378109,11z/data=!3m1!4b1!4m6!3m5!1s0x2dbee329d96c4671:0x3030bfbcaf770b0!8m2!3d-5.1615828!4d119.4359281!16zL20vMDIyaDQ3?entry=ttu'
    
  },
  {
    title: "Call Us Now",
    desc: "+6282292914643 (NUGRAWAN)",
    link: "Call now",
    to: 'tel:6282292914643'
  },
  {
    title: "Costumer Service",
    desc: "Our friendly team is here to help.",
    link: "Email Us",
    to: 'mailto:nugrawanpratama203@gmail.com'
  },
];

function ContactSection() {
  return (
    <Section>
      <div className="grid md:grid-cols-3 w-full grid-cols-1 md:gap-20 gap-10 mx-auto">
        {contacts.map((contact, i) => (
          <Card key={i} className="md:w-[80%]">
            <CardTitle>{contact.title}</CardTitle>
            <CardDesc>{contact.desc}</CardDesc>
            <a href={contact.to} target="blank" className="inline-flex gap-2 cursor-pointer group items-center">
              <p className="text-primary-default font-bold">{contact.link}</p>
              <img src='/icons/arrow-right-short.svg' alt="icon" className="transition-transform group-hover:translate-x-2 w-5 h-5" />
            </a>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function CtaSection() {
  return (
    <Section>
      <div className="flex md:flex-row flex-col rounded-3xl md:gap-20 gap-10 my-10 bg-[#0190fe11] p-10">
        <div data-aos-offset="0" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="100">
          <img src="./images/contact1.png" alt="CTA" />
        </div>

        <SectionExplain>
          <SectionHeading className="text-2xl">Tim Kami Selalu Siap 24/7 Untuk Mendengarkan Keluhan Anda</SectionHeading>
          <SectionDescription className="text-xs md:text-base">
            Kami menyediakan layanan untuk mendengarkan keluhan dan kritikan terkai product kami
          </SectionDescription>
          <div className="flex gap-3" data-aos="fade-up" data-aos-duration="500" data-aos-delay="300">
            <a href="tel:6282292914643"><Button className="px-5 text-[.7em]">Call Us Now</Button></a>
            <a href="sms:6282292914643?body=TEXT"><Button className="px-5 text-[.7em]">Via SMS</Button></a>
          </div>
        </SectionExplain>
      </div>
    </Section>
  );
}

function FormSection() {
  return (
    <Section className="flex-col items-start w-full px-20 lg:w-[40%] p-10 mt-10 rounded-xl bg-[#0190fe11] img-shadow">
      <SectionExplain className="m-auto">
        <SectionHeading className="text-center">
          Kritik Dan Saran
        </SectionHeading>
        <SectionDescription className="text-center md:w-[70%]">
          Kami sangat menghargai kritik dan saran yang anda berikan terhadap layanan kami
        </SectionDescription>
      </SectionExplain>
      <div className="md:px-10 w-full">
        <form action="" className="flex gap-10 flex-col text-xs text-black md:text-base ">
          <input
            className="px-8 py-4 w-full border rounded-full focus:outline-black caret-black"
            type="text"
            name="firstName"
            id="fistName"
            placeholder="First Name"
          />
          <input
            className="px-8 py-4 w-full border rounded-full focus:outline-black caret-black"
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
          />
          <div className="flex gap-10">
            <input
              className="px-8 py-4 w-full border rounded-full focus:outline-black caret-black"
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
            />
          </div>
          <textarea
            className="px-8 py-4 w-full border rounded-full focus:outline-black caret-black"
            type="text"
            name="message"
            rows={3}
            id="message"
            placeholder="Message"
          ></textarea>
          <Button>Submit</Button>
        </form>
      </div>
    </Section>
  );
}

function ContactUsPage() {
  return (
    <>
      <HeroSection />
      <ContactSection />
      <CtaSection />
      <FormSection />
    </>
  );
}

export default ContactUsPage;
