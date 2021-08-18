<template>
  <a-table :row-selection="rowSelection" :columns="columns" :data-source="data">
    <a :v-slot="name" :slot-scope="text">{{ text }}</a>
  </a-table>
</template>
<script>
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    scopedSlots: { customRender: "name" },
  },
  {
    title: "Age",
    dataIndex: "age",
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
];

export default {
  data() {
    return {
      data,
      columns,
    };
  },
  created() {
    this.axios({
      method: "get",
      url: "https://apimusic.linweiqin.com/search/",
      params: {
        keywords: "热门",
      },
    }).then((res) => {
      console.log(res);
    });
  },
  computed: {
    rowSelection() {
      return {
        onChange: (selectedRowKeys, selectedRows) => {
          console.log(
            `selectedRowKeys: ${selectedRowKeys}`,
            "selectedRows: ",
            selectedRows
          );
        },
        getCheckboxProps: (record) => ({
          props: {
            disabled: record.name === "Disabled User", // Column configuration not to be checked
            name: record.name,
          },
        }),
      };
    },
  },
};
</script>
