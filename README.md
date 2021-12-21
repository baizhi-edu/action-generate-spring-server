# Action-Generate-Spring-Server

## Inputs

```yaml
inputs:
  openapi-file:
    # openapi 文件路径
    description: openapi file path
    required: false
    default: openapi.yml
  project-name:
    # 项目名称
    description: project name
    required: true
  group-id:
    # 项目组
    description: project group id
    required: true
  registry:
    # maven 仓库链接
    description: maven registry url
    required: true
  username:
    # maven 仓库用户名
    description: maven registry username
    required: true
  password:
    # maven 仓库密码
    description: maven registry password
    required: true

```

