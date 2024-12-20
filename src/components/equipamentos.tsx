"use client"

import Link from "next/link"
import { CardEquipamentos } from "./cardEquipamentos"
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const EquipamentosPage = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <section className="max-w-[1444px] flex m-auto items-center justify-center lg:my-0 lg:mt-12 mb-12" id="equipamento" data-aos="fade-up">
            <div className="flex flex-col items-center ">
                <h1 className="text-[#001659] font-semibold text-[28px] text-center lg:text-[32px] ml-4 lg:ml-0">Nossos <span className="text-[#35558E]">Equipamentos!</span></h1>
                <div className="flex pt-[52px] lg:w-[1200px] lg:gap-y-8 md:w-[800px] justify-center md:gap-[20px] md:flex-wrap lg:flex-row lg:gap-[21px] flex-col md:flex-row gap-y-8 ">
                    <CardEquipamentos
                        href="/bomba-de-concreto/carretinha-pequena"
                        src="/img/eletrica.png"
                        title="Carretinha Pequena"
                        price="R$ 185.000"
                    />
                    <CardEquipamentos
                        href="/bomba-de-concreto/carretinha-rebocavel"
                        src="/img/rebocavel.png"
                        title="Carretinha Rebocável"
                        price="A consultar"
                    />
                    <CardEquipamentos
                        href="/bomba-de-concreto/p700"
                        src="/img/p700.png"
                        title="P700"
                        price="R$ 165.000"
                    />
                    <CardEquipamentos
                        href="/bomba-de-concreto/multimix"
                        src="/img/betoneira.png"
                        title="Caminhão MultiMix"
                        price="R$ 185.000"
                    />
                    <CardEquipamentos
                        href="/bomba-de-concreto/betonbomba"
                        src="/img/betonbomba.png"
                        title="Betonbomba"
                        price="R$ 165.000"
                    />
                </div>
                <Link href="/bomba-de-concreto">
                    <button className="bg-[#001659] mt-[53px] hover:scale-105 cursor-pointer transition-transform duration-300 text-white rounded-[10px] w-[282px] h-[48px] text-[22px]">Ver mais</button>
                </Link>
            </div>
        </section>
    )
}
