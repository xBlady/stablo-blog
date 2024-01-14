

import { getSettings } from "@/lib/sanity/client";
import Footer from "@/components/footer";
import { urlForImage } from "@/lib/sanity/image";

import Navbar from "@/components/navbar";

export async function sharedMetaData(params) {
  const settings = await getSettings();

  return {
    title: {
      default: settings?.title || "Ideato",
      template: "%s | Stablo"
    },
    description: settings?.description || "Ideato",
    keywords: ["Next.js", "Sanity", "Tailwind CSS"],
    authors: [{ name: "Surjith", image: { asset: { _ref: "your_image_asset_id" } } }], // Replace "your_image_asset_id" with the actual asset ID for the image
    canonical: settings?.url,
    openGraph: {
      images: [
        {
          url: urlForImage(settings?.openGraphImage)?.src || "/img/opengraph.jpg",
          width: 800,
          height: 600
        }
      ]
    },
    twitter: {
      title: settings?.title || "Ideato",
      card: "summary_large_image"
    },
    robots: {
      index: true,
      follow: true
    }
  };
}

export async function generateMetadata({ params }) {
  return await sharedMetaData(params);
}

export default async function Layout({ children, params }) {
  const settings = await getSettings();
  const authors = [{ name: "Surjith", image: settings?.authorImage }]; // Modify this to get the appropriate author image data

  return (
    <>
      <Navbar {...settings} />

      

      <div>{children}</div>

      <Footer {...settings} />
    </>
  );
}
