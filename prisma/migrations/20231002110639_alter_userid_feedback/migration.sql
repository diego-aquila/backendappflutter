/*
  Warnings:

  - You are about to drop the column `usercpfFK` on the `FeedbackExam` table. All the data in the column will be lost.
  - Added the required column `userId` to the `FeedbackExam` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `FeedbackExam` DROP FOREIGN KEY `FeedbackExam_usercpfFK_fkey`;

-- AlterTable
ALTER TABLE `FeedbackExam` DROP COLUMN `usercpfFK`,
    ADD COLUMN `userId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `FeedbackExam` ADD CONSTRAINT `FeedbackExam_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
