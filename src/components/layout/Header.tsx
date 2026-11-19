"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [mostrarBusquedaMovil, setMostrarBusquedaMovil] = useState(false);

  return (
    <div className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="relative flex h-16 w-full items-center justify-between gap-4 px-4 py-4 lg:container lg:mx-auto">
        {/* Logo */}
        <div className="flex items-center mr-4 lg:mr-6">
          <Link href="/">
            <Image
              src="/logo.jpg"
              alt="logo"
              width={70}
              height={30}
              className="h-8 w-auto cursor-pointer object-contain"
              priority
            />
          </Link>
        </div>

        <button
          type="button"
          aria-label={mostrarBusquedaMovil ? "Cerrar búsqueda" : "Abrir búsqueda"}
          aria-expanded={mostrarBusquedaMovil}
          aria-controls="mobile-search"
          onClick={() => setMostrarBusquedaMovil((visible) => !visible)}
          className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-md text-slate-500 transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e11d49] sm:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="h-5 w-5"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </button>

        {/* Buscador */}
        <div className="hidden max-w-md flex-1 sm:block lg:max-w-lg xl:max-w-xl">
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-search absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              type="text"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10 pr-10"
              placeholder="Busca que quieres aprender"
              autoComplete="off"
              id="search"
              name="search"
            />
          </div>
        </div>

        {/* Links de Navegación Exactos */}
        <div className="hidden lg:flex pl-[74px] gap-x-[56px]">
          <Link
            className="text-[#36485C] font-medium hover:bg-muted hover:bg-opacity-75 group p-2 rounded-md"
            href="https://inactualizacion.com.pe/"
          >
            Inicio
          </Link>
          <Link
            className="text-[#36485C] font-medium hover:bg-muted hover:bg-opacity-75 group p-2 rounded-md"
            href="https://inactualizacion.com.pe/buscar-certificado"
          >
            Validar Certificado
          </Link>
          <a
            className="text-[#36485C] font-medium hover:bg-muted hover:bg-opacity-75 group p-2 rounded-md"
            href="https://inactualizacion.com.pe/#nosotros"
          >
            Nosotros
          </a>
          <a
            className="text-[#36485C] font-medium hover:bg-muted hover:bg-opacity-75 group p-2 rounded-md"
            href="https://inactualizacion.com.pe/cursos"
          >
            Cursos
          </a>
          <a
            className="text-[#36485C] font-medium hover:bg-muted hover:bg-opacity-75 group p-2 rounded-md"
            href="https://inactualizacion.com.pe/#faq"
          >
            Faq
          </a>
        </div>

        {/* Botón Ingresar */}
        <div className="flex items-center gap-x-5">
          <a
            href="/admin/login"
            className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-[#e11d49] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#e11d49]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e11d49] focus-visible:ring-offset-2"
          >
            Ingresar
          </a>
        </div>
      </nav>
      <div
        id="mobile-search"
        hidden={!mostrarBusquedaMovil}
        className="absolute left-0 right-0 top-full border-t bg-white p-3 shadow-md sm:hidden"
      >
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              type="text"
              id="mobile-search-input"
              name="search"
              autoComplete="off"
              placeholder="Busca que quieres aprender"
              className="h-10 w-full rounded-md border border-slate-300 bg-white py-2 pl-10 pr-3 text-sm text-slate-900 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e11d49]"
            />
          </div>
      </div>
    </div>
  );
}
