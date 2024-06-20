<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <router-link to="/teams/t2">Goto team 2</router-link>
  </section>
  <button v-if="!confirmed" @click="confirm">Press this to enable leave</button>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  inject: ['teams', 'users'],
  props: ['teamId'],
  components: {
    UserItem
  },
  data() {
    return {
      teamName: 'Test',
      members: [],
      confirmed: false
    };
  },
  methods: {
    loadMembers: function(teamId) {
      const selectedTeam = this.teams.find(team => team.id === teamId);
      const members = selectedTeam.members;
      const selectedMembers = [];
      for (const member of members) {
        console.log(member);
        const selectedUser = this.users.find(user => user.id === member);
        selectedMembers.push(selectedUser);
      }
      this.members = selectedMembers;
      this.teamName = selectedTeam.name;
    },
    confirm() {
      this.confirmed = true;
    }
  },
  created() {
    this.loadMembers(this.teamId);
  },
  watch: {
    $route() {
      console.log(this.$route.query.testKey);
      this.loadMembers(this.teamId);
    }
  },
  beforeRouteLeave(to, from, next) {
    console.log(to, from);
    if (this.confirmed) {
      next();
    } else {
      alert('you haven\'t confirmed');
      next(false);
    }
  },
  //akkor hívódik, ha már létezik a komponens, és újra idejutnak egy route által, új adatokat kell megjelenítenie
  beforeRouteUpdate(to, from, next) {
    console.log('teamMembers beforeRouteUpdate', to, from);
    next();
  },
  //akkor hívódik, amikor egy route által létrejön a komponens
  beforeRouteEnter(to, from, next) {
    console.log('teamMembers beforeRouteEnter', to, from);
    next();
  }
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>