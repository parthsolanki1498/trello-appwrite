import React from 'react';
import nock from 'nock';
import { render, fireEvent, screen} from '@testing-library/react'
import formatTodosForAI from '@/lib/formatTodosForAI';
import fetchMock from 'jest-fetch-mock';

// import Header from '@/components/Header';

describe('fetchSuggestionsApi', () => {
    it('ChatGPT api', async () => {
        const apiUrl = 'http://localhost:3000/api/generateSummary'
    
        const todos = 'in progress: take exam, done: give test, todo: present'
        
        const res = await fetchMock(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify( { todos }),
        });
    
        expect(res.status).toEqual(200);
    
        // render(<Header/>)
    })
})

