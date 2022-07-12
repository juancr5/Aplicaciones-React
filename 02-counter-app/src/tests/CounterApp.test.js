import { fireEvent, render, screen } from '@testing-library/react';
import CounterApp from '../CounterApp';

describe('Pruebas en el <CounterApp />', () => {

  const initialValue = 10;

  //.toBeInTheDocument() propia de la libreria 
  test('Debe de Renderizar el Titulo en el Main', () => {
    render(<CounterApp />);
    const titleMain = screen.getByText(/CounterApp/);
    expect(titleMain).toBeInTheDocument();
  });

  test('Debe de hacer Match con el Snapshot', () => {
    const { container } = render(<CounterApp value={initialValue} />);
    expect(container).toMatchSnapshot();
  });

  test('Debe de Mostrar el Valor Inicial de 100 <CounterApp value={100}>', () => {

    render(<CounterApp value={100} />);
    expect(screen.getByText(100)).toBeTruthy();

  });

  test('Debe de Incrementar con el Botón +1', () => {

    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText('+1'))
    expect(screen.getByText('11')).toBeTruthy();

  });

  test('Debe de Decrementar con el Botón -1', () => {

    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText('-1'));
    expect(screen.getByText('9')).toBeTruthy();

  });

  test('Debe de Funcionar el Botón de Reset', () => {
        
    render( <CounterApp value={ 355 } /> );
    fireEvent.click( screen.getByText('+1') );
    fireEvent.click( screen.getByText('+1') );
    fireEvent.click( screen.getByText('+1') );
    // fireEvent.click( screen.getByText('Reset') );
    fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));

    expect( screen.getByText( 355 ) ).toBeTruthy();

});


});
