


import React from 'react';
import rightImg from '../../assets/webpImagesPerfume/man3.webp';

// SVG logic component: handles SVG swap on hover
const FeatureIcon = ({ shine, spark }) => (
  <span className="relative w-7 h-7 flex-shrink-0 rounded-full bg-red-400 p-5 items-center justify-center group-hover:bg-white transition-bg duration-300" >
    <span className="absolute inset-2 transition-opacity duration-300 opacity-100 group-hover:opacity-0">
      {shine}
    </span>
    <span className="absolute inset-2 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
      {spark}
    </span>
  </span>
);

const features = [
  {
    title: 'Let Fragrance Define You',
    shine: (
      <svg viewBox="0 0 18 22" className="w-6 h-6">
        <path d="M3.20339 10.373C3.75256 11.8571 4.92268 13.0273 6.40678 13.5764C4.92268 14.1256 3.75256 15.2957 3.20339 16.7798C2.65422 15.2957 1.4841 14.1256 0 13.5764C1.4841 13.0273 2.65422 11.8571 3.20339 10.373Z" fill="white"></path>
        <path d="M12.0507 0C13.0706 2.75619 15.2437 4.92927 17.9999 5.94915C15.2437 6.96903 13.0706 9.14212 12.0507 11.8983C11.0308 9.14212 8.85775 6.96903 6.10156 5.94915C8.85775 4.92927 11.0308 2.75619 12.0507 0Z" fill="white"></path>
        <path d="M7.85205 17.5422C8.99627 16.9472 9.9301 16.0134 10.5251 14.8691C11.1201 16.0134 12.0539 16.9472 13.1981 17.5422C12.0539 18.1371 11.1201 19.071 10.5251 20.2152C9.93009 19.071 8.99627 18.1371 7.85205 17.5422Z" stroke="white" strokeWidth="0.68"></path>
      </svg>
    ),
    spark: (
      <svg viewBox="0 0 22 25" fill="none" className="w-6 h-6 ">
        <path d="M3.80435 12.3188C4.45654 14.0814 5.84618 15.471 7.6087 16.1232C5.84618 16.7754 4.45654 18.165 3.80435 19.9275C3.15216 18.165 1.76252 16.7754 0 16.1232C1.76252 15.471 3.15216 14.0814 3.80435 12.3188Z" fill="#183A40"></path>
        <path d="M14.3113 0C15.5225 3.27325 18.1033 5.85401 21.3765 7.06522C18.1033 8.27643 15.5225 10.8572 14.3113 14.1304C13.1001 10.8572 10.5193 8.27643 7.24609 7.06522C10.5193 5.85401 13.1001 3.27325 14.3113 0Z" fill="#183A40"></path>
        <path d="M9.51396 20.8332C10.7728 20.1426 11.8091 19.1063 12.4997 17.8475C13.1902 19.1063 14.2266 20.1426 15.4854 20.8332C14.2266 21.5237 13.1902 22.5601 12.4997 23.8189C11.8091 22.5601 10.7728 21.5237 9.51396 20.8332Z" stroke="#183A40" strokeWidth="0.98"></path>
      </svg>
    ),
  },
  {
    title: 'Indulge in Scents of Seduction',
    shine: (
      <svg viewBox="0 0 18 22" className="w-6 h-6">
        <path d="M3.20339 10.373C3.75256 11.8571 4.92268 13.0273 6.40678 13.5764C4.92268 14.1256 3.75256 15.2957 3.20339 16.7798C2.65422 15.2957 1.4841 14.1256 0 13.5764C1.4841 13.0273 2.65422 11.8571 3.20339 10.373Z" fill="white"></path>
        <path d="M12.0507 0C13.0706 2.75619 15.2437 4.92927 17.9999 5.94915C15.2437 6.96903 13.0706 9.14212 12.0507 11.8983C11.0308 9.14212 8.85775 6.96903 6.10156 5.94915C8.85775 4.92927 11.0308 2.75619 12.0507 0Z" fill="white"></path>
        <path d="M7.85205 17.5422C8.99627 16.9472 9.9301 16.0134 10.5251 14.8691C11.1201 16.0134 12.0539 16.9472 13.1981 17.5422C12.0539 18.1371 11.1201 19.071 10.5251 20.2152C9.93009 19.071 8.99627 18.1371 7.85205 17.5422Z" stroke="white" strokeWidth="0.68"></path>
      </svg>
    ),
    spark: (
      <svg viewBox="0 0 22 25" fill="none" className="w-6 h-6 ">
        <path d="M3.80435 12.3188C4.45654 14.0814 5.84618 15.471 7.6087 16.1232C5.84618 16.7754 4.45654 18.165 3.80435 19.9275C3.15216 18.165 1.76252 16.7754 0 16.1232C1.76252 15.471 3.15216 14.0814 3.80435 12.3188Z" fill="#183A40"></path>
        <path d="M14.3113 0C15.5225 3.27325 18.1033 5.85401 21.3765 7.06522C18.1033 8.27643 15.5225 10.8572 14.3113 14.1304C13.1001 10.8572 10.5193 8.27643 7.24609 7.06522C10.5193 5.85401 13.1001 3.27325 14.3113 0Z" fill="#183A40"></path>
        <path d="M9.51396 20.8332C10.7728 20.1426 11.8091 19.1063 12.4997 17.8475C13.1902 19.1063 14.2266 20.1426 15.4854 20.8332C14.2266 21.5237 13.1902 22.5601 12.4997 23.8189C11.8091 22.5601 10.7728 21.5237 9.51396 20.8332Z" stroke="#183A40" strokeWidth="0.98"></path>
      </svg>
    ),
  },
  {
    title: 'Leave a Lasting Impression',
    shine: (
      <svg viewBox="0 0 18 22" className="w-6 h-6">
        <path d="M3.20339 10.373C3.75256 11.8571 4.92268 13.0273 6.40678 13.5764C4.92268 14.1256 3.75256 15.2957 3.20339 16.7798C2.65422 15.2957 1.4841 14.1256 0 13.5764C1.4841 13.0273 2.65422 11.8571 3.20339 10.373Z" fill="white"></path>
        <path d="M12.0507 0C13.0706 2.75619 15.2437 4.92927 17.9999 5.94915C15.2437 6.96903 13.0706 9.14212 12.0507 11.8983C11.0308 9.14212 8.85775 6.96903 6.10156 5.94915C8.85775 4.92927 11.0308 2.75619 12.0507 0Z" fill="white"></path>
        <path d="M7.85205 17.5422C8.99627 16.9472 9.9301 16.0134 10.5251 14.8691C11.1201 16.0134 12.0539 16.9472 13.1981 17.5422C12.0539 18.1371 11.1201 19.071 10.5251 20.2152C9.93009 19.071 8.99627 18.1371 7.85205 17.5422Z" stroke="white" strokeWidth="0.68"></path>
      </svg>
    ),
    spark: (
      <svg viewBox="0 0 22 25" fill="none" className="w-6 h-6">
        <path d="M3.80435 12.3188C4.45654 14.0814 5.84618 15.471 7.6087 16.1232C5.84618 16.7754 4.45654 18.165 3.80435 19.9275C3.15216 18.165 1.76252 16.7754 0 16.1232C1.76252 15.471 3.15216 14.0814 3.80435 12.3188Z" fill="#183A40"></path>
        <path d="M14.3113 0C15.5225 3.27325 18.1033 5.85401 21.3765 7.06522C18.1033 8.27643 15.5225 10.8572 14.3113 14.1304C13.1001 10.8572 10.5193 8.27643 7.24609 7.06522C10.5193 5.85401 13.1001 3.27325 14.3113 0Z" fill="#183A40"></path>
        <path d="M9.51396 20.8332C10.7728 20.1426 11.8091 19.1063 12.4997 17.8475C13.1902 19.1063 14.2266 20.1426 15.4854 20.8332C14.2266 21.5237 13.1902 22.5601 12.4997 23.8189C11.8091 22.5601 10.7728 21.5237 9.51396 20.8332Z" stroke="#183A40" strokeWidth="0.98"></path>
      </svg>
    ),
  },
];

