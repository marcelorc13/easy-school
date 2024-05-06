import Header from "@/components/header";
import HorarioClient from "@/components/horario";
import { IoCalendarClearOutline } from "react-icons/io5";

const Horario = () => {
    return (
        <>
            <Header Icone={<IoCalendarClearOutline />} tela='horario' />
            <HorarioClient />
        </>
    );
};

export default Horario;