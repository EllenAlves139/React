import { ActionTypes } from "../../../redux/constants/action-type";

// Ação para adicionar ao carrinho
export const adicionarAoCarrinhoAcao = (produto = {}) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: { product: produto },
  };
};

// Ação para remover do carrinho
export const removerDoCarrinhoAcao = (idProduto) => {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: { id: idProduto },
  };
};

// Ação para aumentar a quantidade
export const aumentarQuantidadeAcao = (id) => ({
  type: ActionTypes.INCREASE_QUANTITY,
  payload: { id },
});

// Ação para diminuir a quantidade
export const diminuirQuantidadeAcao = (id) => ({
  type: ActionTypes.DECREASE_QUANTITY,
  payload: { id },
});