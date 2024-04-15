<template>
  <PageWrapper contentBackground contentClass="flex" dense contentFullHeight>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleReloadCurrent"> 新增 </a-button>
        <a-button type="primary" @click="handleReload"> 刷新并返回第一页 </a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action' && record.runningCommitId != record.latestCommitId">
          <TableAction
            :actions="[
              {
                label: '刷新Tags',
                onClick: refreshDockerTags.bind(null, record),
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { BasicTable, useTable, TableAction } from '@/components/Table';
  import { getServiceRunningVersionTableColums } from '@/utils/tableColumnData';
  import { PageWrapper } from '@/components/Page';

  import { getServiceRunningVersionListApi } from '@/api/genie/serviceRunningVersion';

  const [registerTable, { reload }] = useTable({
    api: getServiceRunningVersionListApi,
    columns: getServiceRunningVersionTableColums(),
    pagination: { pageSize: 20 },
    fetchSetting: {
      pageField: 'current',
      sizeField: 'size',
      listField: 'records',
    },
  });
  function handleReloadCurrent() {
    reload();
  }

  function handleReload() {
    reload({ page: 1 });
  }
  function refreshDockerTags(record: Recordable) {
    console.log('refreshDockerTags', record);
  }
</script>
