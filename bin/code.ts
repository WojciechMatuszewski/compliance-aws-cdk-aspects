import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { CodeStack } from "../lib/code-stack";
import { BucketEncryptionChecker } from "../lib/unencrypted-bucket";
import { DeletionPolicySetter } from "../lib/deletion-policy";
import { Aspects, RemovalPolicy } from "aws-cdk-lib";

const app = new cdk.App();

new CodeStack(app, "CodeStack", {
  synthesizer: new cdk.DefaultStackSynthesizer({
    qualifier: "aspects"
  })
});

const bucketEncryptionChecker = new BucketEncryptionChecker();
const deletionPolicySetter = new DeletionPolicySetter(RemovalPolicy.DESTROY);

Aspects.of(app).add(bucketEncryptionChecker);

Aspects.of(app).add(deletionPolicySetter);
