/* eslint-disable no-param-reassign */
import { AmplifyAuthCognitoStackTemplate } from '@aws-amplify/cli-extensibility-helper';

export function override(resources: AmplifyAuthCognitoStackTemplate) {
  const customAttribute = {
    attributeDataType: 'String',
    // developerOnlyAttribute: false,
    mutable: false,
    name: 'company',
    required: false, //  AWS::Cognito::UserPool     2022/01/06 Required custom attributes are not supported currently.
  };
  // @ts-ignore
  resources.userPool.schema = [
    ...(resources?.userPool?.schema as any),
    customAttribute,
  ];
}
