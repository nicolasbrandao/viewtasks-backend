/*
  Warnings:

  - Added the required column `title` to the `TasksList` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TasksList" ADD COLUMN     "title" TEXT NOT NULL;
