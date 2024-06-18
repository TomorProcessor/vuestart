<template>
  <div>
    <the-header></the-header>
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <test-lister>
      <template v-slot:default="slotProps">
        <p>{{ slotProps.item }}</p>
      </template>
    </test-lister>
    <button @click="setSelectedTestComponent('test-a')">Test A</button>
    <button @click="setSelectedTestComponent('test-b')">Test B</button>
    <!--  azt a komponenst rendereli ki, aminek a neve megfelel a selectedTestComponent változóban lévőnek -->
    <!--  amennyiben fontos a dom elemek cache-elése, akkor keep-alive tag-ek közé kell tenni  -->
    <component :is="selectedTestComponent"></component>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';
import TestLister from "@/components/TestLister.vue";
import TestA from "@/components/TestA.vue";
import TestB from "@/components/TestB.vue";

export default {
  //ilyen formában a komponens lokális
  components: {
    'the-header': TheHeader,
    'badge-list': BadgeList,
    'user-info': UserInfo,
    'test-lister': TestLister,
    'test-a': TestA,
    'test-b': TestB
  },
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
      selectedTestComponent: ''
    };
  },
  methods: {
    setSelectedTestComponent(compName) {
      this.selectedTestComponent = compName;
    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>