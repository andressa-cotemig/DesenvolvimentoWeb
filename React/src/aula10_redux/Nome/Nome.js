import React from "react";

export default class Nome extends React.Component {

    componentDidUpdate() {
        console.log('atualizou o nome')
    }
    
    render() {
        const { nome } = this.props;

        return (
            <div>
                Nome: {nome}
            </div>
        )
    }
}