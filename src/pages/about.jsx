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
import { rc } from "../lib/utils";

function HeroPage() {
  return (
    <Section className="flex flex-col md:flex-row justify-between w-full pt-10  mb-10">
      <SectionExplain className="flex flex-col gap-5  flex-1">
        <SectionHeading className="animate-fade-right animate-duration-[500ms] animate-delay-300 animate-ease-in">
          About Our Company
        </SectionHeading>
        <SectionDescription className="text-white leading-7 md:text-lg opacity-80 font-thin md:text-left animate-fade-left animate-duration-[500ms] animate-delay-500 animate-ease-in">
          Kami Hadir sebagai media penyedia layanan kesehatan para pekerja digital, khususnya programmer di suluruh dunia untuk mengatasi masalah kesehatan yang semakin melonjak di zaman teknologi ini, dengan majunya teknologi yang membuat penyakit seperti mental illnes dan obesitas semakin melonjak
        </SectionDescription>
      </SectionExplain>

      <div className="animate-fade-up animate-duration-[300ms] flex-1 rounded-3xl animate-delay-100 animate-ease-in">
        <img src="./programming/coding-vector.jpg" alt="hero" className="rounded-3xl md:w-5/6 w-full" />
      </div>
    </Section >
  );
}

const whyServiced = [
  {
    title: "Working Spaces",
    image: "/images/home-why1.png",
    desc: "Nikmati ruang yang nyaman dan tanpa distrupsi untuk bekerja dengan fokus dan produktif.",
  },
  {
    title: "Coworking Space",
    image: "/images/home-why2.png",
    desc: "Berinteraksi secara langsung dengan para pakar professional kami dan bekerja secara sehat.",
  },
  {
    title: "Meeting Space",
    image: "/images/home-why3.png",
    desc: "Ikuti pertemuan rutin dan diskusikan perkembangan kalian secara konsisten.",
  },
];

