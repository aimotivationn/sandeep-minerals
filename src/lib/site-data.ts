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

const defaultPackaging = ["25 kg HDPE laminated bags", "50 kg HDPE laminated bags", "500 kg / 1000 kg jumbo bags", "Container-loaded bulk export consignments"];

export const products: Product[] = [
  {
    slug: "barytes-powder",
    name: "Barytes Powder",
    short: "High-density natural barium sulphate for drilling, coatings and polymer systems.",
    image: baryteImg,
    description:
      "Micronised natural Barium Sulphate (BaSO₄) processed at our German-technology plants for exceptional density, whiteness and chemical inertness.",
    overview: [
      "SMI Barytes Powder is manufactured from selected natural barium sulphate ore and micronised under strict particle-size control to deliver consistent density, brightness and chemical inertness.",
      "Available in Natural Barium Sulphate, SSW Barytes and Off Barytes grades, the product is engineered for oil-well drilling fluids as well as high-performance paint, powder coating, rubber and plastic formulations.",
    ],
    grades: ["Natural Barium Sulphate", "SSW Barytes", "Off Barytes"],
    applications: ["Oil drilling fluids", "Paints", "Powder coatings", "Rubber", "Plastics"],
    benefits: ["High density", "Excellent whiteness", "Chemical inertness", "Low oil absorption"],
    industries: ["Oil & Gas", "Paints & Powder Coatings", "Rubber", "Plastics", "Friction Materials"],
    packaging: defaultPackaging,
    specs: [
      { label: "Chemical Formula", value: "BaSO₄" },
      { label: "Specific Gravity", value: "4.2 – 4.5 g/cm³" },
      { label: "Brightness", value: "90 – 95%" },
      { label: "BaSO₄ Content", value: "≥ 94%" },
      { label: "Particle Size (D50)", value: "5 – 25 microns" },
      { label: "Moisture", value: "≤ 0.3%" },
    ],
    faqs: [
      { q: "Which barytes grades does SMI supply?", a: "We supply Natural Barium Sulphate, SSW Barytes and Off Barytes grades, each available in multiple micron ranges." },
      { q: "Is the material suitable for API drilling applications?", a: "Our high-density drilling grade is processed to meet standard oil-well drilling fluid requirements. Share your specification and our technical team will confirm the matching grade." },
      { q: "What is the minimum order quantity?", a: "Standard bulk supply starts at one truckload; smaller trial quantities are available for qualification and sampling." },
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
    packaging: defaultPackaging,
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
      "Formulators use NAMO CARBSHINE to replace 20–25% of titanium dioxide without compromising opacity, delivering meaningful cost reduction alongside a premium white appearance and superior surface finish.",
    ],
    grades: ["Ultra Fine Calcium Carbonate"],
    applications: ["Decorative & industrial paints", "Powder coatings", "Plastics & masterbatch", "Printing inks", "Adhesives & sealants"],
    benefits: ["Replaces titanium dioxide by 20–25%", "Excellent dispersion", "High opacity", "Superior surface finish", "Premium white appearance"],
    industries: ["Paints & Powder Coatings", "Plastics", "Printing Ink", "Adhesives", "Paper"],
    packaging: ["25 kg bags", "50 kg bags", "500 kg jumbo bags"],
    specs: [
      { label: "Purity", value: "98%" },
      { label: "Whiteness", value: "Above 98%" },
      { label: "Particle Size", value: "1 Micron D50" },
      { label: "Specific Gravity", value: "2.71" },
      { label: "Oil Absorption", value: "20 – 30 g" },
      { label: "pH", value: "8.5 – 9.5" },
      { label: "LOI", value: "43 – 44%" },
      { label: "Packaging", value: "25 kg / 50 kg / 500 kg" },
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
      { q: "Which particle size is supplied?", a: "NAMO CARBSHINE is supplied at 1 micron D50 with a tightly controlled distribution." },
      { q: "Can I request a trial sample?", a: "Yes — request a sample and our technical team will support your trial with recommended dosage levels." },
    ],
  },
  {
    slug: "white-pigment-opacifier",
    name: "White Pigment Opacifier",
    short: "Cost-efficient partial TiO₂ replacement with high brightness and light scattering.",
    image: pigmentImg,
    description:
      "An engineered white pigment opacifier developed for partial replacement of titanium dioxide in paints, coatings and industrial pigment systems.",
    overview: [
      "SMI White Pigment Opacifier is formulated to partially replace titanium dioxide in white and tinted systems, lowering production cost without sacrificing hiding power.",
      "Its optimised particle geometry improves light scattering and brightness, delivering strong opacity in decorative and industrial coatings.",
    ],
    applications: ["Paints", "Coatings", "Industrial pigments", "Decorative coatings"],
    benefits: ["Partial replacement of TiO₂", "Lower production cost", "Improved opacity", "High brightness", "Improved light scattering"],
    industries: ["Paints & Powder Coatings", "Printing Ink", "Construction Chemicals"],
    packaging: defaultPackaging,
    specs: [
      { label: "Appearance", value: "Free-flowing white powder" },
      { label: "Brightness", value: "≥ 96%" },
      { label: "Particle Size (D50)", value: "1 – 3 microns" },
      { label: "Oil Absorption", value: "22 – 30 g/100g" },
      { label: "pH", value: "8.5 – 9.5" },
      { label: "Moisture", value: "≤ 0.3%" },
    ],
    faqs: [
      { q: "How much cost saving is achievable?", a: "Savings depend on your current TiO₂ loading; most customers see a meaningful reduction at a 20–25% partial replacement level." },
      { q: "Does opacity drop after replacement?", a: "No — improved light scattering compensates for the reduced TiO₂ content when dosed as recommended." },
    ],
  },
  {
    slug: "calcite-powder",
    name: "Calcite Powder",
    short: "Versatile micronised calcite for paint, plastic, rubber, paper, foam and PVC.",
    image: importedImg,
    description:
      "High-brightness micronised calcite powder offering a dependable balance of fineness, whiteness and value across a broad range of processes.",
    overview: [
      "SMI Calcite Powder is produced from high-purity calcite and micronised to consistent fineness for use as a functional filler and extender.",
      "It delivers reliable whiteness, low impurity levels and stable batch-to-batch performance across paint, polymer, paper and foam applications.",
    ],
    applications: ["Paint", "Plastic", "Rubber", "Paper", "Foam", "PVC"],
    benefits: ["High whiteness", "Consistent fineness", "Low impurities", "Cost-effective extender"],
    industries: ["Paints & Powder Coatings", "Plastics", "Rubber", "Paper", "PVC Pipes", "Construction"],
    packaging: defaultPackaging,
    specs: [
      { label: "Chemical Formula", value: "CaCO₃" },
      { label: "Purity", value: "≥ 97%" },
      { label: "Whiteness", value: "92 – 96%" },
      { label: "Particle Size (D50)", value: "3 – 8 microns" },
      { label: "Oil Absorption", value: "16 – 20 g/100g" },
      { label: "Moisture", value: "≤ 0.3%" },
    ],
    faqs: [
      { q: "Which mesh sizes are available?", a: "Standard grades run from 300 to 2000 mesh; custom fineness can be produced on request." },
      { q: "Is the calcite sourced from your own mines?", a: "Yes — raw material is drawn from our owned mining source at Selwara, District Sirohi, Rajasthan." },
    ],
  },
  {
    slug: "calcium-oxide",
    name: "Calcium Oxide",
    short: "High-reactivity quicklime for steel, cement, agriculture and water treatment.",
    image: calciumOxideImg,
    description:
      "High-purity calcium oxide (quicklime) supplied in lump and powder form for metallurgical, construction, agricultural and water-treatment applications.",
    overview: [
      "SMI Calcium Oxide is produced from selected high-calcium limestone and calcined under controlled conditions for high reactivity and consistent available lime content.",
      "It is supplied to steel plants, cement producers, agricultural processors, water treatment facilities and construction contractors.",
    ],
    applications: ["Steel", "Cement", "Agriculture", "Water treatment", "Construction"],
    benefits: ["High available lime content", "Consistent reactivity", "Low residual impurities", "Bulk supply capability"],
    industries: ["Steel", "Cement", "Agriculture", "Water Treatment", "Construction"],
    packaging: ["25 kg bags", "50 kg bags", "Jumbo bags", "Bulk tanker / container"],
    specs: [
      { label: "Chemical Formula", value: "CaO" },
      { label: "CaO Content", value: "≥ 90%" },
      { label: "Form", value: "Lumps & powder" },
      { label: "Reactivity", value: "High" },
      { label: "Loss on Ignition", value: "≤ 3%" },
      { label: "Moisture", value: "≤ 1%" },
    ],
    faqs: [
      { q: "Is calcium oxide supplied in lump or powder form?", a: "Both. Lump quicklime and ground quicklime powder are available depending on your process." },
      { q: "How should quicklime be stored?", a: "Store in a dry, sealed environment away from moisture to preserve reactivity." },
    ],
  },
  {
    slug: "calcite-granules",
    name: "Calcite Granules",
    short: "Graded white calcite granules for glass, construction, paint and ceramics.",
    image: calciteGranulesImg,
    description:
      "Screened calcite granules in controlled size bands for glass manufacturing, construction products, paint texture systems, ceramics and chemical processing.",
    overview: [
      "SMI Calcite Granules are crushed, washed and screened into precise size bands with high whiteness and low iron content.",
      "They serve as a dependable raw input for glass batches, dry-mix construction products, textured coatings, ceramic bodies and chemical manufacturing.",
    ],
    applications: ["Glass", "Construction", "Paint", "Ceramics", "Chemical industry"],
    benefits: ["Controlled granulometry", "High whiteness", "Low iron content", "Reliable bulk availability"],
    industries: ["Glass", "Construction", "Paints & Powder Coatings", "Ceramics", "Chemical Industry"],
    packaging: ["50 kg bags", "Jumbo bags", "Bulk loading"],
    specs: [
      { label: "Chemical Formula", value: "CaCO₃" },
      { label: "Purity", value: "≥ 96%" },
      { label: "Granule Size", value: "0.5 – 4 mm (custom bands)" },
      { label: "Whiteness", value: "90 – 95%" },
      { label: "Iron Content (Fe₂O₃)", value: "≤ 0.1%" },
      { label: "Moisture", value: "≤ 0.5%" },
    ],
    faqs: [
      { q: "Can granule size bands be customised?", a: "Yes — screening can be adjusted to your required size band and tolerance." },
      { q: "Are granules suitable for glass manufacturing?", a: "Yes. Low iron content and controlled sizing make them suitable for glass batch use." },
    ],
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
  { title: "Export Ready Packaging", text: "Moisture-resistant, palletised packing built for long-haul international transit." },
  { title: "25 / 50 / 500 kg", text: "Standard 25 kg and 50 kg bags plus 500 kg jumbo bags to suit your handling." },
  { title: "Bulk Packaging", text: "Jumbo bag and bulk loading options for high-volume industrial consumers." },
  { title: "Domestic Supply", text: "Nationwide road and rail dispatch from three Rajasthan production units." },
  { title: "International Shipping", text: "Documentation, inspection and freight coordination for export consignments." },
  { title: "Container Loading", text: "Optimised container stuffing plans that protect product and maximise payload." },
  { title: "Safe Packaging", text: "Sealed, labelled and batch-coded packing for traceability and safe handling." },
  { title: "Logistics Support", text: "Dedicated coordination from dispatch planning to delivery confirmation." },
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
