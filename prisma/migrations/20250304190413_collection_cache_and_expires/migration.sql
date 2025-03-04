-- AlterTable
ALTER TABLE "ApiCache" ADD COLUMN     "expiresAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "ApiCollectionCache" (
    "id" TEXT NOT NULL,
    "collectionHash" TEXT NOT NULL,
    "collectionSource" TEXT NOT NULL,
    "collectionName" TEXT NOT NULL,
    "collectionOptions" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ApiCollectionCache_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ApiCollectionCache_collectionHash_idx" ON "ApiCollectionCache" USING HASH ("collectionHash");
