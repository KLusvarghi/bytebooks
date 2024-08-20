// A diferença da utilização do <ErrorBoundary> é basicamente essa: podemos englobar os componentes e as páginas separadas ou podemos englobar toda a aplicação e, para qualquer erro JavaScript que for disparado na tela, ele vai fazer o tratamento e exibir a tela que vimos anteriormente com duas opções: recarregar a página ou voltar ao início.

import React, { Component, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    // setando o estado inicial do hasError para false
    this.state = { hasError: false };
  }

  // função que recarregará a tela
  handleReload = () => {
    window.location.reload();
  };

  // função para voltar ao inicio da aplicação
  handleBack = () => {
    // mudando o caminho da rota para '/'
    window.location.replace('/');
  };

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    // setando o valor hasError para true
    this.setState({ hasError: true });
    // aq pode tratar o erro como quiser
    console.error('Erro encontrado: ', error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
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
            onClick={this.handleReload}
          >
            <h3 className="text-white text-lg font-medium">
              Recarregar a página
            </h3>
          </button>
          <button
            className="py-3 w-1/4 bg-[#EB9B00] hover:opacity-80 rounded-md shadow-md"
            onClick={this.handleBack}
          >
            <h3 className="text-white text-lg font-medium">Voltar ao início</h3>
          </button>
        </div>
      );
    }
    // se não ouver erro nenhum ele retorna o elemento filho dele
    return this.props.children;
  }
}

export default ErrorBoundary;
