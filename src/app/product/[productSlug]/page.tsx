import ProductDetails from "@/components/product/Details";
import UnconventionalTabs from "@/components/product/UnconventionalTabs";
import { Product } from "@/types/types";
import { apiUrl, fetchSingleProducts } from "@/utils/apiServices";
import { Metadata, ResolvingMetadata } from "next";

interface ProductDetailsPageProps {
  params: {
    productSlug: string;
  };
}

type Props = {
  params: Promise<{ productSlug: string }>;
};

// Generate metadata
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const productSlug = (await params).productSlug;

  const singleProduct = await fetchSingleProducts(productSlug);

  return {
    title: `Robyy Jewellery - ${singleProduct?.title}`,
    description:
      singleProduct?.description || "Read our latest updates and insights.",
    // keywords: singleProduct?.keywords || "blog, article, updates",

    openGraph: {
      title: `Robyy Jewellery - ${singleProduct?.title}`,
      description:
        singleProduct?.description || "Read our latest updates and insights.",
      url: `https://www.robyy.com/${productSlug}`,
      type: "article",
      images: [
        {
          url:
            singleProduct?.proImage ||
            "../../../../../public/assert/images/social-logo-share.png", // Provide a fallback image
          width: 500,
          height: 500,
          alt: singleProduct?.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `Robyy Jewellery - ${singleProduct?.title}`,
      description:
        singleProduct?.description || "Read our latest updates and insights.",
      images: [
        singleProduct?.proImage ||
          "../../../../../public/assert/images/social-logo-share.png",
      ],
    },
  };
}

async function ProductdetailsPage({
  params: { productSlug },
}: ProductDetailsPageProps) {
  const singleProduct: Product = await fetchSingleProducts(productSlug);

  return (
    <div className="container mt-12 m-auto px-2.5 md:px-6 xl:px-0">
      {singleProduct && <ProductDetails {...(singleProduct as Product)} />}

      {singleProduct?.details && (
        <UnconventionalTabs
          description={singleProduct.details[0]?.longDescription || ""}
          reviews={singleProduct.details[0]?.reviews || []}
          shippingDelivery={singleProduct.details[0]?.shippingDelivery || ""}
          productHistory={singleProduct.details[0]?.productHistory || ""}
        />
      )}

      {/* <RelatedProduct /> */}
    </div>
  );
}

export default ProductdetailsPage;
