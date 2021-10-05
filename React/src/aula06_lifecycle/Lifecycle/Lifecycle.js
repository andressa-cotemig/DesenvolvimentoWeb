import React from 'react';
export class LifeCycle extends React.Component {
    componentDidMount() {
        console.log('Componente montado', this.props)
    }
    componentDidUpdate() {
        console.log('Componente atualizado', this.props)
    }
    componentWillUnmount() {
        console.log('Componente desmontado', this.props)
    }
    render() {
        return (
            <div className="App" >
                <h1>Componente Lifecycle</h1>
                <br />
                {this.props.exibicao ? <h2>Exibindo...</h2> : null}
            </div>
        );
    }
}


