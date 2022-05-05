module.exports = {
    docs: [
        {
            type: 'category',
            label: 'Craft',
            items: [
                {
                    Panels: [
                        {
                            Grid: [
                                'craft/panels/grid/set-columns'
                            ]
                        },
                        {
                            Form: [{
                                type: 'autogenerated',
                                dirName: 'craft/panels/form'
                            }]
                        },
                        'craft/context',
                        {
                            DataSource: [{
                                type: 'autogenerated',
                                dirName: 'craft/panels/DataSource'
                            }]
                        }
                          
                    ],
                },
                {
                    Configuration: [
                        {
                            Document: [
                                'craft/configuration/document/customstyle'
                            ]
                        },
                        {
                            System: [
                                'craft/configuration/system/menu',
                                'craft/configuration/system/queryMentions'
                            ]
                        },
                        {
                            Transition: [
                                'craft/configuration/transition/action',
                                'craft/configuration/transition/validation'
                            ]
                        },
                        {
                            Team: [
                                'craft/configuration/transition/team'
                            ]
                        }
                    ]
                },
                {
                    Workspaces: [
                        {
                            type: 'autogenerated',
                            dirName: 'craft/workspaces'
                        }
                    ]
                },
                {
                    Automations: [
                        {
                            type: 'autogenerated',
                            dirName: 'automations'
                        }
                    ]
                }
            ]
        },
        {
            type: 'category',
            label: 'Advanced',
            items: [

                {
                    SDK: [
                        {
                            Application: [
                                {
                                    type: 'autogenerated',
                                    dirName: 'sdk/application'
                                }
                            ]
                        },
                        {
                            Document: [
                                {
                                    type: 'autogenerated',
                                    dirName: 'sdk/document'
                                }
                            ]
                        },
                        'sdk/branding',
                        'sdk/execute-api',
                        'sdk/filesystem',
                        'sdk/realtime',
                        {
                            Service: [
                                {
                                    type: 'autogenerated',
                                    dirName: 'sdk/service'
                                }
                            ]
                        },
                        'sdk/storage',
                        'sdk/store',
                        {
                            UI: [
                                {
                                    type: 'autogenerated',
                                    dirName: 'sdk/ui'
                                }
                            ]
                        },
                        {
                            Utils: [
                                {
                                    type: 'autogenerated',
                                    dirName: 'sdk/utils'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            type: 'category',
            label: 'Integrations',
            items: [
                {
                    type: 'autogenerated',
                    dirName: 'integrations'
                }
            ]
        }
    ],
    university: [
        {
            type: 'autogenerated',
            dirName: 'university'
        }

    ]
};
