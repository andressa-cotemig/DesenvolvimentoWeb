import React from 'react';
export class LifeCycle extends React.Component {
    componentDidMount() {
        console.log('Componente Lifecycle montado', this.props)
    }
    componentDidUpdate() {
        console.log('Componente Lifecycle atualizado', this.props)
    }
    componentWillUnmount() {
        console.log('Componente Lifecycle desmontado', this.props)
    }
    render() {
        return (
            <div className="Lifecycle">
                <h1>Componente Lifecycle</h1>
                <br />
                {this.props.exibicao ? <h2>Exibindo nome: Andressa</h2> : null}
            </div>
        );
    }
}


