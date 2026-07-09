terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = "us-east-1"
}

# A simple Virtual Private Cloud to verify the pipeline works
resource "aws_vpc" "pipeline_test" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_hostnames = true

  tags = {
    Name = "itm350-pipeline-verification"
  }
}