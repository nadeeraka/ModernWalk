import HeaderComponent from "../../components/header.component";
import CardRowGenericContainer from "../../containers/cardRowGeneric.container";
import CategoriesComponent from "../../components/categories.component";
export default function HomePage() {
  return (
    <div className="roboto mx-auto   py-3">
      <HeaderComponent />
      <CardRowGenericContainer isMen={true} limit={16} hybrid={false} />
    </div>
  );
}
