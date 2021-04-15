module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Craft',
      items: [
        {
          Panels: [
            'craft/panels/grid',
            'craft/craft-workspaces'
          ]
        },
        'widgets'
      ]
    },
    {
      type: 'category',
      label: 'Advanced',
      items: [
        {
          SDK: [
            'sdk/introduction',
            {
              UI: [
                'sdk/ui',
                'sdk/ui-grid',
                'sdk/ui-selectBox',
                'sdk/ui-buttons',
                'sdk/ui-alert',
                'sdk/ui-tooltip',
                'sdk/ui-workspaces'
              ]
            },
            {
              Document: [
                'sdk/document',
                'sdk/assignments',
                'sdk/holidays',
                'sdk/customTables',
                'sdk/clients',
                'sdk/users',
                'sdk/estimates'
              ]
            }
          ]
        },
        'automations',
        'queries',
        'types'
      ]
    },
    {
      type: 'category',
      label: 'Integrations',
      items: [
        'integrations/introduction',
        'integrations/hr-link'
      ]
    },
    {
      type: 'category',
      label: 'University',
      items: [
        'university/introduction',
        'university/time-sheets'
      ]
    },
  ],
  api: {}
};
