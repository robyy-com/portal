"use client";

import { AddsType } from "@/types/types";
import AddsItem from "./AddsItem";
import { useGetAddListMutation } from "@/features/products/productApi";
import { useEffect, useState } from "react";

interface Props {
  className?: string;
  location: string;
}
export default function Adds({ className, location }: Props) {
  const [getAdds] = useGetAddListMutation();
  const [adds, setAdds] = useState<AddsType | null>(null);

  useEffect(() => {
    const fetchAdds = async () => {
      const obj = {
        adsLocation: location,
      };
      try {
        const res: any = await getAdds(obj);

        if (res?.data?.length > 0) {
          setAdds(res.data[0]);
        }
      } catch (error) {
        console.error("Failed to fetch adds:", error);
      }
    };

    fetchAdds();
  }, [getAdds]);

  return <div className={`${className}`}>{adds && <AddsItem {...adds} />}</div>;
}
