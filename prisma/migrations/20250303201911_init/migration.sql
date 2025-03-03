-- CreateTable
CREATE TABLE "ApiCache" (
    "id" TEXT NOT NULL,
    "host" TEXT NOT NULL,
    "version" TEXT NOT NULL,
    "requestHash" TEXT NOT NULL,
    "requestPath" TEXT NOT NULL,
    "requestMethod" TEXT NOT NULL,
    "requestQuery" JSONB NOT NULL,
    "requestBody" JSONB NOT NULL,
    "requestHeaders" JSONB NOT NULL,
    "responseBody" JSONB NOT NULL,
    "responseHeaders" JSONB NOT NULL,
    "responseCode" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "ApiCache_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ApiCache_requestHash_idx" ON "ApiCache" USING HASH ("requestHash");