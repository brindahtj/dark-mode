import styles from "@/styles/Home.module.css";
import Home from "../components/Home";
import { useDispatch, useSelector } from "react-redux";
import { toogle } from "@/pages/reducers/dark";

function Index() {
  return <Home />;
}

export default Index;
