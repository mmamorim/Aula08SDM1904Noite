export default {
    template: `
        <button class="border bg-white text-sm p-1 hover:bg-gray-100 w-full">
            <div @click="clicouCliente" class="flex items-center">
                <span class="iconify mr-1" data-icon="bi:person-hearts"></span>
                Clients {{qtdeClicks}}
            </div>
        </button>
        <button class="border bg-white text-sm p-1 hover:bg-gray-100 w-full">
            <div class="flex items-center">
                <span class="iconify mr-1" data-icon="bi:person-hearts"></span>
                Produtos
            </div>
        </button>
    `,
    data() {
        return {
            qtdeClicks: 0
        }
    },
    methods: {

        clicouCliente() {
            this.qtdeClicks++;    
        }
    }
}