function WhyServicesSection() {
  return (
    <Section className="pt-10 flex flex-col">
      <SectionExplain className="md:w-2/3 w-full">
        <SectionTag className="text-center">OUR ACTIVITIES</SectionTag>
        <SectionHeading className="text-center">
          Kami Juga Membantu Ribuan Programmer Menangani Masalah Mereka Secara Langsung Dengan Beragam Fasilitas
        </SectionHeading>
        <SectionDescription className="text-center">
          Cukup dengan langganan dengan harga terjangkau, kami akan memfasilitasi para programmer dan pekerja digital lainnya lengkap dengan layanan dari para tenaga professional yang menangani secara langsung
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
              <img src="./icons/arrow-right-short.svg" alt="icon" className="transition-transform group-hover:translate-x-2 w-5 h-5" />
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

const locations = [
  {
    name: "Jakarta, Indonesia",
  },
  {
    name: "Makassar, Indonesia",
  },
  {
    name: "Surabaya, Indonesia",
  },
  {
    name: "Mumbai, India",
  },
  {
    name: "San Francisco, USA",
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
          Temukan kantor kami dan bergabung menjadi bagian dari kami
        </SectionHeading>
        <SectionDescription>
          Kami telah membangun beberapa kantor yang terbagi di beberapa bagian, dan dengan pembangunan kantor yang terus berlanjut dan menyeluruh.
        </SectionDescription>

        <div className="space-y-5 py-10 text-white" data-aos-offset="0" data-aos="fade-up" data-aos-duration="500" data-aos-delay="500">
          {locations.map((location, i) => (
            <div key={i} className="flex items-center gap-5">
              <img className="w-10 bg-primary-default rounded-full p-3" src="./icons/geo-alt.svg" alt="icon" />
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

const datas = [
  {
    dataInt: "300+",
    title: "Communities",
    desc: "Kami mengontrol ratusan komunitas di seluruh penjuru dunia",
  },
  {
    dataInt: "5+",
    title: "Offices",
    desc: "Kami membangun kantor yang nyaman di berbagai bagian",
  },
  {
    dataInt: "3+",
    title: "Years Of Service",
    desc: "Kami telah berpengalaman selama lebih dari tiga tahun dalam menangani kasus yang sama",
  },
];

function DataSection() {
  return (
    <Section className="flex-col">
      <SectionExplain>
        <SectionHeading className="text-xl md:text-2xl">
          Kami Lebih Dari Sebuah Perusahaan Yang Diketahui Masyarakat Luas
        </SectionHeading>
        <SectionDescription className="mx-0 text-xs md:text-base">
          Temukan sarana yang cocok untuk anda dan adilah bagia dari kami
        </SectionDescription>
      </SectionExplain>

      <div className="grid md:grid-cols-3 grid-cols-1 md:gap-16 gap-8 border-t-2 border-gray-300 pt-10">
        {datas.map((data, i) => (
          <div key={i} className="space-y-3">
            <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200" className="text-3xl font-bold text-primary-default">{data.dataInt}</p>
            <CardTitle className="text-lg">{data.title}</CardTitle>
            <CardDesc>{data.desc}</CardDesc>
          </div>
        ))}
      </div>
    </Section>
  );
}

const profiles = [
  {
    img: "./images/about-team1.png",
    name: "John Carter",
    position: "CEO & Founder",
  },
  {
    img: "./images/about-team2.png",
    name: "Sophie Moore",
    position: "CTO & Founder",
  },
  {
    img: "./images/about-team4.png",
    name: "Matt Cannon",
    position: "VP Of Finance",
  },
  {
    img: "./images/about-team3.png",
    name: "Andy Smith",
    position: "VP Of Design",
  },
  {
    img: "./images/about-team5.png",
    name: "Sam Houston",
    position: "VP Of Products",
  },
];

function LeadershipSection() {
  return (
    <Section className="mt-4 flex flex-col">
      <SectionExplain className="md:w-[60%] w-[90%] mx-auto">
        <SectionTag className="text-center text-xs md:text-base">OUR LEADERSHIP TEAM</SectionTag>
        <SectionHeading className="text-center text-2xl ">
          Berkenalan Dengan Para Pakar Kami
        </SectionHeading>
        <SectionDescription className="text-center text-xs md:text-base">
          Terdiri dari puluhan tenaga profesional di bidangnya yang berpengalaman lebih dari 3 tahun
        </SectionDescription>
      </SectionExplain>

      <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-10 md:gap-20">
        {profiles.map((profile, i) => (
          <div
            key={i}
            className={rc(
              "flex flex-col justify-center text-center space-y-3",
              "sm:col-span-1",
              i === 4 && "col-span-2"
            )}
          >
            <img
              data-aos="flip-down" data-aos-duration="1000" data-aos-delay="100"
              src={profile.img}
              alt="leader"
              className="max-w-[120px] sm:max-w-[170px] mx-auto"
            />
            <CardTitle>{profile.name}</CardTitle>
            <CardDesc>{profile.position}</CardDesc>
          </div>
        ))}
      </div>
    </Section>
  );
}

function JoinTeamSection() {
  return (
    <Section row>
      <div className="bg-[#0190fe11] mx-auto flex md:flex-row flex-col md:p-20 p-10 items-baseline rounded-3xl">
        <SectionHeading className="md:w-[40%] mx-0 text-xl md:text-4xl">
          Join our team
        </SectionHeading>
        <SectionExplain className="md:w-[60%] w-full md:mt-0 mt-5">
          <SectionDescription className="text-xs md:text-base">
            Bergabung dengan kami di sosial media untuk mendapatkan informasi terupdate dan paling populer
          </SectionDescription>
          <div data-aos="fade-right" data-aos-duration="700" data-aos-delay="500" className="inline-flex gap-2 cursor-pointer group items-center text-xl md:text-base">
            <p className="text-primary-default font-bold">Explore Social Media</p>
            <img src="/icons/arrow-right-short.svg" alt="icon" className="transition-transform group-hover:translate-x-2" />
          </div>
        </SectionExplain>
      </div>
    </Section>
  );
}

function SubscribeSection() {
  return (
    <Section className="mt-4 flex flex-col">
      <SectionExplain>
        <SectionHeading className="text-center">
          Send Your Email For Subscription
        </SectionHeading>
        <SectionDescription className="text-center">
          Kami akan memberikan penawaran menarik di email dengan cerita yang menarik
        </SectionDescription>
      </SectionExplain>

      <div className="w-full">
        <div className="rounded-full border font-semibold md:w-[40%] text-black bg-white flex justify-between p-2 mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="focus:outline-none pl-4 w-full"
          />
          <Button>Submit</Button>
        </div>

        <p className="text-center mt-4 text-sm md:text-lg italic opacity-90">
          No worries, we don’t do spam!
        </p>
      </div>
    </Section>
  );
}

function AboutPage() {
  return (
    <>
      <div className="bg-primary-default text-white pb-1 mb-32">
        <HeroPage />
      </div>
      <WhyServicesSection />
      <OurOfficeSection />
      <DataSection />
      <LeadershipSection />
      <JoinTeamSection />
      <SubscribeSection />
    </>
  );
}

export default AboutPage;
