<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      <a-button type="primary"> Primary </a-button>
      <a-button>Default</a-button>
      <a-button type="dashed"> Dashed </a-button>
      <a-button type="danger"> Danger </a-button>
      <a-config-provider :auto-insert-space-in-button="false">
        <a-button type="primary"> 按钮 </a-button>
      </a-config-provider>
      <a-button type="primary"> 按钮 </a-button>
      <a-button type="link"> Link </a-button>
    </div>
  </div>
</template>
<script>
import { defineComponent,reactive,ref,toRefs } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const viewForm = ref(null);
    const state = reactive({
      formData: {},
      listData: [],
    });
    return {
      ...toRefs(state),
      viewForm,
    };
  },
});
</script>

