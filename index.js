import React from 'react';
import ReactDOM from 'react-dom';
import TestComponent from './components/test-component';
import booksFactory from './mock/popular-books-factory';
import d3 from 'd3';

const data = [4, 8, 15, 16, 23, 42];


ReactDOM.render(
    <TestComponent />,
    document.getElementById('app')
);


