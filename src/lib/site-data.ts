import calciumImg from "@/assets/product-calcium.jpg";
import baryteImg from "@/assets/product-baryte.jpg";
import importedImg from "@/assets/product-imported.jpg";
import namoImg from "@/assets/product-namo-carbshine.jpg";
import pigmentImg from "@/assets/product-white-pigment.jpg";
import calciumOxideImg from "@/assets/product-calcium-oxide.jpg";
import calciteGranulesImg from "@/assets/product-calcite-granules.jpg";

export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductFAQ {
  q: string;
  a: string;
}

export interface Product {
  slug: string;
  name: string;
  short: string;
  image: string;
  description: string;
  overview: string[];
  grades?: string[];
  applications: string[];
  benefits: string[];
  industries: string[];
  packaging: string[];
  specs: ProductSpec[];
  highlights?: string[];
  faqs: ProductFAQ[];
}

export const products: Product[] = [
  {
    slug: "barytes-powder",
    name: "Barytes Powder",
    short: "High-density, chemically inert Barytes Powder for industrial applications.",
    image: baryteImg,
    description: "Barium Sulphate (BaSO₄) powder with high density and chemical inertness, for paints, powder coatings, plastics, rubber and other industrial filler or weighting applications.",
    overview: [
      "Barytes Powder is composed of Barium Sulphate (BaSO₄). Its confirmed general characteristics include high density and chemical inertness.",
      "Available grades are Natural Barium Sulphate Powder, SSW Barytes Powder and Off Barytes Powder.",
    ],
    grades: ["Natural Barium Sulphate Powder", "SSW Barytes Powder", "Off Barytes Powder"],
    applications: ["Paints", "Powder Coatings", "Plastics", "Rubber", "Other industrial filler or weighting applications"],
    benefits: ["High density", "Chemically inert"],
    industries: ["Paints & Powder Coatings", "Plastics", "Rubber", "Other industrial applications"],
    packaging: ["25 kg HDPE laminated bags", "50 kg HDPE laminated bags"],
    specs: [
      { label: "Chemical Formula", value: "BaSO₄" },
      { label: "Specific Gravity", value: "4.2 – 4.5 g/cm³" },
      { label: "Brightness", value: "90 – 95%" },
      { label: "BaSO₄ Content", value: "≥ 94%" },
      { label: "Particle Size (D50)", value: "5 – 25 microns" },
      { label: "Moisture", value: "≤ 0.3%" },
    ],
    faqs: [
      { q: "Which Barytes Powder grades are confirmed?", a: "Natural Barium Sulphate Powder, SSW Barytes Powder and Off Barytes Powder." },
      { q: "What is the composition of Barytes Powder?", a: "Barium Sulphate (BaSO₄)." },
      { q: "Which standard bag sizes are confirmed?", a: "25 kg and 50 kg HDPE laminated bags. Other global packaging capabilities are listed on our Export & Packaging page." },
    ],
  },
  {
    slug: "calcium-carbonate-powder",
    name: "Calcium Carbonate Powder",
    short: "Ultra fine, sub micron, micron, coated and uncoated grades for every industry.",
    image: calciumImg,
    description:
      "A complete family of micronised calcium carbonate grades — ultra fine, sub micron, micron, coated and uncoated — engineered for dispersion, whiteness and consistency.",
    overview: [
      "SMI Calcium Carbonate Powder covers the full performance range required by modern manufacturing: ultra fine and sub micron grades for premium coatings and polymers, micron grades for volume applications, and both coated and uncoated variants.",
      "Coated grades are surface treated for superior dispersion and compatibility in polymer matrices, reducing agglomeration and improving mechanical performance.",
    ],
    grades: ["Ultra Fine Calcium Carbonate", "Sub Micron", "Micron", "Coated", "Uncoated"],
    applications: ["Paints & coatings", "Masterbatch & filled compounds", "PVC pipes, profiles & films", "Rubber compounding", "Sealants & adhesives", "Paper coatings"],
    benefits: ["High whiteness & brightness", "Tight particle size distribution", "Excellent dispersion", "Improved cost efficiency", "Consistent batch-to-batch quality"],
    industries: ["Paints & Powder Coatings", "Plastics", "Rubber", "Paper", "Construction", "Adhesives"],
    packaging: ["25 kg HDPE laminated bags", "50 kg HDPE laminated bags", "500 kg jumbo bags", "1 MT / 1000 kg jumbo bags"],
    specs: [
      { label: "Chemical Formula", value: "CaCO₃" },
      { label: "Purity", value: "≥ 98.5%" },
      { label: "Whiteness", value: "95 – 98%" },
      { label: "Particle Size (D50)", value: "0.8 – 10 microns" },
      { label: "Oil Absorption", value: "18 – 24 g/100g" },
      { label: "Moisture", value: "≤ 0.2%" },
    ],
    faqs: [
      { q: "What is the difference between coated and uncoated grades?", a: "Coated grades carry a stearate surface treatment that improves dispersion and hydrophobicity in polymer systems, while uncoated grades are preferred for water-based and construction applications." },
      { q: "Can you supply custom particle sizes?", a: "Yes. Our classification lines allow us to tune D50 and distribution to your formulation requirement." },
      { q: "Do you provide technical data sheets?", a: "A full TDS, MSDS and COA accompany every consignment and can be requested in advance." },
    ],
  },
  {
    slug: "namo-carbshine",
    name: "NAMO CARBSHINE",
    short: "Ultra Fine Calcium Carbonate that replaces titanium dioxide by 20–25%.",
    image: namoImg,
    description:
      "Our flagship ultra fine calcium carbonate — 1 micron D50, above 98% whiteness — engineered to partially replace titanium dioxide while raising opacity and surface finish.",
    overview: [
      "NAMO CARBSHINE is SMI's flagship ultra fine calcium carbonate, micronised on German technology lines to a 1 micron D50 with above 98% whiteness.",
      "Client material describes partial titanium dioxide replacement at 20–25%. Confirmed characteristics include a smooth, consistent surface and high strength as a filler.",
    ],
    grades: ["Ultra Fine Calcium Carbonate"],
    applications: ["Paints", "Plastics", "Rubber", "Adhesives", "Paper", "Pharmaceuticals"],
    benefits: ["High strength filler", "Low porosity", "Excellent dimensional stability", "Low thermal conductivity", "Smooth, consistent surface", "Heavy metals within permissible limits", "Non-refractory", "Ultrafine powder", "Partial TiO₂ replacement (20–25%)"],
    industries: ["Paints", "Plastics", "Rubber", "Adhesives", "Paper", "Pharmaceuticals"],
    packaging: ["25 kg bags", "50 kg bags", "500 kg jumbo bags"],
    specs: [
      { label: "Composition", value: "CaCO₃" },
      { label: "Form", value: "Powder" },
      { label: "Purity", value: "98%" },
      { label: "Density / Specific Gravity", value: "2.71 g/cm³" },
      { label: "Hardness", value: "3 Mohs" },
      { label: "Whiteness", value: "Above 98%" },
      { label: "Particle Size", value: "1 Micron D50" },
      { label: "Moisture", value: "Max. 0.5%" },
      { label: "pH", value: "8.5 – 9.5" },
      { label: "LOI", value: "43 – 44%" },
      { label: "Oil Absorption", value: "20 – 30 g/100g" },
      { label: "Acid Insoluble", value: "Max. 0.5%" },
      { label: "Tapped Bulk Density", value: "0.5 – 0.6 g/cm³" },
    ],
    highlights: [
      "Replaces titanium dioxide by 20–25%",
      "Excellent dispersion",
      "High opacity",
      "Superior surface finish",
      "Premium white appearance",
    ],
    faqs: [
      { q: "How much titanium dioxide can NAMO CARBSHINE replace?", a: "Typical formulations achieve a 20–25% replacement of TiO₂ while maintaining opacity and whiteness." },
      { q: "Which particle size is confirmed?", a: "1 micron D50." },
      { q: "Can I request a trial sample?", a: "Yes — request a sample and our technical team will support your trial with recommended dosage levels." },
    ],
  },
  {
    slug: "white-pigment-opacifier",
    name: "White Pigment Opacifier",
    short: "SM 460 engineered pigment/opacifier for partial TiO₂ replacement.",
    image: pigmentImg,
    description:
      "An engineered white pigment opacifier developed for partial replacement of titanium dioxide in paints, coatings and industrial pigment systems.",
    overview: [
      "The client-confirmed White Pigment Opacifier series includes SM 460 and is positioned for partial titanium dioxide replacement.",
      "Confirmed characteristics include light scattering, improved opacity, lower production cost and high brightness.",
    ],
    grades: ["SM 460"],
    applications: ["Paints", "Coatings", "Industrial pigments", "Decorative coatings"],
    benefits: ["Partial TiO₂ replacement", "Light scattering", "Improved opacity", "Lower production cost", "High brightness"],
    industries: ["Paints & Powder Coatings", "Printing Ink", "Construction Chemicals"],
    packaging: ["25 kg bags"],
    specs: [],
    faqs: [
      { q: "Which grade is mentioned in the confirmed product information?", a: "SM 460." },
      { q: "What packaging is confirmed?", a: "25 kg bags." },
    ],
  },
  {
    slug: "calcite-powder",
    name: "Calcium Oxide",
    short: "Calcium Oxide (CaO), also known as quicklime or burnt lime.",
    image: calciumOxideImg,
    description: "A white crystalline, highly alkaline and caustic material produced through calcination.",
    overview: ["Calcium Oxide (CaO) is also known as quicklime or burnt lime. It is a white crystalline, highly alkaline and caustic material produced through calcination."],
    applications: ["Cement", "Steel", "Agriculture", "Water treatment"],
    benefits: [],
    industries: ["Cement", "Steel", "Agriculture", "Water treatment"],
    packaging: ["50 kg bags"],
    specs: [
      { label: "Chemical Formula", value: "CaO" },
      { label: "Appearance", value: "White crystalline solid" },
      { label: "Nature", value: "Highly alkaline / caustic" },
      { label: "Production", value: "Produced through calcination" },
    ],
    faqs: [
      { q: "What is Calcium Oxide also known as?", a: "Quicklime or burnt lime." },
      { q: "What packaging is confirmed?", a: "50 kg bags." },
    ],
  },
  {
    slug: "calcite-granules",
    name: "Calcite Granules",
    short: "",
    image: calciteGranulesImg,
    description: "",
    overview: [],
    applications: [],
    benefits: [],
    industries: [],
    packaging: ["25 kg bags", "50 kg bags"],
    specs: [],
    faqs: [],
  },
  {
    slug: "calcite-powder",
    name: "Calcite Powder / Other Minerals",
    short: "Product information coming soon. Contact us for details.",
    image: importedImg,
    description: "Product information coming soon. Contact us for details.",
    overview: [],
    applications: [],
    benefits: [],
    industries: [],
    packaging: ["50 kg bags"],
    specs: [],
    faqs: [],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

export const COMPANY = {
  name: "Sandeep Mineral Industries",
  tradeName: "SMI",
  established: "2005",
  industry: "Micronised Industrial Minerals Manufacturer",
  headquarters: "Rajgarh, Alwar, Rajasthan",
};

export const overviewParagraphs = [
  "India possesses one of the richest mineral resources in the world.",
  'Sandeep Mineral Industries (SMI) is a leading manufacturer of premium micronised mineral products under the trusted trade name "SMI."',
  "From an initial production capacity of 3,000 MT per annum in 2005, SMI has expanded to over 36,000 MT annually through continuous investment in technology, infrastructure and manufacturing excellence.",
  "Operating from three advanced manufacturing facilities located in Rajgarh, Makrana and Abu Road, the company manufactures world-class micronised minerals using modern German processing technology.",
  "SMI supplies premium mineral solutions to Paints, Powder Coatings, Plastics, Polymer, Rubber, Paper, Construction and Industrial manufacturing sectors.",
  "With strong R&D, strict quality control and continuous technological innovation, SMI has established itself as a reliable supplier for domestic and international customers.",
  "The company is committed to becoming a Global Leader in Micronised Mineral Manufacturing.",
];

export const journey = [
  {
    year: "2005",
    title: "First Manufacturing Unit",
    place: "Rajgarh, Alwar",
    points: [
      "Established the first manufacturing unit at Rajgarh, Alwar (Rajasthan).",
      "Started production capacity of 3,000 MT per annum.",
    ],
  },
  {
    year: "2017",
    title: "Second Manufacturing Unit",
    place: "Makrana, Rajasthan",
    points: ["Established second manufacturing unit at Makrana, Rajasthan.", "Expanded production capacity."],
  },
  {
    year: "2024",
    title: "Third Unit & German Technology",
    place: "Abu Road, Rajasthan",
    points: [
      "Established third manufacturing unit at Abu Road, Rajasthan.",
      "Production capacity increased to 36,000 MT annually.",
      "Installed advanced German manufacturing technology.",
    ],
  },
  {
    year: "Future",
    title: "Future Expansion",
    place: "Planned",
    points: ["Future expansion already planned.", "Continued investment in capacity, R&D and export capability."],
  },
];

export const highlights = [
  { value: "20+", label: "Years of Excellence" },
  { value: "36,000 MT", label: "Annual Production Capacity" },
  { value: "3", label: "Manufacturing Units" },
  { value: "2", label: "Owned Mining Sources" },
  { value: "ISO 9001:2015", label: "Certified Company" },
  { value: "500+", label: "Industrial Clients" },
];

export const sourcing = {
  mine: {
    title: "Mine Location",
    lines: ["Selwara", "District Sirohi", "Rajasthan"],
  },
  processing: {
    title: "Raw Material Processing Unit",
    lines: [
      "Sandeep Micron",
      "Plot No. E-64",
      "Maval RIICO Growth Centre Phase II",
      "Abu Road",
      "District Sirohi",
      "Rajasthan",
    ],
  },
};

export const units = [
  { n: "Unit 1", city: "Rajgarh", region: "Alwar, Rajasthan", x: "62%", y: "30%" },
  { n: "Unit 2", city: "Makrana", region: "Rajasthan", x: "46%", y: "48%" },
  { n: "Unit 3", city: "Abu Road", region: "Rajasthan", x: "22%", y: "76%" },
];

export const productionFlow = [
  "Mining",
  "Crushing",
  "Grinding",
  "Micronisation",
  "Particle Classification",
  "Quality Testing",
  "Packaging",
  "Dispatch",
];

export const germanTechBenefits = [
  "Ultra Fine Grinding",
  "Uniform Particle Size",
  "High Purity",
  "Better Dispersion",
  "Consistent Quality",
  "Large Scale Production",
];

export const labTests = [
  { name: "Particle Size Analysis", text: "Laser diffraction analysis confirms D50 and full distribution for every batch." },
  { name: "Spectrophotometer", text: "Instrumental colour measurement verifies shade consistency and reflectance." },
  { name: "Oil Absorption Test", text: "Determines binder demand for accurate paint and polymer formulation." },
  { name: "Bulk Density", text: "Loose and tapped density checks ensure consistent handling and dosing." },
  { name: "Chemical Analysis", text: "Wet chemistry and instrumental analysis validate purity and composition." },
  { name: "Whiteness", text: "Whiteness index measured against reference standards on every production lot." },
  { name: "Brightness", text: "Brightness testing confirms optical performance in coatings and paper." },
  { name: "Moisture Testing", text: "Controlled moisture levels safeguard flow, dispersion and storage life." },
  { name: "Uniformity of Coating", text: "Surface-treatment coverage verified for coated calcium carbonate grades." },
  { name: "FPV Testing", text: "Fineness of powder value assessed to confirm grind quality." },
  { name: "PH Testing", text: "pH measurement ensures compatibility with your formulation chemistry." },
];

export const whyChooseSMI = [
  { title: "German Technology", text: "Modern German processing lines for ultra fine, uniform micronisation." },
  { title: "ISO Certified", text: "ISO 9001:2015 certified quality management across all operations." },
  { title: "20 Years Experience", text: "Two decades of micronised mineral manufacturing since 2005." },
  { title: "36,000 MT Capacity", text: "Annual capacity across three units for dependable bulk supply." },
  { title: "Owned Mines", text: "Two owned mining sources securing raw material quality and continuity." },
  { title: "R&D Team", text: "Dedicated research team developing application-specific grades." },
  { title: "Strict Quality", text: "Eleven-point laboratory testing protocol on every production lot." },
  { title: "Customized Solutions", text: "Grades tuned to your particle size, whiteness and dispersion needs." },
  { title: "Reliable Delivery", text: "Planned logistics for on-time domestic and export dispatch." },
  { title: "Competitive Pricing", text: "Integrated mine-to-micron operations deliver strong cost efficiency." },
];

export const industriesServed = [
  { name: "Paints & Powder Coatings", text: "Ultra fine grades that raise opacity, sheen control and durability." },
  { name: "Plastic Industry", text: "Functional fillers for stiffness, opacity and cost efficiency." },
  { name: "Rubber Industry", text: "Consistent fillers improving strength and processing economics." },
  { name: "Paper Industry", text: "High-brightness minerals for coated and filled paper grades." },
  { name: "Construction", text: "Dependable inputs for mortars, putty, sealants and building products." },
  { name: "PVC Pipes", text: "Coated grades for impact strength and smooth extrusion." },
  { name: "Masterbatch", text: "Sub-micron fillers with excellent dispersion for filled compounds." },
  { name: "Adhesives", text: "Rheology and cost control for sealant and adhesive systems." },
  { name: "Printing Ink", text: "Fine extenders supporting gloss, flow and pigment efficiency." },
  { name: "Pharmaceutical", text: "High-purity mineral grades for regulated processing requirements." },
  { name: "Chemical Industry", text: "Reliable mineral raw materials for chemical manufacturing." },
];

export const goals = [
  "Deliver products exceeding customer expectations.",
  "Maintain world-class manufacturing practices.",
  "Continually improve processes.",
  "Invest in employee development.",
  "Maintain safe operations.",
  "Provide cost-effective mineral solutions.",
  "Strengthen global partnerships.",
];

export const exportCapabilities = [
  { title: "Packaging Materials", text: "HDPE bags, PP bags and jumbo bags are available." },
  { title: "Standard Bag Sizes", text: "Standard bag sizes include 25 kg and 50 kg." },
  { title: "Jumbo Bag Sizes", text: "Jumbo bags are available in 500 kg and 1000 kg / 1 MT sizes." },
  { title: "Bulk Export", text: "Bulk and container-loaded export consignments are supported." },
  { title: "Customized Packaging", text: "Customized packaging is supported." },
  { title: "Product Grade", text: "Packaging may vary according to product grade." },
  { title: "Particle Size", text: "Packaging may vary according to particle size." },
  { title: "Supply Requirement", text: "Packaging may vary for domestic and export requirements." },
];

export const downloads = [
  { title: "Company Profile", text: "Corporate overview, capabilities, capacity and infrastructure." },
  { title: "Technical Data Sheets", text: "Grade-wise technical parameters for every product in our range." },
  { title: "Product Brochures", text: "Application-focused brochures for each mineral product family." },
  { title: "Safety Data Sheets", text: "Handling, storage and safety information as per regulatory format." },
  { title: "Quality Certificates", text: "ISO 9001:2015 certificate and product quality documentation." },
];

export const enquiryTypes = [
  "Request Technical Consultation",
  "Request Product Sample",
  "Bulk Order Enquiry",
  "Dealer Registration",
  "Distributor Enquiry",
  "Export Enquiry",
  "General Enquiry",
];

export const WHATSAPP_URL =
  "https://wa.me/918824857634?text=Hello%20Sandeep%20Mineral%20Industries,%20I%20would%20like%20to%20know%20more%20about%20your%20mineral%20products%20and%20bulk%20supply%20capabilities.";

export const CONTACT = {
  phone: "+91 8824857634",
  email: "mentorservices.005@gmail.com",
  location: "Rajasthan, India",
  address: "H25-26, RIICO Industrial Area, Rajgarh, Alwar, Rajasthan – 301408, India",
};
