import {render,screen} from '@testing-library/react';
import Async from './Async';

describe('check if the asynchronous request is working properly', ()=>{
    test('check whether there are list items', async ()=>{
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async ()=>[{id: 'p1', title: 'first post'}]
        })
        render(<Async/>);

        const itemListElements = await screen.findAllByRole('listitem');
        expect(itemListElements).not.toHaveLength(0);
    })
})