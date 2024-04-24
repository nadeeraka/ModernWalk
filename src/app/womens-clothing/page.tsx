import HeaderComponent from "../../components/header.component";
import CardRowGenericContainer from "../../containers/cardRowGeneric.container";
export default function HomePage() {
  return (
    <div className="roboto mx-auto   py-3">
      <HeaderComponent />
      <CardRowGenericContainer isMen={false} limit={5} hybrid={false} />
    </div>
  );
}
