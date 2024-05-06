import Header from "@/components/header";
import { IoHomeOutline } from "react-icons/io5";

import HomeClient from "@/components/home";

export default function Home() {
  return (
    <main>
      <Header Icone={<IoHomeOutline />} tela="home" />
      <HomeClient />
    </main>
  );
}
