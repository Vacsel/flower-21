"use client";

import React, { useState } from 'react';

export default function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="bg-pink-50">
      <Navbar />
      <Banner />
      <ArticleSection />
      <ProductsSection onProductClick={(p) => setSelectedProduct(p)} />
      <TeamSection />
      <FAQAndContactSection />
      <Footer />

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}

/* --- Smooth Scroll Helper Function --- */
function handleSmoothScroll(e: React.MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  const targetId = e.currentTarget.getAttribute("href");
  if (targetId) {
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
}

/* ---------------------- Responsive Navbar ---------------------- */
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow fixed w-full z-50">
      <div className="container mx-auto flex flex-wrap justify-between items-center p-4">
        <div className="flex items-center space-x-2">
          <img src="mightybush.png" alt="Logo" className="w-8 h-8" />
        </div>
        {/* Hamburger icon for mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-rose-700 focus:outline-none"
          >
            {isOpen ? (
              <span className="text-3xl">&times;</span>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>
        </div>
        <ul
          className={`w-full md:w-auto ${
            isOpen ? "block" : "hidden"
          } md:flex md:space-x-6 mt-4 md:mt-0`}
        >
          <li>
            <a
              href="#banner"
              onClick={handleSmoothScroll}
              className="block hover:text-rose-500 py-2"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#products"
              onClick={handleSmoothScroll}
              className="block hover:text-rose-500 py-2"
            >
              Products
            </a>
          </li>
          <li>
            <a
              href="#team"
              onClick={handleSmoothScroll}
              className="block hover:text-rose-500 py-2"
            >
              Our People
            </a>
          </li>
          <li>
            <a
              href="#faq-contact"
              onClick={handleSmoothScroll}
              className="block hover:text-rose-500 py-2"
            >
              FAQ & Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

/* ---------------------- Banner ---------------------- */
function Banner() {
  return (
    <section
      id="banner"
      className="relative h-64 md:h-96 bg-cover bg-center scroll-mt-20"
      style={{ backgroundImage: "url('ohtilly-yoUCbDLwk8E-unsplash.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <img src="mightybush.png" alt="Logo" className="w-24 h-24 mb-6" />
        <h1 className="text-3xl md:text-4xl text-white font-bold">The Mighty Bush & Florist Shop</h1>
        <p className="text-sm md:text-lg text-white mt-2">Cozy Romance in Every Bloom</p>
      </div>
    </section>
  );
}

/* ---------------------- Data สำหรับอัลบั้ม ---------------------- */
export type AlbumImage = {
  id: number;
  name: string;
  description: string;
  src: string;
};

const albumImages: AlbumImage[] = [
  {
    id: 1,
    name: "Memory One",
    description: "This memory reminds us of the joy and warmth of our early days.",
    src: "129.webp",
  },
  {
    id: 2,
    name: "Memory Two",
    description: "A beautiful moment captured during our journey.",
    src: "130.webp",
  },
  {
    id: 3,
    name: "Memory Three",
    description: "Cherished memories that continue to inspire us.",
    src: "131.webp",
  },
];

/* ---------------------- Article Section ---------------------- */
function ArticleSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<AlbumImage | null>(null);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? albumImages.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === albumImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <section id="article" className="py-20 scroll-mt-20">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Block: Our Journey Content with frame and hover drop shadow */}
          <div className="p-6 border rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-2xl md:text-3xl font-bold text-rose-700 mb-4">
              Our Journey
            </h2>
            <p className="text-sm md:text-lg text-rose-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
              tristique nisl ac turpis placerat, id convallis leo tincidunt.
              Curabitur nec nunc in erat volutpat consectetur. Sed dignissim,
              tellus imperdiet pretium gravida, urna elit gravida eros, nec bibendum
              nulla urna sit amet lectus. Praesent eget metus sed dui viverra efficitur.
              In hac habitasse platea dictumst. Vivamus sed justo vel urna molestie
              placerat ac a magna. Nulla facilisi. Suspendisse potenti.
            </p>
          </div>

          {/* Right Block: Slide Show Album with Title "Our Memories" */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-rose-700 mb-4">
              Our Memories
            </h2>
            <div className="relative w-full h-80 bg-gray-100 rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <img
                src={albumImages[currentIndex].src}
                alt={albumImages[currentIndex].name}
                className="w-full h-full object-cover cursor-pointer"
                onClick={() => setSelectedImage(albumImages[currentIndex])}
              />
              {/* Navigation Buttons */}
              <button
                onClick={handlePrev}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-gray-800 px-3 py-1 rounded-full shadow hover:bg-gray-200"
              >
                &lt;
              </button>
              <button
                onClick={handleNext}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-gray-800 px-3 py-1 rounded-full shadow hover:bg-gray-200"
              >
                &gt;
              </button>

              {/* Dot Indicators */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {albumImages.map((_, index) => (
                  <span
                    key={index}
                    className={`h-2 w-2 rounded-full ${
                      index === currentIndex ? "bg-rose-700" : "bg-gray-300"
                    }`}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal สำหรับแสดงภาพขยาย */}
      {selectedImage && (
        <AlbumModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  );
}

/* ---------------------- Album Modal ---------------------- */
type AlbumModalProps = {
  image: AlbumImage;
  onClose: () => void;
};

function AlbumModal({ image, onClose }: AlbumModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      role="dialog"
    >
      {/* Fade-black overlay */}
      <div
        className="absolute inset-0 bg-black opacity-60"
        onClick={onClose}
      ></div>
      {/* Modal Container: แบ่งเป็นสอง block แบบ Social Media */}
      <div className="relative bg-white rounded-lg max-w-5xl w-full mx-4 md:flex">
        {/* Left Block: Expanded Image */}
        <div className="md:w-2/3">
          <img
            src={image.src}
            alt={image.name}
            className="w-full h-[80vh] object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
          />
        </div>
        {/* Right Block: Image Details */}
        <div className="md:w-1/3 p-6 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-rose-700">{image.name}</h2>
          <p className="mt-4 text-base text-gray-700">{image.description}</p>
        </div>
        {/* ปุ่มปิด */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-3xl font-bold"
        >
          &times;
        </button>
      </div>
    </div>
  );
}

/* ---------------------- Data Products Section ---------------------- */
/* อัปเดต Product type ให้มีฟิลด์ tag แบบ optional */
export type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
  description: string;
  tag?: string; // Optionally, tag like "Hot", "Promotion", "Sales", "Recommend"
};

const productsData: Product[] = [
  {
    id: 1,
    name: "Secret Love",
    price: "$ 200",
    image: "5.png",
    category: "Bouquet",
    description:
      "An elegant bouquet featuring fresh red roses – perfect for gifting on a special occasion.",
    tag: "Hot"
  },
  {
    id: 2,
    name: "Wonderful Love",
    price: "$ 200",
    image: "3.png",
    category: "Bouquet",
    description:
      "An elegant bouquet featuring fresh red roses – perfect for gifting on a special occasion.",
    // tag: "Promotion"
  },
  {
    id: 3,
    name: "Blushing Twilight",
    price: "$ 200",
    image: "4.png",
    category: "Bouquet",
    description:
      "An elegant bouquet featuring fresh red roses – perfect for gifting on a special occasion.",
    // tag: "Sales"
  },
  {
    id: 4,
    name: "Gentle Love",
    price: "$ 200",
    image: "F_1.png",
    category: "Bouquet",
    description:
      "A cozy T-shirt that reflects our brand’s spirit of warmth and comfort.",
    // tag: "Recommend"
  },
  {
    id: 5,
    name: "Teddy Bear",
    price: "$ 400",
    image: "Teddy_1.png",
    category: "Merchandise",
    description:
      "A blooming vase that beautifully holds your favorite blossoms, adding charm to any space.",
    tag: "New"
  },
  {
    id: 6,
    name: "Gold Diamond",
    price: "$ 2000",
    image: "instagram_post_2.png",
    category: "Merchandise",
    description:
      "A practical floral tote bag designed with coziness and romance in mind.",
    tag: "Limited"
  }
];

/* ---------------------- Products Section ---------------------- */
// Helper function เพื่อ map tag เป็นสีที่คุณต้องการ
function getTagColor(tag: string) {
  const lower = tag.trim().toLowerCase();
  if (lower === "hot") return "bg-red-600";
  if (lower === "sales") return "bg-yellow-500";
  // สามารถเพิ่มเงื่อนไข tag เพิ่มเติมได้ที่นี่
  return "bg-amber-600"; // default color สำหรับ tag ที่ไม่ได้ระบุไว้
}

/* ---------------------- Products Section ---------------------- */
type ProductsSectionProps = {
  onProductClick: (product: Product) => void;
};

function ProductsSection({ onProductClick }: ProductsSectionProps) {
  return (
    <section id="products" className="py-20 bg-pink-100 scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-rose-700 mb-8">
          Our Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {productsData.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer relative hover:shadow-2xl transition-shadow duration-300"
              onClick={() => onProductClick(product)}
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full aspect-square object-cover"
                />
                {product.tag && (
                  <div
                    className={`absolute top-2 left-2 text-white text-xs font-bold uppercase px-2 py-1 rounded ${getTagColor(product.tag)}`}
                  >
                    {product.tag}
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-lg md:text-xl font-bold text-rose-700">
                  {product.name}
                </h3>
                <p className="text-sm md:text-base text-rose-600">
                  {product.category}
                </p>
                <p className="text-pink-500 font-bold mt-2">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------- Product Modal ---------------------- */
type ProductModalProps = {
  product: Product;
  onClose: () => void;
};

function ProductModal({ product, onClose }: ProductModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" role="dialog">
      {/* Fade-black overlay */}
      <div 
        className="absolute inset-0 bg-black opacity-70"
        onClick={onClose}
      ></div>
      {/* Modal Content */}
      <div className="relative bg-white rounded-lg max-w-md w-full mx-4 overflow-y-auto">
        <button 
          onClick={onClose} 
          className="absolute top-2 right-2 text-gray-700 hover:text-gray-900 text-2xl font-bold"
        >
          &times;
        </button>
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full aspect-square object-cover"
          />
          {product.tag && (
            <div
              className={`absolute top-2 left-2 text-white text-xs font-bold uppercase px-2 py-1 rounded ${getTagColor(product.tag)}`}
            >
              {product.tag}
            </div>
          )}
        </div>
        <div className="p-4">
          <h2 className="text-2xl font-bold text-rose-700">
            {product.name}
          </h2>
          <p className="text-gray-500">{product.category}</p>
          <p className="mt-4 text-gray-700">{product.description}</p>
          <p className="mt-4 text-pink-500 font-bold">{product.price}</p>
        </div>
      </div>
    </div>
  );
}

/* ---------------------- Team Data & Type ---------------------- */
export type TeamMember = {
  id: number;
  name: string;
  role: string;
  image: string;
  story?: string; // เพิ่ม field สำหรับ Description/Story
};

const teamData: TeamMember[] = [
  {
    id: 1,
    name: "Dante Milton & Eloise Milton",
    role: "Shop Owners",
    image: "Screenshot2811029.png",
    story:
      "We founded our boutique with passion and dedication. Our combined vision drives our success and inspires our creations.",
  },
  {
    id: 2,
    name: "Eloise Milton",
    role: "Merchandise Specialist",
    image: "/images/gift-box.jpg",
    story:
      "Balancing creative flair with business acumen, I ensure every product is both beautiful and practical.",
  },
  {
    id: 3,
    name: "Carol",
    role: "Store Manager",
    image: "/images/arrangement.jpg",
    story:
      "With years of experience managing day-to-day operations, I guarantee top-notch service and quality.",
  },
  {
    id: 4,
    name: "Carol",
    role: "Store Manager",
    image: "/images/arrangement.jpg",
    story:
      "With years of experience managing day-to-day operations, I guarantee top-notch service and quality.",
  },
];

/* ---------------------- Team Section ---------------------- */
function TeamSection() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <>
      <section id="team" className="py-20 scroll-mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-rose-700 mb-8">
            Our People
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 gap-6">
            {teamData.map((person) => (
              <div
                key={person.id}
                className="bg-white shadow-md rounded-lg p-4 text-center cursor-pointer hover:opacity-90 hover:shadow-2xl transition-all duration-300"
                onClick={() => setSelectedMember(person)}
              >
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg md:text-xl font-bold text-rose-700">
                  {person.name}
                </h3>
                <p className="text-sm md:text-base text-rose-600">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedMember && (
        <TeamModal
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}
    </>
  );
}

/* ---------------------- Team Modal ---------------------- */
type TeamModalProps = {
  member: TeamMember;
  onClose: () => void;
};

function TeamModal({ member, onClose }: TeamModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      role="dialog"
    >
      {/* Fade-black overlay */}
      <div 
        className="absolute inset-0 bg-black opacity-60"
        onClick={onClose}
      ></div>
      {/* Modal Container: ขยายภาพออกแบบ Social Media */}
      <div className="relative bg-white rounded-lg max-w-5xl w-full mx-4 md:flex">
        {/* Left Block: Expanded Image */}
        <div className="md:w-2/3">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-[80vh] object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
          />
        </div>
        {/* Right Block: Text Details */}
        <div className="md:w-1/3 p-6 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-rose-700">{member.name}</h2>
          <p className="mt-2 text-lg text-rose-600">{member.role}</p>
          <p className="mt-4 text-base text-gray-700">
            {member.story || "No additional story provided."}
          </p>
        </div>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-3xl font-bold"
        >
          &times;
        </button>
      </div>
    </div>
  );
}


/* ---------------------- FAQ & Contact (Combined) Section ---------------------- */
const faqData = [
  {
    id: 1,
    question: "What types of flowers do you offer?",
    answer:
      "We offer a wide variety including roses, lilies, and carnations. Each bouquet is handcrafted with care.",
  },
  {
    id: 2,
    question: "Do you offer same-day delivery?",
    answer:
      "Yes, we provide same-day delivery for orders placed before 2:00 PM within our service area.",
  },
  {
    id: 3,
    question: "Can I customize my bouquet?",
    answer:
      "Absolutely! Our designers can work with you to create a personalized bouquet to match your occasion.",
  },
];

function FAQAndContactSection() {
  return (
    <section id="faq-contact" className="py-20 bg-pink-50 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Block: FAQ */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-center text-rose-700 mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqData.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-6 rounded shadow transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-rose-50"
                >
                  <h3 className="text-lg md:text-xl font-bold text-rose-700">
                    {item.question}
                  </h3>
                  <p className="text-sm md:text-base text-rose-600 mt-2">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* Right Block: Contact */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-center text-rose-700 mb-8">
              Get in Touch
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Address Card */}
              <div className="bg-white p-6 rounded shadow flex flex-col items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-rose-50">
                <img
                  src="map.png"
                  alt="Address Icon"
                  className="w-16 h-16 mb-4"
                />
                <h3 className="text-lg md:text-xl font-bold text-rose-700">
                  Address
                </h3>
                <p className="text-sm md:text-base text-rose-600 text-center">
                  107 West Eclipse Boulevard,<br /> Morning Wood, Los Santos, 93001
                </p>
              </div>
              {/* Email Card */}
              <div className="bg-white p-6 rounded shadow flex flex-col items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-rose-50">
                <img
                  src="discord.png"
                  alt="Discord Icon"
                  className="w-16 h-16 mb-4"
                />
                <h3 className="text-lg md:text-xl font-bold text-rose-700">
                  Discord
                </h3>
                <p className="text-sm md:text-base text-rose-600 text-center">
                  <a
                  href="https://discord.gg/qm8QB6w4v4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rose-700 hover:underline"
                  >
                  Click here to contact us
                  </a>
                </p>
              </div>
              {/* Phone Card */}
              <div className="bg-white p-6 rounded shadow flex flex-col items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-rose-50">
                <img
                  src="phone-call.png"
                  alt="Phone Icon"
                  className="w-16 h-16 mb-4"
                />
                <h3 className="text-lg md:text-xl font-bold text-rose-700">
                  Phone
                </h3>
                <p className="text-sm md:text-base text-rose-600 text-center">
                  602-428-5609 (Eloise Milton)
                </p>
              </div>
              {/* Social Card */}
              <div className="bg-white p-6 rounded shadow flex flex-col items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-rose-50">
                <img
                  src="social-media.png"
                  alt="Social Icon"
                  className="w-16 h-16 mb-4"
                />
                <h3 className="text-lg md:text-xl font-bold text-rose-700">
                  Social
                </h3>
                <p className="text-sm md:text-base text-rose-600 text-center">
                  @Floristshop
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


/* ---------------------- Footer ---------------------- */
function Footer() {
  return (
    <footer className="bg-white shadow py-4">
      <div className="container mx-auto text-center text-sm text-rose-600">
        © {new Date().getFullYear()} The Mighty Bush & Florist Shop. All rights reserved.
      </div>
    </footer>
  );
}
