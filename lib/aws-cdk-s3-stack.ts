import * as cdk from '@aws-cdk/core';
import * as S3 from "@aws-cdk/aws-s3";
import * as S3Deployment from "@aws-cdk/aws-s3-deployment";
import {BlockPublicAccess, Bucket, BucketEncryption} from '@aws-cdk/aws-s3';
import { RemovalPolicy } from '@aws-cdk/core';
import { Vpc } from '@aws-cdk/aws-ec2';


export class AwsCdkS3Stack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    const vpc = new Vpc(this, "MyVpc", {
      maxAzs: 3 // Default is all AZs in region
    });

    new Bucket(this, 'test-bucketdsadsadsad', {
        versioned: false,
        bucketName: 'test-bucketdsadsadsad',
        encryption: BucketEncryption.KMS_MANAGED,
        publicReadAccess: false,
        blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
        removalPolicy: RemovalPolicy.DESTROY
    });
  }
}
