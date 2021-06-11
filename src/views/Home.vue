<template>
  <div class="container">
    <h1>Yeni Kişi</h1>
    <hr />
    <Form />
  </div>
</template>

<script>
import Form from "@/components/Form.vue";

export default {
  name: "Home",
  components: {
    Form,
  },
};
</script>