const AboutPerfumes = ({
  perfumeName = 'David Beckham Respect',
  imageUrl = rightImg,
  description,
}) => (
  <section className="w-[100%] font-[cinzel] bg-[#edd4f8] text-[#181817] flex flex-col lg:flex-row items-center justify-center lg:justify-evenly gap-18 py-25 px-4 sm:py-29 lg:py-35">
    <div className="flex flex-col gap-2 sm:gap-3 md:gap-5 lg:gap-8 max-w-lg">
      <h2 className="text-3xl min-[470px]:text-4xl sm:text-5xl lg:text-6xl lg:leading-[70px] font-bold mb-4 text-primary">
        I am creating a sense of well-being
      </h2>
      <p className="mb-8 text-gray-700 leading-relaxed">
        {description ||
          'Dr Paolo Rovesti found a terracotta distillation apparatus in the Indus valley together with oil containers made of the same material, carbon dated to 3000 BCE. The report also states that terracotta vessels with plugged orifices of woven materials were used so that when fragrant plant materials were covered with boiling water the vapours impregnated the material, which was subsequently wrung out to isolate the oil.'}
      </p>
      <div className="flex flex-col gap-4  lg:flex-wrap">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="group flex items-center mb-2 border-2 border-red-300 rounded-4xl px-3 py-2.5  hover:bg-red-400 transition-colors cursor-pointer sm:px-6 sm:py-5   sm:rounded-[50px]"
          >
            <FeatureIcon shine={feature.shine} spark={feature.spark} />
            <span className="ml-3 text-[4vw] font-medium min-[560px]:text-xl sm:ml-4">
              {feature.title}
            </span>
          </div>
        ))}
      </div>
    </div>
    <div className=" flex flex-col items-center lg:w-[400px]">
      <div className="w-full aspect-square bg-gray-200 rounded-2xl overflow-hidden shadow-lg mb-4 ">
        <img
          src={imageUrl}
          alt={perfumeName}
          className="object-cover w-full h-full"
          loading="lazy"
        />
      </div>
      <h2 className="text-4xl font-semibold text-center lg:text-5xl">{perfumeName}</h2>
    </div>
  </section>
);

export default AboutPerfumes;
