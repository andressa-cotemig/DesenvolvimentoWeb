import React from 'react';

export default class Child extends React.Component {
    componentWillUnmount() {
        alert("O componente Header está prestes a ser desmontado");
    }
    render() {
        return (
            <h1>Hello World!</h1>
        );
    }
}
