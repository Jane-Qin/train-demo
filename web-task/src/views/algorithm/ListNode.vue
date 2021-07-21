<template>
	<div>
		<span v-for="(item, i) in resData">{{item}}<span v-if="(i<resData.length-1)">--></span></span>
		<button @click="reverse">链表反转</button>
	</div>
</template>

<script>
	class ListNode{
        constructor(val) {
            this.next = null;
            this.val = val;
        }
    }
    export default {
        name: "ListNode",
        data(){
          return {
			  headData:null,
              resData:[]
          }
        },
		methods:{
            getData(){
                let node1=new ListNode('A');
                let node2=new ListNode('B');
                let node3=new ListNode('C');
                let node4=new ListNode('D');
                let node5=new ListNode('E');
                let node6=new ListNode('F');
                node1.next=node2;
                node2.next=node3;
                node3.next=node4;
                node4.next=node5;
                node5.next=node6;
                this.headData=node1;
			},
			reverse(){
                let cur=this.headData;
                let pre=null;
                while(cur!=null){
					let next=cur.next;
					cur.next=pre;
					pre=cur;
					cur=next;
				}
                this.headData=pre;
                this.listData();
			},
			listData(){
                this.resData=[];
                let data=this.headData;
                while(data!=null){
                    this.resData.push(data.val);
                    data=data.next;
				}
			}
		},
        created(){},
        mounted(){
			this.getData();
			this.listData();
        }
    }

</script>

<style scoped>

</style>
