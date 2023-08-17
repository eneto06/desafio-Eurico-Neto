class CaixaDaLanchonete {

    cardapio = {
        'cafe': { preco: 3.00, principal: true },
        'chantily': { preco: 1.50, principal: false },
        'suco': { preco: 6.20, principal: true },
        'sanduiche': { preco: 6.50, principal: true },
        'queijo': { preco: 2.00, principal: false },
        'salgado': { preco: 7.25, principal: true },
        'combo1': { preco: 9.50, principal: false },
        'combo2': { preco: 7.50, principal: false },
    };
    
    taxas = {
        'dinheiro': -0.05, // 5% de desconto
        'debito': 0, // sem taxa
        'credito': 0.03, // 3% de taxa
    };

    calcularValorDaCompra(metodoDePagamento, itens) {


        if (itens.length === 0) {
            return "Não há itens no carrinho de compra!"
        }

        let valorTotal = 0;
        let itemPrincipal = false;
        
        for(let item of itens) {
            let [codigo, quantidade] = item.split (',');
            quantidade = Number (quantidade);

            if (!this.cardapio[codigo]) {
                return "Item inválido!"
            }

            if (quantidade <= 0) {
                return "Quantidade inválida!";
            }

            if (this.cardapio[codigo].principal) {
                itemPrincipal = true;
            }

            valorTotal += this.cardapio[codigo].preco * quantidade;
        }

        if (!itemPrincipal) {
            return "Item extra não pode ser pedido sem o principal!";
        }



        let taxa = this.taxas[metodoDePagamento]
        if (taxa === undefined) {
            return "Forma de pagamento inválida!";
        }

        valorTotal *= 1 + taxa

        return `R$ ${valorTotal.toFixed(2)}`.replace(".", ",");
    }

}

export { CaixaDaLanchonete };