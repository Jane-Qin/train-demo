<template>
  <div class="conversion">
	  <section>进制转换</section>
    <section>
		<span>进制：</span>
      <input v-model="form.from"/>
      <a @click="change" > &lt;=&gt; </a>
      <input v-model="form.to"/>
    </section>
    <section>
      <input v-model="form.data"><button @click="convert">转换</button>
    </section>
    <section>
      结果:&nbsp;<span>{{form.res}}</span>
    </section>
  </div>

</template>
<script>

export default {
  name: 'Conversion',
  data () {
    return {
      strArray: [],
      form: {
        from: 10,
        to: 64,
        data: 0,
        res: 0,
        floatNum: 20
      }
    }
  },
  methods: {
	change(){
		var temp=this.form.from;
		this.form.from = this.form.to;
		this.form.to = temp;

	},
    convert () {
		if(!this.form.from || !this.form.to || !this.form.data)	{
			this.form.res="";
			return;
		}
		this.form.data=String(this.form.data).trim();
		if (this.form.data.indexOf('.') == -1) {
			// 整数
			this.form.res = this.intConvert(this.form.data);
		}else{
			let intNum=this.form.data.split('.')[0];   //整数位
			let decimalNum=this.form.data.split('.')[1];  //小数部分
			let i = this.intConvert(intNum);
			let j = this.decimalConvert(decimalNum);
			this.form.res = i+'.'+j
		}
    },
	intConvert(num){
		let data = String(num);
        if (data.indexOf('-')==0) {
			data=data.slice(1);
			data=this.to10(data,this.form.from);
			return '-'+this.tenTo64Int(data);
        }else{
			data=this.to10(data,this.form.from);
			return this.tenTo64Int(data);
		}
	},
	decimalConvert(num){
		let data = this.to10Float(num,this.form.from);
		return this.tenTo64Float(data);
	},
    tenTo64Int (num) {
      let val = num;
      let res = [];
      while (val > this.form.to - 1) {
        res.push(this.strArray[val % this.form.to]);
        val = Math.floor(val / this.form.to);
      }
      res.push(this.strArray[val]);
      return res.reverse().join("");
    },
    tenTo64Float (num) {
      let val = num;
      let res = [];
      for (let i = 0; i < this.form.floatNum; i++) {
        res.push(this.strArray[Math.floor(val * this.form.to)]);
        val = val * this.form.to - Math.floor(val * this.form.to);
      }
      return res.join("");
    },
    to10 (num, scale) {
      let arr = String(num).split('').reverse();
      let res = 0;
      for (let i = 0; i < arr.length; i++) {
        res += this.strArray.indexOf(arr[i]) * Math.pow(scale, i)
      }
      return res;
    },
    to10Float (num, scale) {
      let arr = String(num).split('');
      let res = 0.0;
      for (let i = 0; i < arr.length; i++) {
        res += this.strArray.indexOf(arr[i]) * Math.pow(scale, -1*(i+1))
      }
      return res;
    }
  },
  created () {
    let _self = this
    for (let i = 0; i < 10; i++) {
      _self.strArray.push(String(i))
    }
    for (let i = 0; i < 26; i++) {
      _self.strArray.push(String.fromCharCode(65 + i))
    }
    for (let i = 0; i < 26; i++) {
      _self.strArray.push(String.fromCharCode(97 + i))
    }
	_self.strArray.push('+');
	_self.strArray.push('/');
  }
}
</script>
<style scoped>
.conversion{
	width: 50%;
    margin: 42px auto;
    text-align: center;
}
</style>
