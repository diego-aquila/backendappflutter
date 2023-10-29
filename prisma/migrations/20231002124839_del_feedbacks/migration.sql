/*
  Warnings:

  - You are about to drop the `FeedbackExam` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `FeedbackExam` DROP FOREIGN KEY `FeedbackExam_examsIdFK_fkey`;

-- DropForeignKey
ALTER TABLE `FeedbackExam` DROP FOREIGN KEY `FeedbackExam_usercpfFK_fkey`;

-- DropTable
DROP TABLE `FeedbackExam`;
