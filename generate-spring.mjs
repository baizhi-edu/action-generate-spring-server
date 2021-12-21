#!/usr/bin/env zx

let openapiGenerator = 'openapi-generator'
if (await $`type ${openapiGenerator}`.exitCode !== 0) {
  openapiGenerator = 'openapi-generator-cli'
}

const {openapi, project, group, output} = argv

const additionalProperties = [
  `apiPackage=${group}.${project}.api`,
  `artifactId=${project}`,
  `basePackage=${group}.${project}`,
  `configPackage=${group}.${project}.configuration`,
  `delegatePattern=true`,
  `disallowAdditionalPropertiesIfNotPresent=false`,
  `groupId=${group}`,
  `licenseName=MIT`,
  `modelPackage=${group}.${project}.model`,
]

$`${openapiGenerator} generate \
  -i ${openapi} \
  -g spring \
  -o ${output} \
  -t ${path.join(__dirname, 'spring')} \
  --ignore-file-override ${path.join(__dirname, '.openapi-generator-ignore')} \
  --additional-properties ${additionalProperties.join(',')} \
`
