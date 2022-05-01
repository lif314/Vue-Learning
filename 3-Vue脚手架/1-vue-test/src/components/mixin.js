// 使用mixin，将共有的配置抽离出来
export const mixin = {
    methods: {
        showName(){
          alert(this.name)
        }
      },
      data(){
        return {
            x: 100,
            y: 100
        }
      }
}