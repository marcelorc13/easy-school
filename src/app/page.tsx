import Header from "@/components/header";
import { IoHomeOutline } from "react-icons/io5";

export default function Home() {
  return (
    <main>
      <Header Icone={<IoHomeOutline />} tela="home" />
    </main>
  );
}
