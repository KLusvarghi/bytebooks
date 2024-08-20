import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex-1 flex flex-col items-center justify-center mt-4">
      <h2 className="text-center text-[#002F52] text-[32px]">
        Oops! não encontramos nada por aqui
      </h2>
      <img
        src="/not_found.png"
        alt="sem resultado"
        className="w-1/2 max-w-[500px] mx-auto mt-4"
      />
      <button
        className="py-3 w-1/4 bg-[#EB9B00] hover:opacity-80 rounded-md shadow-md"
        onClick={() => {
          navigate('/');
        }}
      >
        <h3 className="text-white text-lg font-medium">Voltar ao início</h3>
      </button>
    </div>
  );
};
