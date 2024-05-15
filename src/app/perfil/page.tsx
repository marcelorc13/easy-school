import Header from "@/components/header";
import PerfilClient from "@/components/perfil";
import { IoPersonOutline } from "react-icons/io5";

interface Props {

}

const Perfil: React.FC<Props> = ({ }) => {
    return (
        <>
            <Header Icone={<IoPersonOutline />} tela="perfil" />
            <PerfilClient />
        </>
    );
};

export default Perfil;