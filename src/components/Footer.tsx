import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full mt-10">
      {/* Linha superior */}
      <div className="border-t border-base-content w-[90%] mx-auto" />

      {/* Conteúdo inferior */}
      <div className="flex items-center justify-between w-[90%] mx-auto py-3 text-sm text-gray-600">
        {/* Ícones esquerda */}
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/lucas-manera"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 text-base-content transition-colors"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/lucasmanera2017"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-800 text-base-content transition-colors"
          >
            <FaGithub size={20} />
          </a>
        </div>

        {/* Texto central */}
        <p className="text-center text-base-content">
          © {new Date().getFullYear()} Lucas Manera. Todos os direitos reservados.
        </p>

        {/* Espaço à direita (para balancear visualmente) */}
        <div className="w-[52px]" />
      </div>
    </footer>
  );
};

export default Footer;
