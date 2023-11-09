import Breadcumb16 from "@/components/breadcumb/Breadcumb16";
import Breadcumb3 from "@/components/breadcumb/Breadcumb3";

import Listing14 from "@/components/section/Listing14";
import TabSection1 from "@/components/section/TabSection1";

export const metadata = {
  title: "Freeio - Freelance Marketplace React/Next Js Template | Freelancer 2",
};

export default function page() {
  return (
    <>
    
      <TabSection1 />
      <Breadcumb3 path={["Home", "Services", "Design & Creative"]} />
      <Breadcumb16 />
      <Listing14 />
    </>
  );
}
