var jsonScheme = {
    "title": "任务信息生成器",
    "type": "object",
    "properties": {
        "remark": {
            "title": "任务备注【后台备忘用】",
            "type": "string",
            "format": "textarea",
            "propertyOrder": 0
        },
        "name": {
            "title": "任务标识，每个任务一个标识",
            "type": "string",
            "minLength": 3,
            "maxLength": 50,
            "propertyOrder": 1
        },
        "title": {
            "title": "任务标题，包含在私信通知中，用户可见，在广告任务中，用来显示第二行子标题",
            "type": "string",
            "minLength": 3,
            "maxLength": 50,
            "propertyOrder": 2
        },
        "desc": {
            "title": "任务描述，用户可见",
            "description": "最长14个汉字的长度，新版客户端会把超长的展示为省略号",
            "type": "string",
            "minLength": 3,
            "maxLength": 200,
            "propertyOrder": 3
        },
        "icon": {
            "title": "任务图标",
            "type": "string",
            "format": "url",
            "minLength": 20,
            "maxLength": 200,
            "propertyOrder": 4
        },
        "pos": {
            "title": "任务顺序，小的在前",
            "type": "integer",
            "default": 5,
            "minimum": 1,
            "maximum": 1000,
            "propertyOrder": 5
        },
        "goal": {
            "title": "任务目标",
            "description": "进度达到此值则完成任务。如果为即时奖励型任务，0表示不限制目标",
            "type": "integer",
            "default": 1,
            "minimum": 0,
            "maximum": 999999999,
            "propertyOrder": 6
        },
        "scene": {
            "title": "场景",
            "type": "integer",
            "default": 0,
            "propertyOrder": 7
        },
        "scene_id": {
            "title": "场景ID",
            "default": 0,
            "type": "integer",
            "propertyOrder": 8
        },
        "show_start_at": {
            "title": "开始展示时间，设置则展示开始倒计时",
            "type": "string",
            "format": "datetime",
            "propertyOrder": 9
        },
        "start_at": {
            "title": "开始执行时间，不设置则上线后立即开始",
            "type": "string",
            "format": "datetime",
            "propertyOrder": 11
        },
        "end_at": {
            "title": "结束执行时间，不设置则永久有效。需要和“结束时间后的可领奖天数”一起修改",
            "type": "string",
            "format": "datetime",
            "propertyOrder": 12
        },
        "reward_days": {
            "title": "结束时间后的可领奖天数，如不设置，则结束后就不可领奖。需要和“结束时间”一起修改",
            "type": "integer",
            "default": 0,
            "propertyOrder": 13
        },
        "type": {
            "title": "任务类型",
            "type": "string",
            "enumSource": [
                {
                    "source": [
                        {
                            "value": "1",
                            "title": "新手任务"
                        },
                        {
                            "value": "2",
                            "title": "日常任务"
                        },
                        {
                            "value": "3",
                            "title": "成就任务"
                        },
                        {
                            "value": "8",
                            "title": "主播任务"
                        },
                        {
                            "value": "9",
                            "title": "VIP任务"
                        },
                        {
                            "value": "10",
                            "title": "活动任务"
                        },
                        {
                            "value": "0",
                            "title": "不可见任务【特殊】"
                        },
                        {
                            "value": "11",
                            "title": "个播房任务"
                        },
                        {
                            "value": "12",
                            "title": "派对房任务"
                        },
                        {
                            "value": "13",
                            "title": "个播房和派对房公共任务"
                        },
                        {
                            "value": "101",
                            "title": "签到任务【特殊】"
                        },
                        {
                            "value": "102",
                            "title": "等级任务【特殊】"
                        },
                        {
                            "value": "103",
                            "title": "广告类型【特殊】"
                        },
                        {
                            "value": "104",
                            "title": "福袋类型【特殊】",
                            "description": "派发福袋任务，列表中不可见"
                        },
                        {
                            "value": "105",
                            "title": "隐藏类型（设置不可见任务时）【特殊】",
                            "description": "特殊任务类型，在展示出不返回此类型任务"
                        },
                        {
                            "value": "201",
                            "title": "即时奖励型任务"
                        },
                        {
                            "value": "211",
                            "title": "新星用户任务"
                        },
                        {
                            "value": "212",
                            "title": "新星主播任务"
                        }
                    ],
                    "title": "{{item.title}}",
                    "value": "{{item.value}}"
                }
            ],
            "propertyOrder": 20
        },
        "group_name": {
            "title": "分组标识",
            "description": "标识一致的任务会汇总到一起横排展示。标识由：字母数字下划线组成",
            "type": "string",
            "minLength": 3,
            "maxLength": 200,
            "propertyOrder": 25
        },
        "event": {
            "title": "任务事件类型（用户产生此动作触发此任务）",
            "type": "string",
            "enumSource": [
                {
                    "source": [
                        {
                            "value": "dummy",
                            "title": "不需要事件触发，特殊任务使用，例如等级任务。广告类型任务必须选择此事件"
                        },
                        {
                            "value": "specialWatch1min",
                            "title": "特殊任务观看1min(特殊任务，谨慎选择，其他系统写入事件)"
                        },
                        {
                            "value": "specialWatch2min",
                            "title": "特殊任务观看2min(特殊任务，谨慎选择，其他系统写入事件)"
                        },
                        {
                            "value": "specialWatch5min",
                            "title": "特殊任务观看5min(特殊任务，谨慎选择，其他系统写入事件)"
                        },
                        {
                            "value": "private_letter",
                            "title": "发送私信"
                        },
                        {
                            "value": "watch45s",
                            "title": "观看直播45秒（直播id唯一）"
                        },
                        {
                            "value": "watch90s",
                            "title": "观看直播90秒（直播id唯一）"
                        },
                        {
                            "value": "watch1m",
                            "title": "观看直播1分钟以上（直播id唯一）"
                        },
                        {
                            "value": "watch2m",
                            "title": "观看直播2分钟以上（直播id唯一）"
                        },
                        {
                            "value": "watch1m_author",
                            "title": "直播被观看1分钟以上（用户id唯一）"
                        },
                        {
                            "value": "watch5m",
                            "title": "观看直播5分钟以上（直播id唯一）"
                        },
                        {
                            "value": "watch15m",
                            "title": "观看直播15分钟以上（直播id唯一）"
                        },
                        {
                            "value": "watch30m",
                            "title": "观看直播30分钟以上（直播id唯一）"
                        },
                        {
                            "value": "follow",
                            "title": "关注（被关注用户uid唯一）"
                        },
                        {
                            "value": "follower",
                            "title": "被关注（关注用户uid唯一）"
                        },
                        {
                            "value": "chat",
                            "title": "直播间发弹幕"
                        },
                        {
                            "value": "login",
                            "title": "登录"
                        },
                        {
                            "value": "mission",
                            "title": "完成任务（任务id唯一）"
                        },
                        {
                            "value": "publish",
                            "title": "发布内容：直播、图片、小视频、转发（内容id唯一）"
                        },
                        {
                            "value": "charge",
                            "title": "充值（单位：分），按花椒实际收到的金额为准"
                        },
                        {
                            "value": "chargePay",
                            "title": "充值（单位：元，备注：经济系统以元写的），用户支付金额为准"
                        },
                        {
                            "value": "chargeBeans",
                            "title": "充值花椒豆，以充值获得的花椒豆数量为基准（幂等处理）"
                        },
                        {
                            "value": "gift",
                            "title": "送礼（收礼人uid唯一）"
                        },
                        {
                            "value": "send_free_gift",
                            "title": "送免费礼（收礼人uid唯一）"
                        },
                        {
                            "value": "receive_gift",
                            "title": "收礼（送礼人uid唯一）"
                        },
                        {
                            "value": "receive_free_gift",
                            "title": "收免费礼（送礼人uid唯一）"
                        },
                        {
                            "value": "comment",
                            "title": "评论（被评论内容id唯一）"
                        },
                        {
                            "value": "favorite",
                            "title": "收藏红心（被收藏内容id唯一）"
                        },
                        {
                            "value": "live1m",
                            "title": "直播1分钟（多次）4点分割"
                        },
                        {
                            "value": "live15m",
                            "title": "本日累计直播15分钟（仅一次）4点分割"
                        },
                        {
                            "value": "live30m",
                            "title": "本日累计直播30分钟（仅一次）4点分割"
                        },
                        {
                            "value": "live60m",
                            "title": "本日累计直播60分钟（多次）4点分割"
                        },
                        {
                            "value": "live120m",
                            "title": "本日累计直播120分钟（仅一次）4点分割"
                        },
                        {
                            "value": "live180m",
                            "title": "本日累计直播180分钟（仅一次）4点分割"
                        },
                        {
                            "value": "live240m",
                            "title": "本日累计直播240分钟（仅一次）4点分割"
                        },
                        {
                            "value": "anti_afk_live1m",
                            "title": "本日直播1分钟,4点分割【防作弊】"
                        },
                        {
                            "value": "anti_afk_live30m",
                            "title": "本日单场直播达30分钟,4点分割【防作弊】"
                        },
                        {
                            "value": "anti_afk_live120m",
                            "title": "本日单场直播达120分钟,4点分割【防作弊】"
                        },
                        {
                            "value": "every_live15m",
                            "title": "本日单场直播达15分钟,4点分割"
                        },
                        {
                            "value": "every_live30m",
                            "title": "本日单场直播达30分钟,4点分割"
                        },
                        {
                            "value": "every_live40m",
                            "title": "本日单场直播达40分钟,4点分割"
                        },
                        {
                            "value": "every_live60m",
                            "title": "本日单场直播达60分钟,4点分割"
                        },
                        {
                            "value": "every_live70m",
                            "title": "本日单场直播达70分钟,4点分割"
                        },
                        {
                            "value": "every_live90m",
                            "title": "本日单场直播达90分钟,,4点分割"
                        },
                        {
                            "value": "every_live120m",
                            "title": "本日单场直播达120分钟,4点分割"
                        },
                        {
                            "value": "every_link1m",
                            "title": "公共房本次每连麦1分钟"
                        },
                        {
                            "value": "linkInviteAccepted",
                            "title": "公共房自动邀请用户连麦成功"
                        },
                        {
                            "value": "publicRoomGame15m",
                            "title": "公共房玩法参与15分钟事件"
                        },
                        {
                            "value": "share",
                            "title": "分享（资源id唯一）（用户可无成本刷）"
                        },
                        {
                            "value": "share_join",
                            "title": "通过主播分享加入直播间（加入uid唯一）（记为主播事件）"
                        },
                        {
                            "value": "share_join_user",
                            "title": "通过用户分享加入直播间（主播uid唯一）（记为发起分享用户事件）"
                        },
                        {
                            "value": "pk",
                            "title": "连麦pk"
                        },
                        {
                            "value": "agreement",
                            "title": "签署平台协议"
                        },
                        {
                            "value": "score",
                            "title": "主播评级（评级等级唯一）"
                        },
                        {
                            "value": "sun",
                            "title": "赠送阳光"
                        },
                        {
                            "value": "receive_sun",
                            "title": "收到阳光"
                        },
                        {
                            "value": "join_club",
                            "title": "加入粉丝团"
                        },
                        {
                            "value": "invite_join_club",
                            "title": "邀请加入粉丝团"
                        },
                        {
                            "value": "throw_ball",
                            "title": "抛出绣球后被用户接受"
                        },
                        {
                            "value": "watch_ad",
                            "title": "观看客户端广告"
                        },
                        {
                            "value": "active_degree",
                            "title": "活跃度"
                        },
                        {
                            "value": "profile_update",
                            "title": "用户信息完善"
                        },
                        {
                            "value": "public_room_game",
                            "title": "公共房玩法事件"
                        },
                        {
                            "value": "bind_mobile",
                            "title": "绑定手机号"
                        },
                        {
                            "value": "open_system_notice",
                            "title": "打开消息通知"
                        },
                        {
                            "value": "flirt",
                            "title": "撩一撩（新手任务）"
                        },
                        {
                            "value": "beauty_setting",
                            "title": "设置美颜"
                        },
                        {
                            "value": "program_notice",
                            "title": "设置节目单"
                        },
                        {
                            "value": "custom",
                            "title": "自定义事件"
                        }
                    ],
                    "title": "{{item.title}}",
                    "value": "{{item.value}}"
                }
            ],
            "propertyOrder": 30
        },
        "event_filter": {
            "title": "事件过滤器",
            "description": "过滤器选择文档：https://zesqmm8xak.feishu.cn/docx/doxcn0taFexhCsuUvQdr62CbGHe",
            "type": "array",
            "format": "tabs",
            "items": {
                "title": "过滤器",
                "options": {
                    "keep_oneof_values": false
                },
                "anyOf": [
                    {
                        "title": "唯一标识过滤器",
                        "description": "根据事件的唯一标识符进行过滤",
                        "$ref": "#/definitions/handler",
                        "properties": {
                            "params": {
                                "properties": {
                                    "type": {
                                        "title": "过滤方式",
                                        "description": "whitelist(白)/balcklist(黑) 名单模式。白名单模式下唯一标识符在列表中，事件可被处理",
                                        "type": "string",
                                        "enum": [
                                            "blacklist",
                                            "whitelist"
                                        ],
                                        "default": "whitelist"
                                    },
                                    "list": {
                                        "title": "名单列表",
                                        "type": "array",
                                        "items": {
                                            "title": "唯一标识",
                                            "description": "不同事件的唯一标识不同，请咨询技术进行填写",
                                            "type": "string"
                                        }
                                    }
                                }
                            },
                            "handler": {
                                "default": "UniqTagList",
                                "readOnly": true
                            },
                            "___UniqTagList": {
                                "title": "___",
                                "type": "string"
                            }
                        }
                    },
                    {
                        "title": "内容标签过滤",
                        "description": "根据内容的标签进行过滤",
                        "$ref": "#/definitions/handler",
                        "properties": {
                            "params": {
                                "properties": {
                                    "fuzzy": {
                                        "title": "是否模糊匹配",
                                        "description": "如果为false，则内容tag要精准包含在列表中。如果为true，则内容标签中出现列表中的词汇即可",
                                        "type": "boolean",
                                        "default": true
                                    },
                                    "list": {
                                        "title": "Tag列表/Tag词汇列表",
                                        "type": "array",
                                        "items": {
                                            "title": "Tag/词汇",
                                            "type": "string"
                                        }
                                    }
                                }
                            },
                            "handler": {
                                "default": "TagList",
                                "readOnly": true
                            },
                            "___TagList": {
                                "title": "___",
                                "type": "string"
                            }
                        }
                    },
                    {
                        "title": "内容类型过滤器",
                        "description": "根据内容类型进行过滤",
                        "$ref": "#/definitions/handler",
                        "properties": {
                            "params": {
                                "properties": {
                                    "type": {
                                        "title": "过滤方式",
                                        "description": "whitelist(白)/balcklist(黑) 名单模式。白名单模式下唯一标识符在列表中，事件可被处理",
                                        "type": "string",
                                        "enum": [
                                            "blacklist",
                                            "whitelist"
                                        ],
                                        "default": "whitelist"
                                    },
                                    "list": {
                                        "title": "名单列表",
                                        "type": "array",
                                        "items": {
                                            "title": "内容类型",
                                            "description": "1:直播、3：图片、4：小视频（如果是连麦pk事件，0:欢乐pk 1:多人pk）",
                                            "type": "integer"
                                        }
                                    }
                                }
                            },
                            "handler": {
                                "default": "Type",
                                "readOnly": true
                            },
                            "___Type": {
                                "title": "___",
                                "type": "string"
                            }
                        }
                    },
                    {
                        "title": "主播过滤器",
                        "description": "根据主播进行过滤",
                        "$ref": "#/definitions/handler",
                        "properties": {
                            "params": {
                                "properties": {
                                    "type": {
                                        "title": "过滤方式",
                                        "description": "whitelist(白)/balcklist(黑) 名单模式。白名单模式下唯一标识符在列表中，事件可被处理",
                                        "type": "string",
                                        "enum": [
                                            "blacklist",
                                            "whitelist"
                                        ],
                                        "default": "whitelist"
                                    },
                                    "list": {
                                        "title": "名单列表",
                                        "type": "array",
                                        "items": {
                                            "title": "主播uid",
                                            "type": "integer",
                                            "minimum": 20000000,
                                            "maximum": 999999999
                                        }
                                    }
                                }
                            },
                            "handler": {
                                "default": "Author",
                                "readOnly": true
                            },
                            "___Author": {
                                "title": "___",
                                "type": "string"
                            }
                        }
                    },
                    {
                        "title": "春晖主播过滤器",
                        "description": "根据春晖主播不同的活动id进行过滤",
                        "$ref": "#/definitions/handler",
                        "properties": {
                            "params": {
                                "properties": {
                                    "type": {
                                        "title": "过滤方式",
                                        "type": "string",
                                        "description": "whitelist(白)/balcklist(黑) 名单模式。白名单模式下唯一标识符在列表中，事件可被处理",
                                        "enum": [
                                            "blacklist",
                                            "whitelist"
                                        ],
                                        "default": "whitelist"
                                    },
                                    "activity_id": {
                                        "title": "春晖主播流量卡任务的活动id",
                                        "type": "integer"
                                    },
                                    "expire": {
                                        "title": "缓存时间",
                                        "type": "integer",
                                        "default": 60
                                    }
                                }
                            },
                            "handler": {
                                "default": "Chunhui",
                                "readOnly": true
                            },
                            "___Chunhui": {
                                "title": "___",
                                "type": "string"
                            }
                        }
                    },
                    {
                        "title": "礼物过滤器",
                        "description": "根据礼物id进行过滤",
                        "$ref": "#/definitions/handler",
                        "properties": {
                            "params": {
                                "properties": {
                                    "type": {
                                        "title": "过滤方式",
                                        "description": "whitelist(白)/balcklist(黑) 名单模式。白名单模式下唯一标识符在列表中，事件可被处理",
                                        "type": "string",
                                        "enum": [
                                            "blacklist",
                                            "whitelist"
                                        ],
                                        "default": "whitelist"
                                    },
                                    "list": {
                                        "title": "礼物列表",
                                        "type": "array",
                                        "items": {
                                            "title": "礼物id",
                                            "type": "integer",
                                            "minimum": 1,
                                            "maximum": 99999999999
                                        }
                                    }
                                }
                            },
                            "handler": {
                                "default": "Gift",
                                "readOnly": true
                            },
                            "___Gift": {
                                "title": "___",
                                "type": "string"
                            }
                        }
                    },
                    {
                        "title": "礼物类型过滤器",
                        "description": "根据礼物类型进行过滤（并不是所有送礼事件均有礼物类型）",
                        "$ref": "#/definitions/handler",
                        "properties": {
                            "params": {
                                "properties": {
                                    "type": {
                                        "title": "过滤方式",
                                        "description": "whitelist(白)/balcklist(黑) 名单模式。白名单模式下唯一标识符在列表中，事件可被处理",
                                        "type": "string",
                                        "enum": [
                                            "blacklist",
                                            "whitelist"
                                        ],
                                        "default": "whitelist"
                                    },
                                    "list": {
                                        "title": "礼物类型列表",
                                        "description": "club表示粉丝团礼物",
                                        "type": "array",
                                        "items": {
                                            "title": "礼物类型",
                                            "type": "string"
                                        }
                                    }
                                }
                            },
                            "handler": {
                                "default": "GiftType",
                                "readOnly": true
                            },
                            "___GiftType": {
                                "title": "___",
                                "type": "string"
                            }
                        }
                    },
                    {
                        "title": "结果过滤器",
                        "description": "存在结果的事件可通过此过滤器进行结果判定",
                        "$ref": "#/definitions/handler",
                        "properties": {
                            "params": {
                                "properties": {
                                    "type": {
                                        "title": "过滤方式",
                                        "description": "whitelist(白)/balcklist(黑) 名单模式。白名单模式下结果在列表中，事件可被处理",
                                        "type": "string",
                                        "enum": [
                                            "blacklist",
                                            "whitelist"
                                        ],
                                        "default": "whitelist"
                                    },
                                    "list": {
                                        "title": "结果列表",
                                        "description": "例如pk事件：1表示胜利，2表示平局，3表示失败。不同事件可能不同，请查阅文档",
                                        "type": "array",
                                        "items": {
                                            "title": "结果",
                                            "type": "string"
                                        }
                                    }
                                }
                            },
                            "handler": {
                                "default": "Result",
                                "readOnly": true
                            },
                            "___Result": {
                                "title": "___",
                                "type": "string"
                            }
                        }
                    },
                    {
                        "title": "渠道过滤器",
                        "description": "存在渠道的事件可通过此过滤器进行渠道过滤",
                        "$ref": "#/definitions/handler",
                        "properties": {
                            "params": {
                                "properties": {
                                    "type": {
                                        "title": "过滤方式",
                                        "description": "whitelist(白)/balcklist(黑) 名单模式。白名单模式下结果在列表中，事件可被处理",
                                        "type": "string",
                                        "enum": [
                                            "blacklist",
                                            "whitelist"
                                        ],
                                        "default": "whitelist"
                                    },
                                    "list": {
                                        "title": "渠道列表",
                                        "description": "例如分享的渠道 wx表示微信 weibo表示微博。不同事件可能不同，请查阅文档",
                                        "type": "array",
                                        "items": {
                                            "title": "渠道",
                                            "type": "string"
                                        }
                                    }
                                }
                            },
                            "handler": {
                                "default": "Channel",
                                "readOnly": true
                            },
                            "___Channel": {
                                "title": "___",
                                "type": "string"
                            }
                        }
                    },
                    {
                        "title": "分享过滤器",
                        "description": "对分享行为进行限制",
                        "$ref": "#/definitions/handler",
                        "properties": {
                            "handler": {
                                "default": "Share",
                                "readOnly": true
                            },
                            "params": {
                                "properties": {
                                    "type": {
                                        "title": "过滤类型",
                                        "type": "string",
                                        "default": "author_share",
                                        "enumSource": [
                                            {
                                                "source": [
                                                    {
                                                        "value": "author_share",
                                                        "title": "主播分享：必须主播自己分享加入才算"
                                                    },
                                                    {
                                                        "value": "user_share",
                                                        "title": "用户分享：加入用户不能为分享用户"
                                                    }
                                                ],
                                                "title": "{{item.title}}",
                                                "value": "{{item.value}}"
                                            }
                                        ]
                                    }
                                }
                            },
                            "___Share": {
                                "title": "___",
                                "type": "string"
                            }
                        }
                    },
                    {
                        "title": "充值金额过滤器",
                        "description": "可限制最小充值金额",
                        "$ref": "#/definitions/handler",
                        "properties": {
                            "params": {
                                "properties": {
                                    "min": {
                                        "title": "最小充值金额",
                                        "description": "单位分",
                                        "type": "integer",
                                        "default": "100"
                                    }
                                }
                            },
                            "handler": {
                                "default": "Charge",
                                "readOnly": true
                            },
                            "___Charge": {
                                "title": "___",
                                "type": "string"
                            }
                        }
                    },
                    {
                        "title": "最小值过滤器（带有Total属性的事件，如充值、送礼）",
                        "description": "可限制最小Total值（包含），例如，充值事件（充值金额）、送礼事件（礼物总价值）等",
                        "$ref": "#/definitions/handler",
                        "properties": {
                            "params": {
                                "properties": {
                                    "min": {
                                        "title": "最小值（包含）",
                                        "description": "单位取决于事件的定义",
                                        "type": "integer",
                                        "default": "0"
                                    }
                                }
                            },
                            "handler": {
                                "default": "Total",
                                "readOnly": true
                            },
                            "___Total": {
                                "title": "___",
                                "type": "string"
                            }
                        }
                    },
                    {
                        "title": "内容过滤器",
                        "description": "可对灌水类内容做过滤，例如：单一文字内容，纯数字，纯表情，过短内容等",
                        "$ref": "#/definitions/handler",
                        "properties": {
                            "params": {
                                "properties": {
                                    "min_length": {
                                        "title": "最小长度",
                                        "description": "剔除表情后的长度",
                                        "type": "integer",
                                        "default": "5"
                                    }
                                }
                            },
                            "handler": {
                                "default": "Content",
                                "readOnly": true
                            },
                            "___Content": {
                                "title": "___",
                                "type": "string"
                            }
                        }
                    },
                    {
                        "additionalProperties": false,
                        "title": "公共房ID过滤器",
                        "description": "看播、送礼事件支持公共房房间ID过滤",
                        "$ref": "#/definitions/handler",
                        "properties": {
                            "params": {
                                "properties": {
                                    "type": {
                                        "title": "过滤方式",
                                        "description": "whitelist(白)/balcklist(黑) 名单模式。白名单模式下唯一标识符在列表中，事件可被处理",
                                        "type": "string",
                                        "enum": [
                                            "blacklist",
                                            "whitelist"
                                        ],
                                        "default": "whitelist"
                                    },
                                    "list": {
                                        "title": "公共房ID列表",
                                        "description": "公共房房间号",
                                        "type": "array",
                                        "items": {
                                            "title": "房间号",
                                            "type": "string"
                                        }
                                    }
                                }
                            },
                            "handler": {
                                "default": "PublicRoom",
                                "readOnly": true
                            },
                            "___PublicRoom": {
                                "title": "___",
                                "type": "string"
                            }
                        }
                    },
                    {
                        "additionalProperties": false,
                        "title": "公共房类型过滤器",
                        "description": "看播、送礼事件、自动邀请连麦、房间连麦时长、直播间弹幕事件等支持公共房类型过滤",
                        "$ref": "#/definitions/handler",
                        "properties": {
                            "params": {
                                "properties": {
                                    "type": {
                                        "title": "过滤方式",
                                        "description": "whitelist(白)/blacklist(黑) 名单模式。白名单模式下唯一标识符在列表中，事件可被处理",
                                        "type": "string",
                                        "enum": [
                                            "blacklist",
                                            "whitelist"
                                        ],
                                        "default": "whitelist"
                                    },
                                    "list": {
                                        "title": "公共房类型列表",
                                        "description": "公共房类型，目前的语音业务划分（public_room:派对房房、personal_room:交友房(个播房)、ncov:群组派对房、yohoo_room:YoHoo app房间、huajiao_room:花椒app房间）",
                                        "type": "array",
                                        "items": {
                                            "title": "房间类型",
                                            "type": "string"
                                        }
                                    }
                                }
                            },
                            "handler": {
                                "default": "PublicRoomType",
                                "readOnly": true
                            },
                            "___PublicRoomType": {
                                "title": "___",
                                "type": "string"
                            }
                        }
                    },
                    {
                        "additionalProperties": false,
                        "title": "公共房玩法过滤器",
                        "description": "参与公共房玩法15分钟事件支持公共房玩法过滤",
                        "$ref": "#/definitions/handler",
                        "properties": {
                            "params": {
                                "properties": {
                                    "type": {
                                        "title": "过滤方式",
                                        "description": "whitelist(白)/blacklist(黑) 名单模式。白名单模式下唯一标识符在列表中，事件可被处理",
                                        "type": "string",
                                        "enum": [
                                            "blacklist",
                                            "whitelist"
                                        ],
                                        "default": "whitelist"
                                    },
                                    "list": {
                                        "title": "公共房玩法列表",
                                        "description": "公共房玩法, 枚举取值：18:K歌独唱、19:云蹦迪、13:团战PK",
                                        "type": "array",
                                        "items": {
                                            "title": "玩法标识",
                                            "type": "integer",
                                            "default": "0"
                                        }
                                    }
                                }
                            },
                            "handler": {
                                "default": "PublicRoomGame",
                                "readOnly": true
                            },
                            "___PublicRoomGame": {
                                "title": "___",
                                "type": "string"
                            }
                        }
                    },
                    {
                        "additionalProperties": false,
                        "title": "公共房连麦(上麦)模式过滤器",
                        "description": "公共房连麦时长事件支持公共房连麦模式过滤",
                        "$ref": "#/definitions/handler",
                        "properties": {
                            "params": {
                                "properties": {
                                    "type": {
                                        "title": "过滤方式",
                                        "description": "whitelist(白)/blacklist(黑) 名单模式。白名单模式下唯一标识符在列表中，事件可被处理",
                                        "type": "string",
                                        "enum": [
                                            "blacklist",
                                            "whitelist"
                                        ],
                                        "default": "whitelist"
                                    },
                                    "list": {
                                        "title": "公共房连麦(上麦)模式列表",
                                        "description": "公共房连麦模式，取值列表：audio:音频、video:视频、ar:萌趣",
                                        "type": "array",
                                        "items": {
                                            "title": "连麦(上麦)模式",
                                            "type": "string"
                                        }
                                    }
                                }
                            },
                            "handler": {
                                "default": "PublicRoomLinkMode",
                                "readOnly": true
                            },
                            "___PublicRoomLinkMode": {
                                "title": "___",
                                "type": "string"
                            }
                        }
                    },
                    {
                        "title": "公共房连麦(上麦)静音状态过滤器",
                        "description": "公共房连麦时长事件支持公共房连麦静音状态过滤",
                        "$ref": "#/definitions/handler",
                        "properties": {
                            "params": {
                                "properties": {
                                    "mute": {
                                        "title": "静音状态",
                                        "description": "1-静音(闭麦)、0-非静音(开麦)",
                                        "type": "integer",
                                        "default": "0"
                                    }
                                }
                            },
                            "handler": {
                                "default": "PublicRoomLinkMute",
                                "readOnly": true
                            },
                            "___PublicRoomLinkMute": {
                                "title": "___",
                                "type": "string"
                            }
                        }
                    },
                    {
                        "title": "业务标识过滤器",
                        "description": "根据事件的业务标识过滤",
                        "$ref": "#/definitions/handler",
                        "properties": {
                            "params": {
                                "properties": {
                                    "type": {
                                        "title": "过滤方式",
                                        "description": "whitelist(白)/blacklist(黑) 名单模式。白名单模式下唯一标识符在列表中，事件可被处理",
                                        "type": "string",
                                        "enum": [
                                            "blacklist",
                                            "whitelist"
                                        ],
                                        "default": "whitelist"
                                    },
                                    "list": {
                                        "title": "名单列表",
                                        "type": "array",
                                        "items": {
                                            "title": "业务标识",
                                            "description": "不同事件的业务标识不同，请咨询技术进行填写",
                                            "type": "string"
                                        }
                                    }
                                }
                            },
                            "handler": {
                                "default": "Biz",
                                "readOnly": true
                            },
                            "___Biz": {
                                "title": "___",
                                "type": "string"
                            }
                        }
                    }
                ]
            },
            "propertyOrder": 40
        },
        "period": {
            "title": "周期",
            "type": "object",
            "options": {
                "keep_oneof_values": false
            },
            "anyOf": [
                {
                    "title": "无周期"
                },
                {
                    "title": "每日",
                    "$ref": "#/definitions/handler",
                    "properties": {
                        "handler": {
                            "default": "Daily",
                            "readOnly": true
                        },
                        "params": {
                            "properties": {
                                "hour": {
                                    "type": "integer",
                                    "title": "重置时间：时",
                                    "description": "例如，4表示凌晨4点计算为下一个周期",
                                    "minimum": 0,
                                    "maximum": 23,
                                    "default": 4
                                }
                            }
                        },
                        "___Daily": {
                            "title": "___",
                            "type": "string"
                        }
                    }
                },
                {
                    "title": "每周",
                    "$ref": "#/definitions/handler",
                    "properties": {
                        "handler": {
                            "default": "Weekly",
                            "readOnly": true
                        },
                        "params": {
                            "properties": {
                                "hour": {
                                    "type": "integer",
                                    "title": "重置时间：时",
                                    "description": "例如，4表示凌晨4点为下一日的切换时间点",
                                    "minimum": 0,
                                    "maximum": 23,
                                    "default": 4
                                }
                            }
                        },
                        "___Weekly": {
                            "title": "___",
                            "type": "string"
                        }
                    }
                },
                {
                    "title": "每月",
                    "$ref": "#/definitions/handler",
                    "properties": {
                        "handler": {
                            "default": "Monthly",
                            "readOnly": true
                        },
                        "params": {
                            "properties": {
                                "hour": {
                                    "type": "integer",
                                    "title": "重置时间：时",
                                    "description": "例如，4表示凌晨4点计算为下一个周期",
                                    "minimum": 0,
                                    "maximum": 23,
                                    "default": 4
                                }
                            }
                        },
                        "___Monthly": {
                            "title": "___",
                            "type": "string"
                        }
                    }
                },
                {
                    "title": "多日",
                    "$ref": "#/definitions/handler",
                    "properties": {
                        "handler": {
                            "default": "MultiDaily",
                            "readOnly": true
                        },
                        "params": {
                            "properties": {
                                "hour": {
                                    "type": "integer",
                                    "title": "重置时间：时",
                                    "description": "例如，4表示凌晨4点计算为下一个周期",
                                    "minimum": 0,
                                    "maximum": 23,
                                    "default": 4
                                },
                                "start": {
                                    "type": "string",
                                    "title": "周期开始时间",
                                    "description": "一般设置为任务上线日期，格式：2018-06-22 12:34:56",
                                    "format": "datetime"
                                },
                                "interval": {
                                    "type": "integer",
                                    "title": "每周期天数",
                                    "description": "例如每3天为一个周期，则此值为3",
                                    "minimum": 1,
                                    "maximum": 365,
                                    "default": 1
                                }
                            },
                            "required": [
                                "start"
                            ]
                        },
                        "___MultiDaily": {
                            "title": "___",
                            "type": "string"
                        }
                    }
                }
            ],
            "propertyOrder": 50
        },
        "pre_show": {
            "title": "前置任务展示条件",
            "type": "array",
            "format": "tabs",
            "items": {
                "title": "前置条件",
                "options": {
                    "keep_oneof_values": false
                },
                "anyOf": [
                    {
                        "$ref": "#/definitions/preconditionTimeQuantum"
                    },
                    {
                        "$ref": "#/definitions/preconditionPreMission"
                    },
                    {
                        "$ref": "#/definitions/preconditionNewbie"
                    },
                    {
                        "$ref": "#/definitions/preconditionNotSendAward"
                    },
                    {
                        "$ref": "#/definitions/preconditionFollow"
                    },
                    {
                        "$ref": "#/definitions/preconditionUserAttribute"
                    },
                    {
                        "$ref": "#/definitions/preconditionUserGroup"
                    },
                    {
                        "$ref": "#/definitions/preconditionBlackList"
                    },
                    {
                        "$ref": "#/definitions/preconditionUidTail"
                    },
                    {
                        "additionalProperties": false,
                        "$ref": "#/definitions/preconditionPlatform"
                    }
                ]
            },
            "propertyOrder": 60
        },
        "pre_exec": {
            "title": "前置任务执行条件",
            "type": "array",
            "format": "tabs",
            "items": {
                "title": "前置条件",
                "options": {
                    "keep_oneof_values": false
                },
                "anyOf": [
                    {
                        "$ref": "#/definitions/preconditionTimeQuantum"
                    },
                    {
                        "$ref": "#/definitions/preconditionPreMission"
                    },
                    {
                        "$ref": "#/definitions/preconditionNewbie"
                    },
                    {
                        "$ref": "#/definitions/preconditionNotSendAward"
                    },
                    {
                        "$ref": "#/definitions/preconditionFollow"
                    },
                    {
                        "$ref": "#/definitions/preconditionUserAttribute"
                    },
                    {
                        "$ref": "#/definitions/preconditionUserGroup"
                    },
                    {
                        "$ref": "#/definitions/preconditionBlackList"
                    },
                    {
                        "$ref": "#/definitions/preconditionUidTail"
                    }
                ]
            },
            "propertyOrder": 70
        },
        "pre_rev_exec": {
            "title": "前置任务执行条件（主播维度的过滤）",
            "type": "array",
            "format": "tabs",
            "items": {
                "title": "前置条件",
                "options": {
                    "keep_oneof_values": false
                },
                "anyOf": [
                    {
                        "$ref": "#/definitions/preconditionTimeQuantum"
                    },
                    {
                        "$ref": "#/definitions/preconditionPreMission"
                    },
                    {
                        "$ref": "#/definitions/preconditionNewbie"
                    },
                    {
                        "$ref": "#/definitions/preconditionNotSendAward"
                    },
                    {
                        "$ref": "#/definitions/preconditionFollow"
                    },
                    {
                        "$ref": "#/definitions/preconditionUserAttribute"
                    },
                    {
                        "$ref": "#/definitions/preconditionUserGroup"
                    },
                    {
                        "$ref": "#/definitions/preconditionBlackList"
                    },
                    {
                        "$ref": "#/definitions/preconditionUidTail"
                    }
                ]
            },
            "propertyOrder": 75
        },
        "process": {
            "title": "进度计算方式",
            "options": {
                "keep_oneof_values": false
            },
            "anyOf": [
                {
                    "title": "计次",
                    "description": "事件发生一次，则记数",
                    "$ref": "#/definitions/handler",
                    "properties": {
                        "handler": {
                            "title": "Handler(不要改)",
                            "type": "string",
                            "default": "Times",
                            "readOnly": true
                        },
                        "params": {
                            "$ref": "#/definitions/processParams"
                        },
                        "___Times": {
                            "title": "___",
                            "type": "string"
                        }
                    }
                },
                {
                    "title": "排重计次",
                    "description": "事件唯一标识没有被记数过，则记数",
                    "$ref": "#/definitions/handler",
                    "properties": {
                        "handler": {
                            "default": "UniqTimes",
                            "readOnly": true
                        },
                        "params": {
                            "$ref": "#/definitions/processParams",
                            "properties": {
                                "expire": {
                                    "title": "排重信息有效期，单位：秒",
                                    "description": "0表示永久（请慎用）。默认排重信息有效1年，尽量配置成最短有效的。例如，观看5场直播，则排查有效期设置为7天即可，因为基本没有直播可以播7天。",
                                    "type": "integer",
                                    "minimum": 0,
                                    "maximum": 31536000,
                                    "default": "31536000"
                                }
                            }
                        },
                        "___UniqTimes": {
                            "title": "___",
                            "type": "string"
                        }
                    }
                },
                {
                    "title": "给定列表唯一计数",
                    "description": "事件的唯一标识在给定列表中，并且此唯一标识没有被记数过，则记数",
                    "$ref": "#/definitions/handler",
                    "properties": {
                        "handler": {
                            "default": "SpecialTags",
                            "readOnly": true
                        },
                        "params": {
                            "$ref": "#/definitions/processParams",
                            "properties": {
                                "expire": {
                                    "title": "排重信息有效期，单位：秒",
                                    "description": "0表示永久（请慎用）。默认排重信息有效1年，尽量配置成最短有效的。例如，观看5场直播，则排查有效期设置为7天即可，因为基本没有直播可以播7天。",
                                    "type": "integer",
                                    "default": "31536000"
                                },
                                "tags": {
                                    "title": "唯一标识符数组",
                                    "description": "根据不同的事件，唯一标识符也不同，请咨询技术后填写",
                                    "type": "array",
                                    "items": {
                                        "title": "标识符",
                                        "type": "string"
                                    }
                                }
                            }
                        },
                        "___SpecialTags": {
                            "title": "___",
                            "type": "string"
                        }
                    }
                },
                {
                    "title": "含有Total属性的事件累计total值（例如送礼花椒豆数）",
                    "description": "累计事件的total值，例如送礼的花椒豆数、充值金额等",
                    "$ref": "#/definitions/handler",
                    "properties": {
                        "handler": {
                            "default": "Total",
                            "readOnly": true
                        },
                        "params": {
                            "$ref": "#/definitions/processParams",
                            "properties": {
                                "unit": {
                                    "title": "单位缩放",
                                    "description": "默认为1，表示total值是多少，就加多少进度。如果total值单位是分，需要按元计算进度，则单位缩放设置为100。需要配合事件过滤使用",
                                    "type": "integer",
                                    "default": "1"
                                }
                            }
                        },
                        "___Total": {
                            "title": "___",
                            "type": "string"
                        }
                    }
                },
                {
                    "additionalProperties": false,
                    "title": "对于送礼和收礼事件折损后的价值进行计数",
                    "description": "对于送礼和收礼事件折损后的价值进行计数，只用于送礼和收礼",
                    "$ref": "#/definitions/handler",
                    "properties": {
                        "handler": {
                            "default": "DiscountGift",
                            "readOnly": true
                        },
                        "params": {
                            "$ref": "#/definitions/processParams",
                            "properties": {
                                "unit": {
                                    "title": "单位缩放",
                                    "description": "默认为1，表示total值是多少，就加多少进度。如果total值单位是分，需要按元计算进度，则单位缩放设置为100。需要配合事件过滤使用",
                                    "type": "integer",
                                    "default": "1"
                                }
                            }
                        },
                        "___DiscountGift": {
                            "title": "___",
                            "type": "string"
                        }
                    }
                },
                {
                    "title": "周期限制计数",
                    "description": "可根据周期进行计数，也可设置计数的事件是否具有唯一性",
                    "$ref": "#/definitions/handler",
                    "properties": {
                        "handler": {
                            "default": "PeriodLimit",
                            "readOnly": true
                        },
                        "params": {
                            "$ref": "#/definitions/processParams",
                            "properties": {
                                "expire": {
                                    "title": "排重信息有效期，单位：秒",
                                    "description": "0表示永久（请慎用）。默认排重信息有效1年，尽量配置成最短有效的。例如，观看5场直播，则排查有效期设置为7天即可，因为基本没有直播可以播7天。",
                                    "type": "integer",
                                    "default": "31536000"
                                },
                                "expired": {
                                    "default": "2 days midnight"
                                },
                                "unique_event": {
                                    "title": "唯一事件计数",
                                    "description": "同一个操作只记录一次，勾选则对事件进行排重。要求事件必须支持唯一属性",
                                    "type": "boolean",
                                    "format": "checkbox",
                                    "default": true
                                },
                                "period": {
                                    "title": "周期配置",
                                    "type": "object",
                                    "properties": {
                                        "type": {
                                            "title": "周期类型",
                                            "description": "每个周期计数，连续N个周期连续计数",
                                            "type": "string",
                                            "default": "day",
                                            "enumSource": [
                                                {
                                                    "source": [
                                                        {
                                                            "value": "day",
                                                            "title": "天"
                                                        }
                                                    ],
                                                    "title": "{{item.title}}",
                                                    "value": "{{item.value}}"
                                                }
                                            ]
                                        },
                                        "hour": {
                                            "type": "integer",
                                            "title": "重置时间：时",
                                            "description": "例如，4表示凌晨4点计算为下一个周期",
                                            "minimum": 0,
                                            "maximum": 23,
                                            "default": 4
                                        },
                                        "limit": {
                                            "title": "周期最大计数",
                                            "description": "每个周期最多计多少数",
                                            "type": "integer",
                                            "minimum": 1,
                                            "maximum": 99999,
                                            "default": 1
                                        }
                                    }
                                }
                            }
                        },
                        "___PeriodLimit": {
                            "title": "___",
                            "type": "string"
                        }
                    }
                },
                {
                    "additionalProperties": false,
                    "title": "任务标识唯一计数",
                    "description": "作为组合任务的最终发放奖励的任务计数使用，一般针对个人任务使用。仅支持事件：完成任务",
                    "$ref": "#/definitions/handler",
                    "properties": {
                        "handler": {
                            "default": "MissionNames",
                            "readOnly": true
                        },
                        "params": {
                            "$ref": "#/definitions/processParams",
                            "properties": {
                                "expire": {
                                    "title": "排重信息有效期，单位：秒",
                                    "description": "0表示永久（请慎用）。默认排重信息有效1年，尽量配置成最短有效的。例如，观看5场直播，则排查有效期设置为7天即可，因为基本没有直播可以播7天。",
                                    "type": "integer",
                                    "default": "31536000"
                                },
                                "names": {
                                    "title": "唯一任务标识（name）数组",
                                    "description": "任务标识（name），确保任务标识是全局唯一的。如个人任务，则应该创建时包含uid",
                                    "type": "array",
                                    "items": {
                                        "title": "任务标识（name）",
                                        "type": "string"
                                    }
                                }
                            }
                        },
                        "___MissionNames": {
                            "title": "___",
                            "type": "string"
                        }
                    }
                }
            ],
            "propertyOrder": 90
        },
        "award_desc": {
            "title": "奖励描述，旧版本用户可见",
            "description": "新版本根据奖品拼接图文描述。 旧版本优先使用奖励描述字段，不填写则使用默认规则拼接奖励描述",
            "type": "string",
            "minLength": 3,
            "maxLength": 200,
            "propertyOrder": 85
        },
        "award": {
            "title": "奖励列表",
            "type": "array",
            "format": "tabs",
            "items": {
                "title": "奖励",
                "headerTemplate": "{{self.params.title}}*{{self.params.num}}",
                "options": {
                    "keep_oneof_values": false
                },
                "anyOf": [
                    {
                        "title": "花椒豆（淘汰）",
                        "$ref": "#/definitions/handler",
                        "properties": {
                            "params": {
                                "$ref": "#/definitions/awardBean"
                            },
                            "handler": {
                                "default": "Bean",
                                "readOnly": true
                            },
                            "___Bean": {
                                "title": "___",
                                "type": "string"
                            }
                        }
                    },
                    {
                        "title": "花椒豆/币",
                        "$ref": "#/definitions/handler",
                        "properties": {
                            "params": {
                                "$ref": "#/definitions/awardMoney"
                            },
                            "handler": {
                                "default": "Money",
                                "readOnly": true
                            },
                            "___Money": {
                                "title": "___",
                                "type": "string"
                            }
                        }
                    },
                    {
                        "title": "经验值",
                        "$ref": "#/definitions/handler",
                        "properties": {
                            "params": {
                                "$ref": "#/definitions/awardExp"
                            },
                            "handler": {
                                "default": "Exp",
                                "readOnly": true
                            },
                            "___Exp": {
                                "title": "___",
                                "type": "string"
                            }
                        }
                    },
                    {
                        "title": "主播经验值",
                        "$ref": "#/definitions/handler",
                        "properties": {
                            "params": {
                                "$ref": "#/definitions/awardAuthorExp"
                            },
                            "handler": {
                                "default": "AuthorExp",
                                "readOnly": true
                            },
                            "___AuthorExp": {
                                "title": "___",
                                "type": "string"
                            }
                        }
                    },
                    {
                        "title": "魅力经验值",
                        "$ref": "#/definitions/handler",
                        "properties": {
                            "params": {
                                "$ref": "#/definitions/awardCharmExp"
                            },
                            "handler": {
                                "default": "CharmExp",
                                "readOnly": true
                            },
                            "___CharmExp": {
                                "title": "___",
                                "type": "string"
                            }
                        }
                    },
                    {
                        "title": "弹幕",
                        "$ref": "#/definitions/handler",
                        "properties": {
                            "params": {
                                "$ref": "#/definitions/awardChats"
                            },
                            "handler": {
                                "default": "Chats",
                                "readOnly": true
                            },
                            "___Chats": {
                                "title": "___",
                                "type": "string"
                            }
                        }
                    },
                    {
                        "title": "道具",
                        "$ref": "#/definitions/handler",
                        "properties": {
                            "params": {
                                "$ref": "#/definitions/awardItem"
                            },
                            "handler": {
                                "default": "Item",
                                "readOnly": true
                            },
                            "___Item": {
                                "title": "___",
                                "type": "string"
                            }
                        }
                    },
                    {
                        "title": "道具（自动过期）（淘汰）",
                        "$ref": "#/definitions/handler",
                        "properties": {
                            "params": {
                                "$ref": "#/definitions/awardAutoItem"
                            },
                            "handler": {
                                "default": "AutoItem",
                                "readOnly": true
                            },
                            "___AutoItem": {
                                "title": "___",
                                "type": "string"
                            }
                        }
                    },
                    {
                        "title": "流量卡（淘汰）",
                        "properties": {
                            "params": {
                                "$ref": "#/definitions/awardFlowCard"
                            },
                            "handler": {
                                "default": "FlowCard",
                                "readOnly": true
                            },
                            "___FlowCard": {
                                "title": "___",
                                "type": "string"
                            }
                        },
                        "$ref": "#/definitions/handler"
                    },
                    {
                        "title": "粉丝团积分",
                        "$ref": "#/definitions/handler",
                        "properties": {
                            "params": {
                                "$ref": "#/definitions/awardFanClubScore"
                            },
                            "handler": {
                                "default": "FanClubScore",
                                "readOnly": true
                            },
                            "___FanClubScore": {
                                "title": "___",
                                "type": "string"
                            }
                        }
                    },
                    {
                        "title": "虚拟货币",
                        "$ref": "#/definitions/handler",
                        "properties": {
                            "params": {
                                "$ref": "#/definitions/awardVirtualMoney"
                            },
                            "handler": {
                                "default": "VirtualMoney",
                                "readOnly": true
                            },
                            "___VirtualMoney": {
                                "title": "___",
                                "type": "string"
                            }
                        }
                    },
                    {
                        "title": "活跃度",
                        "$ref": "#/definitions/handler",
                        "properties": {
                            "params": {
                                "$ref": "#/definitions/awardActiveDegree"
                            },
                            "handler": {
                                "default": "ActiveDegree",
                                "readOnly": true
                            },
                            "___ActiveDegree": {
                                "title": "___",
                                "type": "string"
                            }
                        }
                    },
                    {
                        "title": "装备",
                        "$ref": "#/definitions/handler",
                        "properties": {
                            "params": {
                                "$ref": "#/definitions/awardEquipment"
                            },
                            "handler": {
                                "default": "Equipment",
                                "readOnly": true
                            },
                            "___Equipment": {
                                "title": "___",
                                "type": "string"
                            }
                        }
                    },
                    {
                        "title": "自定义接口",
                        "$ref": "#/definitions/handler",
                        "properties": {
                            "params": {
                                "$ref": "#/definitions/awardApi"
                            },
                            "handler": {
                                "default": "Api",
                                "readOnly": true
                            },
                            "___Api": {
                                "title": "___",
                                "type": "string"
                            }
                        }
                    },
                    {
                        "title": "空奖励（用于触发其他事件）",
                        "$ref": "#/definitions/handler",
                        "properties": {
                            "params": {
                                "$ref": "#/definitions/awardSuccess"
                            },
                            "handler": {
                                "default": "Success",
                                "readOnly": true
                            },
                            "___Success": {
                                "title": "___",
                                "type": "string"
                            }
                        }
                    },
                    {
                        "title": "随机宝箱",
                        "$ref": "#/definitions/handler",
                        "properties": {
                            "params": {
                                "$ref": "#/definitions/awardBase",
                                "properties": {
                                    "num": {
                                        "maximum": 1
                                    },
                                    "title": {
                                        "default": "随机宝箱"
                                    },
                                    "icon": {
                                        "default": "http://p6.qhimg.com/t01e022104ff5f2ac68.png"
                                    },
                                    "anti_spam": {
                                        "title": "反垃圾过滤",
                                        "type": "boolean",
                                        "default": true
                                    },
                                    "limit": {
                                        "title": "限额配置",
                                        "description": "请通过右上方Properties按钮点开，选择对应奖励的限额配置。如果不需要对应项配置，请取消勾选",
                                        "type": "object",
                                        "defaultProperties": [],
                                        "properties": {
                                            "bean": {
                                                "title": "花椒豆限额（淘汰）",
                                                "$ref": "#/definitions/limit",
                                                "properties": {
                                                    "key": {
                                                        "default": "mlb_##MISSION_ID##"
                                                    }
                                                }
                                            },
                                            "guess_ticket": {
                                                "title": "竞猜券限额",
                                                "$ref": "#/definitions/limit",
                                                "properties": {
                                                    "key": {
                                                        "default": "mlt_##MISSION_ID##"
                                                    }
                                                }
                                            },
                                            "grass": {
                                                "title": "幸运草限额",
                                                "$ref": "#/definitions/limit",
                                                "properties": {
                                                    "key": {
                                                        "default": "mlg_##MISSION_ID##"
                                                    }
                                                }
                                            },
                                            "petal": {
                                                "title": "金币限额",
                                                "$ref": "#/definitions/limit",
                                                "properties": {
                                                    "key": {
                                                        "default": "mlp_##MISSION_ID##"
                                                    }
                                                }
                                            },
                                            "coin": {
                                                "title": "花椒币(豆)限额（奖励选择“花椒币”时使用此配置）",
                                                "$ref": "#/definitions/limit",
                                                "properties": {
                                                    "key": {
                                                        "default": "mlc_##MISSION_ID##"
                                                    }
                                                }
                                            },
                                            "yuanqi": {
                                                "title": "元气值限额",
                                                "$ref": "#/definitions/limit",
                                                "properties": {
                                                    "key": {
                                                        "default": "mlyq_##MISSION_ID##"
                                                    }
                                                }
                                            },
                                            "item": {
                                                "title": "道具卡限额",
                                                "$ref": "#/definitions/limit",
                                                "properties": {
                                                    "key": {
                                                        "default": "mli_##MISSION_ID##"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    "items": {
                                        "title": "奖励列表",
                                        "description": "随机宝箱可开出的所有奖励列表",
                                        "type": "array",
                                        "format": "tabs",
                                        "items": {
                                            "options": {
                                                "keep_oneof_values": false
                                            },
                                            "title": "宝箱内奖励",
                                            "headerTemplate": "{{self.params.title}}*{{self.params.num}}",
                                            "anyOf": [
                                                {
                                                    "title": "经验值",
                                                    "$ref": "#/definitions/randomItem",
                                                    "properties": {
                                                        "type": {
                                                            "default": "exp",
                                                            "readOnly": true
                                                        },
                                                        "params": {
                                                            "$ref": "#/definitions/awardExp"
                                                        },
                                                        "___Exp": {
                                                            "title": "___",
                                                            "type": "string"
                                                        }
                                                    }
                                                },
                                                {
                                                    "title": "主播经验值",
                                                    "$ref": "#/definitions/randomItem",
                                                    "properties": {
                                                        "type": {
                                                            "default": "author_exp",
                                                            "readOnly": true
                                                        },
                                                        "params": {
                                                            "$ref": "#/definitions/awardAuthorExp"
                                                        },
                                                        "___AuthorExp": {
                                                            "title": "___",
                                                            "type": "string"
                                                        }
                                                    }
                                                },
                                                {
                                                    "title": "道具",
                                                    "$ref": "#/definitions/randomItem",
                                                    "properties": {
                                                        "type": {
                                                            "default": "item",
                                                            "readOnly": true
                                                        },
                                                        "params": {
                                                            "$ref": "#/definitions/awardItem"
                                                        },
                                                        "___Item": {
                                                            "title": "___",
                                                            "type": "string"
                                                        }
                                                    }
                                                },
                                                {
                                                    "title": "花椒豆（淘汰）",
                                                    "$ref": "#/definitions/randomItem",
                                                    "properties": {
                                                        "type": {
                                                            "default": "bean",
                                                            "readOnly": true
                                                        },
                                                        "hide4spam": {
                                                            "default": true
                                                        },
                                                        "params": {
                                                            "$ref": "#/definitions/awardBean"
                                                        },
                                                        "___Bean": {
                                                            "title": "___",
                                                            "type": "string"
                                                        }
                                                    }
                                                },
                                                {
                                                    "title": "花椒豆/币",
                                                    "$ref": "#/definitions/randomItem",
                                                    "properties": {
                                                        "type": {
                                                            "default": "coin",
                                                            "readOnly": true
                                                        },
                                                        "hide4spam": {
                                                            "default": true
                                                        },
                                                        "params": {
                                                            "$ref": "#/definitions/awardMoney"
                                                        },
                                                        "___Money": {
                                                            "title": "___",
                                                            "type": "string"
                                                        }
                                                    }
                                                },
                                                {
                                                    "title": "弹幕数",
                                                    "$ref": "#/definitions/randomItem",
                                                    "properties": {
                                                        "type": {
                                                            "default": "chats",
                                                            "readOnly": true
                                                        },
                                                        "params": {
                                                            "$ref": "#/definitions/awardChats"
                                                        },
                                                        "___Chats": {
                                                            "title": "___",
                                                            "type": "string"
                                                        }
                                                    }
                                                },
                                                {
                                                    "title": "竞猜券",
                                                    "$ref": "#/definitions/randomItem",
                                                    "properties": {
                                                        "type": {
                                                            "default": "guess_ticket",
                                                            "readOnly": true
                                                        },
                                                        "hide4spam": {
                                                            "default": true
                                                        },
                                                        "params": {
                                                            "$ref": "#/definitions/awardGuessTicket"
                                                        },
                                                        "___GuessTicket": {
                                                            "title": "___",
                                                            "type": "string"
                                                        }
                                                    }
                                                },
                                                {
                                                    "title": "阳光值",
                                                    "$ref": "#/definitions/randomItem",
                                                    "properties": {
                                                        "type": {
                                                            "default": "sun",
                                                            "readOnly": true
                                                        },
                                                        "params": {
                                                            "$ref": "#/definitions/awardSun"
                                                        },
                                                        "___Sun": {
                                                            "title": "___",
                                                            "type": "string"
                                                        }
                                                    }
                                                },
                                                {
                                                    "title": "幸运草",
                                                    "$ref": "#/definitions/randomItem",
                                                    "properties": {
                                                        "type": {
                                                            "default": "grass",
                                                            "readOnly": true
                                                        },
                                                        "hide4spam": {
                                                            "default": true
                                                        },
                                                        "params": {
                                                            "$ref": "#/definitions/awardGrass"
                                                        },
                                                        "___Grass": {
                                                            "title": "___",
                                                            "type": "string"
                                                        }
                                                    }
                                                },
                                                {
                                                    "title": "金币",
                                                    "$ref": "#/definitions/randomItem",
                                                    "properties": {
                                                        "type": {
                                                            "default": "petal",
                                                            "readOnly": true
                                                        },
                                                        "hide4spam": {
                                                            "default": true
                                                        },
                                                        "params": {
                                                            "$ref": "#/definitions/awardPetal"
                                                        },
                                                        "___Petal": {
                                                            "title": "___",
                                                            "type": "string"
                                                        }
                                                    }
                                                },
                                                {
                                                    "title": "流量卡碎片",
                                                    "$ref": "#/definitions/randomItem",
                                                    "properties": {
                                                        "type": {
                                                            "default": "flow_card_fragment",
                                                            "readOnly": true
                                                        },
                                                        "params": {
                                                            "$ref": "#/definitions/awardFlowCardFragment"
                                                        },
                                                        "___FlowCardFragment": {
                                                            "title": "___",
                                                            "type": "string"
                                                        }
                                                    }
                                                },
                                                {
                                                    "title": "元气值",
                                                    "$ref": "#/definitions/randomItem",
                                                    "properties": {
                                                        "type": {
                                                            "default": "yuanqi",
                                                            "readOnly": true
                                                        },
                                                        "hide4spam": {
                                                            "default": true
                                                        },
                                                        "params": {
                                                            "$ref": "#/definitions/awardYuanqi"
                                                        },
                                                        "___Yuanqi": {
                                                            "title": "___",
                                                            "type": "string"
                                                        }
                                                    }
                                                },
                                                {
                                                    "title": "装备",
                                                    "$ref": "#/definitions/randomItem",
                                                    "properties": {
                                                        "type": {
                                                            "default": "equipment",
                                                            "readOnly": true
                                                        },
                                                        "hide4spam": {
                                                            "default": true
                                                        },
                                                        "params": {
                                                            "$ref": "#/definitions/awardEquipment"
                                                        },
                                                        "___Equipment": {
                                                            "title": "___",
                                                            "type": "string"
                                                        }
                                                    }
                                                },
                                                {
                                                    "title": "自定义API",
                                                    "$ref": "#/definitions/randomItem",
                                                    "properties": {
                                                        "type": {
                                                            "default": "api",
                                                            "readOnly": true
                                                        },
                                                        "hide4spam": {
                                                            "default": true
                                                        },
                                                        "params": {
                                                            "$ref": "#/definitions/awardApi"
                                                        },
                                                        "___API": {
                                                            "title": "___",
                                                            "type": "string"
                                                        }
                                                    }
                                                },
                                                {
                                                    "title": "空奖励（用于触发其他事件）",
                                                    "$ref": "#/definitions/randomItem",
                                                    "properties": {
                                                        "type": {
                                                            "default": "success",
                                                            "readOnly": true
                                                        },
                                                        "hide4spam": {
                                                            "default": true
                                                        },
                                                        "params": {
                                                            "$ref": "#/definitions/awardSuccess"
                                                        },
                                                        "___Success": {
                                                            "title": "___",
                                                            "type": "string"
                                                        }
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                }
                            },
                            "handler": {
                                "default": "Random",
                                "readOnly": true
                            },
                            "___Random": {
                                "title": "___",
                                "type": "string"
                            }
                        }
                    }
                ]
            },
            "propertyOrder": 90
        },
        "settings": {
            "title": "任务配置",
            "description": "通过Properties按钮，可列出所有可配置项。如果某项为空，则取消对应属性的勾选",
            "type": "object",
            "properties": {
                "voice_mission_assist_config": {
                    "title": "语音任务配置 - 语音任务必须配置此项",
                    "description": "语音任务专用",
                    "type": "object",
                    "properties": {
                        "in_progress_text": {
                            "type": "string",
                            "title": "进行中辅助文案。（{{num}}变量一定不要删除！！！内置变量，程序会做替换，删了结果不可控）",
                            "default": "已上麦{{num}}分钟"
                        },
                        "award_text": {
                            "type": "string",
                            "title": "任务完成奖励。（{{goal}}和{{award}}变量一定不要删除！！！内置变量，程序会做替换，删了结果不可控）",
                            "default": "累积{{goal}}心动值, 即可获得{{award}}奖励"
                        },
                        "label": {
                            "type": "string",
                            "title": "填写任务标签。（时长任务、上麦任务等等）",
                            "default": "普通任务"
                        },
                        "gift_packs": {
                            "type": "object",
                            "title": "大礼包配置",
                            "properties": {
                                "is_gift_packs": {
                                    "title": "是否是大礼包",
                                    "type": "boolean",
                                    "default": 1,
                                    "format": "checkbox"
                                },
                                "icon": {
                                    "type": "string",
                                    "title": "大礼包icon（目前这个字段暂时不需要配置，只需要勾选是否是大礼包即可）",
                                    "default": ""
                                }
                            }
                        }
                    },
                    "defaultProperties": [
                        "in_progress_text",
                        "award_text",
                        "label",
                        "git_packs"
                    ]
                },
                "push": {
                    "title": "私信配置 - 任务完成后就会触发私信消息",
                    "type": "object",
                    "properties": {
                        "title": {
                            "title": "私信标题",
                            "type": "string",
                            "default": "您有一个任务奖励待领取"
                        },
                        "content": {
                            "title": "私信内容",
                            "description": "支持通配符：##TITLE##表示任务标题",
                            "type": "string",
                            "default": "恭喜您成功完成（##TITLE##）获得奖励，赶快前往 我的-->任务 领取奖励吧"
                        },
                        "uri": {
                            "title": "跳转uri",
                            "description": "支持通配符：##MISSION_ID##表示任务唯一ID",
                            "type": "string",
                            "default": "huajiao://huajiao.com/goto/mission?mission_id=##MISSION_ID##"
                        }
                    }
                },
                "barrage": {
                    "push": {
                        "title": "弹幕配置 - 任务完成就会发送弹幕消息",
                        "type": "object",
                        "properties": {
                            "content": {
                                "title": "弹幕内容",
                                "description": "支持通配符：##TITLE##表示任务标题",
                                "type": "string",
                                "default": "恭喜您成功完成（##TITLE##）获得奖励，赶快前往 我的-->任务 领取奖励吧"
                            },
                            "uri": {
                                "title": "跳转uri",
                                "description": "支持通配符：##MISSION_ID##表示任务唯一ID",
                                "type": "string",
                                "default": "huajiao://huajiao.com/goto/mission?mission_id=##MISSION_ID##"
                            }
                        }
                    }
                },
                "pendant_format": {
                    "title": "辅助文案",
                    "description": "根据任务性质来设置文案规格示例：无进度任务-完成1次单场30分钟以上的直播（完成 次单场30分钟以上的直播）；有进度的任务-再充值300个花椒豆(再充值 个花椒豆)",
                    "type": "object",
                    "properties": {
                        "prefix": {
                            "type": "string",
                            "title": "完成任务前辅助文案前缀"
                        },
                        "suffix": {
                            "type": "string",
                            "title": "完成任务前辅助文案后缀"
                        },
                        "success": {
                            "type": "string",
                            "title": "完成任务后展示的辅助文案"
                        }
                    },
                    "defaultProperties": [
                        "prefix",
                        "suffix",
                        "success"
                    ]
                },
                "version": {
                    "title": "任务版本提示",
                    "description": "低于这个版本的用户会在任务列表界面看到任务标题后面有版本升级提示，注意该提示会在展示的时候计入任务标题长度内新版客户端会把超长的展示为省略号",
                    "type": "object",
                    "properties": {
                        "ios": {
                            "type": "string",
                            "title": "苹果系统最低版本",
                            "minLength": 3,
                            "maxLength": 50
                        },
                        "android": {
                            "type": "string",
                            "title": "安卓系统最低版本",
                            "minLength": 3,
                            "maxLength": 50
                        }
                    },
                    "defaultProperties": [
                        "android",
                        "ios"
                    ]
                },
                "top": {
                    "type": "boolean",
                    "title": "置顶，如果勾选，则此任务不参与排序，直接置顶"
                },
                "unit": {
                    "type": "string",
                    "title": "单位（展示目标进度的地方可使用，例如：花椒豆）"
                },
                "background_image": {
                    "type": "string",
                    "title": "背景图，如果提供，则展示任务背景图，例如新手大礼包任务的效果图"
                },
                "btn_uri": {
                    "type": "string",
                    "title": "点击“去完成”按钮跳转的链接",
                    "default": "huajiao://huajiao.com/goto/square?category=live"
                },
                "use_award_uri": {
                    "type": "string",
                    "title": "点击“去使用”按钮跳转的链接",
                    "default": ""
                },
                "icon_bak": {
                    "type": "string",
                    "title": "任务备用icon",
                    "default": ""
                },
                "uri_living": {
                    "type": "object",
                    "title": "直播间内按钮控制",
                    "properties": {
                        "btn_uri": {
                            "type": "string",
                            "title": "点击“去完成”按钮跳转的链接，请填写半屏schema",
                            "default": "huajiao://huajiao.com/goto/half_inner?hwRatio=0.6&transparent=true&url=URL编码后的H5链接"
                        },
                        "use_award_uri": {
                            "type": "string",
                            "title": "点击“去使用”按钮跳转的链接，请填写半屏schema",
                            "default": "huajiao://huajiao.com/goto/half_inner?hwRatio=0.6&transparent=true&url=URL编码后的H5链接"
                        }
                    }
                },
                "check_complete": {
                    "type": "boolean",
                    "title": "如果展示条件和完成条件存在冲突，则需要勾选此项",
                    "default": false,
                    "format": "checkbox"
                },
                "completed_color": {
                    "type": "string",
                    "title": "完成状态的文字颜色",
                    "description": "格式：#FFFFFF"
                },
                "require_phone": {
                    "type": "boolean",
                    "title": "要求绑定手机号才可领取奖励",
                    "default": false,
                    "format": "checkbox"
                },
                "private_letter": {
                    "title": "私信消息配置（不配置此项默认发私信不发push）",
                    "type": "object",
                    "properties": {
                        "send_private_letter": {
                            "title": "发送私信",
                            "type": "boolean",
                            "format": "checkbox",
                            "default": true
                        },
                        "send_push": {
                            "title": "发送私信push",
                            "type": "boolean",
                            "format": "checkbox",
                            "default": false
                        }
                    }
                },
                "no_push_notice": {
                    "type": "boolean",
                    "title": "不发送push通知",
                    "default": false,
                    "format": "checkbox"
                },
                "double_reward": {
                    "type": "boolean",
                    "title": "双倍奖励(作废)",
                    "description": "勾选后，看广告可领双倍奖励",
                    "default": false,
                    "format": "checkbox"
                },
                "double_reward_setting": {
                    "title": "双倍奖励文案配置(作废)",
                    "type": "object",
                    "properties": {
                        "title": {
                            "title": "提示弹窗标题",
                            "description": "最长8个字",
                            "type": "string"
                        },
                        "content": {
                            "title": "提示弹窗正文",
                            "description": "最长40个字",
                            "type": "string"
                        },
                        "tips": {
                            "title": "提示弹窗提示文案",
                            "description": "最长20个字",
                            "type": "string"
                        }
                    }
                },
                "reward_after_others": {
                    "type": "boolean",
                    "title": "是否领取当前页面所有任务的奖励后才允许领取此任务奖励，是则勾选",
                    "default": false,
                    "format": "checkbox"
                },
                "refresh_after_reward": {
                    "type": "boolean",
                    "title": "领取奖励后是否刷新当前任务列表，如果为连续性的成就任务，则需要设置为true",
                    "default": false,
                    "format": "checkbox"
                },
                "mission_icon": {
                    "title": "多阶段任务图标",
                    "description": "多阶段任务可通过此配置展示不同状态的图标（需要配置两份，端上支持的是webp格式，h5支持的是json动画格式 ）",
                    "type": "object",
                    "properties": {
                        "unfinished": {
                            "title": "未完成",
                            "description": "未完成时展示的icon（webp格式，端上使用）",
                            "type": "string",
                            "default": ""
                        },
                        "finished_not_received": {
                            "title": "完成未领取",
                            "description": "任务完成未领取时的icon（webp格式，端上使用）",
                            "type": "string",
                            "default": ""
                        },
                        "finished_received": {
                            "title": "完成已领取",
                            "description": "任务完成且已领取时的icon（webp格式，端上使用）",
                            "type": "string",
                            "default": ""
                        },
                        "unfinished_json": {
                            "title": "未完成",
                            "description": "未完成时展示的icon(h5使用)",
                            "type": "string",
                            "default": ""
                        },
                        "finished_not_received_json": {
                            "title": "完成未领取",
                            "description": "任务完成未领取时的icon(h5使用)",
                            "type": "string",
                            "default": ""
                        },
                        "finished_received_json": {
                            "title": "完成已领取",
                            "description": "任务完成且已领取时的icon（h5使用）",
                            "type": "string",
                            "default": ""
                        }
                    }
                },
                "cancel_txt": {
                    "type": "string",
                    "title": "领取奖励弹窗的文案",
                    "description": "默认我知道了，配置为空则不显示"
                },
                "toast_duration": {
                    "type": "integer",
                    "minimum": 0,
                    "maximum": 60,
                    "title": "领取奖励弹窗倒计时单位秒",
                    "description": "最大60s"
                },
                "auto_send_reward": {
                    "title": "自动发放奖励，自动发放会降低用户参与感，仅在必要情况下使用。仅普通任务支持自动发放奖励",
                    "type": "boolean",
                    "default": false,
                    "format": "checkbox"
                },
                "not_send_mission_complete": {
                    "title": "不发任务完成消息（影响任务红点，非任务完成私信）",
                    "type": "boolean",
                    "default": false,
                    "format": "checkbox"
                },
                "force_send_mission_complete": {
                    "title": "强制发送任务完成消息（勾选会突破不发送任务完成消息和隐藏任务限制，强行发送）",
                    "type": "boolean",
                    "default": false,
                    "format": "checkbox"
                },
                "allow_get": {
                    "properties": {
                        "h5": {
                            "title": "H5",
                            "type": "boolean",
                            "format": "checkbox",
                            "description": "如果允许H5直接访问，需要勾选此项。"
                        }
                    },
                    "title": "任务可见性配置",
                    "type": "object"
                },
                "count_down_end": {
                    "type": "boolean",
                    "title": "是否展示结束倒计时",
                    "default": false,
                    "format": "checkbox"
                },
                "labels": {
                    "title": "标签",
                    "type": "array",
                    "uniqueItems": true,
                    "items": {
                        "type": "string",
                        "enum": [
                            "日任务",
                            "周任务",
                            "悬赏",
                            "限时",
                            "大奖",
                            "火热"
                        ]
                    }
                },
                "push_configs": {
                    "title": "push通知",
                    "type": "array",
                    "format": "tabs",
                    "items": {
                        "options": {
                            "keep_oneof_values": false
                        },
                        "anyOf": [
                            {
                                "$ref": "#/definitions/settingPushStationBanner"
                            },
                            {
                                "$ref": "#/definitions/settingPushFlyScreen"
                            },
                            {
                                "$ref": "#/definitions/settingOfficialNotice"
                            }
                        ]
                    }
                },
                "progress_notice": {
                    "title": "任务进度变化通知",
                    "$ref": "#/definitions/settingProgressNotice"
                },
                "mission_complete_pop_schema": {
                    "title": "任务完成弹窗schema",
                    "description": "配置任务完成时的弹窗schema(只有 \"模版任务\" 且勾选了\"任务可见性配置:H5\"才可以使用此功能)",
                    "type": "string"
                }
            },
            "defaultProperties": [
                "btn_uri"
            ],
            "propertyOrder": 100
        }
    },
    "definitions": {
        "___": {
            "patternProperties": {
                "___.*": {
                    "title": "识别属性，勿动",
                    "type": "string",
                    "required": true,
                    "options": {
                        "hidden": true
                    }
                }
            }
        },
        "limit": {
            "type": "object",
            "properties": {
                "key": {
                    "title": "限额配置KEY",
                    "description": "限额的累加key，使用相同的key则共享限额。支持变量：##MISSION_ID##，可替换为任务ID。可以实现独享限额",
                    "type": "string",
                    "default": "mlb_##MISSION_ID##"
                },
                "num": {
                    "title": "限额",
                    "type": "integer",
                    "minimum": 1,
                    "maximum": 9999999,
                    "default": 800
                },
                "period": {
                    "title": "周期",
                    "description": "周期秒数。例如3600表示按小时限额，86400表示按天限额。",
                    "type": "integer",
                    "minimum": 3600,
                    "maximum": 86400,
                    "default": 3600
                }
            }
        },
        "handler": {
            "$ref": "#/definitions/___",
            "type": "object",
            "properties": {
                "params": {
                    "title": "可选项",
                    "type": "object"
                },
                "handler": {
                    "title": "Handler",
                    "type": "string",
                    "readOnly": true
                }
            }
        },
        "preconditionTimeQuantum": {
            "title": "时间段",
            "description": "需在此时间段内，通过前置此条件",
            "$ref": "#/definitions/handler",
            "properties": {
                "handler": {
                    "default": "TimeQuantum",
                    "readOnly": true
                },
                "params": {
                    "properties": {
                        "start": {
                            "type": "string",
                            "title": "开始时间（格式：HH:mm:ss）",
                            "default": "00:00:00"
                        },
                        "end": {
                            "type": "string",
                            "title": "结束时间（格式：HH:mm:ss）",
                            "default": "23:59:59"
                        }
                    }
                },
                "___TimeQuantum": {
                    "title": "___",
                    "type": "string"
                }
            }
        },
        "preconditionPreMission": {
            "title": "完成任务",
            "description": "需完成指定任务，通过前置此条件",
            "$ref": "#/definitions/handler",
            "properties": {
                "handler": {
                    "default": "PreMission",
                    "readOnly": true
                },
                "params": {
                    "properties": {
                        "id": {
                            "type": "integer",
                            "title": "任务id",
                            "default": 17791,
                            "minimum": 1,
                            "maximum": 99999,
                            "description": "通过任务后台“任务ID”列查看，每个任务均有一个唯一id"
                        },
                        "award": {
                            "type": "boolean",
                            "title": "需要已领取奖励",
                            "default": false,
                            "format": "checkbox"
                        },
                        "not_complete": {
                            "type": "boolean",
                            "title": "未完成任务",
                            "description": "如果需要此任务未完成，则勾选",
                            "default": true,
                            "format": "checkbox"
                        }
                    }
                },
                "___PreMission": {
                    "title": "___",
                    "type": "string"
                }
            }
        },
        "preconditionNewbie": {
            "title": "新用户",
            "description": "需为新用户，通过前置此条件",
            "$ref": "#/definitions/handler",
            "properties": {
                "handler": {
                    "default": "Newbie",
                    "readOnly": true
                },
                "params": {
                    "properties": {
                        "min_uid": {
                            "type": "integer",
                            "title": "起始uid",
                            "description": "uid是递增的，从哪个uid开始计算为新用户。可咨询技术获取",
                            "minimum": 20000000,
                            "maximum": 999999999,
                            "default": 20000000
                        }
                    }
                },
                "___Newbie": {
                    "title": "___",
                    "type": "string"
                }
            }
        },
        "preconditionNotSendAward": {
            "title": "未发放奖励",
            "description": "当前任务未领取奖励则通过此前置条件",
            "$ref": "#/definitions/handler",
            "properties": {
                "handler": {
                    "default": "NotSendAward",
                    "readOnly": true
                },
                "___NotSendAward": {
                    "title": "___",
                    "type": "string"
                }
            }
        },
        "preconditionBlackList": {
            "title": "黑名单过滤",
            "description": "在黑名单中的用户不展示此任务或者不增加此任务进度，添加或者删除黑名单，请<a href=\"/a/mission/getBlackList\" target=\"_blank\" >点此前往</a>",
            "$ref": "#/definitions/handler",
            "properties": {
                "handler": {
                    "default": "BlackList",
                    "readOnly": true
                },
                "params": {
                    "properties": {
                        "white": {
                            "type": "string",
                            "title": "是否为白名单模式",
                            "description": "留空为黑名单模式，如果要为白名单模式就写1"
                        }
                    }
                },
                "___BlackList": {
                    "title": "___",
                    "type": "string"
                }
            }
        },
        "preconditionUidTail": {
            "title": "特定uid尾号展示",
            "description": "只有配置了的uid尾号才展示或执行",
            "$ref": "#/definitions/handler",
            "properties": {
                "handler": {
                    "default": "UidTail",
                    "readOnly": true
                },
                "params": {
                    "properties": {
                        "numbers": {
                            "type": "array",
                            "title": "尾号列表",
                            "description": "配置上的尾号才显示",
                            "items": {
                                "type": "integer",
                                "title": "尾号",
                                "minimum": 0,
                                "maximum": 9
                            }
                        }
                    }
                },
                "___UidTail": {
                    "title": "___",
                    "type": "string"
                }
            }
        },
        "preconditionUserGroup": {
            "title": "用户分群",
            "description": "根据用户分群是否命中来判断是否通过此条件",
            "$ref": "#/definitions/handler",
            "properties": {
                "handler": {
                    "default": "UserGroup",
                    "readOnly": true
                },
                "params": {
                    "properties": {
                        "group_ids": {
                            "type": "array",
                            "title": "分群标识",
                            "description": "请填写分群平台的人群标识,测试：https://admin-center.test.huajiao.com/userGroup/indexDataList 线上：https://admin-center.huajiao.com/userGroup/indexDataList",
                            "items": {
                                "type": "string",
                                "title": "分群标识",
                                "minimum": 0
                            }
                        },
                        "reverse": {
                            "title": "不是分群用户才会生效",
                            "description": "如勾选，则未命中分群才会生效",
                            "type": "boolean",
                            "format": "checkbox"
                        }
                    }
                },
                "___UserGroup": {
                    "title": "___",
                    "type": "string"
                }
            }
        },
        "preconditionPlatform": {
            "title": "客户端版本判断",
            "description": "只有大于等于此版本的客户端才展示",
            "$ref": "#/definitions/handler",
            "properties": {
                "handler": {
                    "default": "Platform",
                    "readOnly": true
                },
                "params": {
                    "properties": {
                        "ios": {
                            "type": "string",
                            "title": "ios最小版本号",
                            "description": "ios大于此版本号的展示"
                        },
                        "android": {
                            "type": "string",
                            "title": "android最小版本号",
                            "description": "android大于此版本号的展示"
                        }
                    }
                },
                "___Platform": {
                    "title": "___",
                    "type": "string"
                }
            }
        },
        "preconditionFollow": {
            "title": "关注状态",
            "description": "通过配置决定关注或者未关注，通过前置此条件",
            "$ref": "#/definitions/handler",
            "properties": {
                "handler": {
                    "default": "Follow",
                    "readOnly": true
                },
                "params": {
                    "properties": {
                        "follow_uid": {
                            "title": "uid列表",
                            "type": "array",
                            "items": {
                                "type": "integer",
                                "title": "uid",
                                "minimum": 20000000,
                                "maximum": 999999999
                            }
                        },
                        "type": {
                            "type": "string",
                            "title": "黑白名单模式",
                            "default": "whitelist",
                            "enumSource": [
                                {
                                    "source": [
                                        {
                                            "value": "whitelist",
                                            "title": "白名单"
                                        },
                                        {
                                            "value": "blacklist",
                                            "title": "黑名单"
                                        }
                                    ],
                                    "title": "{{item.title}}",
                                    "value": "{{item.value}}"
                                }
                            ]
                        }
                    }
                },
                "___Follow": {
                    "title": "___",
                    "type": "string"
                }
            }
        },
        "preconditionUserAttribute": {
            "title": "用户属性",
            "description": "通过指定用户属性对任务进行多维度过滤",
            "$ref": "#/definitions/handler",
            "properties": {
                "handler": {
                    "default": "UserAttribute",
                    "readOnly": true
                },
                "params": {
                    "properties": {
                        "conditions": {
                            "title": "可选属性筛选列表（通过Properties按钮勾选所属属性）",
                            "type": "object",
                            "properties": {
                                "family_category": {
                                    "title": "用户签约家族类型",
                                    "description": "1-秀场，2-语音，6-老家族，9-官方挂靠，11-线下基地，13-yohoo，未签约取值-1或者null）",
                                    "$ref": "#/definitions/conditions",
                                    "properties": {
                                        "conditions": {
                                            "items": {
                                                "anyOf": [
                                                    {
                                                        "$ref": "#/definitions/conditionList"
                                                    }
                                                ]
                                            }
                                        }
                                    }
                                },
                                "total_receive": {
                                    "title": "累计收益",
                                    "description": "用户累计收入花椒币，包括所有渠道获得的花椒币",
                                    "$ref": "#/definitions/conditions",
                                    "properties": {
                                        "conditions": {
                                            "title": "条件列表",
                                            "type": "array",
                                            "format": "tabs",
                                            "items": {
                                                "options": {
                                                    "keep_oneof_values": false
                                                },
                                                "anyOf": [
                                                    {
                                                        "$ref": "#/definitions/conditionGt"
                                                    },
                                                    {
                                                        "$ref": "#/definitions/conditionLt"
                                                    }
                                                ]
                                            }
                                        }
                                    }
                                },
                                "recall_time": {
                                    "title": "召回时间",
                                    "description": "用户开播时判断，最后一次开播距今超过30天时设置此属性为当前时间",
                                    "$ref": "#/definitions/conditions",
                                    "properties": {
                                        "conditions": {
                                            "items": {
                                                "anyOf": [
                                                    {
                                                        "$ref": "#/definitions/conditionTimeGt"
                                                    },
                                                    {
                                                        "$ref": "#/definitions/conditionTimeLt"
                                                    },
                                                    {
                                                        "$ref": "#/definitions/conditionLt",
                                                        "title": "时间类属性值小于"
                                                    }
                                                ]
                                            }
                                        }
                                    }
                                },
                                "author_tag_level": {
                                    "title": "主播认证频道评级",
                                    "description": "主播认证频道评级：极品、优秀、潜力、普通",
                                    "$ref": "#/definitions/conditions",
                                    "properties": {
                                        "conditions": {
                                            "items": {
                                                "anyOf": [
                                                    {
                                                        "$ref": "#/definitions/conditionList"
                                                    }
                                                ]
                                            }
                                        }
                                    }
                                },
                                "anchor_rating": {
                                    "title": "主播评级",
                                    "description": "运营给主播的评级：S、A、B、C、E",
                                    "$ref": "#/definitions/conditions",
                                    "properties": {
                                        "conditions": {
                                            "items": {
                                                "anyOf": [
                                                    {
                                                        "$ref": "#/definitions/conditionList"
                                                    }
                                                ]
                                            }
                                        }
                                    }
                                },
                                "is_satisfy_contract": {
                                    "title": "满足签约白名单",
                                    "description": "运营设置主播为可签约主播，则添加此属性",
                                    "$ref": "#/definitions/conditions",
                                    "properties": {
                                        "conditions": {
                                            "items": {
                                                "anyOf": [
                                                    {
                                                        "$ref": "#/definitions/conditionBool"
                                                    }
                                                ]
                                            }
                                        }
                                    }
                                },
                                "is_contract": {
                                    "title": "已签约",
                                    "description": "平台协议审核通过后，设置此属性",
                                    "$ref": "#/definitions/conditions",
                                    "properties": {
                                        "conditions": {
                                            "items": {
                                                "anyOf": [
                                                    {
                                                        "$ref": "#/definitions/conditionBool"
                                                    }
                                                ]
                                            }
                                        }
                                    }
                                },
                                "is_daily_anchor": {
                                    "title": "属于日常主播",
                                    "description": "符合产品概念的日常主播，具体逻辑看文档 https://git.huajiao.com/docs/server/blob/master/project/task/new_anchor/new_anchor2.md",
                                    "$ref": "#/definitions/conditions",
                                    "properties": {
                                        "conditions": {
                                            "items": {
                                                "anyOf": [
                                                    {
                                                        "$ref": "#/definitions/conditionBool"
                                                    }
                                                ]
                                            }
                                        }
                                    }
                                },
                                "vip_type": {
                                    "title": "VIP属性",
                                    "description": "可选值 1：个人，2：家族，3：家族刷榜，4：疑似刷榜，5：刷榜，6：小号，7：主播，8：净充值不满15万元，9：其他",
                                    "$ref": "#/definitions/conditions",
                                    "properties": {
                                        "conditions": {
                                            "items": {
                                                "anyOf": [
                                                    {
                                                        "$ref": "#/definitions/conditionList"
                                                    }
                                                ]
                                            }
                                        }
                                    }
                                },
                                "first_live": {
                                    "title": "首次直播时间",
                                    "description": "用户第一次开播的时间",
                                    "$ref": "#/definitions/conditions",
                                    "properties": {
                                        "conditions": {
                                            "items": {
                                                "anyOf": [
                                                    {
                                                        "$ref": "#/definitions/conditionTimeGt"
                                                    },
                                                    {
                                                        "$ref": "#/definitions/conditionTimeLt"
                                                    },
                                                    {
                                                        "$ref": "#/definitions/conditionLt",
                                                        "title": "时间类属性值小于"
                                                    }
                                                ]
                                            }
                                        }
                                    }
                                },
                                "reg_time": {
                                    "title": "注册时间",
                                    "description": "用户注册时间",
                                    "$ref": "#/definitions/conditions",
                                    "properties": {
                                        "conditions": {
                                            "items": {
                                                "anyOf": [
                                                    {
                                                        "$ref": "#/definitions/conditionTimeGt"
                                                    },
                                                    {
                                                        "$ref": "#/definitions/conditionTimeLt"
                                                    },
                                                    {
                                                        "$ref": "#/definitions/conditionLt",
                                                        "title": "时间类属性值小于"
                                                    }
                                                ]
                                            }
                                        }
                                    }
                                },
                                "is_student": {
                                    "title": "是否认证学生",
                                    "description": "是否认证学生",
                                    "$ref": "#/definitions/conditions",
                                    "properties": {
                                        "conditions": {
                                            "items": {
                                                "anyOf": [
                                                    {
                                                        "$ref": "#/definitions/conditionBool"
                                                    }
                                                ]
                                            }
                                        }
                                    }
                                },
                                "charm_level": {
                                    "title": "魅力等级",
                                    "description": "用户魅力等级",
                                    "$ref": "#/definitions/conditions",
                                    "properties": {
                                        "conditions": {
                                            "items": {
                                                "anyOf": [
                                                    {
                                                        "$ref": "#/definitions/conditionGt"
                                                    },
                                                    {
                                                        "$ref": "#/definitions/conditionLt"
                                                    }
                                                ]
                                            }
                                        }
                                    }
                                },
                                "author_role": {
                                    "title": "主播收益角色",
                                    "description": "可选值 1：老素人，2：老家族主播，3：新素人，4：春晖家族主播，5：语音春晖家族主播",
                                    "$ref": "#/definitions/conditions",
                                    "properties": {
                                        "conditions": {
                                            "items": {
                                                "anyOf": [
                                                    {
                                                        "$ref": "#/definitions/conditionList"
                                                    }
                                                ]
                                            }
                                        }
                                    }
                                },
                                "new_user_experiment": {
                                    "title": "新用户实验标识(不可复用！)",
                                    "description": "可选值 1：实验组，2：对照组，3：未知",
                                    "$ref": "#/definitions/conditions",
                                    "properties": {
                                        "conditions": {
                                            "items": {
                                                "anyOf": [
                                                    {
                                                        "$ref": "#/definitions/conditionList"
                                                    }
                                                ]
                                            }
                                        }
                                    }
                                },
                                "new_user_encourage": {
                                    "title": "新用户激励标识",
                                    "description": "可选值 1：实验组，2：对照组，3：未知",
                                    "$ref": "#/definitions/conditions",
                                    "properties": {
                                        "conditions": {
                                            "items": {
                                                "anyOf": [
                                                    {
                                                        "$ref": "#/definitions/conditionList"
                                                    }
                                                ]
                                            }
                                        }
                                    }
                                },
                                "public_room_author": {
                                    "title": "语音房主播标识",
                                    "description": "可选值 1：语音房主播",
                                    "$ref": "#/definitions/conditions",
                                    "properties": {
                                        "conditions": {
                                            "items": {
                                                "anyOf": [
                                                    {
                                                        "$ref": "#/definitions/conditionList"
                                                    }
                                                ]
                                            }
                                        }
                                    }
                                },
                                "charge": {
                                    "title": "历史充值总豆数",
                                    "description": "历史充值总豆数",
                                    "$ref": "#/definitions/conditions",
                                    "properties": {
                                        "conditions": {
                                            "title": "条件列表",
                                            "type": "array",
                                            "format": "tabs",
                                            "items": {
                                                "options": {
                                                    "keep_oneof_values": false
                                                },
                                                "anyOf": [
                                                    {
                                                        "$ref": "#/definitions/conditionGt"
                                                    },
                                                    {
                                                        "$ref": "#/definitions/conditionLt"
                                                    }
                                                ]
                                            }
                                        }
                                    }
                                },
                                "level": {
                                    "title": "用户等级",
                                    "description": "用户等级",
                                    "$ref": "#/definitions/conditions",
                                    "properties": {
                                        "conditions": {
                                            "title": "条件列表",
                                            "type": "array",
                                            "format": "tabs",
                                            "items": {
                                                "options": {
                                                    "keep_oneof_values": false
                                                },
                                                "anyOf": [
                                                    {
                                                        "$ref": "#/definitions/conditionGt"
                                                    },
                                                    {
                                                        "$ref": "#/definitions/conditionLt"
                                                    }
                                                ]
                                            }
                                        }
                                    }
                                },
                                "appname": {
                                    "title": "马甲包AppName",
                                    "description": "某马甲包注册用户满足条件，可选值 huajiao: 花椒主app，huajiao_lite：极速版，wuye：舞夜，huajiao_voice：咿呀，youyuanliao：有缘聊",
                                    "$ref": "#/definitions/conditions",
                                    "properties": {
                                        "conditions": {
                                            "items": {
                                                "anyOf": [
                                                    {
                                                        "$ref": "#/definitions/conditionList"
                                                    }
                                                ]
                                            }
                                        }
                                    }
                                },
                                "author_tag": {
                                    "title": "频道达人认证",
                                    "description": "可选值：跳舞、脱口秀、音乐、颜值、户外、游戏",
                                    "$ref": "#/definitions/conditions",
                                    "properties": {
                                        "conditions": {
                                            "items": {
                                                "anyOf": [
                                                    {
                                                        "$ref": "#/definitions/conditionList"
                                                    }
                                                ]
                                            }
                                        }
                                    }
                                },
                                "family_sign_time": {
                                    "title": "家族签约时间",
                                    "description": "用户当前家族签约时间",
                                    "$ref": "#/definitions/conditions",
                                    "properties": {
                                        "conditions": {
                                            "items": {
                                                "anyOf": [
                                                    {
                                                        "$ref": "#/definitions/conditionTimeGt"
                                                    },
                                                    {
                                                        "$ref": "#/definitions/conditionTimeLt"
                                                    },
                                                    {
                                                        "$ref": "#/definitions/conditionLt",
                                                        "title": "时间类属性值小于"
                                                    }
                                                ]
                                            }
                                        }
                                    }
                                }
                            },
                            "defaultProperties": []
                        }
                    }
                },
                "___UserAttribute": {
                    "title": "___",
                    "type": "string"
                }
            }
        },
        "conditions": {
            "type": "object",
            "properties": {
                "conditions": {
                    "title": "条件列表",
                    "type": "array",
                    "format": "tabs",
                    "items": {
                        "options": {
                            "keep_oneof_values": false
                        },
                        "title": "属性过滤条件"
                    }
                }
            }
        },
        "conditionGt": {
            "title": "数值类大于",
            "description": "此条件会在属性值大于给定值时成立",
            "type": "object",
            "properties": {
                "type": {
                    "title": "条件类型",
                    "type": "string",
                    "default": "gt",
                    "readOnly": true
                },
                "value": {
                    "title": "值",
                    "type": "number"
                },
                "equal": {
                    "title": "包含相等",
                    "type": "boolean",
                    "format": "checkbox"
                },
                "___GT": {
                    "title": "___",
                    "type": "string"
                }
            }
        },
        "conditionLt": {
            "title": "数值类小于",
            "description": "此条件会在属性值小于给定值时成立",
            "type": "object",
            "properties": {
                "type": {
                    "title": "条件类型",
                    "type": "string",
                    "default": "lt",
                    "readOnly": true
                },
                "value": {
                    "title": "值",
                    "type": "number"
                },
                "equal": {
                    "title": "包含相等",
                    "type": "boolean",
                    "format": "checkbox"
                },
                "___LT": {
                    "title": "___",
                    "type": "string"
                }
            }
        },
        "conditionTimeGt": {
            "title": "时间类相对当前时间大于",
            "description": "此条件会在当前时间减去属性值大于给定值时成立",
            "type": "object",
            "properties": {
                "type": {
                    "title": "条件类型",
                    "type": "string",
                    "default": "time_gt",
                    "readOnly": true
                },
                "value": {
                    "title": "值（单位秒，每日86400秒）",
                    "type": "number"
                },
                "equal": {
                    "title": "包含相等",
                    "type": "boolean",
                    "format": "checkbox"
                },
                "___TimeGT": {
                    "title": "___",
                    "type": "string"
                }
            }
        },
        "conditionTimeLt": {
            "title": "时间类相对当前时间小于",
            "description": "此条件会在当前时间减去属性值小于给定值时成立",
            "type": "object",
            "properties": {
                "type": {
                    "title": "条件类型",
                    "type": "string",
                    "default": "time_lt",
                    "readOnly": true
                },
                "value": {
                    "title": "值（单位秒，每日86400秒）",
                    "type": "number"
                },
                "equal": {
                    "title": "包含相等",
                    "type": "boolean",
                    "format": "checkbox"
                },
                "___TimeLT": {
                    "title": "___",
                    "type": "string"
                }
            }
        },
        "conditionList": {
            "title": "列表",
            "description": "此条件会在给定值在（或不在）列表中成立",
            "type": "object",
            "properties": {
                "type": {
                    "title": "条件类型",
                    "type": "string",
                    "default": "list",
                    "readOnly": true
                },
                "value": {
                    "title": "值列表",
                    "type": "array",
                    "items": {
                        "title": "值",
                        "type": "string"
                    }
                },
                "reverse": {
                    "title": "不在列表中生效",
                    "description": "如勾选，则不在列表中条件成立。否则为在列表中条件成立",
                    "type": "boolean",
                    "format": "checkbox"
                },
                "___List": {
                    "title": "___",
                    "type": "string"
                }
            }
        },
        "conditionBool": {
            "title": "开关",
            "description": "此条件会在存在且为真（或不存在或为假）属性值时成立",
            "type": "object",
            "properties": {
                "type": {
                    "title": "条件类型",
                    "type": "string",
                    "default": "bool",
                    "readOnly": true
                },
                "value": {
                    "title": "值（真则勾选，假则不勾选）",
                    "type": "boolean",
                    "format": "checkbox"
                },
                "___Bool": {
                    "title": "___",
                    "type": "string"
                }
            }
        },
        "processParams": {
            "type": "object",
            "properties": {
                "expired": {
                    "title": "计数有效期（截止时间）",
                    "description": "满足需要连续计数的需求，每次计数均会更新到最新的截止时间。如果中断计数，则进度归零。值为数字或者字符串（可被strtotime解析）。",
                    "type": "string"
                }
            }
        },
        "awardBase": {
            "type": "object",
            "properties": {
                "num": {
                    "title": "奖励数量",
                    "type": "integer",
                    "minimum": 1,
                    "maximum": 99999,
                    "default": 1,
                    "propertyOrder": 12
                },
                "title": {
                    "title": "奖励名称",
                    "description": "用户可在任务奖励描述中看到，也可在领取奖励内容时看到",
                    "type": "string",
                    "minLength": 1,
                    "maxLength": 20,
                    "propertyOrder": 13
                },
                "desc": {
                    "title": "奖励预览描述",
                    "type": "string",
                    "description": "用户在任务内容里面，点击奖品名称时，能在弹出的“奖励说明”弹窗中，看到该奖励的相关描述",
                    "minLength": 5,
                    "maxLength": 50,
                    "propertyOrder": 14
                },
                "use_desc": {
                    "title": "奖励到手时的描述",
                    "description": "用户点击“领取”奖励后，在“领取成功”的弹窗中，看到该奖励的相关描述，为空则使用默认文案",
                    "type": "string",
                    "minLength": 3,
                    "maxLength": 20,
                    "propertyOrder": 15
                },
                "pendant_use_desc": {
                    "title": "挂件奖励描述",
                    "description": "直播间任务挂件显示奖励的文案，为空则使用默认文案",
                    "type": "string",
                    "minLength": 3,
                    "maxLength": 10,
                    "propertyOrder": 16
                },
                "weight": {
                    "title": "挂件任务奖励排序权重",
                    "description": "为0则自动计算默认权重*奖励数量",
                    "type": "integer",
                    "minimum": 0,
                    "maximum": 900000000,
                    "propertyOrder": 17
                },
                "icon": {
                    "title": "icon",
                    "format": "url",
                    "type": "string",
                    "minLength": 30,
                    "maxLength": 200,
                    "links": [
                        {
                            "rel": "preview",
                            "href": "{{self}}",
                            "class": "preview-link"
                        }
                    ],
                    "propertyOrder": 18
                },
                "progress_threshold": {
                    "title": "最低进度阈值",
                    "type": "integer",
                    "description": "只有即时奖励型任务设置才有效。当未结算的任务进度小于此值时不进行奖励（奖励后，任务进度标记为结算）。比如，进度达到1000，奖励1主播经验，则填1000。",
                    "default": 1,
                    "minimum": 1,
                    "propertyOrder": 19
                },
                "reward_gift_amimate": {
                    "title": "礼物特效（填写礼物id,使用platform=7的礼物id）",
                    "type": "integer",
                    "description": "填写礼物id,则领取奖励时播放对应礼物的特效",
                    "propertyOrder": 20
                },
                "award_price": {
                    "title": "奖励价值描述",
                    "type": "string",
                    "description": "奖励价值描述",
                    "propertyOrder": 21
                },
                "show_num": {
                    "title": "奖励展示数量",
                    "type": "integer",
                    "description": "奖励展示数量(展示数量和实际奖励数量不一致时使用)",
                    "propertyOrder": 21
                }
            }
        },
        "awardExp": {
            "$ref": "#/definitions/awardBase",
            "properties": {
                "num": {
                    "default": 100
                },
                "title": {
                    "default": "经验值"
                },
                "desc": {
                    "default": "提升等级，获得特权"
                },
                "icon": {
                    "default": "https://p1.ssl.qhimg.com/t01467f15a26e15fafc.png"
                }
            }
        },
        "awardAuthorExp": {
            "$ref": "#/definitions/awardBase",
            "properties": {
                "num": {
                    "default": 100
                },
                "title": {
                    "default": "主播经验值"
                },
                "desc": {
                    "default": "加速主播等级成长"
                },
                "icon": {
                    "default": "https://p0.ssl.qhimg.com/t017eaf03d9557c2d75.png"
                }
            }
        },
        "awardCharmExp": {
            "$ref": "#/definitions/awardBase",
            "properties": {
                "num": {
                    "description": "100为1个魅力经验值，如果想奖励1魅力经验值，则填写100",
                    "default": 100,
                    "propertyOrder": 0
                },
                "needEnlarge100": {
                    "title": "是否以魅力值为基本单位",
                    "description": "如勾选，则填写的数字为真实的魅力经验值。如未勾选，则100为1个魅力经验值，如果想奖励1魅力经验值，则填写100",
                    "type": "boolean",
                    "format": "checkbox",
                    "default": false,
                    "propertyOrder": 1
                },
                "title": {
                    "default": "魅力经验值"
                },
                "desc": {
                    "default": "提升魅力等级，获得特权"
                },
                "icon": {
                    "default": "https://p1.ssl.qhimg.com/t01467f15a26e15fafc.png"
                }
            }
        },
        "awardItem": {
            "$ref": "#/definitions/awardBase",
            "properties": {
                "id": {
                    "title": "道具ID",
                    "description": "可找道具系统查询道具id，请确保此id可正常发放",
                    "type": "integer",
                    "minimum": 1,
                    "maximum": 9999999999,
                    "propertyOrder": 1
                },
                "title": {
                    "default": "道具"
                },
                "expire": {
                    "title": "过期设置",
                    "description": "选择任意一种过期方式",
                    "type": "object",
                    "options": {
                        "keep_oneof_values": false
                    },
                    "anyOf": [
                        {
                            "title": "以道具自身配置为准，不进行更改",
                            "description": "以道具系统中配置的过期时间为准，请和道具系统确认行为符合预期。"
                        },
                        {
                            "title": "固定时间过期（绝对）",
                            "description": "道具会在此指定时间过期",
                            "$ref": "#/definitions/handler",
                            "properties": {
                                "handler": {
                                    "default": "Specific",
                                    "readOnly": true
                                },
                                "params": {
                                    "properties": {
                                        "datetime": {
                                            "type": "string",
                                            "title": "过期时间",
                                            "description": "此道具的固定截止日期，格式：2019-12-02 12:34:56。请注意格式！",
                                            "format": "datetime"
                                        }
                                    }
                                },
                                "___Specific": {
                                    "title": "___",
                                    "type": "string"
                                }
                            }
                        },
                        {
                            "title": "固定天数过期（相对）",
                            "description": "此道具的有效天数，计算时间基点为发放时间。",
                            "$ref": "#/definitions/handler",
                            "properties": {
                                "handler": {
                                    "default": "Days",
                                    "readOnly": true
                                },
                                "params": {
                                    "properties": {
                                        "days": {
                                            "type": "integer",
                                            "title": "有效天数",
                                            "description": "0表示次日0点0分0秒过期（仅当日有效的意思）。每加1，则增加1天有效期。",
                                            "minimum": 0
                                        }
                                    }
                                },
                                "___Days": {
                                    "title": "___",
                                    "type": "string"
                                }
                            }
                        },
                        {
                            "title": "当月月底（相对）",
                            "description": "于当月最后1日23:59:59过期",
                            "$ref": "#/definitions/handler",
                            "properties": {
                                "handler": {
                                    "default": "MonthEnd",
                                    "readOnly": true
                                },
                                "___MonthEnd": {
                                    "title": "___",
                                    "type": "string"
                                }
                            }
                        }
                    ]
                },
                "expired_at": {
                    "type": "string",
                    "title": "截止日期（淘汰，请使用上边的过期设置，选择及配置同前即可）",
                    "format": "datetime",
                    "description": "此道具的固定截止日期，格式：2019-12-02 12:34:56。未设置则使用后台配置的过期信息。"
                },
                "valid_days": {
                    "type": "string",
                    "title": "有效天数（淘汰，请使用上边的过期设置，选择及配置同前即可）",
                    "description": "此道具的有效天数，优先级高于截止日期。计算时间基点为发放时间。0表示次日0点过期。未设置则使用后台配置的过期信息。"
                }
            },
            "required": [
                "id"
            ]
        },
        "awardAutoItem": {
            "$ref": "#/definitions/awardBase",
            "properties": {
                "id": {
                    "title": "道具ID",
                    "description": "可找经济系统查询道具id",
                    "type": "integer",
                    "minimum": 1,
                    "maximum": 99999999,
                    "propertyOrder": 1
                },
                "title": {
                    "default": "道具（自动过期）（弃用）"
                }
            },
            "required": [
                "id"
            ]
        },
        "awardFlowCard": {
            "$ref": "#/definitions/awardBase",
            "properties": {
                "title": {
                    "default": "流量卡"
                },
                "ext_id": {
                    "title": "流量卡等级",
                    "description": "10表示初级、20表示中级、30表示高级",
                    "type": "string",
                    "propertyOrder": 1,
                    "enum": [
                        10,
                        20,
                        30
                    ]
                },
                "source": {
                    "title": "来源说明(例如 主播奖励)",
                    "type": "string"
                }
            },
            "required": [
                "ext_id"
            ]
        },
        "awardFlowCardFragment": {
            "$ref": "#/definitions/awardBase",
            "properties": {
                "title": {
                    "default": "流量卡碎片"
                },
                "ext_id": {
                    "title": "流量卡碎片等级",
                    "type": "string",
                    "propertyOrder": 1,
                    "enum": [
                        10,
                        20,
                        30
                    ]
                },
                "source": {
                    "title": "来源说明(例如 主播奖励)",
                    "type": "string"
                }
            },
            "required": [
                "ext_id"
            ]
        },
        "awardBean": {
            "$ref": "#/definitions/awardBase",
            "properties": {
                "title": {
                    "default": "花椒豆"
                },
                "desc": {
                    "default": "为喜欢的主播送礼物"
                },
                "icon": {
                    "default": "https://p2.ssl.qhimg.com/t011238abd9eaba7017.png"
                }
            }
        },
        "awardMoney": {
            "$ref": "#/definitions/awardBase",
            "properties": {
                "type": {
                    "title": "花椒豆/花椒币 1为豆，2为币",
                    "type": "integer",
                    "default": "2",
                    "propertyOrder": 0
                },
                "subtype": {
                    "title": "预算标识，请找经济系统申请",
                    "type": "integer",
                    "default": "38",
                    "propertyOrder": 1
                },
                "title": {
                    "default": "花椒币"
                },
                "desc": {
                    "default": "收益增长"
                },
                "icon": {
                    "default": "https://p2.ssl.qhimg.com/t011238abd9eaba7017.png"
                }
            }
        },
        "awardChats": {
            "$ref": "#/definitions/awardBase",
            "properties": {
                "title": {
                    "default": "弹幕"
                },
                "desc": {
                    "default": "让发言备受瞩目"
                },
                "icon": {
                    "default": "https://p4.ssl.qhimg.com/t01e68cd375fe070d72.png"
                }
            }
        },
        "awardGuessTicket": {
            "$ref": "#/definitions/awardBase",
            "properties": {
                "title": {
                    "default": "竞猜券"
                },
                "desc": {
                    "default": "参与“料事如神”直播活动"
                },
                "icon": {
                    "default": "http://p9.qhimg.com/t0130c54d8ceb933a71.jpg"
                }
            }
        },
        "awardSun": {
            "$ref": "#/definitions/awardBase",
            "properties": {
                "title": {
                    "default": "阳光"
                },
                "desc": {
                    "default": "送给喜欢的主播"
                },
                "icon": {
                    "default": "https://p2.ssl.qhimg.com/t01cb257a8a38d81f15.png"
                }
            }
        },
        "awardGrass": {
            "$ref": "#/definitions/awardBase",
            "properties": {
                "title": {
                    "default": "幸运草"
                },
                "desc": {
                    "default": "用于竞猜和抽奖"
                },
                "icon": {
                    "default": "https://p2.ssl.qhimg.com/t018ce3ef571b9682b3.png"
                }
            }
        },
        "awardPetal": {
            "$ref": "#/definitions/awardBase",
            "properties": {
                "title": {
                    "default": "金币"
                },
                "desc": {
                    "default": "可在兑换商城兑换"
                },
                "icon": {
                    "default": "https://p0.ssl.qhimg.com/t019cb4b0d540430896.png"
                }
            }
        },
        "awardFanClubScore": {
            "$ref": "#/definitions/awardBase",
            "properties": {
                "title": {
                    "default": "积分"
                },
                "desc": {
                    "default": "提升粉丝等级，获得粉丝特权"
                },
                "icon": {
                    "default": "http://p1.qhimg.com/t01c820ed426da614a2.png"
                }
            }
        },
        "awardVirtualMoney": {
            "$ref": "#/definitions/awardBase",
            "properties": {
                "type": {
                    "title": "虚拟货币类型，由经济系统确定",
                    "type": "integer",
                    "description": "支持的虚拟货币说明：http://wiki.huajiao.com/pages/viewpage.action?pageId=35492108",
                    "propertyOrder": 0
                },
                "subType": {
                    "title": "虚拟货币子类型,由经济系统确定,默认为mission_add",
                    "type": "string",
                    "propertyOrder": 1
                },
                "multiple": {
                    "title": "虚拟货币单位，最终发放的虚拟货币为 数量*单位",
                    "type": "integer",
                    "propertyOrder": 2
                }
            }
        },
        "awardActiveDegree": {
            "$ref": "#/definitions/awardBase",
            "properties": {
                "num": {
                    "default": 100
                },
                "title": {
                    "default": "活跃度"
                },
                "desc": {
                    "default": ""
                },
                "icon": {
                    "default": "http://image.huajiao.com/4480677c605687395d281202e77a21de.jpg"
                }
            }
        },
        "awardSuccess": {
            "$ref": "#/definitions/awardBase"
        },
        "awardApi": {
            "$ref": "#/definitions/awardBase",
            "properties": {
                "api": {
                    "title": "自定义接口地址",
                    "description": "必须包含scheme、host、path部分。接口规范：https://git.corp.qihoo.net/pepper/doc/blob/master/interface/rank/mission/doc/award_api.md",
                    "type": "string",
                    "propertyOrder": 0
                }
            }
        },
        "awardYuanqi": {
            "$ref": "#/definitions/awardBase",
            "properties": {
                "subtype": {
                    "title": "经济系统预算标识（先申请，再填写）",
                    "type": "string",
                    "default": "mission_yuanqi_add",
                    "propertyOrder": 0
                },
                "title": {
                    "default": "元气值"
                },
                "desc": {
                    "default": "在元气决定中为您喜欢的主播注入元气"
                },
                "icon": {
                    "default": "https://p1.ssl.qhimg.com/t01c094e6203b4ec2b1.png"
                }
            }
        },
        "awardEquipment": {
            "$ref": "#/definitions/awardBase",
            "properties": {
                "equipment_id": {
                    "title": "装备id",
                    "type": "integer",
                    "propertyOrder": 0
                },
                "second": {
                    "title": "有效时长，单位：秒",
                    "type": "integer",
                    "default": "86400",
                    "propertyOrder": 1
                }
            }
        },
        "randomItem": {
            "$ref": "#/definitions/___",
            "type": "object",
            "properties": {
                "type": {
                    "title": "奖励标识",
                    "type": "string",
                    "readOnly": true,
                    "propertyOrder": 4
                },
                "weight": {
                    "title": "随机权重",
                    "description": "概率为：当前奖励权重/所有奖励的权重之和。最小值为1，必须为整数",
                    "type": "integer",
                    "default": 1,
                    "propertyOrder": 1
                },
                "hide4spam": {
                    "title": "反作弊",
                    "description": "如果识别为作弊，则不发放此奖励",
                    "type": "boolean",
                    "default": false,
                    "propertyOrder": 2
                },
                "params": {
                    "title": "参数",
                    "type": "object",
                    "propertyOrder": 3
                }
            }
        },
        "settingProgressNotice": {
            "title": "进度配置",
            "description": "任务进度变更通知配置。可控制进度在某区间范围内（完成百分比），发生变化时发送bus消息通知（mission_progress_notice)",
            "$ref": "#/definitions/conditions",
            "properties": {
                "conditions": {
                    "title": "进度百分比范围条件",
                    "type": "array",
                    "format": "tabs",
                    "items": {
                        "options": {
                            "keep_oneof_values": false
                        },
                        "anyOf": [
                            {
                                "title": "进度范围",
                                "description": "配置在进度百分比范围内，才发送通知消息",
                                "properties": {
                                    "conditions": {
                                        "title": "进度范围配置",
                                        "description": "任务进度累计到此范围内，才会满足条件，发送任务进度变更通知",
                                        "type": "array",
                                        "format": "tabs",
                                        "items": {
                                            "options": {
                                                "keep_oneof_values": false
                                            },
                                            "anyOf": [
                                                {
                                                    "$ref": "#/definitions/conditionGt"
                                                },
                                                {
                                                    "$ref": "#/definitions/conditionLt"
                                                }
                                            ]
                                        }
                                    },
                                    "multiple": {
                                        "title": "多次发送",
                                        "description": "若勾选，在任务进度累计达到此范围内，设置进度变化一次就会发送一次。（默认在此范围内只发送一次）",
                                        "type": "boolean",
                                        "format": "checkbox",
                                        "default": false
                                    }
                                }
                            }
                        ]
                    }
                }
            }
        },
        "settingPushStationBanner": {
            "title": "站内横幅",
            "description": "站内横幅push通知消息",
            "type": "object",
            "$ref": "#/definitions/handler",
            "properties": {
                "handler": {
                    "title": "Handler(不要改)",
                    "type": "string",
                    "default": "StationBanner",
                    "readOnly": true
                },
                "params": {
                    "properties": {
                        "sender": {
                            "title": "发送者uid",
                            "description": "默认官方账号",
                            "type": "integer",
                            "default": 21139512,
                            "minimum": 20000000,
                            "maximum": 999999999
                        },
                        "title": {
                            "title": "标题，字数限制50字内",
                            "description": "必须填写，支持通配符：##TITLE##表示任务标题，##GOAL##表示任务目标",
                            "type": "string",
                            "default": "",
                            "minLength": 0,
                            "maxLength": 50
                        },
                        "subTitle": {
                            "title": "副标题，字数限制100字内",
                            "description": "支持通配符：##TITLE##表示任务标题，##GOAL##表示任务目标",
                            "type": "string",
                            "default": "",
                            "minLength": 0,
                            "maxLength": 100
                        },
                        "buttonText": {
                            "title": "跳转按钮文案，默认空字符串，字数限制10字内， 有跳转链接必须填写此项，否则看不到但可以点击跳转",
                            "type": "string",
                            "default": "",
                            "minLength": 0,
                            "maxLength": 10
                        },
                        "scheme": {
                            "title": "跳转链接, 请填写全屏schema",
                            "description": "支持通配符：##MISSION_ID##表示任务唯一ID",
                            "type": "string",
                            "default": ""
                        },
                        "schemeHalf": {
                            "title": "半屏跳转链接, 请填写半屏schema",
                            "description": "支持通配符：##MISSION_ID##表示任务唯一ID",
                            "type": "string",
                            "default": ""
                        },
                        "duration": {
                            "title": "停留时长，单位：秒",
                            "type": "integer",
                            "default": 5,
                            "minimum": 0,
                            "maximum": 10000
                        },
                        "weight": {
                            "title": "权重",
                            "type": "integer",
                            "default": 0,
                            "minimum": 0
                        },
                        "hide_scenes": {
                            "title": "禁止弹窗场景，可选择禁止。不选（默认全部场景都弹窗）",
                            "type": "array",
                            "uniqueItems": true,
                            "items": {
                                "options": {
                                    "keep_oneof_values": false
                                },
                                "anyOf": [
                                    {
                                        "type": "string",
                                        "enumSource": [
                                            {
                                                "source": [
                                                    {
                                                        "value": "im_list",
                                                        "title": "私信列表页"
                                                    },
                                                    {
                                                        "value": "im_chat",
                                                        "title": "私信聊天页"
                                                    },
                                                    {
                                                        "value": "im_list_unfollowed",
                                                        "title": "未关注人消息列表页"
                                                    },
                                                    {
                                                        "value": "live",
                                                        "title": "主播直播页"
                                                    }
                                                ],
                                                "title": "{{item.title}}",
                                                "value": "{{item.value}}"
                                            }
                                        ]
                                    }
                                ]
                            }
                        }
                    },
                    "defaultProperties": [
                        "title",
                        "subTitle",
                        "scheme",
                        "schemeHalf",
                        "buttonText",
                        "sender",
                        "duration"
                    ]
                },
                "___StationBannerPush": {
                    "title": "___",
                    "type": "string"
                }
            }
        },
        "settingPushFlyScreen": {
            "title": "直播间飞屏",
            "description": "发送直播间飞屏，接收方未在直播间内，会发送失败，不做处理",
            "type": "object",
            "$ref": "#/definitions/handler",
            "properties": {
                "handler": {
                    "title": "Handler(不要改)",
                    "type": "string",
                    "default": "FlyScreen",
                    "readOnly": true
                },
                "params": {
                    "properties": {
                        "sender": {
                            "title": "发送者uid",
                            "description": "默认官方账号",
                            "type": "integer",
                            "default": 21139512,
                            "minimum": 20000000,
                            "maximum": 999999999
                        },
                        "text": {
                            "title": "飞屏内容",
                            "description": "必须填写，支持通配符：##TALENT##表示用户频道达人认证，##TALEN_LEVEL##表示用户频道达人认证等级",
                            "type": "string",
                            "default": "欢迎成为##TALENT##达人，解锁更多资源请加主编官方微信：17310199776，详情点击私信。",
                            "minLength": 0,
                            "maxLength": 500
                        },
                        "background": {
                            "title": "飞屏背景颜色，格式：#000000",
                            "type": "string",
                            "default": "#2F0058",
                            "minLength": 0,
                            "maxLength": 50
                        },
                        "icon": {
                            "title": "飞屏尾部图标",
                            "description": "飞屏尾部图标链接地址",
                            "type": "string",
                            "default": "https://static.s3.huajiao.com/Object.access/hj-video/MTYxMTY0OTg0NzE5NTMxLnBuZw==",
                            "minLength": 0,
                            "maxLength": 1000
                        }
                    },
                    "defaultProperties": [
                        "sender",
                        "text",
                        "icon",
                        "background"
                    ]
                },
                "___FlyScreenPush": {
                    "title": "___",
                    "type": "string"
                }
            }
        },
        "settingOfficialNotice": {
            "title": "官方私信",
            "description": "发送官方私信",
            "type": "object",
            "$ref": "#/definitions/handler",
            "properties": {
                "handler": {
                    "title": "Handler(不要改)",
                    "type": "string",
                    "default": "OfficialNotice",
                    "readOnly": true
                },
                "params": {
                    "properties": {
                        "text": {
                            "title": "私信内容",
                            "description": "必须填写，支持通配符：##TITLE##表示任务标题，##TALENT##表示用户频道达人认证，##TALEN_LEVEL##表示用户频道达人认证等级",
                            "type": "string",
                            "default": "您有一个任务奖励待领取",
                            "minLength": 0,
                            "maxLength": 500
                        },
                        "title": {
                            "title": "私信标题",
                            "description": "支持通配符：##TITLE##表示任务标题",
                            "type": "string",
                            "default": "恭喜您成功完成（##TITLE##）获得奖励，赶快前往 我的-->任务 领取奖励吧",
                            "minLength": 0,
                            "maxLength": 100
                        },
                        "url": {
                            "title": "跳转链接",
                            "description": "私信内跳转链接地址, 支持通配符：##MISSION_ID##表示任务id",
                            "type": "string",
                            "default": "huajiao://huajiao.com/goto/mission?mission_id=##MISSION_ID##",
                            "minLength": 0,
                            "maxLength": 1000
                        }
                    },
                    "defaultProperties": [
                        "text",
                        "title",
                        "url"
                    ]
                },
                "___OfficialNoticePush": {
                    "title": "___",
                    "type": "string"
                }
            }
        }
    },
    "defaultProperties": [
        "remark",
        "name",
        "title",
        "desc",
        "icon",
        "pos",
        "goal",
        "type",
        "event",
        "event_filter",
        "period",
        "pre_show",
        "pre_exec",
        "pre_rev_exec",
        "process",
        "award_desc",
        "award",
        "settings"
    ]
}