/*
  Warnings:

  - You are about to drop the `Feedbacks` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Feedbacks` DROP FOREIGN KEY `Feedbacks_examsIdFK_fkey`;

-- DropForeignKey
ALTER TABLE `Feedbacks` DROP FOREIGN KEY `Feedbacks_usercpfFK_fkey`;

-- DropTable
DROP TABLE `Feedbacks`;

-- CreateTable
CREATE TABLE `FeedbackExam` (
    `id` INTEGER NOT NULL,
    `usercpfFK` VARCHAR(191) NOT NULL,
    `result` VARCHAR(191) NOT NULL,
    `feedbacks` JSON NOT NULL,
    `examsIdFK` INTEGER NOT NULL,

    UNIQUE INDEX `FeedbackExam_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `FeedbackExam` ADD CONSTRAINT `FeedbackExam_usercpfFK_fkey` FOREIGN KEY (`usercpfFK`) REFERENCES `Users`(`cpf`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FeedbackExam` ADD CONSTRAINT `FeedbackExam_examsIdFK_fkey` FOREIGN KEY (`examsIdFK`) REFERENCES `Exams`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
