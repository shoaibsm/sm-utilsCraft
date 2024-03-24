import React from 'react';
import ReactDOM from 'react-dom';
import DeleteMessage from './components/DeleteMessage/DeleteMessage'
import ErrorMessage from './components/ErrorMessage/ErrorMessage'
import SuccessMessage from './components/SuccessMessage/SuccessMessage'
import WarningMessage from './components/WarningMessage/WarningMessage'

ReactDOM.render(
    <React.StrictMode>
        <DeleteMessage />
        <ErrorMessage />
        <SuccessMessage />
        <WarningMessage />

    </React.StrictMode>,
    document.getElementById('root')
);