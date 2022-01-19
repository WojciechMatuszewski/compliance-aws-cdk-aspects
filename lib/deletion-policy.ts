import { CfnResource, IAspect, RemovalPolicy } from "aws-cdk-lib";
import { IConstruct } from "constructs";

export class DeletionPolicySetter implements IAspect {
  constructor(private readonly policy: RemovalPolicy) {}
  visit(node: IConstruct): void {
    /**
     * Nothing stops you from adding more conditions here.
     */
    if (node instanceof CfnResource) {
      node.applyRemovalPolicy(this.policy);
    }
  }
}
