/**
 * 业务页面路由
 */
const mainRouter = [
  {
    path: '',
    name: 'Index',
    component: () => import('@/views/pages/index/index.vue'),
  },
  {
    path: '/todo',
    name: 'Todo',
    component: () => import('@/views/pages/todo.vue'),
  },
  // 特殊案件申请
  {
    path: '/legal-case',
    name: 'Legalcase',
    component: () => import('@/views/pages/special-case-application/special-case-table-partial'),
  },
  {
    path: '/my-todo',
    name: 'MyTodo',
    component: () => import('@/views/pages/my-matter/my-todo/my-todo.vue'),
  },
  {
    path: '/my-todo-new',
    name: 'TodoNew',
    component: () => import('@/views/pages/my-matter/my-todo-new/my-todo-new.vue'),
  },
  {
    path: '/my-done',
    name: 'MyDone',
    component: () => import('@/views/pages/my-matter/my-done/my-done'),
  },
  {
    path: '/my-patent',
    name: 'MyPatent',
    component: () => import('@/views/pages/my-matter/my-patent/index.vue'),
  },
  {
    path: '/withdrawn-unfinalized',
    name: 'WithdrawnUnfinalized',
    component: () => import('@/views/pages/my-matter/withdrawn-unfinalized/index.vue'),
  },
  {
    // 项目管理
    path: '/project',
    name: 'project',
    component: () => import('@/views/pages/project/project.vue'),
  },
  {
    path: '/project-application',
    name: 'project-application',
    component: () => import('@/views/pages/project-application/project-application.vue'),
  },
  {
    path: '/pct-international',
    name: 'pct-international',
    component: () => import('@/views/pages/project-application/pct-international.vue'),
  },
  {
    path: '/pct-country',
    name: 'pct-country',
    component: () => import('@/views/pages/project-application/pct-country.vue'),
  },
  {
    path: '/purchase-case',
    name: 'purchase-case',
    component: () => import('@/views/pages/project-application/purchase-case.vue'),
  },
  {
    path: '/paris-convention',
    name: 'paris-convention',
    component: () => import('@/views/pages/project-application/paris-convention.vue'),
  },
  {
    path: '/Hong-Kong-case',
    name: 'Hong-Kong-case',
    component: () => import('@/views/pages/project-application/Hong-Kong-case.vue'),
  },
  {
    path: '/escrow-case',
    name: 'escrow-case',
    component: () => import('@/views/pages/project-application/escrow-case.vue'),
  },
  {
    path: '/project-application-us',
    name: 'project-application-us',
    component: () => import('@/views/pages/project-application/project-application-us.vue'),
  },
  {
    path: '/patent/detail',
    name: 'patentDetail',
    component: () => import('@/views/pages/patent-detail.vue'),
  },
  {
    path: '/search/task',
    // 查询任务
    name: 'searchTask',
    component: () => import('@/views/pages/data-search/search-task.vue'),
  },
  {
    path: '/search/flow',
    name: 'searchFlow',
    component: () => import('@/views/pages/data-search/search-flow.vue'),
  },
  {
    path: '/fee-management/fee-config',
    name: 'feeConfig',
    component: () => import('@/views/pages/feeManagement/fee-config.vue'),
  },
  {
    path: '/agency-management/agency-fee',
    name: 'agencyFeeList',
    component: () => import('@/views/pages/agency-management/tab.vue'),
  },
  {
    path: '/fee-management/cost-configuration',
    name: 'costConfiguration',
    component: () => import('@/views/pages/feeManagement/cost-config'),
  },
  {
    path: '/fee-management/fee-node-list',
    name: 'feeNodeList',
    component: () => import('@/views/pages/feeManagement/fee-node-list'),
  },
  {
    path: '/batch-commission',
    name: 'batchCommission',
    component: () => import('@/views/pages/my-matter/batch'),
  },
  {
    path: '/search/related',
    name: 'searchRelated',
    component: () => import('@/views/pages/data-search/search-related'),
  },
  {
    path: '/search/special',
    name: 'searchSpecial',
    component: () => import('@/views/pages/data-search/search-special'),
  },
  {
    path: '/search/tax',
    name: 'searchTax',
    component: () => import('@/views/pages/data-search/search-tax'),
  },
  {
    path: '/search/standard',
    name: 'searchStandard',
    component: () => import('@/views/pages/data-search/search-standard'),
  },
  {
    path: '/bill-management/unbilled',
    name: 'billManagement',
    component: () => import('@/views/pages/bill-management/unbilled/unbilled'),
  },
  {
    path: '/bill-management/bill-search',
    name: 'billSearch',
    component: () => import('@/views/pages/bill-management/bill-search/bill-search'),
  },
  {
    path: '/bill-management/batch-search',
    name: 'billSearch',
    component: () => import('@/views/pages/bill-management/batch-search/batch-search'),
  },
  {
    path: '/bill-management/initial-check',
    name: 'billInitialCheck',
    component: () => import('@/views/pages/bill-management/bill-initial-check/initial-check'),
  },
  {
    path: '/bill-management/bill-check',
    name: 'billCheck',
    component: () => import('@/views/pages/bill-management/bill-check/bill-check'),
  },
  {
    path: '/bill-management/bill-pay',
    name: 'billPay',
    component: () => import('@/views/pages/bill-management/bill-pay/bill-pay'),
  },
  {
    path: '/bill-management/bill-voucher',
    name: 'billVoucher',
    component: () => import('@/views/pages/bill-management/bill-voucher/bill-batch'),
  },
  {
    path: '/bill-management/bill-settlement',
    name: 'billSettlement',
    component: () => import('@/views/pages/bill-management/bill-settlement/bill-batch'),
  },
  {
    path: '/case-management/hand-list-import',
    name: 'hand-list-import',
    component: () => import('@/views/pages/case-management/hand-list-import'),
  },
  {
    path: '/case-management/task-import',
    name: 'task-import',
    component: () => import('@/views/pages/case-management/task-import'),
  },
  {
    path: '/case-management/transfer-license-import',
    name: 'transfer-license-import',
    component: () => import('@/views/pages/case-management/transfer-license-import'),
  },
  {
    path: '/case-management/american-ids-import',
    name: 'american-ids-import',
    component: () => import('@/views/pages/case-management/american-ids-import'),
  },
  {
    path: '/case-management/european-effective-import',
    name: 'european-effective-import',
    component: () => import('@/views/pages/case-management/european-effective-import'),
  },
  {
    path: '/case-management/das-code-import',
    name: 'das-code-import',
    component: () => import('@/views/pages/case-management/das-code-import'),
  },
  {
    path: '/case-management/new-case-split',
    name: 'new-case-split',
    component: () => import('@/views/pages/case-management/new-case-split'),
  },
  {
    path: '/case-management/new-offline-case',
    name: 'new-offline-case',
    component: () => import('@/views/pages/case-management/new-offline-case'),
  },
  {
    path: '/case-management/mark-key-cases',
    name: 'mark-key-cases',
    component: () => import('@/views/pages/case-management/mark-key-cases'),
  },
  {
    path: '/case-management/batch-closing',
    name: 'batch-closing',
    component: () => import('@/views/pages/case-management/batch-closing'),
  },
  {
    path: '/case-management/import-application-change',
    name: 'import-application-change',
    component: () => import('@/views/pages/case-management/import-application-change'),
  },
  {
    path: '/case-management/official-document-management',
    name: 'official-document-management',
    component: () => import('@/views/pages/case-management/official-document-management'),
  },
  {
    path: '/case-management/official-document-import',
    name: 'official-document-import',
    component: () => import('@/views/pages/case-management/official-document-import'),
  },

  {
    path: '/case-management/batch-upload',
    name: 'batch-upload',
    component: () => import('@/views/pages/case-management/batch-upload'),
  },
  {
    path: '/case-management/batch-download',
    name: 'batch-download',
    component: () => import('@/views/pages/case-management/batch-download'),
  },
  {
    path: '/case-management/change-applicant-tab',
    name: 'change-applicant-tab',
    component: () => import('@/views/pages/case-management/change-applicant-tab'),
  },
  {
    path: '/case-management/data-change-tab',
    name: 'data-change-tab',
    component: () => import('@/views/pages/case-management/data-change-tab'),
  },
  // 评审专家配置
  {
    path: '/review-expert/configuration',
    name: 'configuration',
    component: () => import('@/views/pages/backstage-management/review-expert-configuration'),
  },
  // 申请人管理
  {
    path: '/applicant/management',
    name: 'management',
    component: () => import('@/views/pages/backstage-management/management'),
  },
  // 节假日配置
  {
    path: 'holiday/allocation',
    name: 'allocation',
    component: () => import('@/views/pages/backstage-management/holiday-allocation'),
  },
  // 公告管理
  {
    path: 'announcement/ofthe',
    name: 'ofthe-management',
    component: () => import('@/views/pages/backstage-management/announcement-ofthe'),
  },
  // 权限管理
  {
    path: 'privilege/management',
    name: 'ofthe-management',
    component: () => import('@/views/pages/backstage-management/privilege-management'),
  },

  {
    path: '/case-management/change-other-tab',
    name: 'change-other-tab',
    component: () => import('@/views/pages/case-management/change-other-tab'),
  },
  {
    path: '/backstage-management/label-management',
    name: 'label-management',
    component: () => import('@/views/pages/backstage-management/label-management'),
  },
  {
    path: '/awards-management/external-awards',
    name: 'external-awards',
    component: () => import('@/views/pages/awards-management/external-awards'),
  },
  {
    path: '/awards-management/external-awards/external-entry',
    name: 'external-entry',
    component: () => import('@/views/pages/awards-management/external-awards/entry'),
  },
  {
    path: '/awards-management/external-awards/external-declare',
    name: 'external-declare',
    component: () => import('@/views/pages/awards-management/external-awards/declare'),
  },
  {
    path: '/agent-management/resources',
    name: 'agent-management-resources',
    component: () => import('@/views/pages/agent-management/resources'),
  },
  {
    path: '/agent-management/resources-china',
    name: 'resources-china',
    component: () => import('@/views/pages/agent-management/resources/china'),
  },
  {
    path: '/agent-management/resources-foreign',
    name: 'resources-foreign',
    component: () => import('@/views/pages/agent-management/resources/foreign'),
  },
  {
    path: '/agent-management/resources-pool',
    name: 'resources-pool',
    component: () => import('@/views/pages/agent-management/resources/pool'),
  },
  {
    path: '/agent-management/statistical',
    name: 'agent-management-statistical',
    component: () => import('@/views/pages/agent-management/statistical'),
  },
  // 统计报表
  {
    // 数据周报
    path: '/report-weekly',
    name: 'report-weekly',
    component: () => import('@/views/pages/report/report-weekly'),
  },
  {
    // 标签统计报表
    path: '/report-label',
    name: 'report-label',
    component: () => import('@/views/pages/report/report-label'),
  },
  {
    // Technology Center的授权率和结案率
    path: '/report-technology-center',
    name: 'report-technology-center',
    component: () => import('@/views/pages/report/report-technology-center'),
  },
  {
    // 美国任务答辩成功率分析
    path: '/report-task-defense',
    name: 'report-task-defense',
    component: () => import('@/views/pages/report/report-task-defense'),
  },
  {
    // 美国核驳条款答辩成功率分析
    path: '/report-nuclear-refusal-clause',
    name: 'report-nuclear-refusal-clause',
    component: () => import('@/views/pages/report/report-nuclear-refusal-clause'),
  },
  {
    // 个人工作汇总
    path: '/report-personal-work',
    name: 'report-personal-work',
    component: () => import('@/views/pages/report/report-personal-work'),
  },
  {
    // 新建线下案
    path: '/new-offline-case',
    name: 'new-offline-case',
    component: () => import('@/views/pages/new-case/new-offline-case'),
  },
  {
    // 新建拆新案 New construction and demolition
    path: '/new-con-and-demolition',
    name: 'new-con-and-demolition',
    component: () => import('@/views/pages/new-case/new-con-and-demolition'),
  },
  {
    // 授权率统计
    path: '/parent-list-work',
    name: 'parent-list-work',
    component: () => import('@/views/pages/parent/parent-list-work'),
  },
  {
    // 鹅厂好专利管理
    path: '/vote/edit-patent-vote-partial',
    name: 'edit-patent-vote-partial',
    component: () => import('@/views/pages/patent-vote/edit-patent-vote.vue'),
  },
  {
    // 鹅厂好专利投票
    path: '/vote/patent-vote-partial',
    name: 'patent-vote-partial',
    component: () => import('@/views/pages/patent-vote/index.vue'),
  },
  {
    // 发送企业微信消息
    path: '/vote/send-wrokwx-message',
    name: 'send-wrokwx-message',
    component: () => import('@/views/pages/patent-vote/send-wrokwx-message.vue'),
  },
  {
    path: '/patent-award-selection/patent-award-selection-first',
    name: 'SelectionFirst',
    component: () =>
      import('@/views/pages/patent-award-selection/patent-award-selection-first.vue'),
  },
];
const exampleRouter = [
  {
    path: '/example/list',
    name: 'ExampleList',
    component: () => import('@/views/example/list.vue'),
  },
  {
    path: '/example/process-processing-form',
    name: 'ExampleProcessProcessingForm',
    component: () => import('@/views/example/process-processing-form.vue'),
  },
];

export default [...mainRouter, ...exampleRouter];
