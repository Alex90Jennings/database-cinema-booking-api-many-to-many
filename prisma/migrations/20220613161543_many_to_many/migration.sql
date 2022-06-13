/*
  Warnings:

  - You are about to drop the column `letter` on the `Seat` table. All the data in the column will be lost.
  - You are about to drop the column `row` on the `Seat` table. All the data in the column will be lost.
  - Added the required column `number` to the `Seat` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Seat" DROP COLUMN "letter",
DROP COLUMN "row",
ADD COLUMN     "number" INTEGER NOT NULL;
