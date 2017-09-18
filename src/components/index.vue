<template>
 		<section id="sites" class="items">
			<div class="item" v-for="item of list" :key="item.typename" >
			    <h2>{{item.typename}}</h2>
				<ul class='xoxo blogroll'>
					<li v-for="site of item.list" :key="site.name"><a :href="site.url" :title="site.name">{{site.name}}</a><br>{{site.desc}}</li>
				</ul>	
			</div>	

		</section>
</template>

<script>
import list from "@/data/index"
export default {
  name: 'index',
  data () {
    return {
      list: list.sites
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
div{
	background: gray;
	/* border-image: url() */
}
</style>
