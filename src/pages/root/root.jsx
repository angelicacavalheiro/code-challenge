import Header from "../../components/header/header";
import Container from "./styled";
import Navbar from "../../components/navbar/navbar";
import ReceiversDatagrid from "../receiversDatagrid/receiversDatagrid";

export default function Root() {
  return (
    <Container>
		<Header/>
		<Navbar/>
		<ReceiversDatagrid/>
    </Container>
  );
}