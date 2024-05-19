import { Breadcrumbs } from "@mui/material";
import Image from "next/image";

const KitchenServices: React.FC = () => {
  return (
    <div>
      <h1 className="h3 text-main mb-14">Kitchen Cleaning Services</h1>
      <Breadcrumbs />
      <picture>
        <source
          srcSet="/images/pexels-curtis-adams.webp, /images/pexels-curtis-adams@2x.webp"
          sizes="(max-width:378px) 279px, (width: 768px) 720px, (width: 1440px) 1076px; (width:1920px) 1556px;"
          type="image/webp"
        />
        <source
          srcSet="/images/pexels-curtis-adams.jpg, /images/pexels-curtis-adams@2x.jpg"
          sizes="(max-width:378px) 279px, (width: 768px) 720px, (width: 1440px) 1076px; (width:1920px) 1556px;"
          type="image/jpg"
        />
        <Image
          src="/public/images/pexels-curtis-adams@2x.jpg"
          alt="Kitchen"
          layout="responsive"
          width={1556}
          height={896}
          objectFit="cover"
          objectPosition="center"
        />
      </picture>
    </div>
  );
};

export default KitchenServices;
