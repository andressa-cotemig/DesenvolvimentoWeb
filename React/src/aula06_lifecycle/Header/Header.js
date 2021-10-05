import React from 'react';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { favoritecolor: "red" };
    }
    static getDerivedStateFromProps(props, state) {
        return { favoritecolor: props.favcol };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ favoritecolor: "yellow" })
        }, 1000)
    }

    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     document.getElementById("div1").innerHTML =
    //         "Antes da atualização, o favorito era " + prevState.favoritecolor;
    // }
    // componentDidUpdate() {
    //     document.getElementById("div2").innerHTML =
    //         "O favorito atualizado é " + this.state.favoritecolor;
    // }

    render() {
        return (
            <div>
                <h1>Cor: {this.state.favoritecolor}</h1>
                <div id="div1"></div>
                <div id="div2"></div>
            </div>
        );
    }
}
