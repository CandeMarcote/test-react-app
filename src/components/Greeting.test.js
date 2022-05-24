import Greeting from "./Greeting";
import {render,screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('greeting component', ()=>{

    test('check if hello world is rendered', ()=>{
        render(<Greeting/>)
        const HWElement = screen.getByText('hello world!', {exact: true});
        expect(HWElement).toBeInTheDocument();
    })

    test('renders happy to see you if the button is NOT clicked', ()=> {
        render(<Greeting/>);

        const outputElement = screen.getByText('happy to see you', {exact: false});
        expect(outputElement).toBeInTheDocument();

    })

    test('renders Changed! if the button was clicked', ()=>{
        render(<Greeting/>);

        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement)

        const isChanged = screen.getByText('Changed!');
        expect(isChanged).toBeInTheDocument();

    })

    test('does not render happy to see you if the button was clicked', ()=>{
        render(<Greeting/>);

        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement)

        const outputElement = screen.queryByText('happy to see you', {exact: false});
        expect(outputElement).not.toBeInTheDocument();
    })
})
