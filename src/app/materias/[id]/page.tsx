import Header from "@/components/header";
import MateriaClient from "@/components/materias/materia";
import { IoBookOutline } from "react-icons/io5";

const Materia = ({ params }: { params: { id: string } }) => {
    return (
        <>
            <Header Icone={<IoBookOutline />} tela="materias" />
            <MateriaClient id={params.id} />
        </>
    );
};

export default Materia;