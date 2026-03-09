import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      contagemCarrinho: 0, // Traduzido de cartCount
    };
  }

  componentDidUpdate(prevProps) {
    const { cartReducer } = this.props;
    // Verifica se o carrinho mudou para atualizar a contagem na tela
    if (cartReducer.cart !== prevProps.cartReducer.cart) {
      this.setState({ contagemCarrinho: cartReducer.cart.length });
    }
  }

  render() {
    const { contagemCarrinho } = this.state;

    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span className="logo">
          <h3>Produtos 🛍️</h3>
        </span>
        <div>
          <Link to="/" className="navLink">
            Início
          </Link>
          <Link to="/cart" className="navLink">
            Carrinho
          </Link>
          <span className="cartCount">
            ITENS NO CARRINHO: {contagemCarrinho}
          </span>
        </div>
      </div>
    );
  }
}

// Conectando ao Redux para pegar os dados do carrinho
const mapStateToProps = (state) => ({
  cartReducer: state.cartReducer,
});

export default connect(mapStateToProps)(Navbar);
