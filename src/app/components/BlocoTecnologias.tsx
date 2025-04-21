import { iconesTecnologias } from "@/data/iconesTecnologias";

interface Props {
  tecnologias: string[];
}

export function BlocoTecnologias({ tecnologias }: Props) {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-[#8C0343] mb-6">Tecnologias utilizadas</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {tecnologias.map((tecnologia) => {
          const Icon = iconesTecnologias[tecnologia];

          return (
            <div
              key={tecnologia}
              className="flex flex-col items-center justify-center p-6 border border-gray-100 rounded-2xl shadow-md bg-white hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
            >
              {Icon && (
                <Icon
                  size={40}
                  className="text-[#8C0343] mb-3 drop-shadow-md"
                />
              )}
              <span className="text-base font-semibold text-gray-700 text-center">
                {tecnologia}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
