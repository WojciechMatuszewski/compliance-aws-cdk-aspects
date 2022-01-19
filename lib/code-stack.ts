import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";

export class CodeStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    /**
     * Play around with various resources here.
     */
  }
}
