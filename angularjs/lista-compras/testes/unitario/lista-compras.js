describe('Lista Compras Unitário', function () {

    describe('ListaComprasController', function () {
        beforeEach(function () {
            this.$scope = {};
            this.controller = new ListaComprasController(this.$scope);
        });

        it('deve criar "itens" com 2 ítens', function () {
            expect(this.$scope.itens.length).toBe(2);
        });

        describe('adicionaItem', function () {
            it('deve adicionar um novo ítem à lista com dados do escopo', function () {
                this.$scope.item = {};
                this.$scope.item.produto = 'Carne';
                this.$scope.item.quantidade = 5;
                this.$scope.adicionaItem();
                expect(this.$scope.itens.length).toBe(3);
                expect(this.$scope.itens[2].produto).toBe('Carne');
                expect(this.$scope.itens[2].quantidade).toBe(5);
                expect(this.$scope.itens[2].comprado).toBeFalse;
            });
        });

    });

});
