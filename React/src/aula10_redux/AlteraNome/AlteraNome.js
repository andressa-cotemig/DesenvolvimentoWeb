import React from "react";

export default class AlteraNome extends React.Component {
    
    inputChange(valor) {
        const { clickButton } = this.props;
        clickButton(valor);
    }
    render() {

        return (
            <div>
                Altera Nome:
                <input
                    onChange={(event) => this.inputChange(event.target.value)}
                    type='text'
                />
            </div>
        )
    }
}