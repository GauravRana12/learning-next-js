import { ReactNode } from "react";
import Navbar from "../Components/Navbar";

export default function Layout({children}:Readonly <{children: ReactNode}>){
     return (
        <main>
            <Navbar />
            {children}
        </main>
     )
}