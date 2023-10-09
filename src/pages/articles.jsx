import React, { useState, useEffect } from "react";
import { Button } from "../components/button";
import {
  Section,
  SectionHeading,
  SectionDescription,
  SectionExplain,
} from "../components/section";
import { Card, CardDesc, CardTitle } from "../components/card";

function HeroSection() {
  return (
    <Section col className="mt-20">
      <SectionExplain>
        <SectionHeading className="text-center animate-fade-top animate-duration-500 animate-delay-2000 animate-ease-in-out">
          Artikel Yang Akan Membantu Anda
        </SectionHeading>
        <div className="rounded-full bg-white text-black font-semibold flex w-5/6 p-2.5 w-full animate-fade-right animate-duration-500 animate-delay-100 animate-ease-in">
          <input
            type="email"
            placeholder="Search Articles"
            className="focus:outline-none pl-4 w-full text-sm md:text-base"
          />
          <Button>Search</Button>
        </div>
        <SectionDescription className="text-center animate-fade-right animate-duration-500 animate-delay-100 animate-ease-in">
          *Silahkan cari artikel berdasarkan topik yang anda butuhkan
        </SectionDescription>
      </SectionExplain>
      <a href="#addArticle">
        <Button className="flex gap-3 items-center">Upload Article
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
          </svg>
        </Button>
      </a>
    </Section>
  );
}
const ArticlesSection = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/articles')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  function isValidImageUrl(url) {
    const imageExtensions = /\.(jpg|jpeg|png|gif|bmp|svg)$/i;
    return url && imageExtensions.test(url);
  }

  return (
    <Section className="flex-col">
      <SectionExplain>
        <SectionHeading className="text-center">
          ARTICLES
        </SectionHeading>
      </SectionExplain>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {posts.map((service, i) => (
          <Card key={i}>
            <img src={isValidImageUrl(service.imageLink) ? service.imageLink : '/programming/exercise-vector.jpg'} alt="card-img" className="object-cover rounded-lg relative h-52" />
            <CardTitle>{service.title}</CardTitle>
            <CardDesc>{service.description}</CardDesc>
            <div className="flex gap-2 cursor-pointer group items-center">
              <p className="text-primary-default font-bold">Learn more</p>
              <img src="./icons/arrow-right-short.svg" alt="icon" className="transition-transform group-hover:translate-x-2" />
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

function CtaSection() {
  return (
    <Section >
      <div className="grid grid-cols-2 p-10 md:p-16 bg-[#0190fe11] gap-20 rounded-3xl">
        <SectionExplain className="flex-1">
          <SectionHeading className="text-xl text-primary-default">
            Seberapa Penting Kesehatan Bagi Programmer?
          </SectionHeading>
          <SectionDescription className="text-xs md:text-sm">
            Kesehatan adalah aset yang sangat berharga bagi seorang programmer, karena dalam dunia teknologi yang serba cepat ini, kesejahteraan fisik dan mental adalah fondasi kesuksesan. Tanpa kesehatan yang baik, produktivitas dan kreativitas dalam mengatasi tantangan teknis akan terhambat. Pekerjaan yang melibatkan jam kerja panjang di depan komputer dapat menimbulkan berbagai masalah kesehatan, dan oleh karena itu, merawat tubuh dan pikiran dengan baik adalah kunci untuk menjaga karier yang berkelanjutan dan memberikan kontribusi yang berarti dalam dunia teknologi.
          </SectionDescription>
          <Button data-aos="fade-right" data-aos-duration="700" data-aos-delay="300">Lebih lanjut</Button>
        </SectionExplain>
        <div data-aos-offset="0" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="100">
          <img src="/programming/man-fitness.jpg" alt="cta-img" className="rounded-md" />
        </div>
      </div>
    </Section>
  );
}

function AddArticle() {
  const [posts, setPosts] = useState([]);
  const [newArticle, setNewArticle] = useState({
    title: '',
    description: '',
    imageLink: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewArticle({
      ...newArticle,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:3000/articles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newArticle),
    })
      .then((response) => response.json())
      .then((data) => {
        setPosts([...posts, data]);
        setNewArticle({ title: '', description: '', imageLink: '' });
      })
      .catch((error) => {
        console.error('Error posting data:', error);
      });
  };

  return (
    <Section className="justify-center">
      <div id="addArticle" className="bg-cover flex flex-col items-start md:p-16 px-3 py-5 rounded-3xl img-shadow border-2 border-primary-default w-3/6">
        <SectionExplain className="m-auto">
          <SectionHeading className="text-center text-xl">
            Upload Article
          </SectionHeading>
        </SectionExplain>
        <div className="mt-10 md:w-full m-auto rounded-xl">
          <form onSubmit={handleSubmit} className="flex gap-10 flex-col text-xs md:text-base text-black font-semibold">
            <input
              className="px-4 py-3 border rounded-full focus:outline-black caret-black"
              type="text"
              name="title"
              value={newArticle.title}
              onChange={handleInputChange}
              placeholder="Title..."
            />
            <input
              className="px-4 py-3 border rounded-full focus:outline-black caret-black"
              type="text"
              name="description"
              value={newArticle.description}
              onChange={handleInputChange}
              placeholder="Descriptions..."
            />
            <input
              className="px-4 py-3 border rounded-full focus:outline-black caret-black"
              type="text"
              name="imageLink"
              value={newArticle.imageLink}
              onChange={handleInputChange}
              placeholder="https://example.com"
            />
            <Button type="submit">Submit</Button>
          </form>
        </div>
      </div>
    </Section>
  );
}

function SpacesPage() {
  return (
    <>
      <HeroSection />
      <ArticlesSection />
      <CtaSection />
      <AddArticle />
    </>
  );
}

export default SpacesPage;
