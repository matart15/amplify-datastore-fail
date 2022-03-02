import awsExportsProd from 'src/@app/aws-exports-production';
import awsExportsDev from 'src/@app/aws-exports-dev';
// for now. We have to find a way to change aws-exports with amplify + CI/CD
// https://github.com/aws-amplify/amplify-cli/issues/9416
export const awsExports =
  process.env.NODE_ENV === 'production' ? awsExportsProd : awsExportsDev;
