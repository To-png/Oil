<template>
  <div id="app">    
    <a-layout>
      <a-layout-sider>
        <div id="nav">
          <div>
            <router-link to="/">Линии</router-link>
          </div>
          <div>
            <router-link to="/settings">Настройки</router-link>
          </div>
        </div>
      </a-layout-sider>
      <a-layout>         
        <a-layout-content>
          <router-view/>
        </a-layout-content>          
      </a-layout>
    </a-layout>       
  </div>
</template>

<style>
#app {  
  text-align: left;   
}

#app .ant-layout-sider {
  background: #3ba0e9;
  color: #fff;
  line-height: 30px;
  height: 100vh; 
}

#app .ant-layout-content {
  background: rgba(16, 142, 233, 1);
  color: #fff;
  padding: 30px;  
}

#app > .ant-layout {
  margin-bottom: 48px;
}

#app > .ant-layout:last-child {
  margin: 0;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #fff;
}
</style>
