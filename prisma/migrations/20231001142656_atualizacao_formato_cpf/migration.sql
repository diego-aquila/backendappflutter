-- DropForeignKey
ALTER TABLE `ExamUser` DROP FOREIGN KEY `ExamUser_userFK_fkey`;

-- DropForeignKey
ALTER TABLE `FeedbackExam` DROP FOREIGN KEY `FeedbackExam_usercpfFK_fkey`;

-- AlterTable
ALTER TABLE `ExamUser` MODIFY `userFK` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `FeedbackExam` MODIFY `usercpfFK` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Users` MODIFY `cpf` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `ExamUser` ADD CONSTRAINT `ExamUser_userFK_fkey` FOREIGN KEY (`userFK`) REFERENCES `Users`(`cpf`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FeedbackExam` ADD CONSTRAINT `FeedbackExam_usercpfFK_fkey` FOREIGN KEY (`usercpfFK`) REFERENCES `Users`(`cpf`) ON DELETE RESTRICT ON UPDATE CASCADE;
