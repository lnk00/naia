import { ArrowRight } from 'lucide-react';

export default function Landing() {
  return (
    <div className="px-8 max-w-[1280px] m-auto">
      <div className="flex items-center h-24">
        <h1 className="font-heading text-4xl">Naia.</h1>
      </div>
      <div className="flex items-center justify-center mt-24">
        <div className="w-1/2">
          <h2 className="bg-gray-50 py-1 px-2 border rounded inline-flex gap-2 mb-6">
            Participez a notre beta dès maintenant <ArrowRight />
          </h2>
          <h1 className="text-8xl font-heading leading-tight">
            Retrouvez <br /> le plaisir d’offrir
          </h1>
          <div className="mt-2 flex gap-4">
            <button className="bg-main px-6 py-4 rounded text-white">
              Découvrez nous
            </button>
            <button className="bg-gray-50 border px-6 py-4 rounded">
              Visitez notre blog
            </button>
          </div>
        </div>
        <div className="w-1/2 relative">
          <div className="flex items-center gap-4 rounded bg-white p-4 shadow-lg absolute top-8 -left-32 max-w-md">
            <img
              src="/images/smiling.svg"
              alt="face smiling"
              className="w-12 h-12"
            />
            <div>
              <p className="font-heading">Offrez avec le sourrir</p>
              <p className="">
                Finis les cadeaux par défaut, trouvez la bonne idée pour la
                bonne personne.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded bg-white p-4 shadow-lg absolute bottom-16 -right-48 max-w-md">
            <img
              src="/images/loving.svg"
              alt="face smiling"
              className="w-12 h-12"
            />
            <div>
              <p className="font-heading">Provoquez la surprise</p>
              <p className="">
                Un cadeau surprenant est un cadeau réussi, ne manque plus aucune
                occasion de surprendre.
              </p>
            </div>
          </div>
          <img
            src="/images/giving.webp"
            alt="man giving a gift to woman"
            className="rounded-lg w-5/6 m-auto"
          />
        </div>
      </div>
    </div>
  );
}
