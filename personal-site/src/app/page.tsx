import Image from "next/image";
import NavBar from '../components/NavBar';
import { Banner } from '../components/Banner';
import { Skills } from '../components/Skills';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Home() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
    </div>
  );
}
