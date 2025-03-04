/*
  Warnings:

  - Added the required column `collectionBody` to the `ApiCollectionCache` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ApiCollectionCache" ADD COLUMN     "collectionBody" JSONB NOT NULL;
