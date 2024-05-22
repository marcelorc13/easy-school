import Header from "@/components/header";
import MateriasClient from "@/components/materias";
import { IoBookOutline } from "react-icons/io5";

const Materias = () => {
    return (
        <>
            <Header Icone={<IoBookOutline />} tela="materias" />
            <MateriasClient />
        </>
    );
};

export default Materias;