let id = 1;
const app = {
    data() {
        return {
          title: 'Дорогой днивник',
          newText: '',
          color:'red',
          line:'li',
          styleText:'text',
          itami:'',
          show:true,
          list: [
            {
               id: id++,
               name: 'Пыхпы' 
            },
            {
                id: id++,
                name: 'МайСыквел'
            },
            {
                id: id++,
                name: 'бутсТРЭП'
            }
          ]
        }
    },
    created() {
        this.getItems()
    },
    computed: {
      getListLength() {
        return this.list.length
      }  
    },
    watch: {
        // watch - свойства - следят за нашим состоянием и отрабатывают тогда когда происходит изменение
        newText(newVal) {
            // console.log(newVal);
        },
        list: {
            handler(newList) {
                localStorage.list = JSON.stringify(this.list)
            },
            deep: true
        }
    },
    
    methods: {
        addItem() {
            this.list.push({
                id: id++,
                name: this.newText,
                show: true
            })
            this.newText = ''
        },
        delItem(id) {
            const index = this.list.findIndex(item => item.id == id)
            this.list.splice(index,1)
        },
        getItems() {
            const localList = localStorage.list
            if(localList) {
                this.list = JSON.parse(localList)
            } 
        },
        writeText(id){
            const index = this.list.findIndex(item => item.id == id);
            this.list[index].name = this.itami;
            this.list[index].show = this.list[index].show === true ? false : true;
            this.itami = ''
        }
    }
}



Vue.createApp(app).mount('#app')
