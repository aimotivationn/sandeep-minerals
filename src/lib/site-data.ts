import calciumImg from "@/assets/product-calcium.jpg";
import baryteImg from "@/assets/product-baryte.jpg";
import importedImg from "@/assets/product-imported.jpg";

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  slug: string;
  name: string;
  short: string;
  image: string;
  description: string;
  applications: string[];
  specs: ProductSpec[];
}

export const products: Product[] = [
  {
    slug: "baryte-powder",
    name: "Baryte Powder",
    short: "High-density barium sulphate for demanding industrial applications.",
    image: baryteImg,
    description:
      "Our premium Baryte (Barium Sulphate) powder is processed for exceptional density, whiteness and chemical inertness. Engineered with precise particle distribution, it delivers reliable performance across drilling, friction, polymer and radiation-shielding applications.",
    applications: [
      "Oil & gas drilling fluids",
      "Automotive friction & brake linings",
      "Paints, primers & coatings",
      "Rubber & polymer compounding",
      "Radiation shielding concrete",
    ],
    specs: [
      { label: "Chemical Formula", value: "BaSO₄" },
      { label: "Specific Gravity", value: "4.2 – 4.5 g/cm³" },
      { label: "Brightness", value: "90 – 95%" },
      { label: "BaSO₄ Content", value: "≥ 94%" },
      { label: "Particle Size (D50)", value: "5 – 25 microns" },
      { label: "Moisture", value: "≤ 0.3%" },
    ],
  },
  {
    slug: "ultra-fine-calcium-carbonate",
    name: "Ultra-Fine Calcium Carbonate",
    short: "Sub-micron precision for high-performance polymer and coating systems.",
    image: calciumImg,
    description:
      "Ultra-Fine Calcium Carbonate is micronized to sub-micron consistency for superior dispersion, surface finish and mechanical reinforcement. It enhances impact strength, opacity and cost efficiency in advanced plastics and premium coatings.",
    applications: [
      "Master batches & filled compounds",
      "High-gloss decorative paints",
      "PVC pipes, profiles & films",
      "Sealants & adhesives",
      "Premium paper coatings",
    ],
    specs: [
      { label: "Chemical Formula", value: "CaCO₃" },
      { label: "Purity", value: "≥ 98.5%" },
      { label: "Whiteness", value: "95 – 98%" },
      { label: "Particle Size (D50)", value: "0.8 – 2 microns" },
      { label: "Oil Absorption", value: "18 – 24 g/100g" },
      { label: "Moisture", value: "≤ 0.2%" },
    ],
  },
  {
    slug: "super-fine-calcium-carbonate",
    name: "Super-Fine Calcium Carbonate",
    short: "Consistent fine-grade filler for versatile industrial use.",
    image: calciumImg,
    description:
      "Super-Fine Calcium Carbonate offers an optimal balance of fineness, brightness and value. With tight batch-to-batch consistency, it serves as a dependable functional filler across a broad range of manufacturing processes.",
    applications: [
      "General purpose plastics",
      "Putty, fillers & wall care",
      "Rubber compounding",
      "Construction & dry-mix mortars",
      "Detergents & chemicals",
    ],
    specs: [
      { label: "Chemical Formula", value: "CaCO₃" },
      { label: "Purity", value: "≥ 97%" },
      { label: "Whiteness", value: "92 – 96%" },
      { label: "Particle Size (D50)", value: "3 – 8 microns" },
      { label: "Oil Absorption", value: "16 – 20 g/100g" },
      { label: "Moisture", value: "≤ 0.3%" },
    ],
  },
  {
    slug: "imported-mineral-powders",
    name: "Imported Mineral Powders",
    short: "Globally sourced specialty minerals for niche applications.",
    image: importedImg,
    description:
      "We supply a curated portfolio of imported specialty mineral powders selected for purity and performance. Backed by reliable global logistics, we deliver consistent specifications for demanding technical formulations.",
    applications: [
      "Specialty coatings & inks",
      "Engineering polymers",
      "Ceramics & refractories",
      "Industrial chemicals",
      "Custom technical blends",
    ],
    specs: [
      { label: "Product Range", value: "Talc, Mica, Dolomite & more" },
      { label: "Purity", value: "Grade dependent" },
      { label: "Brightness", value: "Up to 96%" },
      { label: "Particle Size", value: "Custom on request" },
      { label: "Packaging", value: "25kg / 50kg / Jumbo bags" },
      { label: "Sourcing", value: "Certified global suppliers" },
    ],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

export const WHATSAPP_URL =
  "https://wa.me/918824857634?text=Hello%20Sandeep%20Mineral%20Industries,%20I%20would%20like%20to%20know%20more%20about%20your%20mineral%20products%20and%20bulk%20supply%20capabilities.";

export const CONTACT = {
  phone: "+91 8824857634",
  email: "mentorservices.005@gmail.com",
  location: "Rajasthan, India",
  address: "H25-26, RIICO Industrial Area, Rajgarh, Alwar, Rajasthan – 301408, India",
};
