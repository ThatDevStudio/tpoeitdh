/*
  Warnings:

  - You are about to drop the column `host` on the `ApiCache` table. All the data in the column will be lost.
  - You are about to drop the column `version` on the `ApiCache` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ApiCache" DROP COLUMN "host",
DROP COLUMN "version";
