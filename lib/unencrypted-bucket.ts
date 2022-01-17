import { aws_s3, IAspect } from "aws-cdk-lib";
import { S3 } from "aws-cdk-lib/aws-ses-actions";
import { Construct, IConstruct } from "constructs";

export class UnencryptedBucket extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    const unencryptedBucket = new aws_s3.Bucket(this, "UnencryptedBucket", {
      /**
       * Per documentation: `Kms` if `encryptionKey` is specified, or `Unencrypted` otherwise.
       * The `undefined` is added for the sake of the example.
       */
      encryption: undefined
    });
  }
}

class BucketEncryptionChecker implements IAspect {
  public visit(node: IConstruct): void {
    if (node instanceof aws_s3.CfnBucket) {
    }
  }
}
