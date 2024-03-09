import React from "react";
import { BannerList } from "../../constants";
import { useLocation } from "react-router";
import { Banner as iBanner } from "../../interfaces";

interface Banner {}

const Banner = () => {
  const { pathname } = useLocation();
  const [bannerItem, setBannerItem] = React.useState<iBanner | undefined>(
    BannerList[0]
  );

  React.useEffect(() => {
    const findItme = BannerList.find((e) => e.path == pathname);

    setBannerItem(findItme);
  }, [pathname]);

  return (
    <div className="h-screen bg-banner-top bg-cover  text-white w-full  p-x-root">
      <div className="w-4/5  h-full text-center flex items-center justify-center  m-auto">
        <div>
          <p className="font-[700] text-[40px] text-center ">
            {bannerItem?.title}
          </p>
          <p className="text-[15px] mt-8">{bannerItem?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Banner);
