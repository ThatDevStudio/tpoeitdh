/*
  Warnings:

  - Changed the type of `collectionOptions` on the `ApiCollectionCache` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "ApiCollectionCache" DROP COLUMN "collectionOptions",
ADD COLUMN     "collectionOptions" JSONB NOT NULL;
