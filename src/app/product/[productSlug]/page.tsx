import ProductDetails from "@/components/product/Details";
import UnconventionalTabs from "@/components/product/UnconventionalTabs";
import { Product } from "@/types/types";
import { fetchSingleProducts } from "@/utils/apiServices";

interface ProductDetailsPageProps {
  params: {
    productSlug: string;
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
