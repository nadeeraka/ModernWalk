import HeaderComponent from "../components/header.component";
import FlashSaleContainer from "../containers/FlashSale.container";
import CategoriesComponent from "../components/categories.component";
export default function HomePage() {
  return (
    <div className="roboto mx-auto   py-3">
      <HeaderComponent />
      <FlashSaleContainer />
      <CategoriesComponent />
    </div>
  );
}
