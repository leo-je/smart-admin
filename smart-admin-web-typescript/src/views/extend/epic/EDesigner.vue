<template>
  <div id="smart_admin_water_mark" class="epic-designer-container">
    <EDesigner ref="edRef" @save="handleSubmit" :hiddenHeader="true" />
  </div>
</template>
<script setup lang="ts">
import { EDesigner } from "epic-designer";
import { getRequest, postRequest } from '/@/lib/axios';
import { reactive, ref, nextTick, onMounted, Ref } from 'vue';
import { getUrlParams } from "/@/utils/param";

const formDefault = {
  id: undefined, //主键
  formName: undefined, //表单名称
  formConfig: "",
};

let formInfo:any = reactive({ ...formDefault });
const edRef: Ref<any> = ref({});

/**
 * 点击保存按钮操作
 * @param e
 */
function handleSubmit(e:any) {
  console.log(e);
  formInfo.formConfig = JSON.stringify(e);
  postRequest('/jeEpicFormConfig/update', formInfo).then((res:any) => {
    if (res.ok) {
      console.log("保存成功");
      // message.success('保存成功');
    } else {
      console.log("保存失败");
      // message.error(res.msg);
    }
  });
}


// ---   
onMounted(async () => {
  setTimeout(() => {
    //   ebRef.value?.setData({
    //     input_sb6jhfb8: "自动填写的内容",
    //   });

    // 从URL获取参数集合
    const params = getUrlParams();
    console.log('params', params);

    if (params.id) {
      formInfo.id = params.id;
      // 获取流程数据
      getRequest(`/jeEpicFormConfig/get/${params.id}`).then((res:any) => {
        console.log('res', res);
        if (res.ok == true) {
          // 创建流程设计器
          if (res.data) {
            formInfo = res.data;
            if(edRef.value)
            edRef.value.setData(JSON.parse(res.data.formConfig))

          }
        }
      })
    }
  }, 200);
});


</script>
<style>
.epic-designer-container {
  width: 100%;
  height: 800px;
  border: 1px solid var(--epic-border-color);
}
</style>