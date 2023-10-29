-- CreateTable
CREATE TABLE `Feedbacks` (
    `id` INTEGER NOT NULL,
    `usercpfFK` VARCHAR(191) NOT NULL,
    `result` VARCHAR(191) NOT NULL,
    `feedbacks` VARCHAR(191) NOT NULL,
    `examsIdFK` INTEGER NOT NULL,

    UNIQUE INDEX `Feedbacks_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Feedbacks` ADD CONSTRAINT `Feedbacks_usercpfFK_fkey` FOREIGN KEY (`usercpfFK`) REFERENCES `Users`(`cpf`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Feedbacks` ADD CONSTRAINT `Feedbacks_examsIdFK_fkey` FOREIGN KEY (`examsIdFK`) REFERENCES `Exams`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
