/*
  Warnings:

  - Added the required column `userId` to the `credential` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "credential" ADD COLUMN     "userId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "credential" ADD CONSTRAINT "credential_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
