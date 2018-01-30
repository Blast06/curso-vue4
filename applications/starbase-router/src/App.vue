<<template>
  <div id="app">
      <h3>TEST</h3>
      <h4>
            <router-link class="link" to="/data/1">Posts de usuario 1</router-link>|
            <router-link class="link" to="/data/2">Posts de usuario 2</router-link>
      </h4>

      <router-view></router-view>
  </div>
</template>

<!--
https://jsonplaceholder.typicode.com/posts?userId=2-->
