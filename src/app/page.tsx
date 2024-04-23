import HeaderComponent from "../components/header.component";
import FlashSaleContainer from "../containers/FlashSale.container";

export default function HomePage() {
  return (
    <div className="roboto mx-auto   py-3">
      <HeaderComponent />
      <FlashSaleContainer />
    </div>
  );
}
