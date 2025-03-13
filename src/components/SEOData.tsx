import Image from "next/image";

export default function SEOData() {
  return (
    <div className="hidden">
      {/* Essential Metadata for SEO */}
      <meta
        name="title"
        content="Tejanta LNCT Indore Fest 2025 | Tech, Art & Culture"
      />
      <meta
        name="description"
        content="Experience the vibrant fusion of technology, art, and culture at Tejanta LNCT Fest. Join us for an electrifying celebration featuring tech exhibitions, cultural performances, workshops, and thrilling competitions."
      />
      <meta
        name="keywords"
        content="Tejanta, Tejanta LNCT, LNCT Fest, LNCT Indore Fest, Tech Spardha, Rang Riwaaz, Fashion Show, Kala Utsav, Thrill Arena, Rang Utsav, College Fest, Cultural Fest, Utsav Jaiswal, Master Utsav"
      />
      <meta name="author" content="Utsav Jaiswal / Master Utsav" />
      <meta
        property="og:title"
        content="Tejanta LNCT Fest 2025 | A Fusion of Tech & Culture"
      />
      <meta
        property="og:description"
        content="Join us at Tejanta LNCT Indore for a vibrant mix of technology, arts, and cultural events including Tech Spardha, Rang Riwaaz, and more."
      />
      <meta property="og:image" content="/img/tejanta_1.jpg" />
      <meta property="og:url" content="https://tejanta.vercel.app" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Tejanta LNCT Fest 2025" />
      <meta
        name="twitter:description"
        content="Tech Spardha, Cultural Events, Rang Riwaaz, Fashion Show, and more at Tejanta LNCT Indore Fest."
      />
      <meta name="twitter:image" content="/img/tejanta_1.png" />

      {/* Structured Data for Better Indexing */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            name: "Tejanta LNCT Indore Fest",
            startDate: "2025-04-07",
            endDate: "2025-04-09",
            location: {
              "@type": "Place",
              name: "LNCT Indore",
              address: {
                "@type": "PostalAddress",
                streetAddress: "LNCT Campus",
                addressLocality: "Indore",
                addressCountry: "India",
              },
            },
            image: "https://tejanta.vercel.app/img/tejanta_1.jpg",
            description:
              "Experience the vibrant fusion of technology, art, and culture at Tejanta LNCT Fest. Join us for Tech Spardha, Rang Riwaaz, Fashion Show, and more.",
            organizer: {
              "@type": "Person",
              name: "Utsav Jaiswal",
              url: "https://tejanta.vercel.app",
            },
            eventCategory: ["Technology", "Cultural", "Competitions"],
          }),
        }}
      />

      {/* Visible Image for SEO & Indexing */}
      <Image
        width={1600}
        height={900}
        src="/img/tejanta_1.png"
        alt="Tejanta LNCT Indore Fest - Tech, Art, and Cultural Events"
        loading="lazy"
        className="hidden"
      />

      {/* Site & Developer Info */}
      <p>
        Tejanta LNCT Indore Fest - Organized by LNCT. Developed by{" "}
        <strong>Utsav Jaiswal / Master Utsav</strong>.
      </p>
    </div>
  );
}
