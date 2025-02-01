export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 md:px-8">
      {/* Conteúdo principal */}
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Coluna Logo */}
        <div className="space-y-2  justify-self-center ">
          <img
            width={100}
            height={100}
            src="src/assets/LogoJR-removebg-preview.png"
            alt="Logo JR Veiculos"
          />
        </div>
        {/* Coluna Contato */}

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white mb-4">
            ENTRE EM CONTATO
          </h2>

          <div className="space-y-2">
            <p className="font-semibold">JR Veículos</p>
            <p>
              Rua Professor Júlio Holanda, n134
              <br />
              Irajá | Quixadá - CE
            </p>
            <p>(88) 5082-5051</p>
            <p>meuEmail@gmail.com</p>
          </div>
        </div>

        {/* Coluna Navegação */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold text-white mb-4">
            NAVEGAÇÃO RÁPIDA
          </h2>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-2">
            {/* Coluna 1 */}
            <div className="space-y-2">
              <p className="font-bold uppercase">Home</p>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="hover:text-white transition">
                    A Empresa
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Estoque
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            {/* Coluna 2 */}
            <div className="space-y-2">
              <p className="font-bold uppercase">Nossos Serviços</p>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Venha seu veículo
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Consignação de Veículos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Proposta de Financiamento
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Trabalho Cereçoso
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center md:text-left">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            Copyright ©2014 todos os direitos reservados
          </p>
          <p className="text-sm">
            Criado por <span className="font-semibold">TCLar</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
