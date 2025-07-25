

import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// Testimonial data including a product image on right side
const testimonials = [
    {
        id: 1,
        name: 'Priya S.',
        location: 'Mumbai',
        image: 'https://randomuser.me/api/portraits/women/68.jpg',
        review:
            'Absolutely in love with these fragrances! The scent is elegant, long-lasting, and I receive compliments every time I wear them.',
        rating: 5,
        productImage:
            'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
    },
    {
        id: 2,
        name: 'Rohit K.',
        location: 'Delhi',
        image: 'https://randomuser.me/api/portraits/men/43.jpg',
        review:
            'The quality is outstanding—these perfumes smell just like the originals, and the fragrance lasts all day.',
        rating: 4,
        productImage:
            'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    },
    {
        id: 3,
        name: 'Ananya M.',
        location: 'Bangalore',
        image: 'https://randomuser.me/api/portraits/women/79.jpg',
        review:
            'I was impressed by the quick delivery and beautiful packaging. The perfume exceeded my expectations.',
        rating: 5,
        productImage:
            'https://images.unsplash.com/photo-1503919545880-5b9bebabd53b?auto=format&fit=crop&w=400&q=80',
    },
    {
        id: 4,
        name: 'Sahil P.',
        location: 'Pune',
        image: 'https://randomuser.me/api/portraits/men/21.jpg',
        review:
            'The fragrances are unique and make a statement. Amazing longevity and amazing packaging!',
        rating: 5,
        productImage:
            'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=400&q=80',
    },
    {
        id: 5,
        name: 'Meera T.',
        location: 'Chennai',
        image: 'https://randomuser.me/api/portraits/women/12.jpg',
        review:
            'Affordable luxury! Every scent is special and lasts the whole day. Highly recommend for perfume lovers.',
        rating: 4,
        productImage:
            'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=400&q=80',
    },
    {
        id: 6,
        name: 'Arjun L.',
        location: 'Hyderabad',
        image: 'https://randomuser.me/api/portraits/men/55.jpg',
        review:
            'Customer service was great, and the delivery was really fast. The scent has become my everyday signature.',
        rating: 5,
        productImage:
            'https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?auto=format&fit=crop&w=400&q=80',
    },
];


// Star rating component using Remix Icons
const StarRating = ({ rating }) => {
    return (
        <div className="flex space-x-1" aria-label={`Rating: ${rating} out of 5 stars`}>
            {[1, 2, 3, 4, 5].map((i) =>
                i <= rating ? (
                    <i key={i} className="ri-star-fill text-yellow-400 text-xl" aria-hidden="true"></i>
                ) : (
                    <i key={i} className="ri-star-line text-yellow-400 text-xl" aria-hidden="true"></i>
                )
            )}
        </div>
    );
};

const TestimonialSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const testimonialRef = useRef(null);
    const reviewTextRef = useRef(null);
    const nameRef = useRef(null);
    const productImageRef = useRef(null);

    // Animate testimonial container, text elements, and product image on index change
    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo(
            testimonialRef.current,
            { autoAlpha: 0, x: 100 },
            { autoAlpha: 1, x: 0, duration: 0.8, ease: 'power3.out' }
        )
            .fromTo(
                reviewTextRef.current,
                { autoAlpha: 0, y: 20 },
                { autoAlpha: 1, y: 0, duration: 0.6, ease: 'power3.out' },
                '-=0.4'
            )
            .fromTo(
                nameRef.current,
                { autoAlpha: 0, y: 20 },
                { autoAlpha: 1, y: 0, duration: 0.6, ease: 'power3.out' },
                '-=0.5'
            )
            .fromTo(
                productImageRef.current,
                { autoAlpha: 0, x: 50 },
                { autoAlpha: 1, x: 0, duration: 0.8, ease: 'power3.out' },
                '-=1' // start slightly earlier to sync nicely
            );
    }, [currentIndex]);

    const prevTestimonial = () => {
        setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
    };
    const nextTestimonial = () => {
        setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
    };

    const { name, location, image, review, rating, productImage } = testimonials[currentIndex];

    return (
        <section className="overflow-hidden max-w-6xl mx-auto p-6 bg-[#f5f2db]  font-[cinzel] rounded-lg shadow-lg flex flex-col space-y-8 md:flex-row md:space-x-12 md:space-y-0">
            <div
                className="md:flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-6"
                ref={testimonialRef}
            >
                <h2 className="text-3xl font-700 mb-4">What Our Customers Say</h2>

                <div className="flex flex-col md:flex-row md:space-x-6 items-center md:items-start">
                    <img
                        src={image}
                        alt={`Portrait of ${name}`}
                        className="w-24 h-24 rounded-full object-cover shadow-lg border-2 border-[#f8f7ec] mb-4 md:mb-0"
                    />
                    <div className="md:flex-1">
                        <p ref={reviewTextRef} className="text-lg italic  text-[#181817] mb-4 max-w-xl">
                            "{review}"
                        </p>
                        <StarRating rating={rating} />
                        <p ref={nameRef} className="mt-4 font-bold text-[#181817]">
                            {name}, <span className="font-normal text-#181817">{location}</span>
                        </p>
                    </div>
                </div>

                <div className="flex justify-center md:justify-start space-x-4 mt-6">
                    <button
                        onClick={prevTestimonial}
                        className="p-3 rounded-full bg-[#f8f7ec] text-[#181817] hover:bg-yellow-500 transition shadow-md"
                        aria-label="Previous testimonial"
                    >
                        <i className="ri-arrow-left-line ri-lg"></i>
                    </button>
                    <button
                        onClick={nextTestimonial}
                        className="p-3 rounded-full bg-[#f8f7ec] text-[#181817] hover:bg-yellow-500 transition shadow-md"
                        aria-label="Next testimonial"
                    >
                        <i className="ri-arrow-right-line ri-lg"></i>
                    </button>
                </div>
            </div>

            {/* Product Image on right */}
            <div className="md:w-80 w-full flex justify-center md:justify-end">
                <img
                    src={productImage}
                    alt="Perfume product bottle"
                    className="rounded-lg shadow-lg object-cover max-h-96 w-auto"
                    ref={productImageRef}
                />
            </div>
        </section>
    );
};

export default TestimonialSection;
