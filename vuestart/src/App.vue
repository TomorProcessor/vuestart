<template>
  <section>
    <h2>Friend data</h2>
    <!--  itt a props kötelezően kebab-case, ebből konvertál camelCase-t komponens oldalon a vue  -->
    <friend-content
        v-for="friend in friends"
        :key="friend.id"
        :name="friend.name"
        :phone-number="friend.phone"
        :email-address="friend.email"
        :is-favourite="friend.isFavourite">
    </friend-content>
  </section>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: "johnDoe",
          name: "John Doe",
          phone: "+1234567890",
          email: "john.doe@example.com",
          isFavourite: true
        },
        {
          id: "janeSmith",
          name: "Jane Smith",
          phone: "+1987654321",
          email: "jane.smith@example.com",
          isFavourite: false
        },
        {
          id: "aliceJohnson",
          name: "Alice Johnson",
          phone: "+1123456789",
          email: "alice.johnson@example.com",
          isFavourite: true
        },
        {
          id: "bobBrown",
          name: "Bob Brown",
          phone: "+1098765432",
          email: "bob.brown@example.com",
          isFavourite: true
        },
        {
          id: "charlieDavis",
          name: "Charlie Davis",
          phone: "+1012345678",
          email: "charlie.davis@example.com",
          isFavourite: false
        }
      ]

    };
  },
};

</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #4fc08d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#user-goal {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#user-goal h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #4fc08d;
  margin: 0 0 1rem 0;
}

#user-goal p {
  font-size: 1.25rem;
  font-weight: bold;
  border: 1px solid #4fc08d;
  background-color: #4fc08d;
  color: white;
  padding: 0.5rem;
  border-radius: 25px;
}

#user-goal input {
  font: inherit;
  border: 1px solid #ccc;
}

#user-goal input:focus {
  outline: none;
  border-color: #1b995e;
  background-color: #d7fdeb;
}

#user-goal button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#user-goal button:hover,
#user-goal button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

#styling {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
}

.demo {
  width: calc(100% - 32px);
  height: 100px;
  margin: 16px;
  border: 2px dashed #ccc;
}

.selectedBox {
  border-color: red;
}

ul {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
}

</style>