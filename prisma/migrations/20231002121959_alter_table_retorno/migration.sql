/*
  Warnings:

  - You are about to drop the column `userId` on the `FeedbackExam` table. All the data in the column will be lost.
  - You are about to alter the column `feedbacks` on the `FeedbackExam` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Json`.
  - Added the required column `usercpfFK` to the `FeedbackExam` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `FeedbackExam` DROP FOREIGN KEY `FeedbackExam_userId_fkey`;

-- AlterTable
ALTER TABLE `FeedbackExam` DROP COLUMN `userId`,
    ADD COLUMN `usercpfFK` VARCHAR(191) NOT NULL,
    MODIFY `feedbacks` JSON NOT NULL;

-- AddForeignKey
ALTER TABLE `FeedbackExam` ADD CONSTRAINT `FeedbackExam_usercpfFK_fkey` FOREIGN KEY (`usercpfFK`) REFERENCES `Users`(`cpf`) ON DELETE RESTRICT ON UPDATE CASCADE;
