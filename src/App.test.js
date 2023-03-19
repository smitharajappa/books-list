import { render, screen } from '@testing-library/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import configureStore from "redux-mock-store"
import { Provider } from 'react-redux';
import App from './App';

describe('App', () => {
  test('renders App component without any data', () => {
    const initialState = {
        error: false,
        isLoading: false,
        books:[{
            authors:'some name',
            title: 'some title'
        }]
    }
    const mockStore =  configureStore()
    const bookStore = mockStore(initialState)
    render(
        <Provider store={bookStore}>
          <App />
          </Provider>
    );

    const booksComponent = screen.getByRole("div");
    expect(booksComponent).toBeInTheDocument();
  });

});
