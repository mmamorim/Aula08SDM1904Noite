
export default {
    template: `
        <div class="flex items-center">
            contador com valor {{contador}}
            <button @click="adiciona" class="ml-2 border bg-white text-sm p-1 hover:bg-gray-100">
                adicionar
            </button>
        </div>
    `,
    data() {
        return {
            contador: 0
        }
    },
    methods: {

        adiciona() {
            this.contador++;
        }
    }
}