import { IAspect, aws_s3 } from "aws-cdk-lib";
import { IConstruct } from "constructs";

export class BucketEncryptionChecker implements IAspect {
  public visit(node: IConstruct): void {
    if (node instanceof aws_s3.CfnBucket) {
      /**
       * Feel free to be more specific in terms of conditions in your code.
       */
      if (!node.bucketEncryption) {
        throw new Error("`bucketEncryption` must be specified.");
      }
    }
  }
}
