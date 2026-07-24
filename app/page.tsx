import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="happy-hour-page">
      <Link
        className="ide-logo-link"
        href="https://idejr.com.br/"
        aria-label="Ir para a página inicial"
      >
        <Image
          className="ide-logo"
          src="/company_logo_purple.jpeg"
          alt="IDE"
          width={594}
          height={443}
          priority
        />
      </Link>
      {/*
      <Image
        className="ide-logo ide-logo-blue"
        src="/company_logo_blue.jpeg"
        alt="IDE"
        width={500}
        height={500}
        priority
      />
      */}

      <section className="happy-hour-content" aria-labelledby="happy-hour-title">
        <header className="event-heading">
          <h1 id="happy-hour-title">Happy Hour da Gerência de Projetos</h1>
          <p>15/07/2026 – 2026/1</p>
        </header>

        <figure className="happy-hour-figure">
          <div className="photo-frame">
            <Image
              src="/happy_hour_photo.jpeg"
              alt="Equipe reunida no Happy Hour da Gerência de Projetos"
              width={1600}
              height={900}
              priority
              sizes="(max-width: 720px) calc(100vw - 48px), (max-width: 1100px) 78vw, 900px"
            />
          </div>
          <figcaption>
            Da esquerda para a direita: Kauan, Sabadin, Mariana, Giovani,
            Miguel, Leonardo e Diego.
          </figcaption>
        </figure>
      </section>
    </main>
  );
}
